import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground ring-1 ring-primary shadow-[0_2px_0_0_var(--signal)] [a&]:hover:-translate-y-0.5 [a&]:hover:shadow-[0_4px_0_0_var(--signal)] [a&]:active:translate-y-px [a&]:active:shadow-[0_1px_0_0_var(--signal)]",
        secondary:
          "border-card-foreground/20 bg-panel text-card-foreground shadow-[0_2px_0_0_color-mix(in_srgb,var(--card-foreground)_22%,transparent)] [a&]:hover:-translate-y-0.5 [a&]:hover:border-accent/60 [a&]:hover:shadow-[0_4px_0_0_color-mix(in_srgb,var(--signal)_55%,transparent)] [a&]:active:translate-y-px [a&]:active:shadow-[0_1px_0_0_color-mix(in_srgb,var(--card-foreground)_22%,transparent)]",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border bg-background/60 text-foreground shadow-[0_2px_0_0_var(--border)] [a&]:hover:-translate-y-0.5 [a&]:hover:border-accent/60 [a&]:hover:shadow-[0_4px_0_0_color-mix(in_srgb,var(--signal)_55%,transparent)] [a&]:active:translate-y-px [a&]:active:shadow-[0_1px_0_0_var(--border)]",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
