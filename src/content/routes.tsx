import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import ErrorBoundary from "@/layout/ErrorBoundary";
import Loader from "@/layout/Loader";
import ScrollToTop from "@/layout/ScrollToTop";

const Index = lazy(() => import("../pages/Index"));
const Projects = lazy(() => import("../pages/Projects"));
const Skills = lazy(() => import("../pages/Skills"));
const Experience = lazy(() => import("../pages/Experience"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));
const About = lazy(() => import("../pages/About"));

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Sanjay.SR | Frontend Engineer",
    description:
      "Frontend Engineer building accessible React, TypeScript, and Next.js experiences, design systems, and frontend features.",
  },
  "/about": {
    title: "About | Sanjay.SR",
    description:
      "Learn about Sanjay's frontend engineering experience across enterprise and airline products, design systems, and AI-enabled applications.",
  },
  "/projects": {
    title: "Projects | Sanjay.SR",
    description:
      "Explore Sanjay's frontend projects, product interfaces, design work, and selected full-stack applications.",
  },
  "/skills": {
    title: "Skills | Sanjay.SR",
    description:
      "Frontend skills in React, Next.js, TypeScript, design systems, accessibility, testing, performance, and supporting backend technologies.",
  },
  "/experience": {
    title: "Experience | Sanjay.SR",
    description:
      "Frontend engineering experience building enterprise, airline, and product interfaces with React, TypeScript, and modern web technologies.",
  },
  "/contact": {
    title: "Contact | Sanjay.SR",
    description:
      "Contact Sanjay about senior frontend engineering roles, product work, or full-stack collaborations.",
  },
};

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] ?? {
      title: "Page not found | Sanjay.SR",
      description: "The requested page could not be found.",
    };
    const pageUrl = `${window.location.origin}${location.pathname}`;

    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", metadata.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", metadata.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", pageUrl);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", metadata.title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", metadata.description);
    document
      .querySelector('meta[name="twitter:url"]')
      ?.setAttribute("content", pageUrl);
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground focus:outline-2 focus:outline-offset-2 focus:outline-accent">
        Skip to main content
      </a>
      <Header />
      <ScrollToTop />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </ErrorBoundary>
  );
};
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
