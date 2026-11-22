import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable Card component with consistent styling
 * Replaces duplicate card patterns across pages
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive" | "panel";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hover = false,
      padding = "md",
      children,
      ...props
    },
    ref,
  ) => {
    const variants = {
      default: "rounded-2xl border border-border bg-panel",
      elevated: "rounded-2xl border border-border bg-panel shadow-panel",
      interactive:
        "rounded-2xl border border-border bg-panel transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0",
      panel: "rounded-2xl border border-border bg-panel/60",
    };

    const paddings = {
      none: "",
      sm: "p-4 sm:p-5",
      md: "p-5 sm:p-7",
      lg: "p-6 sm:p-8",
      xl: "p-7 md:p-10",
    };

    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          hover && variants.interactive,
          paddings[padding],
          className,
        )}
        {...props}>
        {children}
      </div>
    );
  },
);
Card.displayName = "Card";

/**
 * CardHeader - consistent header for cards
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  count?: string | React.ReactNode;
  icon?: React.ReactNode;
}

const CardHeader = ({
  className,
  title,
  subtitle,
  count,
  icon,
  children,
  ...props
}: CardHeaderProps) => (
  <div className={cn("flex flex-col gap-2", className)} {...props}>
    <div className="flex items-start justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        {icon && (
          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
            {icon}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="truncate font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {count && (
        <span className="shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground">
          {count}
        </span>
      )}
    </div>
    {children}
  </div>
);

/**
 * CardContent - consistent content wrapper
 */
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = ({ className, children, ...props }: CardContentProps) => (
  <div className={cn("mt-6", className)} {...props}>
    {children}
  </div>
);

/**
 * CardFooter - consistent footer for cards
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = ({ className, children, ...props }: CardFooterProps) => (
  <div
    className={cn("mt-auto border-t border-border pt-6", className)}
    {...props}>
    {children}
  </div>
);

/**
 * AccentLine - animated top border for interactive cards
 */
interface AccentLineProps extends React.HTMLAttributes<HTMLSpanElement> {}

const AccentLine = ({ className, ...props }: AccentLineProps) => (
  <span
    className={cn(
      "pointer-events-none absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-focus-within:scale-x-100 group-hover:scale-x-100 motion-reduce:transition-none",
      className,
    )}
    aria-hidden="true"
    {...props}
  />
);

/**
 * SectionHeader - consistent section header across pages
 */
interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  heading: string;
  headingHighlight?: string;
  subtext?: string;
  number?: string;
  action?: React.ReactNode;
}

const SectionHeader = ({
  className,
  label,
  heading,
  headingHighlight,
  subtext,
  number,
  action,
  children,
  ...props
}: SectionHeaderProps) => (
  <div
    className={cn(
      "flex flex-col justify-between gap-5 md:flex-row md:items-end",
      className,
    )}
    {...props}>
    <div className="max-w-2xl">
      {number && (
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-accent">{number}</span>
          <span className="h-px w-8 bg-border" aria-hidden />
        </div>
      )}
      <div className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          {label}
        </p>
      </div>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
        {heading}
        {headingHighlight && (
          <span className="block text-accent">{headingHighlight}</span>
        )}
      </h2>
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

export { Card, CardHeader, CardContent, CardFooter, AccentLine, SectionHeader };
