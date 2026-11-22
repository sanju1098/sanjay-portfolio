import {
  ArrowLeft,
  Home,
  Terminal,
  Code,
  Database,
  Layers,
  FileQuestion,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-20">
      {/* Background grid */}
      <div
        className="grid-field pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />

      {/* Ambient glow */}
      <div
        className="animate-ambient-breathe pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-96 w-[min(800px,90%)] -translate-y-1/2 rounded-full bg-accent/15 blur-3xl motion-reduce:animate-none"
        aria-hidden
      />

      {/* Floating code particles - similar to loader */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { top: "15%", left: "10%", delay: "0s", icon: Terminal },
          { top: "20%", right: "12%", delay: "0.5s", icon: Code },
          { bottom: "25%", left: "8%", delay: "1s", icon: Database },
          { bottom: "18%", right: "15%", delay: "1.5s", icon: Layers },
        ].map(({ top, left, right, bottom, delay, icon: Icon }) => (
          <span
            key={Icon.displayName || Icon.name}
            className={`absolute ${top ? `top-[${top}]` : `bottom-[${bottom}]`} ${left ? `left-[${left}]` : `right-[${right}]`} animate-float-slow motion-reduce:animate-none`}
            style={{ animationDelay: delay }}>
            <span className="flex size-10 items-center justify-center rounded-xl border border-border/50 bg-background/80 text-accent/60 shadow-panel backdrop-blur-sm">
              <Icon className="size-5" aria-hidden />
            </span>
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Animated 404 icon with terminal styling */}
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-xl border border-border bg-panel shadow-panel ring-1 ring-accent/20">
          {/* Rotating border */}
          <div
            className="animate-spin-slow absolute inset-0 rounded-xl border-2 border-transparent border-t-accent border-r-accent/50 motion-reduce:animate-none"
            aria-hidden
          />
          <div
            className="animate-spin-slow-reverse absolute inset-2 rounded-xl border-2 border-transparent border-b-accent border-l-accent/50 motion-reduce:animate-none"
            aria-hidden
          />

          <FileQuestion
            className="relative z-10 text-accent"
            size={36}
            aria-hidden
          />
        </div>

        <p className="label-mono">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-card-foreground md:text-6xl">
          Page missing
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground md:text-lg">
          The route you tried to open no longer exists or was moved.
        </p>

        {/* Terminal-style error message */}
        <div className="mx-auto mt-8 max-w-md rounded-lg border border-border bg-background p-4 text-left font-mono text-sm text-muted-foreground">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-red-500/60" />
              <span className="size-2.5 rounded-full bg-yellow-500/60" />
              <span className="size-2.5 rounded-full bg-green-500/60" />
            </span>
            <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
              error.log
            </span>
          </div>
          <pre className="text-xs leading-relaxed">
            {/* {`$ router.navigate("${location.pathname}")\n✗ Route not found\n  at AppRouter.matchRoutes\n  at LazyRoute.load\n\nHint: Check the URL or try one of the links below.`} */}
            Check the URL or try one of the links below
          </pre>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="default" className="group">
            <Link to="/">
              <Home
                className="size-4 transition-transform group-hover:-translate-x-0.5"
                aria-hidden
              />
              Back home
            </Link>
          </Button>

          <Button asChild variant="secondary" className="group">
            <button type="button" onClick={() => window.history.back()}>
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-1"
                aria-hidden
              />
              Go back
            </button>
          </Button>
        </div>

        {/* Quick navigation */}
        <div className="mt-10 border-t border-border pt-8">
          <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            Quick links
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: "Experience", href: "/experience" },
              { name: "Skills", href: "/skills" },
              { name: "About", href: "/about" },
            ].map(item => (
              <Link
                key={item.name}
                to={item.href}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-panel/50 px-3 py-1.5 font-mono text-xs tracking-wide text-muted-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
