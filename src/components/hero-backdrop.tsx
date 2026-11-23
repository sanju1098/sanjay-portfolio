import type { FC } from "react";

const glyphBase =
  "absolute hidden select-none font-mono font-bold leading-none text-transparent lg:block [-webkit-text-stroke:1.5px_color-mix(in_srgb,var(--signal)_28%,transparent)] [text-shadow:0_0_48px_color-mix(in_srgb,var(--signal)_22%,transparent)]";

export const HeroBackdrop: FC = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden>
    <div className="absolute top-[42%] left-1/2 h-56 w-[min(1100px,120%)] -translate-x-1/2 -translate-y-1/2 animate-[ambient-breathe_8s_ease-in-out_infinite] rounded-full bg-accent/25 blur-3xl motion-reduce:animate-none" />

    <div className="absolute top-[42%] -right-full -left-full h-150 origin-top transform-[perspective(900px)_rotateX(72deg)] bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] mask-[linear-gradient(to_bottom,transparent_0%,#000_18%,#000_60%,transparent_100%)] bg-size-[64px_64px] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_18%,#000_60%,transparent_100%)]" />

    <span className={`${glyphBase} top-[4%] right-[-2%] text-[260px]`}>
      {"{ }"}
    </span>

    <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
  </div>
);
