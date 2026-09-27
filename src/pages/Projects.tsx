import React, { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { projects, workProfiles } from "@/content/project";
import Picture from "@/components/Picture";
interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  images: ProjectImage[];
  name: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = React.memo(
  ({ images, name }) => {
    const [index, setIndex] = useState(0);
    const count = images.length;

    const displayImages = images.length > 0 ? images : [{ src: "", alt: name }];

    const go = (next: number) => setIndex((next + count) % count);

    return (
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${name} screenshots`}
        tabIndex={0}
        className="relative h-full overflow-hidden bg-muted/20"
        onKeyDown={e => {
          if (e.key === "ArrowLeft") go(index - 1);
          if (e.key === "ArrowRight") go(index + 1);
        }}>
        <div
          className="flex h-full transition-transform duration-500 ease-machined"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {displayImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="flex h-full w-full shrink-0 items-center justify-center bg-muted/10 p-4"
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}>
              <Picture
                src={img.src}
                alt={img.alt}
                width={1200}
                height={750}
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4">
              <div
                className="flex items-center gap-1.5"
                role="tablist"
                aria-label="Choose screenshot">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Screenshot ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-6 bg-primary"
                        : "w-3 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous screenshot"
                  className="inline-flex size-8 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 backdrop-blur transition-all hover:bg-black/70 hover:scale-105 active:scale-95">
                  <ChevronLeft className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next screenshot"
                  className="inline-flex size-8 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 backdrop-blur transition-all hover:bg-black/70 hover:scale-105 active:scale-95">
                  <ChevronRight className="size-4" aria-hidden />
                </button>
              </div>
            </div>

            <p aria-live="polite" className="sr-only">
              Screenshot {index + 1} of {count}
            </p>
          </>
        )}
      </div>
    );
  },
);

const Projects: React.FC = React.memo(() => {
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
              <h1 className="mt-6 max-w-[18ch] text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-7xl">
                Projects
              </h1>

              <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-xl">
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
            {projects.map(p => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-2xl bg-panel ring-1 ring-border transition-all duration-300 hover:ring-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <div className="grid gap-0 lg:grid-cols-12">
                  <div className="lg:col-span-5 bg-muted/10">
                    <div className="relative h-full min-h-80 lg:min-h-95">
                      <div className="absolute inset-0 transform transition-transform duration-300 group-hover:scale-[1.02]">
                        <ProjectCarousel images={p.images} name={p.name} />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <div className="mb-3">
                        <span className="inline-flex items-center rounded-full bg-accent/90 backdrop-blur-sm px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-lg">
                          {p.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-card-foreground transition-colors group-hover:text-accent">
                        {p.name}
                      </h3>

                      <p className="mt-4 text-base leading-relaxed text-muted-foreground line-clamp-3">
                        {p.description}
                      </p>

                      <div className="mt-6">
                        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.stack.slice(0, 6).map(s => (
                            <span
                              className="inline-flex items-center rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                              key={s}>
                              {s}
                            </span>
                          ))}
                          {p.stack.length > 6 && (
                            <span className="inline-flex items-center rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                              +{p.stack.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 active:scale-95">
                          <span>View Live Demo</span>
                          <ArrowUpRight className="size-4" aria-hidden />
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-muted active:scale-95">
                          <Github className="size-4" aria-hidden />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export default Projects;
