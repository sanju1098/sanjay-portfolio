import { ArrowLeft, Home, Search } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-20">
      <div
        className="pointer-events-none absolute inset-0 grid-field opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 glow-accent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-2xl rounded-md border border-border bg-panel p-8 text-center shadow-panel ring-1 ring-border/80 md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-sm border border-border bg-secondary text-accent">
          <Search className="size-9" aria-hidden />
        </div>

        <p className="label-mono mt-6">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-gradient md:text-6xl">
          Page missing
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          The route you tried to open no longer exists or was moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110">
            <Home className="size-4" aria-hidden />
            Back home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted">
            <ArrowLeft className="size-4" aria-hidden />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
