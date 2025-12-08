import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Navbar() {
  return (
    <div className=" mx-auto  flex flex-row justify-between   fixed top-0 z-50 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-baseline justify-between ">
        <div className="flex items-baseline gap-4">
          <div className="flex items-baseline justify-center gap-4">
            <Link
              className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4"
              href="/work-experience"
            >
              Work
            </Link>
            <Link
              className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4"
              href="/blog"
            >
              Blogs
            </Link>
            <Link
              className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4"
              href="/projects"
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            data-slot="button"
            className="justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [@media(hover:hover)_and_(pointer:fine)]:transition-colors [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-[ease] btn-inner-shadow hover:bg-accent dark:hover:bg-accent/50 py-2 has-[>svg]:px-3 hidden lg:flex items-center gap-2 h-10 px-3 text-xs font-medium text-foreground/80 hover:text-foreground transition-all duration-200 rounded-md btn-inner-shadow [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[0.98]"
          >
            <span>Search</span>
            <kbd className="flex items-center justify-center h-5 px-1.5 text-[10px] font-mono font-semibold rounded tag-inner-shadow">
              ⌘K
            </kbd>
          </button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
