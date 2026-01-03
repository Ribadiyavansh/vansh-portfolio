import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nishant Patel",
  initials: "NP",
  url: "https://nixhant-portfolio.vercel.app",
  location: "Rajkot, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/rajkot",
  description:
    "Full Stack Developer specializing in scalable SaaS solutions, MERN stack applications, and custom e-commerce platforms using React.js, Laravel, and Node.js.",
  summary:
    "Full-stack developer with strong expertise in React.js, Next.js, Laravel, and Node.js. Experienced in developing scalable MERN applications, dynamic dashboards, automation tools, and e-commerce platforms. Skilled in API integrations, Shopify store development, performance optimization, and Agile development workflows.",
  avatarUrl: "/me.png",
  skills: [
    "React.js",
    "Next.js",
    "React Native",
    "Redux Toolkit",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Laravel",
    "GraphQL",
    "REST APIs",
    "Shopify & Liquid",
    "MySQL",
    "MongoDB",
    "Redis Caching",
    "Database Optimization",
    "JSON & Data Modeling",
    "Docker",
    "CI/CD",
    "JWT Auth",
    "Git",
    "GitHub",
    "Postman",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "patelnishant2006@email.com",
    tel: "+91 97730 05701",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Itsnishant4",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nishant-patel",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DigiSoftwar",
      href: "https://digisoftwar.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "https://digisoftwar.com/uploads/logo/logo_618bb20d2898c.png",
      start: "2024",
      end: "Freelancing",
      description:
        "Delivered 2+ full-stack applications, dynamic dashboards with role-based UI, API-driven insights, and complex MERN systems. Improved API and database performance across high-traffic modules for logistics and e-commerce platforms.",
    },
    {
      company: "CodeKlips",
      href: "https://codeklips.com",
      badges: [],
      location: "Remote",
      title: "Shopify & Web Developer",
      logoUrl:
        "https://yt3.googleusercontent.com/4iqg_1ecnVxbB28F3GMqFJcJ-DxoYl2IfCvvfcch6h5bGMUP1TYlEvaKrzx1IYBRmIBC2f89=s160-c-k-c0x00ffffff-no-rj",
      start: "2024",
      end: "Freelancing",
      description:
        "Developed premium jewelry e-commerce store with custom Liquid components, Advanced filtering, and SEO optimization. Implemented Shopify APIs for payment gateways and shipping integrations.",
    },
    {
      company: "Rutansh Tech",
      href: "https://rutanshtech.com",
      badges: [],
      location: "Remote",
      title: "React.js Developer",
      logoUrl:
        "https://rutanshtech.com/static/media/logo.cc4d56e0c3c62cd0f972.png",
      start: "2024",
      end: "Freelancing",
      description:
        "Delivered multiple React.js dashboards with advanced reporting, role-based UI management, and API-driven data visualization. Built scalable front-end applications with state management and performance optimization.",
    },
  ],
  education: [
    {
      school: "Atmiya University",
      href: "https://atmiyauni.ac.in",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "https://atmiyauni.ac.in/images/logo.png",
      start: "2021",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "AiTodoCRM",
      href: "https://aitodocrm.in",
      dates: "2025",
      active: true,
      description:
        "AI-powered CRM for freelancers with comprehensive task management, project management, and AI-driven insights to streamline workflow and productivity.",
      technologies: [
        "React.js",
        "Next.js",
        "OpenAI API",
        "MongoDB",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://aitodocrm.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Aitodo.mov",
    },
    {
      title: "Onboarding Screen React",
      href: "https://onbording-screen-react.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "NPM package for building customizable onboarding screens in React. It provides a simple and flexible way to create walkthroughs and tutorials for your web applications.",
      technologies: ["React", "NPM", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://onbording-screen-react.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/onbording-screen-react",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/onboardingscreen.mp4",
    },
    {
      title: "Brand-CN",
      href: "https://brand-cn.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Open-source project for applying Shadcn UI themes (ChatGPT, Gemini, etc.) to applications. It allows users to browse and integrate professional design systems with ease.",
      technologies: ["React", "Next.js", "Shadcn UI", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://brand-cn.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/brand-cn.mp4",
    },
    {
      title: "Project Management App",
      href: "https://project-management-iota-teal.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Comprehensive project management tool with workspaces, invitation systems, and task management. Built for teams to collaborate effectively with real-time updates.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://project-management-iota-teal.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/project-management.mp4",
    },
    {
      title: "Prddiam",
      href: "https://www.prddiam.com",
      dates: "2024",
      active: true,
      description:
        "E-commerce platform - Developed a premium jewelry e-commerce store with advanced filtering, custom Liquid components, and SEO optimization.",
      technologies: [
        "Shopify",
        "Liquid",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.prddiam.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/prddiam.mov",
    },
    {
      title: "Divine Creation",
      href: "https://www.divine-creation.in/",
      dates: "2024",
      active: true,
      description:
        "Astrology Informative web - Developed a comprehensive astrology website with user-friendly interface and information delivery.",
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.divine-creation.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/divine.mov",
    },
    {
      title: "Kasba Natural",
      href: "https://kasbanatural.com",
      dates: "2025",
      active: true,
      description: "Kasba Natural is a ecommerce app based on lravel ",
      technologies: ["Laravel", "Mysql", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://kasbanatural.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/kasba.mov",
    },
    {
      title: "NSM Roadways CRM",
      href: "https://nsmadmin.nsmroadways.com",
      dates: "2024",
      active: true,
      description:
        "ERP application for transporter CRM built with MERN stack, providing comprehensive management solutions for transportation operations.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://nsmadmin.nsmroadways.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/nsm.mov",
    },
    {
      title: "Nwallpaper",
      href: "https://nwallpaper.apk.com/",
      dates: "2024",
      active: true,
      description:
        "Android Wallpaper App - Built a mobile wallpaper application with extensive wallpaper collection and user-friendly interface.",
      technologies: [
        "React Native",
        "Expo",
        "OneSignal",
        "TypeScript",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://nwallpaper.apk.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2F1765024331613_nwallpaper.png?alt=media&token=8c879230-e984-41c4-8070-5492b1b574d2",
      video: "",
    },
    {
      title: "Earn4Day",
      href: "http://earn4day.great-site.net/?i=1",
      dates: "2024",
      active: true,
      description:
        "Android App with Database - Created a mobile application with comprehensive database functionality and user management features.",
      technologies: [
        "React Native",
        "Expo",
        "Node.js",
        "MongoDB",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "http://earn4day.great-site.net/?i=1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2F1765024526681_earn4day.png?alt=media&token=acdece32-f80a-47d4-a0a5-a2bed4eb2d70",
      video: "",
    },
    {
      title: "Eco Scan",
      href: "https://expo.dev/accounts/nixhant_4/projects/Demo/builds/637cf03d-6d5f-44dd-be89-4d9b0d68f028",
      dates: "2024",
      active: true,
      description:
        "Cross Platform App With React Native - Developed a cross-platform mobile application with modern React Native implementation.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Firebase",
        "Cross-platform",
      ],
      links: [
        {
          type: "Website",
          href: "https://expo.dev/accounts/nixhant_4/projects/Demo/builds/637cf03d-6d5f-44dd-be89-4d9b0d68f028",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://firebasestorage.googleapis.com/v0/b/ganesha-9f5a9.appspot.com/o/uploads%2F1765024291349_Untitled%20design%20(2).png?alt=media&token=ecd73637-1201-484d-98bf-bb601fa1b2ee",
      video: "",
    },
  ],
  hackathons: [],
} as const;
