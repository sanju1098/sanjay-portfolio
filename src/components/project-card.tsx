import { useEffect, useRef, useState, type FC } from "react";
import { ArrowUpRight, Code2, ImageIcon, LoaderCircle } from "lucide-react";
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

  const host = getHost(project.live || project.repo || "");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] has-[a:focus-visible]:-translate-y-1 has-[a:focus-visible]:border-accent/60 has-[a:focus-visible]:shadow-[0_6px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:has-[a:focus-visible]:translate-y-0">
      {/* Line that draws across the top */}
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
        {isLoading ? (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-background/70"
            role="status">
            <LoaderCircle
              className="size-7 animate-spin text-accent"
              aria-hidden
            />
            <span className="sr-only">Loading project preview</span>
          </div>
        ) : null}

        {imageSrc ? (
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
        ) : (
          <div className="flex h-full items-center justify-center bg-background/50">
            <div className="p-4 text-center">
              <ImageIcon
                className="mx-auto mb-3 size-12 text-muted-foreground/50"
                aria-hidden
              />
              <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                No preview available
              </p>
            </div>
          </div>
        )}

        {/* Action keys. Hidden until hover on devices that can hover, always
            visible on touch screens. */}
        {project.live || project.repo ? (
          <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-end gap-2 bg-linear-to-t from-background/95 via-background/70 to-transparent p-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none [@media(hover:hover)]:translate-y-full [@media(hover:hover)]:opacity-0">
            {project.live ? (
              <Button asChild className="h-8 px-3 text-xs">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer">
                  Live demo
                  <ArrowUpRight className="size-3.5" aria-hidden />
                  <span className="sr-only">
                    {" "}
                    of {project.name} (opens in a new tab)
                  </span>
                </a>
              </Button>
            ) : null}

            {project.repo ? (
              <Button asChild variant="secondary" className="h-8 px-3 text-xs">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Code2 className="size-3.5" aria-hidden />
                  Source code
                  <span className="sr-only">
                    {" "}
                    of {project.name} (opens in a new tab)
                  </span>
                </a>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-card-foreground">
          {project.name}
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
                className="h-6 rounded-md border-accent/20 bg-accent/5 font-mono font-normal text-card-foreground">
                {category}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};
