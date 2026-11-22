import { useEffect, useRef, useState, type FC } from "react";
import { ArrowUpRight, Code2, LoaderCircle, Image } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { projects } from "@/content/project";

type Project = (typeof projects)[number];

const getHost = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

export const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const image = project.images[0];
  const imageSrc = image?.src ?? "";
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(imageSrc.length > 0);

  useEffect(() => {
    const element = imageRef.current;
    if (element?.complete && element.naturalWidth > 0) setIsLoading(false);
  }, []);

  const primaryUrl = project.live || project.repo || "";
  const primaryLabel = project.live ? "Live demo" : "View source";
  const host = getHost(primaryUrl);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] active:duration-100 has-[a:focus-visible]:-translate-y-1 has-[a:focus-visible]:border-accent/60 has-[a:focus-visible]:shadow-[0_6px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 motion-reduce:has-[a:focus-visible]:translate-y-0">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-has-[a:focus-visible]:scale-x-100 motion-reduce:transition-none"
        aria-hidden
      />

      <div className="flex items-center gap-3 border-b border-border bg-background px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-muted-foreground/40 transition-colors duration-300 group-hover:bg-accent" />
          <span className="size-2 rounded-full bg-muted-foreground/40 transition-colors duration-300 group-hover:bg-accent" />
          <span className="size-2 rounded-full bg-accent" />
        </span>

        {host ? (
          <span className="truncate font-mono text-[11px] text-muted-foreground">
            {host}
          </span>
        ) : null}
      </div>

      <div
        className="relative aspect-video overflow-hidden bg-background"
        aria-busy={isLoading}>
        {isLoading && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-background/70"
            role="status">
            <LoaderCircle
              className="size-7 animate-spin text-accent"
              aria-hidden
            />
            <span className="sr-only">Loading project preview</span>
          </div>
        )}

        {/* Image only on desktop (lg: and above) - hidden on mobile/tablet */}
        {imageSrc && (
          <div className="relative hidden h-full w-full lg:block">
            <img
              ref={imageRef}
              src={imageSrc}
              alt={image?.alt || `${project.name} project preview`}
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
              className={`size-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        )}

        {/* Mobile/Tablet placeholder with icon */}
        {imageSrc && (
          <div className="flex h-full items-center justify-center bg-background/50 lg:hidden">
            <div className="p-4 text-center">
              <Image
                className="mx-auto mb-3 size-12 text-muted-foreground/50"
                aria-hidden
              />
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                Preview available on desktop
              </p>
            </div>
          </div>
        )}

        {/* No image fallback - show on all screens */}
        {!imageSrc && (
          <div className="flex h-full items-center justify-center bg-background/50">
            <div className="p-4 text-center">
              <Image
                className="mx-auto mb-3 size-12 text-muted-foreground/50"
                aria-hidden
              />
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                No preview available
              </p>
            </div>
          </div>
        )}

        {(project.live || project.repo) && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex translate-y-full items-center justify-end gap-3 bg-linear-to-t from-background/95 via-background/70 to-transparent p-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 group-has-[a:focus-visible]:translate-y-0 group-has-[a:focus-visible]:opacity-100 motion-reduce:transition-none lg:block"
            aria-hidden>
            <div className="flex items-center justify-end gap-2">
              {project.live && (
                <Button
                  asChild
                  variant="default"
                  size="xs"
                  className="h-7 px-2.5 text-[11px]">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer">
                    Live demo
                    <ArrowUpRight className="size-3" aria-hidden />
                  </a>
                </Button>
              )}

              {project.repo && (
                <Button
                  asChild
                  variant="secondary"
                  size="xs"
                  className="h-7 px-2.5 text-[11px]">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Code2 className="size-3" aria-hidden />
                    Source code
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-card-foreground">
          {primaryUrl ? (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none after:absolute after:inset-0 after:z-10">
              {project.name}
              <span className="sr-only">
                {" "}
                ({primaryLabel.toLowerCase()}, opens in a new tab)
              </span>
            </a>
          ) : (
            project.name
          )}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.subtitle}
        </p>

        {project.category?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.category.map(category => (
              <Badge
                key={category}
                variant="outline"
                className="h-6 rounded-md border-accent/20 bg-accent/5 font-mono font-normal text-card-foreground transition-colors hover:border-accent/50 hover:bg-accent/10">
                {category}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};
