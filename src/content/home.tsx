import {
  Accessibility,
  Code,
  Code2,
  ComponentIcon,
  Gauge,
  GitBranch,
  Hexagon,
  Layers,
  Paintbrush,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

export const orbitIcons = [
  {
    icon: Terminal,
    position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: GitBranch,
    position: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: Hexagon,
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    icon: ComponentIcon,
    position: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
];

export const pillars = [
  {
    icon: Accessibility,
    title: "Accessible",
    text: "WCAG-first interfaces for every user.",
  },
  {
    icon: Gauge,
    title: "Performant",
    text: "Fast by default, measured with Lighthouse.",
  },
  {
    icon: Layers,
    title: "Scalable",
    text: "Design systems and reusable components.",
  },
  {
    icon: Code2,
    title: "Full-stack minded",
    text: "Building frontend experiences and backend APIs.",
  },
];

export const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Translate product requirements into clear technical solutions.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Structure applications with reusable components and maintainable patterns.",
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "Connect interfaces with APIs, application state and backend services.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Improve accessibility, performance, reliability and user experience.",
  },
];

export const services = [
  {
    icon: <Code size={24} />,
    title: "Frontend Development",
    description:
      "Engineering responsive, production-ready applications with React, Next.js, TypeScript, and modern frontend patterns. Building everything from complex forms and interactive interfaces to authentication flows and role-based applications.",
  },
  {
    icon: <Paintbrush size={24} />,
    title: "Design Systems & UI Engineering",
    description:
      "Developing reusable component libraries and consistent design systems using ShadCN UI, Material UI, Tailwind CSS, and Styled Components. Translating design specifications into accessible, scalable user interfaces.",
  },
  {
    icon: <Layers size={24} />,
    title: "Frontend Architecture",
    description:
      "Designing maintainable frontend architectures with modular components, TanStack Query, and Redux Toolkit. Establishing scalable patterns for application structure, component reusability, and state management.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Accessibility, Testing & Performance",
    description:
      "Building inclusive and performant applications with accessibility validation using NVDA and VoiceOver, automated testing with Jest and React Testing Library, CI/CD workflows using GitHub Actions, code splitting, and lazy loading.",
  },
  {
    icon: <Server size={24} />,
    title: "Backend & API Development",
    description:
      "Developing backend foundations with Node.js and Express.js, building REST APIs, implementing authentication and authorization, integrating databases, and connecting frontend applications with secure backend services.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "AI & RAG Engineering",
    description:
      "Building AI-powered applications and retrieval-augmented generation (RAG) solutions using LLM APIs and modern AI development tools. Developing intelligent application experiences and streaming conversational interfaces.",
  },
];

export const addValuesSection = [
  {
    number: "01",
    title: "Reusable architecture",
    description:
      "Creating maintainable component structures and shared frontend foundations.",
  },
  {
    number: "02",
    title: "Reliable integrations",
    description:
      "Connecting applications with APIs, CMS platforms, and external services.",
  },
  {
    number: "03",
    title: "Quality-driven delivery",
    description:
      "Considering accessibility, performance, testing, and maintainability throughout development.",
  },
  {
    number: "04",
    title: "Cross-functional collaboration",
    description:
      "Working with design, product, QA, and engineering teams to deliver complete features.",
  },
];
