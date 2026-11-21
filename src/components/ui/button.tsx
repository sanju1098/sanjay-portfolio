import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg text-base font-semibold transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "h-12 bg-primary px-6 text-primary-foreground border border-primary shadow-[0_3px_0_0_var(--signal-strong)] hover:-translate-y-0.5 hover:shadow-[0_5px_0_0_var(--signal-strong)] active:translate-y-[2px] active:shadow-none",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",

        outline:
          "border border-border bg-background px-7 text-card-foreground shadow-[0_5px_0_0_color-mix(in_srgb,var(--card-foreground)_22%,transparent)] hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_7px_0_0_color-mix(in_srgb,var(--signal)_55%,transparent)] active:translate-y-1 active:shadow-[0_1px_0_0_color-mix(in_srgb,var(--card-foreground)_22%,transparent)]",

        secondary:
          "h-13 border border-card-foreground/20 bg-panel px-7 text-base text-card-foreground shadow-[0_5px_0_0_color-mix(in_srgb,var(--card-foreground)_22%,transparent)] hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_7px_0_0_color-mix(in_srgb,var(--signal)_55%,transparent)] active:translate-y-1 active:shadow-[0_1px_0_0_color-mix(in_srgb,var(--card-foreground)_22%,transparent)]",

        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",

        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-13 px-7",
        sm: "h-9 rounded-md gap-1.5 px-3 text-sm",
        xs: "h-7 rounded-md gap-1 px-2.5 text-xs",
        lg: "h-14 rounded-lg px-8 text-base",
        icon: "size-9 rounded-md p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
