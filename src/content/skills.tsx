import {
  AISDKIcon,
  CodeSplitIcon,
  CSSIcon,
  DockerIcon,
  ESLintIcon,
  FigmaIcon,
  GitIcon,
  GitHubActionsIcon,
  HTMLIcon,
  JavaScriptIcon,
  JestIcon,
  LazyLoadingIcon,
  LightHouseIcon,
  MaterialUIIcon,
  MongoDBIcon,
  NextJSIcon,
  NginxIcon,
  NpmIcon,
  NvdaIcon,
  PnpmIcon,
  PostmanIcon,
  PrettierIcon,
  ReactIcon,
  ReactQueryIcon,
  ReactTestingLibraryIcon,
  RedisIcon,
  ReduxIcon,
  RestApiIcon,
  SassIcon,
  SEOIcon,
  ShadcnUIIcon,
  StorybookIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TypeScriptIcon,
  ViteIcon,
  WebpackIcon,
  WebVitalsIcon,
  YarnIcon,
  NodeJSIcon,
  ExpressIcon,
} from "@/components/icons";
import {
  Code2,
  Globe,
  Server,
  TerminalSquare,
  FlaskConical,
  Bot,
} from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    description:
      "Primary expertise: Building modern, performant, and accessible user interfaces with React ecosystem and design systems",
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextJSIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
      { name: "HTML5", icon: <HTMLIcon /> },
      { name: "CSS3", icon: <CSSIcon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "SASS", icon: <SassIcon /> },
      { name: "ShadCN UI", icon: <ShadcnUIIcon /> },
      { name: "Material UI", icon: <MaterialUIIcon /> },
      { name: "Styled Components", icon: <StyledComponentsIcon /> },
      { name: "Redux Toolkit", icon: <ReduxIcon /> },
      { name: "TanStack Query", icon: <ReactQueryIcon /> },
      { name: "Vite", icon: <ViteIcon /> },
      { name: "Webpack", icon: <WebpackIcon /> },
    ],
  },

  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-green-600" />,
    description:
      "Secondary expertise: Server-side development with Node.js, API design, database management, and infrastructure",
    skills: [
      { name: "Node.js", icon: <NodeJSIcon /> },
      { name: "Express.js", icon: <ExpressIcon /> },
      { name: "REST APIs", icon: <RestApiIcon /> },
      { name: "MongoDB", icon: <MongoDBIcon /> },
      { name: "Redis", icon: <RedisIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
      { name: "NGINX", icon: <NginxIcon /> },
    ],
  },

  {
    title: "AI & Development Tools",
    icon: <Code2 className="w-8 h-8 text-purple-500" />,
    description:
      "AI-powered development with modern LLM integrations and intelligent coding assistants",
    skills: [
      { name: "Vercel AI SDK", icon: <AISDKIcon /> },
      {
        name: "GitHub Copilot",
        icon: <Bot className="w-6 h-6 text-purple-600" />,
      },
      {
        name: "Claude AI",
        icon: (
          <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            C
          </div>
        ),
      },
      {
        name: "Cursor AI",
        icon: (
          <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            ⚡
          </div>
        ),
      },
    ],
  },

  {
    title: "Quality & Performance",
    icon: <FlaskConical className="w-8 h-8 text-indigo-500" />,
    description:
      "Testing frameworks, accessibility standards, and performance optimization tools",
    skills: [
      { name: "Jest", icon: <JestIcon /> },
      { name: "React Testing Library", icon: <ReactTestingLibraryIcon /> },
      { name: "Storybook", icon: <StorybookIcon /> },
      { name: "ESLint", icon: <ESLintIcon /> },
      { name: "Prettier", icon: <PrettierIcon /> },
      { name: "Lighthouse", icon: <LightHouseIcon /> },
      { name: "Web Vitals", icon: <WebVitalsIcon /> },
      { name: "SEO", icon: <SEOIcon /> },
      { name: "Lazy Loading", icon: <LazyLoadingIcon /> },
      { name: "Code Splitting", icon: <CodeSplitIcon /> },
      {
        name: "WCAG A11Y",
        icon: (
          <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
            A11Y
          </div>
        ),
      },
      { name: "NVDA Screen Reader", icon: <NvdaIcon /> },
    ],
  },

  {
    title: "Developer Tools",
    icon: <TerminalSquare className="w-8 h-8 text-yellow-500" />,
    description:
      "Version control, package managers, design tools, and productivity platforms",
    skills: [
      { name: "Git & GitHub", icon: <GitIcon /> },
      { name: "GitHub Actions", icon: <GitHubActionsIcon /> },
      { name: "Npm", icon: <NpmIcon /> },
      { name: "Yarn", icon: <YarnIcon /> },
      { name: "Pnpm", icon: <PnpmIcon /> },
      { name: "Postman", icon: <PostmanIcon /> },
      { name: "Figma", icon: <FigmaIcon /> },
    ],
  },
];
