import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Hexagon,
  Layers3,
  LockKeyhole,
  Monitor,
  Server,
  Settings,
  Wrench,
} from "lucide-react";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPostman } from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: Braces },
      { name: "HTML5", icon: IoLogoHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Responsive Design", icon: Monitor },
    ],
  },
  {
    title: "Backend",
    description:
      "Developing APIs, authentication, and server-side applications.",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: Hexagon },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Globe },
      { name: "Authentication", icon: LockKeyhole },
      { name: "RBAC", icon: LockKeyhole },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use to build, test, and manage projects.",
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: Code2 },
      { name: "Postman", icon: SiPostman },
      { name: "Framer Motion", icon: Layers3 },
    ],
  },
  {
    title: "Database & Other",
    description: "Data management and additional development skills.",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "MongoDB", icon: DiMongodb },
      { name: "MySQL", icon: Database },
      { name: "Database Design", icon: Database },
      { name: "Problem Solving", icon: Settings },
      { name: "Software Development", icon: Code2 },
    ],
  },
];
