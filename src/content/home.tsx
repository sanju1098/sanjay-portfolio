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
  { label: "Role", value: "Senior Experience Engineer, Publicis Sapient" },
  { label: "Focus", value: "Design systems, accessibility, performance" },
  { label: "Featured Project", value: projects[0].name },
  { label: "Currently Exploring", value: "Backend and AI product development" },
];

export const services = [
  {
    icon: <Code className="text-primary" size={24} />,
    title: "Frontend Development",
    description:
      "Building responsive, server-rendered interfaces with React, Next.js, and TypeScript, from validated multi-step forms to role-based protected routes.",
  },
  {
    icon: <Paintbrush className="text-primary" size={24} />,
    title: "Design Systems & UI Engineering",
    description:
      "Building reusable component libraries and documenting patterns in Storybook, with ShadCN UI, Material UI, Tailwind CSS, and Styled Components.",
  },
  {
    icon: <Layers className="text-primary" size={24} />,
    title: "Frontend Architecture",
    description:
      "Structuring apps for maintainability with modular components, TanStack Query for server state, Redux Toolkit for client state, and documented architecture decisions.",
  },
  {
    icon: <ShieldCheck className="text-primary" size={24} />,
    title: "Accessibility, Testing & Performance",
    description:
      "Accessibility work verified with NVDA and VoiceOver, Jest and React Testing Library tests behind SonarQube quality gates, and faster loads through code splitting and lazy loading.",
  },
  {
    icon: <Server className="text-primary" size={24} />,
    title: "Backend Foundations",
    description:
      "Building Node.js and Express APIs and working with authentication, including Microsoft Entra ID SSO.",
  },
  {
    icon: <Sparkles className="text-primary" size={24} />,
    title: "AI Product Integrations",
    description:
      "Building streaming conversational interfaces with the Vercel AI SDK and LLM APIs, including AstraMind, a RAG PDF chatbot using Gemini and pgvector.",
  },
];
