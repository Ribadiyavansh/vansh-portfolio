"use server";

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const contentDir = path.join(process.cwd(), "content");

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isValidFileName(filename: string): boolean {
  return /^[a-zA-Z0-9_-]+\.mdx$/.test(filename);
}

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as string;

  if (!title.trim() || !content.trim()) {
    throw new Error("Title and content are required");
  }

  const slug = generateSlug(title);
  let filename = `${slug}.mdx`;
  let filepath = path.join(contentDir, filename);

  // Check if file already exists
  if (fs.existsSync(filepath)) {
    // Append number to make unique
    let counter = 1;
    let newFilename = `${slug}-${counter}.mdx`;
    let newFilepath = path.join(contentDir, newFilename);

    while (fs.existsSync(newFilepath)) {
      counter++;
      newFilename = `${slug}-${counter}.mdx`;
      newFilepath = path.join(contentDir, newFilename);
    }

    filename = newFilename;
    filepath = newFilepath;
  }

  const publishedAt = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const frontmatter: any = {
    title: title.trim(),
    publishedAt,
    summary: summary.trim(),
  };

  if (image?.trim()) {
    frontmatter.image = image.trim();
  }

  const mdxContent = matter.stringify(content.trim(), frontmatter);

  fs.writeFileSync(filepath, mdxContent, "utf-8");

  revalidatePath("/admin");
  revalidatePath("/blog");

  return { success: true, slug };
}

export async function deleteBlogPost(slug: string) {
  if (!isValidFileName(`${slug}.mdx`)) {
    throw new Error("Invalid slug");
  }

  const filepath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filepath)) {
    throw new Error("Blog post not found");
  }

  fs.unlinkSync(filepath);

  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function updateBlogPost(slug: string, formData: FormData) {
  if (!isValidFileName(`${slug}.mdx`)) {
    throw new Error("Invalid slug");
  }

  const title = formData.get("title") as string;
  const summary = formData.get("summary") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as string;

  if (!title.trim() || !content.trim()) {
    throw new Error("Title and content are required");
  }

  const filepath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filepath)) {
    throw new Error("Blog post not found");
  }

  const existingContent = fs.readFileSync(filepath, "utf-8");
  const { data: existingMetadata } = matter(existingContent);

  const frontmatter: any = {
    ...existingMetadata,
    title: title.trim(),
    summary: summary.trim(),
    publishedAt: existingMetadata.publishedAt, // Keep original publish date
  };

  if (image?.trim()) {
    frontmatter.image = image.trim();
  } else {
    delete frontmatter.image;
  }

  const mdxContent = matter.stringify(content.trim(), frontmatter);
  fs.writeFileSync(filepath, mdxContent, "utf-8");

  revalidatePath("/admin");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  redirect("/admin");
}
