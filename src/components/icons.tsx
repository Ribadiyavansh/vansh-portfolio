import { Mail, Github, Linkedin, Globe, Instagram } from "lucide-react";

export const Icons = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  globe: Globe,
  typescript: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      className="size-3"
      alt="TypeScript"
      {...props}
    />
  ),
  react: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      className="size-3"
      alt="React"
      {...props}
    />
  ),
  nextjs: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      className="size-3"
      alt="Next.js"
      {...props}
    />
  ),
  mongodb: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      className="size-3"
      alt="MongoDB"
      {...props}
    />
  ),
  postgresql: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      className="size-3"
      alt="PostgreSQL"
      {...props}
    />
  ),
  aws: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" // Using generic AWS text/icon
      className="size-3"
      alt="AWS"
      {...props}
    />
  ),
  linux: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
      className="size-3"
      alt="Linux"
      {...props}
    />
  ),
  docker: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      className="size-3"
      alt="Docker"
      {...props}
    />
  ),
  git: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      className="size-3"
      alt="Git"
      {...props}
    />
  ),
  nginx: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
      className="size-3"
      alt="Nginx"
      {...props}
    />
  ),
  cicd: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
      className="size-3"
      alt="CI/CD"
      {...props}
    />
  ),
  cloud: (props: any) => (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
      className="size-3"
      alt="Cloud Storage"
      {...props}
    />
  ),
  instagram: Instagram,
};
