import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-5xl space-y-8 mt-20">
        <div className="relative inline-block">
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
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <div className="flex-col flex flex-1 space-y-1.5">
            <div className="flex">
              <span
                className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translateY(-8px) translateZ(0px)",
                }}
              >
                Hi, I'm Sahil Prajapati 👋
              </span>
            </div>
            <div className="flex">
              <span
                className="inline-block max-w-[600px] md:text-xl"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translateY(-8px) translateZ(0px)",
                }}
              >
                Cloud & DevOps Engineer
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-base md:text-lg text-neutral-500">
            <span>
              I design, deploy, and manage secure, scalable cloud infrastructure.
            </span>
            <span>
              I work with modern cloud and DevOps tools like AWS, Linux, Docker, Git, CI/CD pipelines, Nginx, and cloud storage services.
            </span>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <a href="/Sahil%20V.%20Muliya%20-%20CV.pdf" target="_blank" rel="noopener noreferrer">
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
          <Button asChild variant="secondary">
            <a href={`mailto:${DATA.contact.email}`}>
              <Icons.email className="mr-2 h-4 w-4" />
              Get in touch
            </a>
          </Button>
        </div>
        <div className="mt-8 flex gap-2">
          {Object.values(DATA.contact.social).map((social) => {
            if (!social.navbar) return null;
            return (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 flex items-center gap-2"
              >
                <span className="size-6">
                  <social.icon />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
