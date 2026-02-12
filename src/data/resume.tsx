import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
    name: "Vansh",
    initials: "V",
    url: "https://sahil-portfolio.vercel.app",
    location: "India",
    locationLink: "https://www.google.com/maps/place/india",
    description:
        "Entrepreneur & IT Developer. I design, deploy, and manage secure, scalable cloud infrastructure.",
    summary:
        "I am an entrepreneur and IT developer focused on building scalable digital products and growth-driven brands. My work sits at the intersection of technology, business strategy, and execution.\n\nI am an entrepreneur with the capability to conceptualize, establish, and scale industrial ventures — including manufacturing plants, operational firms, and structured business ecosystems.",
    avatarUrl: "/my-avtar.png",
    skillCategories: {
        "Cloud & DevOps": [
            "AWS",
            "Linux",
            "Docker",
            "CI/CD",
            "Prometheus",
            "Grafana",
            "Git",
            "Nginx",
            "Monitoring & Logging",
            "Cloud Security",
            "Bash",
        ],
        "Backend & APIs": [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
        ],
        "Frontend & Scripting": [
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Python",
        ],
    },
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
    ],
    contact: {
        email: "vanshribadiya3@gmail.com",
        tel: "+91 7878224846",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Ribadiyavansh",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/vansh-ribadiyaa-5579482b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                icon: Icons.linkedin,
                navbar: true,
            },
            Instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/vanshribadiyaa_?igsh=amM3N2toOWp4YXQ3",
                icon: Icons.instagram,
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
            company: "Simform Software LLP",
            href: "#",
            badges: [],
            location: "Ahmedabad",
            title: "Frontend Developer",
            logoUrl: "/omnetra-infotech.png",
            start: "April 2025",
            end: "Auguest 2025",
            description:
                "Simform is a digital engineering and software development company. It helps businesses build scalable digital products and provides agile teams to extend development capabilities.",
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
            title: "CloudBox – Secure File Storage Platform",
            href: "https://cloudbox.sahilprajapati.me/",
            active: true,
            description:
                "Built a secure file and folder upload system using AWS S3 signed URLs. Implemented JWT authentication, folder management, and metadata storage with MongoDB. Optimized for scalable, serverless deployments.",
            technologies: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "AWS S3",
                "JWT",
                "Git",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://cloudbox.sahilprajapati.me/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Sahil-Prajapati-8917/CloudBox",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "Cloud-Native Application Monitoring Platform",
            href: "https://github.com/Sahil-Prajapati-8917/Cloud-Native.git",
            active: true,
            description:
                "Built a cloud-native monitoring system for real-time backend observability. Exposed custom application metrics, integrated Prometheus for metrics collection, and used Grafana for visualization. Monitored request traffic, latency, error rates, and service health in containerized environments.",
            technologies: [
                "Node.js",
                "Express.js",
                "Prometheus",
                "Grafana",
                "Docker",
                "REST APIs",
                "Linux",
                "Git",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Sahil-Prajapati-8917/Cloud-Native.git",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "File Transfer & Folder Upload App",
            href: "#",
            active: true,
            description:
                "Built a folder upload system with real-time progress indicators. Implemented folder-to-ZIP automation using JSZip. Integrated Firebase for secure file storage and optimized uploads.",
            technologies: [
                "React",
                "Firebase",
                "MongoDB",
                "Node.js",
                "JSZip",
            ],
            links: [
                // {
                //     type: "Website",
                //     href: "#",
                //     icon: <Icons.globe className="size-3" />,
                // },
                {
                    type: "Source",
                    href: "https://github.com/Sahil-Prajapati-8917/File-Transfer-App",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "WhatsApp Bulk Messaging System",
            dates: "2024",
            active: true,
            description:
                "Engineered a system to send messages efficiently to multiple contacts. Designed the complete UI/UX flow using Figma. Improved outreach and ensured reliable delivery for large contact lists.",
            technologies: [
                "React",
                "JavaScript",
                "Figma",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://whatsapp.sahilprajapati.me",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Sahil-Prajapati-8917/Whatsapp.git",
                    icon: <Icons.github className="size-3" />,
                },

            ],
            image: "",
            video: "",
        },
        {
            title: "Transport Management System",
            href: "https://nsmadmin.nsmroadways.com/",
            active: true,
            description:
                "Designed UI/UX for mobile and desktop admin and driver workflows, including dashboards, driver lists, load management, job assignment, and in-app chat. Emphasized clear navigation, role-based views, and responsive layouts to support fast, efficient logistics operations with an intuitive user experience.",
            technologies: [
                "Figma",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://nsmadmin.nsmroadways.com/",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "AI-Driven Holistic Resume Evaluation Platform",
            href: "#",
            active: true,
            description:
                "Developed a full-stack AI-based hiring platform beyond keyword matching. Built intelligent resume parsing for PDF and DOC files. Implemented explainable AI scoring, audit trails, and JWT-based authentication.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "OpenAI API",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://hirevision.sahilprajapati.me/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Sahil-Prajapati-8917/Resume-Collage.git",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
        {
            title: "Pixora – Interactive Digital Visual Books",
            href: "#",
            active: true,
            description:
                "Built a full-stack platform for interactive digital visual books. Implemented smooth animations and page-flip effects. Designed authentication, dashboards, and project management features.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Framer Motion",
                "GSAP",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://www.pixfolio.in/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Sahil-Prajapati-8917/Album.git",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "",
        },
    ],
    hackathons: [],
} as const;
