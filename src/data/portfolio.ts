export interface NavItem {
  label: string;
  href: string;
}

export interface SkillBar {
  name: string;
  level: number;
}

export interface SkillCategory {
  icon: string;
  title: string;
  bars?: SkillBar[];
  list?: string[];
  tags?: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  src: string;
  github: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const TECH_STACK: string[] = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Docker",
  "AWS",
  "GraphQL",
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Docker",
  "AWS",
  "GraphQL",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: "layers",
    title: "Frontend",
    bars: [
      { name: "REACT / NEXT.JS", level: 98 },
      { name: "TYPESCRIPT", level: 95 },
      { name: "TAILWIND CSS", level: 100 },
    ],
  },
  {
    icon: "dns",
    title: "Backend",
    bars: [
      { name: "NODE / EXPRESS", level: 92 },
      { name: "GRAPHQL", level: 85 },
      { name: "RESTful APIs", level: 96 },
    ],
  },
  {
    icon: "database",
    title: "Databases",
    list: [
      "MongoDB (Mongoose)",
      "PostgreSQL (Prisma)",
      "Redis Caching",
      "Firebase",
    ],
  },
  {
    icon: "construction",
    title: "Operations",
    tags: ["DOCKER", "AWS S3", "CI/CD", "GIT", "KUBERNETES"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "John Enterprise Ecommerce Website",
    description:
      "A full-stack ecommerce platform with product catalog, cart management, and worldwide gift delivery powered by a modern headless architecture.",
    tags: ["NEXT.JS", "MONGODB", "TAILWIND"],
    image: "/john.png",
    src: "https://www.johnsenterprise.shop/",
    github: "https://github.com/SimpleFlex/john-stores",
  },
  {
    title: "BOOSTERA",
    description:
      "A Web3 marketing platform designed to amplify project visibility, grow on-chain audiences, and drive engagement across decentralized ecosystems.",
    tags: ["NEXT.JS", "NODE.JS", "WEB3"],
    image: "/boost.png",
    src: "https://www.boost-era.fun/",
    github: "https://github.com/SimpleFlex/boostera",
  },
  {
    title: "CASH CONNECT",
    description:
      "A crypto finance platform enabling seamless buying, selling of digital assets, gift card trading, and cross-border money transfers.",
    tags: ["POSTGRESQL", "TYPESCRIPT", "TAILWIND"],
    image: "/cash.png",
    src: "https://cash-connect-frontend.vercel.app/",
    github: "https://github.com/Teqshure/Cash-Connect-Frontend",
  },
];
