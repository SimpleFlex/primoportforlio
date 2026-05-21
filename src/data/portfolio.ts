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
  tags: string[];
  image: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const TECH_STACK: string[] = [
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS', 'GraphQL',
  'React.js', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS', 'GraphQL',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: 'layers',
    title: 'Frontend',
    bars: [
      { name: 'REACT / NEXT.JS', level: 98 },
      { name: 'TYPESCRIPT', level: 95 },
      { name: 'TAILWIND CSS', level: 100 },
    ],
  },
  {
    icon: 'dns',
    title: 'Backend',
    bars: [
      { name: 'NODE / EXPRESS', level: 92 },
      { name: 'GRAPHQL', level: 85 },
      { name: 'RESTful APIs', level: 96 },
    ],
  },
  {
    icon: 'database',
    title: 'Databases',
    list: [
      'MongoDB (Mongoose)',
      'PostgreSQL (Prisma)',
      'Redis Caching',
      'Firebase',
    ],
  },
  {
    icon: 'construction',
    title: 'Operations',
    tags: ['DOCKER', 'AWS S3', 'CI/CD', 'GIT', 'KUBERNETES'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Aether OS',
    description:
      'A virtual desktop environment built with React and WebGL, featuring window management and real-time state persistence.',
    tags: ['NEXT.JS', 'WEBGL'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    title: 'Neural Net Orchestrator',
    description:
      'Automated deployment pipeline for machine learning models with real-time health monitoring and auto-scaling.',
    tags: ['PYTHON', 'NODE.JS'],
    image:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  },
  {
    title: 'Omni-Vault Database',
    description:
      'A high-performance document store featuring military-grade encryption at rest and sub-millisecond query execution.',
    tags: ['MONGODB', 'RUST'],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
];
