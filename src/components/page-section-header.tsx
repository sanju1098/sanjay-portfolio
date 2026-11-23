import * as React from "react";
import { cn } from "@/lib/utils";
interface PagePageSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  heading: string;
  headingHighlight?: string;
  subtext?: string;
  number?: string;
  action?: React.ReactNode;
}

const PageSectionHeader = ({
  className,
  label,
  heading,
  headingHighlight,
  subtext,
  action,
  children,
  ...props
}: PagePageSectionHeaderProps) => (
  <div
    className={cn(
      "flex flex-col justify-between gap-5 md:flex-row md:items-end",
      className,
    )}
    {...props}>
    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        <div className="flex items-center gap-2">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            {label}
          </p>
        </div>
      </div>

      {heading && (
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
          {heading}
          {headingHighlight && (
            <span className="block text-accent">{headingHighlight}</span>
          )}
        </h2>
      )}
      {subtext && (
        <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtext}
        </p>
      )}
    </div>
    {action && <div className="md:flex-none">{action}</div>}
    {children}
  </div>
);

export { PageSectionHeader };
