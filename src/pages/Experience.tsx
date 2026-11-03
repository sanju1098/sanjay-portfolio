import React, { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { workExperiences } from "@/content/experience";

const Experience: React.FC = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImageSrcs, setLoadedImageSrcs] = useState<Set<string>>(
    () => new Set(),
  );

  const markImageLoaded = (src: string) => {
    setLoadedImageSrcs(previous =>
      previous.has(src) ? previous : new Set(previous).add(src),
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    document
      .querySelectorAll("[data-role-item]")
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pb-20 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 grid-field"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-130 glow-accent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl rise">
          <h1 className="mt-6 max-w-[18ch] text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-6xl">
            Professional experience
          </h1>

          <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            A record of building high-load frontend systems, accessible
            interfaces, and dependable product experiences.
          </p>
        </div>
      </section>

      <section id="experience" className="px-6 pb-20 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="max-w-[12ch] text-balance font-display text-3xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-4xl">
                Professional background
              </h2>
              <p className="mt-4 max-w-[36ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Four teams, one throughline: frontend systems shaped by
                ownership, scale, and shipped outcomes.
              </p>

              <nav aria-label="Jump to role" className="mt-8 hidden lg:block">
                <ul className="border-l border-border">
                  {workExperiences.map((exp, index) => (
                    <li key={`nav-${exp.company}-${index}`}>
                      <a
                        href={`#role-${index}`}
                        aria-current={
                          activeIndex === index ? "true" : undefined
                        }
                        className={`-ml-px block border-l-2 py-2 pl-4 text-sm transition-colors ${
                          activeIndex === index
                            ? "border-accent font-medium text-card-foreground"
                            : "border-transparent text-muted-foreground hover:text-card-foreground"
                        }`}>
                        {exp.company.trim()}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <ol className="space-y-10 lg:col-span-8">
            {workExperiences.map((exp, index) => {
              const company = exp.company.trim();
              const isCurrent = index === 0;
              const isImageLoading = !loadedImageSrcs.has(exp.logo);
              return (
                <li
                  key={`${company}-${index}`}
                  id={`role-${index}`}
                  data-role-item
                  data-index={index}
                  className="relative scroll-mt-28 border-b border-l border-border/60 pb-8 pl-7 sm:pl-8">
                  <span
                    className={`absolute -left-1.25 top-1.5 size-2.5 rounded-full ${
                      isCurrent
                        ? "bg-accent ring-4 ring-accent/20"
                        : "bg-border"
                    }`}
                    aria-hidden
                  />

                  <div className="flex items-start gap-3.5">
                    <span
                      className="relative block size-11 shrink-0 rounded-sm border border-border bg-card p-1"
                      aria-busy={isImageLoading}>
                      {isImageLoading && (
                        <span
                          className="absolute inset-0 z-10 flex items-center justify-center bg-background/60"
                          role="status"
                          aria-label="Loading image">
                          <LoaderCircle
                            className="size-5 animate-spin text-accent"
                            aria-hidden
                          />
                        </span>
                      )}
                      <img
                        ref={image => {
                          if (image?.complete && image.naturalWidth > 0) {
                            markImageLoaded(exp.logo);
                          }
                        }}
                        src={exp.logo}
                        alt={`${company} logo`}
                        width={44}
                        height={44}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => markImageLoaded(exp.logo)}
                        onError={() => markImageLoaded(exp.logo)}
                        className={`block size-full object-contain transition-opacity duration-200 ${
                          isImageLoading ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg font-medium leading-tight text-card-foreground md:text-2xl">
                          {exp.role}
                        </h3>
                        {isCurrent && (
                          <span className="chip-accent">Current</span>
                        )}
                      </div>
                      <p className="mt-0.5 font-mono text-base text-accent">
                        {company}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {exp.timeline}
                        <span className="mx-2 text-border" aria-hidden>
                          |
                        </span>
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <ul
                      aria-label={`Key contributions at ${company}`}
                      className="list-outside list-disc space-y-2.5 pl-5 text-base marker:text-accent">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li
                          key={`${i}-${responsibility}`}
                          className="text-pretty leading-normal text-muted-foreground">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
});

export default Experience;
