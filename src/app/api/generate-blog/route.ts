import { NextResponse } from "next/server";
import { getBlogPosts } from "@/data/blog";
import { createBlogPost } from "@/app/admin/actions";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function GET() {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API key missing" }, { status: 500 });
    }

    // 1) Fetch existing posts
    const existingPosts = await getBlogPosts();
    const existingTitles = existingPosts.map(p => p.metadata.title);

    console.log("Existing Blog Titles:", existingTitles);

    // 2) Build system prompt
    const prompt = `
You are an expert technical writer.

Generate a **brand new and unique** blog post.
IMPORTANT RULES:
- Do NOT repeat or regenerate any existing title from this list:
${existingTitles.map(t => `- ${t}`).join("\n")}
- Your title MUST be 100% unique
- Return ONLY valid JSON (no markdown, no extra text)

JSON FORMAT EXACTLY:
{
  "title": "Unique technical title",
  "summary": "Short summary under 100 characters",
  "topic": "Topic name",
  "imageUrl": "https://valid-image-url.com",
  "content": "# Markdown content here..."
}
`;

    // 3) Call Gemini
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 2048 },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini API error:", err);
      throw new Error(err);
    }

    const data = await response.json();

    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error("Invalid Gemini response");

    console.log("Raw Gemini Response:", rawText);

    // 4) Parse JSON safely
    let result;
    try {
      result = JSON.parse(rawText);
    } catch {
      const extracted = rawText.match(/\{[\s\S]*\}/);
      if (!extracted) throw new Error("Could not extract JSON");
      result = JSON.parse(extracted[0]);
    }

    const { title, summary, content, topic, imageUrl } = result;

    if (!title || !summary || !content) {
      throw new Error("Missing required fields in generated content");
    }

    // 5) Check duplicate title again
    if (existingTitles.includes(title)) {
      return NextResponse.json(
        { error: "Duplicate blog title detected", title },
        { status: 409 }
      );
    }

    // 6) Save the blog
    const fd = new FormData();
    fd.append("title", title);
    fd.append("summary", summary);
    fd.append("content", content);
    fd.append("image", imageUrl || "");

    const saved = await createBlogPost(fd);

    return NextResponse.json({
      success: true,
      message: "Blog generated successfully",
      slug: saved.slug,
      title,
      topic
    });

  } catch (error: any) {
    console.error("AUTO BLOG ERROR:", error);
    return NextResponse.json(
      { error: "Failed to generate blog", details: error.message },
      { status: 500 }
    );
  }
}
