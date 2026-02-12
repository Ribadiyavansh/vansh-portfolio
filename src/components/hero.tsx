import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-5xl space-y-8 mt-20">
        <div className="relative inline-block">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-24 rounded-full">
              <img
                alt={DATA.name}
                src={DATA.avatarUrl}
                width={96}
                height={96}
                className="aspect-square h-full w-full object-cover"
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <div className="flex-col flex flex-1 space-y-1.5">
            <div className="flex">
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm Vansh 👋
                </span>
              </BlurFade>
            </div>
            <div className="flex">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <span className="inline-block max-w-[600px] md:text-xl">
                  Entrepreneur & IT Developer
                </span>
              </BlurFade>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base md:text-lg text-neutral-500 whitespace-pre-wrap">
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <span>
                I'm a problem solver and an aspiring Entrepreneur with a strong developer mindset. I specialize in building web based solutions and have a keen interest in modern technologies.
              </span>
            </BlurFade>
          </div>

        </div>
        <div className="mt-8 flex gap-4">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <Button asChild>
              <a href="/Vansh - Resume.pdf" target="_blank" rel="noopener noreferrer">
                <svg
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Resume / CV
              </a>
            </Button>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <Button asChild variant="secondary">
              <a href={`mailto:${DATA.contact.email}`}>
                <Icons.email className="mr-2 h-4 w-4" />
                Get in touch
              </a>
            </Button>
          </BlurFade>
        </div>
        <div className="mt-8 flex gap-2">
          {Object.values(DATA.contact.social).map((social, id) => {
            if (!social.navbar) return null;
            return (
              <BlurFade key={social.url} delay={BLUR_FADE_DELAY * 18 + id * 0.05}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-gray-300 flex items-center gap-2"
                >
                  <span className="size-6">
                    <social.icon />
                  </span>
                </a>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
