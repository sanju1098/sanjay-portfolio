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
  { label: "Recent Build", value: projects[0].name },
  { label: "Backend Focus", value: "Node.js, Express & REST APIs" },
  { label: "Strengths", value: "Scalable UI Systems & Reusable Components" },
  { label: "Currently Exploring", value: "AI-Powered Product Development" },
];

export const services = [
  {
    icon: <Code className="text-accent-foreground" size={24} />,
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces with modern frameworks.",
  },
  {
    icon: <Server className="text-accent-foreground" size={24} />,
    title: "Backend Development",
    description:
      "Building practical backend applications and REST APIs with Node.js, Express, databases, and secure authentication.",
  },
  {
    icon: <Sparkles className="text-accent-foreground" size={24} />,
    title: "AI-Powered Applications",
    description:
      "Integrating LLMs and AI APIs to build intelligent features, chatbots, and AI-driven products.",
  },
  {
    icon: <Layers className="text-accent-foreground" size={24} />,
    title: "Technical Architecture",
    description:
      "Designing scalable and maintainable application architecture using modern tools and best practices.",
  },
  {
    icon: <Paintbrush className="text-accent-foreground" size={24} />,
    title: "UI/UX & Design Systems",
    description:
      "Crafting intuitive interfaces and reusable component libraries for consistent, scalable UIs.",
  },
  {
    icon: <ShieldCheck className="text-accent-foreground" size={24} />,
    title: "Testing & Performance",
    description:
      "Writing robust tests with Jest and React Testing Library while optimizing for speed and scalability.",
  },
];
