import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Articles, guides, and thoughts on software development.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-semibold text-4xl tracking-tight mb-6">Blog</h1>
        <p className="text-muted-foreground text-sm">
          Dive into my latest thoughts on frontend, backend, UI/UX, and tech.
        </p>
      </BlurFade>

      <div className="grid gap-6">
        {posts
          .sort(
            (a, b) =>
              new Date(b.metadata.publishedAt).getTime() -
              new Date(a.metadata.publishedAt).getTime()
          )
          .map((post, index) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 2 + index * 0.06}
              key={post.slug}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-start gap-5 p-4 rounded-xl   hover:border-foreground/40 hover:bg-muted/30 transition-all duration-300"
              >
                {/* Index Number */}
                <div className="text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 min-w-[32px]">
                  {index + 1}.
                </div>

                {/* Thumbnail */}
                

                <div className="flex-1 space-y-1">
                  {/* Title */}
                  <h2 className="text-lg font-semibold tracking-tight group-hover:text-foreground transition-colors">
                    {post.metadata.title}
                  </h2>

                  {/* Date */}
                  <p className="text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>

                  {/* Summary */}
                  
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
