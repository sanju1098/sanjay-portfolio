import { Loader as LoadIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div
        className="grid-field pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-96 w-[min(800px,90%)] -translate-y-1/2 animate-[ambient-breathe_6s_ease-in-out_infinite] rounded-full bg-accent/15 blur-3xl motion-reduce:animate-none"
        aria-hidden
      />

      <div className="relative z-10 text-center">
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-xl border border-border bg-panel shadow-panel ring-1 ring-accent/20">
          <div
            className="absolute inset-0 animate-[spin_1.2s_linear_infinite] rounded-xl border-2 border-transparent border-t-accent border-r-accent/50 motion-reduce:animate-none"
            aria-hidden
          />
          <div
            className="absolute inset-2 animate-[spin_1.2s_linear_infinite_reverse] rounded-xl border-2 border-transparent border-b-accent border-l-accent/50 motion-reduce:animate-none"
            aria-hidden
          />

          <LoadIcon
            className="relative z-10 animate-spin text-accent"
            size={32}
            aria-hidden
          />
        </div>

        <p className="label-mono">Loading</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-4xl">
          Preparing the workspace
        </h2>
        <p className="mx-auto mt-3 max-w-xs text-sm text-muted-foreground">
          Please wait a moment while the portfolio loads.
        </p>

        <div className="mx-auto mt-8 h-2 w-72 overflow-hidden rounded-full bg-secondary">
          <div className="flex h-full gap-1">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div
                key={i}
                className="flex-1 animate-[progress_1.2s_ease-in-out_infinite] bg-accent/20 motion-reduce:animate-none"
                style={{ animationDelay: `${i * 0.15}s` }}
                aria-hidden
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span
              className="size-1.5 animate-pulse rounded-full bg-accent motion-reduce:animate-none"
              aria-hidden
            />
            Initializing components
          </span>
          <span aria-hidden>/</span>
          <span>Fetching data</span>
          <span aria-hidden>/</span>
          <span>Rendering UI</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
