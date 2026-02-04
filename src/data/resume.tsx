import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
    name: "Sahil Muliya",
    initials: "SM",
    url: "https://sahil-portfolio.vercel.app",
    location: "India",
    locationLink: "https://www.google.com/maps/place/india",
    description:
        "Cloud & DevOps Engineer. I design, deploy, and manage secure, scalable cloud infrastructure.",
    summary:
        "Cloud and DevOps enthusiast with hands-on experience in deploying, managing, and monitoring cloud-based infrastructure. Skilled in AWS core services, Linux administration, containerization, and CI/CD workflows. Comfortable working with cloud security, scalability, automation, and production-ready environments. Focused on building reliable systems rather than just applications.",
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
        email: "sahilprajapati8917@gmail.com",
        tel: "+91 7878224846",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Sahil-Prajapati-8917",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sahil-v-muliya-92593027b/",
                icon: Icons.linkedin,
                navbar: true,
            },
            Instagram: {
                name: "Instagram",
                url: "https://instagram.com/sahil_prajapati_8917",
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
            company: "Freelance Frontend Developer",
            href: "#",
            badges: [],
            location: "Remote",
            title: "Frontend Developer",
            logoUrl: "/omnetra-infotech.png",
            start: "June 2025",
            end: "Present",
            description:
                "Developing custom web applications for diverse clients using React.js and Tailwind CSS. Designing responsive UI/UX layouts to improve usability and accessibility. Optimizing existing websites for performance and mobile compatibility.",
        },
        {
            company: "Omnetra Infotech",
            href: "#",
            badges: [],
            location: "Remote",
            title: "UI/UX & Graphic Design Intern",
            logoUrl: "/omnetra-infotech.png",
            start: "Apr 2025",
            end: "May 2025",
            description:
                "Created wireframes, prototypes, and design systems using Figma. Designed marketing materials and client projects using Photoshop and Canva. Supported UI consistency and branding across multiple projects.",
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
                {
                    type: "Website",
                    href: "#",
                    icon: <Icons.globe className="size-3" />,
                },
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
                "Designed mobile and desktop screens for admin and driver workflows. Covered dashboards, driver lists, load management, chat, and job assignment. Focused on simple navigation and clear user experience for logistics operations.",
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
                    href: "#",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/Sahil-Prajapati-8917/Resume-Evaluation-Platform",
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
                    href: "https://pixora.sahilprajapati.me/",
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
