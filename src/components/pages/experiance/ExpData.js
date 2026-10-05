import {
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export const journey = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Science in Information Technology",
    period: "2022 – 2026",
    place: "Bahir Dar University",
    description:
      "Currently pursuing a BSc in Information Technology, building a strong foundation in software development, databases, networking, systems, and modern web technologies.",
  },

  {
    type: "training",
    icon: Award,
    title: "DYV Training",
    period: "05 Nov 2025",
    place: "Bahir Dar University",
    description:
      "Participated in DYV training, developing practical knowledge in personal development, teamwork, leadership, communication, and collaborative activities.",
  },

  {
    type: "project",
    icon: Code2,
    title: "Scientific Calculator",
    period: "Project Experience",
    place: "Personal Project",
    description:
      "Built a modern scientific calculator with standard and scientific modes, mathematical operations, trigonometric functions, powers, logarithms, and a responsive user interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    type: "internship",
    icon: BriefcaseBusiness,
    title: "Frontend Developer Intern",
    period: "Internship Experience",
    place: "Geberew Market",
    description:
      "Gained practical development experience while working on the Geberew Market project. Worked with React, reusable components, responsive interfaces, API integration, and real-world development workflows.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST API"],
  },

  {
    type: "project",
    icon: Code2,
    title: "Geberew Market",
    period: "Development Experience",
    place: "Full-Stack Marketplace",
    description:
      "Contributed to a marketplace platform focused on buyer browsing, listing discovery, responsive interfaces, API integration, and a practical user experience.",
    technologies: ["React", "Node.js", "Express.js", "REST API"],
  },

  {
    type: "project",
    icon: Code2,
    title: "HAHU Marketplace Platform",
    period: "Current Project",
    place: "Full-Stack E-Commerce Platform",
    description:
      "Developing a production-oriented second-hand marketplace platform with customer and admin applications, authentication, product management, categories, orders, search, and responsive interfaces.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express.js",
    ],
  },

  {
    type: "achievement",
    icon: Award,
    title: "Aspire Leadership Program",
    period: "Certified",
    place: "Leadership Development",
    description:
      "Completed the Aspire Leadership Program, strengthening leadership, communication, teamwork, collaboration, and personal development skills.",
    technologies: ["Leadership", "Communication", "Teamwork"],
  },

  {
    type: "experience",
    icon: Sparkles,
    title: "2+ Years of Development Experience",
    period: "2024 – Present",
    place: "Software Development",
    description:
      "Continuously building practical software development experience through academic work, personal projects, internship experience, collaborative development, and production-oriented applications.",
    technologies: ["Frontend", "Backend", "APIs", "Git", "Problem Solving"],
  },
];
