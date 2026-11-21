import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useRef } from "react";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import ErrorBoundary from "@/layout/ErrorBoundary";
import Loader from "@/layout/Loader";
import ScrollToTop from "@/layout/ScrollToTop";

const Index = lazy(() => import("../pages/Index"));
const Projects = lazy(() => import("../pages/Projects"));
const Skills = lazy(() => import("../pages/Skills"));
const Experience = lazy(() => import("../pages/Experience"));
const NotFound = lazy(() => import("../pages/NotFound"));
const About = lazy(() => import("../pages/About"));

const SITE_URL = "https://sanjaysr.vercel.app";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Sanjay Kumar S R | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer building accessible React, TypeScript, and Next.js experiences, design systems, and frontend features.",
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
};

const setMeta = (selector: string, value: string, attribute = "content") => {
  document.querySelector(selector)?.setAttribute(attribute, value);
};

const Layout = () => {
  const { pathname, hash } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const known = pageMetadata[path];
    const metadata = known ?? {
      title: "Page not found | Sanjay.SR",
      description: "The requested page could not be found.",
    };
    const pageUrl = `${SITE_URL}${path}`;

    document.title = metadata.title;
    setMeta('meta[name="description"]', metadata.description);
    setMeta('meta[property="og:title"]', metadata.title);
    setMeta('meta[property="og:description"]', metadata.description);
    setMeta('meta[property="og:url"]', pageUrl);
    setMeta('meta[name="twitter:title"]', metadata.title);
    setMeta('meta[name="twitter:description"]', metadata.description);
    setMeta('meta[name="twitter:url"]', pageUrl);
    setMeta('link[rel="canonical"]', pageUrl, "href");
    setMeta(
      'meta[name="robots"]',
      known ? "index, follow" : "noindex, nofollow",
    );
  }, [pathname]);

  // Move focus to <main> after in-app navigation (not on first load)

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    if (hash) return; // ScrollToTop focuses the hash target instead
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return (
    <ErrorBoundary>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground focus:outline-2 focus:outline-offset-2 focus:outline-accent">
        Skip to main content
      </a>
      <Header />
      <ScrollToTop />
      <main id="main" ref={mainRef} tabIndex={0} className="outline-none">
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
