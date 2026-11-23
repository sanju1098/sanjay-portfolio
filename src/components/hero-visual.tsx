import type { FC } from "react";
import { orbitIcons } from "@/content/home";
import { Check, Database, Keyboard } from "lucide-react";
import { ClaudeIcon } from "./icons/brand-icons";

const drift = {
  a: "animate-[float_8s_ease-in-out_infinite] motion-reduce:animate-none",
  b: "animate-[float_6s_ease-in-out_-2s_infinite] motion-reduce:animate-none",
  c: "animate-[float_7s_ease-in-out_-4s_infinite] motion-reduce:animate-none",
  d: "animate-[float_9s_ease-in-out_-1s_infinite] motion-reduce:animate-none",
  e: "animate-[float_5s_ease-in-out_-3s_infinite] motion-reduce:animate-none",
};

const keycaps = [
  { label: "TS", motion: drift.a, accent: true },
  { label: "JS", motion: drift.e, accent: false },
];

const toolBadges = [
  { icon: ClaudeIcon, position: "-left-10 top-[20%]", motion: drift.a },
  { icon: Keyboard, position: "-left-7 top-[54%]", motion: drift.b },
  { icon: Database, position: "-right-1 top-[69%]", motion: drift.d },
];

const OrbitRing: FC = () => (
  <div className="absolute top-[44%] left-1/2 aspect-square w-[104%] -translate-x-1/2 -translate-y-1/2">
    <div className="relative size-full animate-[spin_70s_linear_infinite] rounded-full border border-dashed border-accent/30 motion-reduce:animate-none">
      {orbitIcons.map(({ icon: Icon, position }) => (
        <span key={position} className={`absolute ${position}`}>
          <span className="flex size-11 animate-[spin_70s_linear_infinite_reverse] items-center justify-center rounded-xl border border-border bg-panel text-accent shadow-panel motion-reduce:animate-none">
            <Icon className="size-5" aria-hidden />
          </span>
        </span>
      ))}
    </div>
  </div>
);

const UiPrimitives: FC = () => (
  <div className="absolute top-1 left-[2%] flex items-center gap-4">
    <span className={drift.b}>
      <span className="flex h-6 w-11 items-center rounded-full bg-accent p-0.5">
        <span className="ml-auto size-5 rounded-full bg-accent-foreground" />
      </span>
    </span>

    <span className={drift.d}>
      <span className="flex size-6 items-center justify-center rounded-md border-2 border-accent bg-accent/15 text-accent">
        <Check className="size-4" strokeWidth={3} aria-hidden />
      </span>
    </span>

    <span className={drift.a}>
      <span className="flex h-9 w-24 items-center rounded-md border border-border bg-background px-2.5 font-mono text-[11px] text-muted-foreground">
        name
        <span className="ml-0.5 h-4 w-0.5 animate-pulse bg-accent motion-reduce:animate-none" />
      </span>
    </span>

    <span className={drift.e}>
      <span className="relative block size-9 rounded-md border border-border bg-panel">
        <span className="absolute -inset-1.5 animate-pulse rounded-lg border-2 border-accent motion-reduce:animate-none" />
      </span>
    </span>
  </div>
);

const Keycaps: FC = () => (
  <div className="absolute right-0 bottom-2 flex items-end gap-2">
    {keycaps.map(({ label, motion, accent }) => (
      <span key={label} className={motion}>
        <span
          className={`flex h-12 min-w-12 items-center justify-center rounded-lg border bg-panel px-3 font-mono text-sm font-semibold ${
            accent
              ? "border-accent/50 text-accent shadow-[0_4px_0_0_var(--signal)]"
              : "border-card-foreground/20 text-card-foreground shadow-[0_4px_0_0_color-mix(in_srgb,var(--card-foreground)_22%,transparent)]"
          }`}>
          {label}
        </span>
      </span>
    ))}
  </div>
);

const WindowDots: FC = () => (
  <div className="flex items-center gap-1.5">
    <span className="size-2 rounded-full bg-muted-foreground/50" />
    <span className="size-2 rounded-full bg-muted-foreground/50" />
    <span className="size-2 rounded-full bg-accent" />
  </div>
);

export const HeroVisual: FC = () => {
  return (
    <div
      className="relative isolate mx-auto hidden w-full max-w-xl pt-16 pb-24 lg:block"
      aria-hidden>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <OrbitRing />
        <UiPrimitives />
        {toolBadges.map(({ icon: Icon, position, motion }) => (
          <span key={position} className={`absolute ${position} ${motion}`}>
            <span className="flex size-10 items-center justify-center rounded-full border border-accent/40 bg-background/70 text-accent backdrop-blur-sm">
              <Icon className="size-5" aria-hidden />
            </span>
          </span>
        ))}
        <Keycaps />
      </div>

      <div className="ml-[7%] w-[86%]">
        <div className="rounded-t-xl border border-border bg-panel p-2 shadow-panel ring-1 ring-accent/20">
          <div className="min-h-55 rounded-md border border-border bg-background">
            <div className="flex items-center gap-3 border-b border-border px-3 py-2">
              <WindowDots />
              <span className="font-mono text-[10px] text-muted-foreground">
                portfolio.tsx
              </span>
            </div>

            <div className="max-w-[52%] px-6 py-6">
              <p className="font-display text-lg leading-tight font-semibold text-card-foreground">
                Senior Frontend
              </p>
              <p className="font-display text-lg leading-tight font-semibold text-accent">
                Engineer
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Turning complex requirements into thoughtful digital experiences
                with modern web technologies.
              </p>
              <span className="mt-4 inline-block rounded border border-accent/40 px-2 py-1 font-mono text-[10px] text-accent">
                View projects
              </span>
            </div>
          </div>
        </div>
        <div className="-mx-4 h-3 rounded-b-2xl bg-muted ring-1 ring-border" />
      </div>

      <div className="absolute top-0 right-0 w-[48%] rounded-md border border-border bg-panel p-4 shadow-panel">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs text-card-foreground">
            experience.log
          </p>
          <span className="size-2 rounded-full bg-accent" />
        </div>

        <div className="mt-4">
          <p className="font-display text-4xl font-semibold text-accent">5+</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Years in software engineering
          </p>
        </div>

        <div className="my-4 border-t border-border" />

        <div className="space-y-3">
          <div>
            <p className="font-mono text-[10px] text-muted-foreground">
              CURRENT ROLE
            </p>
            <p className="mt-1 text-xs font-medium text-card-foreground">
              Senior Experience Engineer
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] text-muted-foreground">
              CORE SPECIALIZATION
            </p>
            <p className="mt-1 text-xs font-medium text-card-foreground">
              Frontend Engineering
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] text-muted-foreground">
              DEVELOPMENT
            </p>
            <p className="mt-1 text-xs font-medium text-card-foreground">
              Enterprise Web Applications
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[46%] rounded-md border border-border bg-panel p-4 font-mono text-[11px] leading-relaxed shadow-panel">
        <div className="mb-3 flex items-center justify-between">
          <WindowDots />
          <span className="text-[9px] text-muted-foreground">~/developer</span>
        </div>

        <p className="text-accent">$ ls technologies/</p>
        <p className="mb-3 pl-3 text-card-foreground">
          react nextjs typescript
        </p>

        <p className="text-accent">$ ls backend/</p>
        <p className="mb-3 pl-3 text-card-foreground">node express mongodb</p>

        <p className="text-accent">$ cat mindset.txt</p>
        <p className="pl-3 text-card-foreground">Learn. Build. Improve.</p>
      </div>
    </div>
  );
};
