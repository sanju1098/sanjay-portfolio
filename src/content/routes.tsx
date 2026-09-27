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

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      "/": "Sanjay.SR | Portfolio",
      "/about": "About | Sanjay.SR",
      "/projects": "Projects | Sanjay.SR",
      "/skills": "Skills | Sanjay.SR",
      "/experience": "Experience | Sanjay.SR",
      "/contact": "Contact | Sanjay.SR",
    };

    document.title = pageTitles[location.pathname] || "Page | Sanjay.SR";
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
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
