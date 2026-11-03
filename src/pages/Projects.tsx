import React, { useCallback, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
  LoaderCircle,
} from "lucide-react";
import { projects, workProfiles } from "@/content/project";

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dwsalphhy/image/upload/v1788338164/ef104d58-b653-45be-afeb-510b4aa77c69.png";

const Projects: React.FC = React.memo(() => {
  const [slideIndex, setSlideIndex] = useState<Record<string, number>>({});
  const [loadedSrcs, setLoadedSrcs] = useState<Set<string>>(new Set());

  const markLoaded = useCallback((src: string) => {
    setLoadedSrcs(prev => (prev.has(src) ? prev : new Set(prev).add(src)));
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pb-10 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 grid-field"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-130 glow-accent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl rise">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h1 className="mt-6 max-w-[18ch] text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-6xl">
                Projects
              </h1>

              <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                A curated portfolio of products, experiments, and UI systems
                built across AI, frontend, and enterprise delivery.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="flex flex-col items-start gap-3 md:items-end">
                <div className="text-left md:text-right">
                  <p className="font-display text-base font-medium text-card-foreground">
                    Want to see more?
                  </p>

                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    Explore more of my work and experiments on GitHub and
                    StackBlitz.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {workProfiles.map(profile => (
                    <a
                      key={profile.profileName}
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-base font-medium shadow-sm ring-1 ring-border/70 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-95 ${profile.className}`}>
                      <span className="transition-transform duration-200 group-hover:scale-110">
                        {profile.icon}
                      </span>

                      <span>{profile.profileName}</span>

                      <ArrowUpRight
                        size={15}
                        className="opacity-60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 pb-20 pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-6">
            {projects.map(p => {
              const displayImages =
                p.images.length > 0
                  ? p.images
                  : [{ src: FALLBACK_IMAGE, alt: p.name }];
              const count = displayImages.length;
              const index = slideIndex[p.name] ?? 0;
              const go = (next: number) =>
                setSlideIndex(prev => ({
                  ...prev,
                  [p.name]: (next + count) % count,
                }));

              const titleLink = p.live ?? p.repo;
              const hasActions = Boolean(p.live || p.repo);

              return (
                <article
                  key={p.name}
                  className="group relative overflow-hidden rounded-2xl bg-panel ring-1 ring-border transition-all duration-300 hover:ring-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="grid lg:grid-cols-12">
                    <div className="p-4 lg:col-span-5 lg:p-6 lg:pr-0">
                      <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-muted/20 ring-1 ring-border">
                        {/* Carousel */}
                        <div
                          role="group"
                          aria-roledescription="carousel"
                          aria-label={`${p.name} screenshots`}
                          tabIndex={0}
                          className="absolute inset-0 flex flex-col overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          onKeyDown={e => {
                            if (e.key === "ArrowLeft") go(index - 1);
                            if (e.key === "ArrowRight") go(index + 1);
                          }}>
                          {/* Image area: identical size and width for every project */}
                          <div className="min-h-0 flex-1 px-3 pt-3">
                            <div className="relative h-full overflow-hidden rounded-lg">
                              <div
                                className="flex h-full transition-transform duration-500 ease-machined"
                                style={{
                                  transform: `translateX(-${index * 100}%)`,
                                }}>
                                {displayImages.map((img, i) => {
                                  const isLoading = !loadedSrcs.has(img.src);

                                  return (
                                    <div
                                      key={`${img.src}-${i}`}
                                      className="relative h-full w-full shrink-0"
                                      aria-hidden={i !== index}
                                      role="group"
                                      aria-roledescription="slide"
                                      aria-label={`${i + 1} of ${count}`}>
                                      {isLoading && (
                                        <div
                                          className="absolute inset-0 z-10 flex items-center justify-center"
                                          role="status"
                                          aria-label="Loading image">
                                          <LoaderCircle
                                            className="size-8 animate-spin text-accent"
                                            aria-hidden
                                          />
                                        </div>
                                      )}
                                      <img
                                        ref={el => {
                                          // Handles images already cached by the browser
                                          if (
                                            el?.complete &&
                                            el.naturalWidth > 0
                                          ) {
                                            markLoaded(img.src);
                                          }
                                        }}
                                        src={img.src}
                                        alt={img.alt}
                                        width={1200}
                                        height={750}
                                        loading="lazy"
                                        decoding="async"
                                        onLoad={() => markLoaded(img.src)}
                                        onError={() => markLoaded(img.src)}
                                        className={`size-full object-contain transition-opacity duration-200 ${
                                          isLoading
                                            ? "opacity-0"
                                            : "opacity-100"
                                        }`}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Controls bar below the image. Always rendered so every card matches. */}
                          <div className="flex h-12 shrink-0 items-center justify-between gap-3 px-4">
                            {count > 1 && (
                              <>
                                <div
                                  className="flex items-center gap-1.5"
                                  role="tablist"
                                  aria-label="Choose screenshot">
                                  {displayImages.map((_, i) => (
                                    <button
                                      key={i}
                                      type="button"
                                      role="tab"
                                      aria-selected={i === index}
                                      aria-label={`Screenshot ${i + 1}`}
                                      onClick={() => go(i)}
                                      className={`h-1.5 rounded-full transition-all ${
                                        i === index
                                          ? "w-6 bg-primary"
                                          : "w-3 bg-foreground/30 hover:bg-foreground/60"
                                      }`}
                                    />
                                  ))}
                                </div>

                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => go(index - 1)}
                                    aria-label="Previous screenshot"
                                    className="inline-flex size-8 items-center justify-center rounded-full bg-muted text-foreground ring-1 ring-border transition-all hover:scale-105 hover:bg-muted/70 active:scale-95">
                                    <ChevronLeft
                                      className="size-4"
                                      aria-hidden
                                    />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => go(index + 1)}
                                    aria-label="Next screenshot"
                                    className="inline-flex size-8 items-center justify-center rounded-full bg-muted text-foreground ring-1 ring-border transition-all hover:scale-105 hover:bg-muted/70 active:scale-95">
                                    <ChevronRight
                                      className="size-4"
                                      aria-hidden
                                    />
                                  </button>
                                </div>
                              </>
                            )}
                          </div>

                          <p aria-live="polite" className="sr-only">
                            Screenshot {index + 1} of {count}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col p-6 lg:col-span-7 lg:p-8">
                      <div>
                        <span className="chip-accent max-w-full rounded-full">
                          <span className="truncate">{p.subtitle}</span>
                        </span>

                        <h3 className="mt-3 line-clamp-2 font-display text-2xl font-bold text-card-foreground lg:text-3xl">
                          {titleLink ? (
                            <a
                              href={titleLink}
                              target="_blank"
                              rel="noreferrer"
                              className="underline-offset-4 decoration-2 decoration-accent/60 hover:underline focus-visible:underline focus-visible:outline-none">
                              {p.name}
                            </a>
                          ) : (
                            p.name
                          )}
                        </h3>

                        <p className="mt-3 line-clamp-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>

                        <div className="mt-5">
                          <p className="mb-2 text-sm font-medium text-muted-foreground">
                            Tech stack
                          </p>
                          <ul className="flex flex-wrap gap-1.5">
                            {p.stack.map(s => (
                              <li className="chip" key={s}>
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {hasActions && (
                        <div className="mt-auto pt-6">
                          <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:flex-wrap sm:items-center">
                            {p.live && (
                              <a
                                href={p.live}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`View Live Demo of ${p.name}`}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 active:scale-95 sm:w-auto">
                                <span>View Live Demo</span>
                                <ArrowUpRight className="size-4" aria-hidden />
                              </a>
                            )}
                            {p.repo && (
                              <a
                                href={p.repo}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`View Source Code of ${p.name}`}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-muted active:scale-95 sm:w-auto">
                                <Github className="size-4" aria-hidden />
                                <span>Source Code</span>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default Projects;
