import {
  Code,
  ShieldCheck,
  Paintbrush,
  Layers,
  Server,
  Sparkles,
} from "lucide-react";
import { projects } from "./project";

export const stats = [
  { label: "Role", value: "Senior Experience Engineer" },
  { label: "Focus", value: "Frontend Architecture & Design Systems" },
  { label: "Latest Project", value: projects[0].name },
  { label: "Currently Exploring", value: "AI-Powered Product Development" },
];

export const services = [
  {
    icon: <Code className="text-primary" size={24} />,
    title: "Frontend Development",
    description:
      "Building responsive, accessible React, Next.js, and TypeScript applications with micro-frontends, component-driven development, Storybook, Figma integration, and server-side rendering.",
  },
  {
    icon: <Server className="text-primary" size={24} />,
    title: "Backend Development",
    description:
      "Building RESTful APIs with Node.js, Express, MongoDB, Redis, Docker containerization, and NGINX. Experienced with API design, database management, and secure authentication patterns.",
  },
  {
    icon: <Sparkles className="text-primary" size={24} />,
    title: "AI-Powered Applications",
    description:
      "Integrating Vercel AI SDK, Gemini, Claude, and GitHub Copilot to build AI-driven features, chatbots, and intelligent product experiences with LLM-based APIs and prompt engineering.",
  },
  {
    icon: <Layers className="text-primary" size={24} />,
    title: "Technical Architecture",
    description:
      "Designing scalable micro-frontends, component libraries, and application architecture with TanStack Query for data fetching, Redux Toolkit for state management, and code splitting for performance.",
  },
  {
    icon: <Paintbrush className="text-primary" size={24} />,
    title: "UI/UX & Design Systems",
    description:
      "Crafting WCAG-compliant reusable component libraries, building design systems with Tailwind CSS, ShadCN UI, Material UI, and Styled Components. Adopted across multiple engineering teams with comprehensive Storybook documentation.",
  },
  {
    icon: <ShieldCheck className="text-primary" size={24} />,
    title: "Testing & Performance",
    description:
      "Writing comprehensive unit tests with Jest and React Testing Library, maintaining high quality gates in GitHub Actions CI/CD. Optimizing Core Web Vitals, improving Lighthouse performance scores through lazy loading, code splitting, and image optimization.",
  },
];
