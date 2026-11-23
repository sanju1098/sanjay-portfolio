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
    text: "Building inclusive interfaces with WCAG, semantic HTML, and screen-reader support.",
  },
  {
    icon: Gauge,
    title: "Performance-driven",
    text: "Optimizing load times, rendering, and Core Web Vitals.",
  },
  {
    icon: Layers,
    title: "Scalable",
    text: "Engineering reusable components and maintainable design systems.",
  },
  {
    icon: Code2,
    title: "AI-powered",
    text: "Building intelligent applications with LLMs, RAG, and streaming interfaces.",
  },
];

export const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Break down product requirements, user needs, and technical constraints into clear engineering solutions.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Structure maintainable applications with reusable components, design systems, and scalable patterns.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Build responsive interfaces, integrate APIs, manage application state, and connect backend services.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Validate accessibility, improve performance, test reliability, and continuously refine the user experience.",
  },
];

export const services = [
  {
    icon: <Code size={24} />,
    title: "Frontend Development",
    description:
      "Building production-ready applications with React, Next.js, TypeScript, and modern frontend patterns. Experienced in complex forms, interactive workflows, authentication, role-based access, and API-driven interfaces.",
  },
  {
    icon: <Paintbrush size={24} />,
    title: "Design Systems & UI Engineering",
    description:
      "Building reusable component libraries and consistent design systems using Material UI, ShadCN UI, Tailwind CSS, and Styled Components. Developing accessible, WCAG-aligned components adopted across three engineering teams.",
  },
  {
    icon: <Layers size={24} />,
    title: "Frontend Architecture",
    description:
      "Designing modular, maintainable frontend architectures using reusable components, Redux Toolkit, Redux Saga, TanStack Query, and Context API. Establishing scalable patterns for application structure, data fetching, caching, and state management.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Accessibility, Testing & Performance",
    description:
      "Building accessible, high-performance applications through code splitting, lazy loading, image optimization, and caching. Experienced in Core Web Vitals, Lighthouse, WCAG, NVDA, VoiceOver, Jest, and React Testing Library.",
  },
  {
    icon: <Server size={24} />,
    title: "Backend & API Development",
    description:
      "Expanding into backend engineering with Node.js and Express.js. Exploring REST API development, authentication, authorization, middleware, database integration, and connecting frontend applications with backend services.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "AI & RAG Engineering",
    description:
      "Building AI-powered applications using LLM APIs, Google Gemini, and Vercel AI SDK. Hands-on experience with streaming conversational interfaces, RAG pipelines, PDF ingestion, embeddings, and semantic search using PostgreSQL and pgvector.",
  },
];

export const addValuesSection = [
  {
    number: "01",
    title: "Reusable architecture",
    description:
      "Building reusable component libraries, design systems, and modular frontend foundations for consistent and maintainable applications.",
  },
  {
    number: "02",
    title: "Reliable integrations",
    description:
      "Integrating REST APIs, Adobe Experience Manager, Adobe Target, authentication services, and third-party platforms.",
  },
  {
    number: "03",
    title: "Performance & accessibility",
    description:
      "Improving application performance, Core Web Vitals, and WCAG compliance through optimization, testing, and accessibility best practices.",
  },
  {
    number: "04",
    title: "End-to-end delivery",
    description:
      "Translating product requirements into production-ready features while collaborating with design, product, QA, and engineering teams.",
  },
];
