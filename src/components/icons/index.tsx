import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiShadcnui,
  SiReactquery,
  SiTailwindcss,
  SiStyledcomponents,
  SiGoogle,
  SiLighthouse,
  SiStorybook,
  SiJest,
  SiEslint,
  SiPrettier,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiMongodb,
  SiNginx,
  SiNpm,
  SiPostman,
  SiVite,
  SiWebpack,
  SiYarn,
  SiPnpm,
  SiRedis,
  SiExpress,
  SiGithubcopilot,
} from "react-icons/si";
import {
  FaAssistiveListeningSystems,
  FaCss3,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";
import { TbApi, TbGitFork } from "react-icons/tb";
import { MdSpeed } from "react-icons/md";
import { GiTestTubes } from "react-icons/gi";
import { Accessible } from "@mui/icons-material";
import { ClipboardList, Package, ShieldCheck } from "lucide-react";

export const JavaScriptIcon = (props: any) => (
  <SiJavascript size={35} color="#F7DF1E" {...props} />
);
export const TypeScriptIcon = (props: any) => (
  <SiTypescript size={35} color="#3178C6" {...props} />
);
export const HTMLIcon = (props: any) => (
  <SiHtml5 size={35} color="#E34F26" {...props} />
);
export const CSSIcon = (props: any) => (
  <FaCss3 size={35} color="#1572B6" {...props} />
);

export const ReactIcon = (props: any) => (
  <SiReact size={35} color="#61DAFB" {...props} />
);
export const NextJSIcon = (props: any) => (
  <SiNextdotjs
    size={35}
    color="currentColor"
    className="text-black dark:text-white"
    {...props}
  />
);
export const ReduxIcon = (props: any) => (
  <SiRedux size={35} color="#764ABC" {...props} />
);
export const ReactQueryIcon = (props: any) => (
  <SiReactquery size={35} color="#FF4154" {...props} />
);

export const TailwindIcon = (props: any) => (
  <SiTailwindcss size={35} color="#06B6D4" {...props} />
);
export const ShadcnUIIcon = (props: any) => (
  <SiShadcnui
    size={35}
    color="currentColor"
    className="text-black dark:text-white"
    {...props}
  />
);
export const MaterialUIIcon = (props: any) => (
  <SiMui size={35} color="#007FFF" {...props} />
);
export const SassIcon = (props: any) => (
  <FaSass size={35} color="#CF649A" {...props} />
);
export const StyledComponentsIcon = (props: any) => (
  <SiStyledcomponents size={40} color="#DB7093" {...props} />
);

export const NvdaIcon = (props: any) => (
  <FaAssistiveListeningSystems size={35} color="#DB7093" {...props} />
);
export const SEOIcon = (props: any) => (
  <SiGoogle size={35} color="#4285F4" {...props} />
);
export const LazyLoadingIcon = (props: any) => (
  <CgLoadbarDoc size={35} color="#FACC15" {...props} />
);
export const CodeSplitIcon = (props: any) => (
  <TbGitFork size={35} color="#6366F1" {...props} />
);
export const WebVitalsIcon = (props: any) => (
  <MdSpeed size={35} color="#0D9488" {...props} />
);
export const LightHouseIcon = (props: any) => (
  <SiLighthouse size={35} color="#EA4335" {...props} />
);

export const StorybookIcon = (props: any) => (
  <SiStorybook size={35} color="#FF4785" {...props} />
);
export const JestIcon = (props: any) => (
  <SiJest size={35} color="#99425B" {...props} />
);
export const ReactTestingLibraryIcon = (props: any) => (
  <GiTestTubes size={35} color="#E11D48" {...props} />
);
export const PrettierIcon = (props: any) => (
  <SiPrettier size={35} color="#F7B93E" {...props} />
);
export const ESLintIcon = (props: any) => (
  <SiEslint size={35} color="#4B32C3" {...props} />
);

export const ViteIcon = (props: any) => (
  <SiVite size={35} color="#646CFF" {...props} />
);
export const WebpackIcon = (props: any) => (
  <SiWebpack size={35} color="#8DD6F9" {...props} />
);
export const DockerIcon = (props: any) => (
  <SiDocker size={35} color="#2496ED" {...props} />
);
export const NginxIcon = (props: any) => (
  <SiNginx size={35} color="#009639" {...props} />
);

export const RestApiIcon = (props: any) => (
  <TbApi size={35} color="#0EA5E9" {...props} />
);
export const MongoDBIcon = (props: any) => (
  <SiMongodb size={35} color="#47A248" {...props} />
);
export const PostmanIcon = (props: any) => (
  <SiPostman size={35} color="#FF6C37" {...props} />
);
export const FigmaIcon = (props: any) => (
  <SiFigma size={35} color="#F24E1E" {...props} />
);

export const GitIcon = (props: any) => (
  <SiGit size={35} color="#F05032" {...props} />
);
export const GitHubActionsIcon = (props: any) => (
  <SiGithubactions size={35} color="#2088FF" {...props} />
);
export const NpmIcon = (props: any) => (
  <SiNpm size={35} color="#CB3837" {...props} />
);
export const YarnIcon = (props: any) => (
  <SiYarn size={35} color="#2C8EBB" {...props} />
);
export const PnpmIcon = (props: any) => (
  <SiPnpm size={35} color="#F69220" {...props} />
);
export const RedisIcon = (props: any) => (
  <SiRedis size={35} color="#DC382D" {...props} />
);
export const NodeJSIcon = (props: any) => (
  <FaNodeJs size={35} color="#639a58" {...props} />
);
export const ExpressIcon = (props: any) => <SiExpress size={35} {...props} />;

export const ReactHookFormIcon = (props: any) => (
  <ClipboardList size={35} color="#ec5990" {...props} />
);
export const ZodIcon = (props: any) => (
  <ShieldCheck size={35} color="#284d7f" {...props} />
);
export const RollupIcon = (props: any) => (
  <Package size={35} color="#dc3336" {...props} />
);
export const AccessibilityIcon = (props: any) => (
  <Accessible sx={{ fontSize: "35px", color: "#0f5f9f" }} {...props} />
);
export const ClaudeIcon = (props: any) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={35}
    height={35}
    fill="#D97757"
    {...props}>
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
);
export const CopilotIcon = (props: any) => (
  <SiGithubcopilot color="#6841c9" size={35} {...props} />
);
export const AISDKIcon = (props: any) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 146 40"
    width={55}
    height={35}
    fill="currentColor"
    {...props}>
    <path d="M37.8037 40H30.1416L26.8174 30.5361H10.9863L7.66211 40H0L14.4229 0H23.3809L37.8037 40ZM61.5654 6.36621H55.1426V33.6338H61.9033V40H41.002V33.6338H47.8184V6.36621H41.3398V0H61.5654V6.36621ZM125.706 0C136.751 0.000239135 145.706 8.95466 145.706 20C145.706 31.0456 136.752 39.9998 125.706 40H88.5625C77.5169 39.9999 68.5625 31.0456 68.5625 20C68.5627 8.95458 77.5171 0.000120607 88.5625 0H125.706ZM88.5625 4.28613C79.884 4.28625 72.8489 11.3215 72.8486 20C72.8486 28.6787 79.8838 35.7147 88.5625 35.7148H125.706C134.385 35.7146 141.42 28.6786 141.42 20C141.42 11.3216 134.384 4.28637 125.706 4.28613H88.5625ZM89.0977 9.99707C93.3792 9.99726 96.3059 12.6258 96.7666 16.501L92.6475 16.7178C92.4306 14.6855 91.0215 13.4123 88.9893 13.4121C87.2007 13.4121 85.9266 14.333 86.0078 15.7422C86.062 17.3682 87.959 17.9099 90.0186 18.4248C94.3275 19.3733 97.0645 21.217 97.0645 24.2793C97.0642 27.9376 93.8395 29.9971 89.6934 29.9971C85.005 29.9971 81.6987 27.3951 81.4277 23.3301L85.5742 23.1406C85.9265 25.2002 87.3899 26.5557 89.8018 26.5557C91.6446 26.5557 92.8914 25.8233 92.8643 24.4141C92.837 23.0051 91.6445 22.1916 88.6367 21.46C84.4635 20.4573 81.7805 18.7777 81.7803 15.6885C81.7803 12.1925 84.7074 9.99707 89.0977 9.99707ZM105.984 10.4307C112.217 10.4307 115.714 13.8994 115.714 20.0781C115.714 26.2298 112.272 29.6717 106.147 29.6719H99.3447V10.4307H105.984ZM122.062 18.832L129.055 10.4307H133.852L126.778 18.9131L134.285 29.6719H129.597L124.068 21.6768L122.062 24.0078V29.6719H117.757V10.4307H122.062V18.832ZM103.464 26.2031H105.984C109.724 26.2031 111.513 24.2242 111.513 20.0508C111.513 15.8776 109.724 13.8994 105.984 13.8994H103.464V26.2031ZM13.127 24.2822H24.6768L18.9297 7.38086L13.127 24.2822Z" />
  </svg>
);
