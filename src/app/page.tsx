import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/hero";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { useTheme } from "@/components/theme-provider";

const BLUR_FADE_DELAY = 0.04;


const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();

  if (skillLower.includes("aws") || skillLower.includes("ec2") || skillLower.includes("s3") || skillLower.includes("iam") || skillLower.includes("cloudwatch")) return <Icons.aws className="size-8" />;
  if (skillLower.includes("linux")) return <Icons.linux className="size-8" />;
  if (skillLower.includes("bash")) return <Icons.bash className="size-8" />;
  if (skillLower.includes("docker") || skillLower.includes("containerization")) return <Icons.docker className="size-8" />;
  if (skillLower.includes("github")) return <Icons.githubBrand className="size-8" />; // Prioritize GitHub
  if (skillLower.includes("git")) return <Icons.git className="size-8" />;
  if (skillLower.includes("nginx")) return <Icons.nginx className="size-8" />;
  if (skillLower.includes("ci/cd") || skillLower.includes("pipelines")) return <Icons.cicd className="size-8" />;
  if (skillLower.includes("prometheus")) return <Icons.prometheus className="size-8" />;
  if (skillLower.includes("grafana")) return <Icons.grafana className="size-8" />;
  if (skillLower.includes("monitoring") || skillLower.includes("logging")) return <Icons.activity className="size-8 text-red-500" />;
  if (skillLower.includes("security")) return <Icons.shield className="size-8 text-blue-500" />;
  if (skillLower.includes("node")) return <Icons.nodejs className="size-8" />;
  if (skillLower.includes("express")) return <Icons.express className="size-8" />;
  if (skillLower.includes("mongodb") || skillLower.includes("mongo")) return <Icons.mongodb className="size-8" />;
  if (skillLower.includes("firebase")) return <Icons.firebase className="size-8" />;
  if (skillLower.includes("javascript") || skillLower.includes("js")) return <Icons.javascript className="size-8" />;
  if (skillLower.includes("react")) return <Icons.react className="size-8" />;
  if (skillLower.includes("tailwind")) return <Icons.tailwind className="size-8" />;
  if (skillLower.includes("python")) return <Icons.python className="size-8" />;
  if (skillLower.includes("typescript") || skillLower.includes("ts")) return <Icons.typescript className="size-8" />;
  if (skillLower.includes("next")) return <Icons.nextjs className="size-8" />;
  if (skillLower.includes("postgres")) return <Icons.postgresql className="size-8" />;

  return <Icons.cloudIcon className="size-8 text-sky-500" />;
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert whitespace-pre-wrap">
            {DATA.summary}
          </div>
        </BlurFade>
      </section>

      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <h2 className="text-3xl font-bold tracking-tighter">Skills</h2>
        </BlurFade>
        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 w-full max-w-[800px] mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 sm:gap-x-8 md:gap-x-12 text-left">
          {Object.values(DATA.skillCategories)
            .flat()
            .map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 3 + id * 0.05} inView>
                <div className="flex items-center gap-4 justify-start">
                  {getSkillIcon(skill)}
                  <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              </BlurFade>
            ))}
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 4 + id * 0.05}
              inView
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 4 + id * 0.05}
              inView
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Projects
                </h2>
                <h3 className="text-xl/relaxed text-muted-foreground mt-2">
                  Check out my cloud-focused work.
                </h3>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  I've worked on practical projects involving real deployments, automation, and cloud infrastructure.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                inView
              >
                <ProjectCard
                  href={"href" in project ? project.href : undefined}
                  title={project.title}
                  description={project.description}
                  dates={"dates" in project ? project.dates : ""}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="quote">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
            <div className="bg-white dark:bg-transparent border-l border-r border-b border-gray-200 dark:border-transparent shadow-xl dark:shadow-none rounded-3xl p-8 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-0">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
              </p>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed mb-3">
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ।।
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-300 dark:border-slate-700">
                <p className="text-xs md:text-sm italic text-slate-500 dark:text-slate-400">
                  "Work with discipline and clarity, without attachment to outcomes."
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </section> */}

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to connect or discuss cloud projects? Send me a direct message or email with a clear question.
                I'll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
