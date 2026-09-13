import { Github, Zap } from "lucide-react";

export const workProfiles = [
  {
    profileName: "GitHub",
    className: "bg-gray-900 text-white hover:bg-gray-800",
    icon: <Github size={18} />,
    link: "https://github.com/sanju1098",
  },
  {
    profileName: "Stackblitz",
    className: "bg-orange-500 text-white hover:bg-orange-600",
    icon: <Zap size={18} />,
    link: "https://stackblitz.com/@sanju1098",
  },
];

export const projects = [
  {
    name: "Real-Time Chat Application",
    subtitle: "Scalable real-time messaging platform",
    live: "",
    repo: "https://github.com/sanju1098/real-time-chat-fullstack",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788884254/d02d136f-9bbb-4796-bbe6-565df5af1fef.png",
        alt: "Chat App - Home Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788883859/1097f58c-c84d-4b71-928a-b6a32a61a7fe.png",
        alt: "Chat App - Typing Message",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788883727/770a20f4-555a-4b71-81e0-c9922dff106d.png",
        alt: "Chat App - Login Page",
      },
    ],
    description:
      "Full-stack real-time chat application supporting 1:1 and group conversations with instant messaging, typing indicators, online presence, delivery and read receipts, JWT authentication, rate limiting, and Redis-powered horizontal Socket.io scaling.",
    category: ["Full-Stack", "Node.js", "Express", "Socket.io"],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose",
      "Redis",
      "JWT",
      "Docker",
      "Github Actions",
    ],
  },
  {
    name: "PromptStack",
    subtitle: "AI prompt management platform",
    live: "https://prompt-stack-ai.vercel.app",
    repo: "https://github.com/sanju1098/prompt-stack",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788356136/4748e27c-79fc-4445-8e3e-a74ffb746137.png",
        alt: "PromptStack - Home Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788356205/45a3da00-6fda-4e67-b8cd-83e57382981b.png",
        alt: "PromptStack - Templates Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788356212/98ad5cc3-d2d7-47c0-9409-bc518313974d.png",
        alt: "PromptStack - Prompt Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788356344/1ae311e9-42e4-4ff5-9f08-7db6bc9defc6.png",
        alt: "PromptStack - Execute Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788356281/7391e485-e7f3-4d63-8ec8-9e2cbb4f856c.png",
        alt: "PromptStack - Help Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788356353/fe668853-a43d-4e26-ba56-51b4658650d5.png",
        alt: "PromptStack - API Docs",
      },
    ],
    description:
      "Full-stack AI prompt management platform to create, organize, search, test and reuse prompt templates with dynamic variables, a template marketplace, workspace analytics and an interactive playground powered by Gemini and Groq.",
    category: ["Full-Stack", "AI", "Next.js"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "Mongoose",
      "Gemini",
      "Groq",
    ],
  },
  {
    name: "Incident Management System",
    subtitle: "Production-ready incident management API",
    live: "",
    repo: "https://github.com/sanju1098/incident-management-system",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788337601/f34b4e34-d9bd-4d0e-98f4-4c696aabf54c.png",
        alt: "Incident Management System API",
      },
    ],
    description:
      "Production-ready backend API for incident management with JWT authentication, refresh tokens, role-based access control, user and team management, secure file uploads, validation, and protected REST endpoints.",
    category: ["Backend", "Node.js", "Express"],
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Zod",
      "Cloudinary",
      "REST APIs",
    ],
  },
  {
    name: "Next Auth App",
    subtitle: "Full-stack authentication demo with NextAuth & MongoDB",
    live: "",
    repo: "https://github.com/sanju1098/next-auth-app",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788357963/1f1aaf19-c305-40c3-912a-7069767c98fe.png",
        alt: "Next Auth App",
      },
    ],
    description:
      "A small Next.js application demonstrating authentication with NextAuth (email/password and credentials providers) and MongoDB via Mongoose, including register, login, profile editing, and a protected dashboard.",
    stack: [
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "bcryptjs",
    ],
  },
  {
    name: "AstraMind",
    subtitle: "AI-powered document intelligence platform",
    live: "https://astramindai.lovable.app/",
    repo: "https://github.com/sanju1098/astramindai",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788350250/7a459e23-bf20-4294-8e72-e3d15facc20a.png",
        alt: "AstraMind - Home Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788350277/4bca6083-b47b-46bd-ac4a-f2cc0f255b5d.png",
        alt: "AstraMind - Login Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788350279/72b0a05d-631b-4411-884d-9ce0bccd334b.png",
        alt: "AstraMind - About Page",
      },
    ],
    description:
      "AI-powered document intelligence platform that lets users upload PDFs, chat with their content, search contextually, and receive sourced answers using RAG and vector embeddings.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Framer Motion",
      "PostgreSQL",
      "RAG",
      "Vector Embeddings",
    ],
  },
  {
    name: "Chatuuu",
    subtitle: "AI conversational chat platform",
    live: "https://chatuuu-ai.vercel.app/",
    repo: "https://github.com/sanju1098/chatuuu",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788349425/0d06a8bd-2286-46c0-b192-e13f67aa6de1.png",
        alt: "Chatuuu UI - Home Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788349571/27f392ad-1075-46f6-9d06-e724c221fc29.png",
        alt: "Chatuuu UI - Response Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788349672/41daaf08-0a1e-4412-817a-d66fcafdf8de.png",
        alt: "Chatuuu UI - Response Loading State",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788349740/987e45f1-45b8-46f9-9fd5-c91fcf6dbed6.png",
        alt: "Chatuuu UI - Code Response",
      },
    ],
    description:
      "Lightweight AI chat application with streaming responses, file and image attachments, model selection, reasoning and source displays, and reusable conversational UI components.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI SDK",
      "Radix UI",
      "Lucide React",
    ],
  },
  {
    name: "AI Studio Verse",
    subtitle: "Multi-modal AI workspace",
    live: "https://ai-studio-verse.vercel.app/",
    repo: "https://github.com/sanju1098/ai-studio-verse",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788350517/7a27b3d6-2391-4595-bc8b-dd44e9614133.png",
        alt: "AI Studio Verse - Home Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788350523/ee96cb3f-bae5-49f6-8bf4-f735d612d92a.png",
        alt: "AI Studio Verse - Text Generator Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788350650/05d94cec-1a22-4903-ad3e-4917951f88d2.png",
        alt: "AI Studio Verse - Template Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788350552/6cfd2b16-0829-4df4-8952-3d16a4c9ff0f.png",
        alt: "AI Studio Verse - Image Analyzer Page",
      },
    ],
    description:
      "AI-powered workspace combining text generation, image analysis, and interactive chat capabilities in a responsive interface powered by the Gemini API.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Gemini API",
      "Vite",
    ],
  },
  {
    name: "TravelGenie.AI",
    subtitle: "AI-powered travel itinerary planner",
    live: "https://travel-genie-ai-gem.vercel.app/",
    repo: "https://github.com/sanju1098/travel-genie-ai",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788351407/0c898b44-de3f-4e9c-af81-b33f39b0d40e.png",
        alt: "TravelGenie - Home Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788351465/347aa602-cd3a-48c9-a6a0-bb3d095c0d82.png",
        alt: "TravelGenie - Plan Form",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788351518/e19d5b83-8130-4be4-9c8e-5b0d76d9f141.png",
        alt: "TravelGenie - Plan Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788351510/d9b65b26-ee8e-4078-be65-226f89fcaed3.png",
        alt: "TravelGenie - Itinerary Page",
      },
    ],
    description:
      "AI-powered travel planning application that generates personalized itineraries based on destination, dates, budget, interests, and trip type using Google Gemini.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "Tailwind CSS",
      "React Query",
      "Gemini API",
    ],
  },
  {
    name: "BookTheShow",
    subtitle: "Movie and theater ticket booking platform",
    live: "https://booktheshow.vercel.app/",
    repo: "https://github.com/sanju1098/booktheshow",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788352146/cb89172a-0080-4bb6-bf45-2563d01e2d0e.png",
        alt: "BookTheShow - Home Page",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788352160/bef2d66b-37dc-47d3-ba50-8457a2f49080.png",
        alt: "BookTheShow - Booking Page",
      },
    ],
    description:
      "Responsive movie ticket booking platform for discovering movies and theaters across multiple cities and languages, with authentication, seat booking, wishlists, QR-based bookings, and booking history.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "SCSS",
      "Firebase",
      "Firebase Auth",
      "shadcn/ui",
    ],
  },
  {
    name: "sleep-with-delay",
    subtitle: "TypeScript async utility package",
    live: "https://www.npmjs.com/package/sleep-with-delay",
    repo: "https://github.com/sanju1098/sleep-with-delay",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1788353523/71ba34df-b778-4973-90ab-4527badaad22.png",
        alt: "sleep-with-delay NPM package",
      },
    ],
    description:
      "Lightweight TypeScript utility package providing sleep and delayed function execution helpers for testing, animations, asynchronous workflows, and controlled execution timing.",
    stack: ["TypeScript", "JavaScript", "Node.js", "NPM", "Rollup"],
  },
  {
    name: "Weather Forecast",
    subtitle: "Real-time weather dashboard",
    live: "https://weather-forecast-vui.vercel.app/",
    repo: "https://github.com/sanju1098/React-Weather",
    images: [
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1789275534/0320a567-de7b-4954-8c6e-b1d69945fbc1.png",
        alt: "WeatherForecast1",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1789275677/8d680d3e-e397-41df-96c2-4669b5dfd306.png",
        alt: "WeatherForecast2",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1789275715/ca51b830-0d7f-47b2-9101-76be863e1111.png",
        alt: "WeatherForecast3",
      },
      {
        src: "https://res.cloudinary.com/dwsalphhy/image/upload/v1789275855/1b074e63-e36a-4b2e-8566-01583a5b092e.png",
        alt: "WeatherForecast4",
      },
    ],
    description:
      "Accessible, feature-rich weather dashboard with current conditions, a 5-day forecast, and air quality monitoring (AQI, PM2.5, PM10, NO₂, O₃), backed by the OpenWeather API.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Material-UI",
      "Tailwind CSS",
      "TanStack Query",
    ],
  },
];
