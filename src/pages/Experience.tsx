import React, { useEffect, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { workExperiences } from "@/content/experience";
import { optimizedCloudinaryUrl } from "@/lib/cloudinary";
import { PageSectionHeader } from "@/components/page-section-header";
import { Badge } from "@/components/ui/badge";

const LOGO_IMAGE_WIDTH = 112;

const Experience: React.FC = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImageSrcs, setLoadedImageSrcs] = useState<Set<string>>(
    () => new Set(),
  );

  const markImageLoaded = (src: string) =>
    setLoadedImageSrcs(previous =>
      previous.has(src) ? previous : new Set(previous).add(src),
    );

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
      <section className="relative px-6 pt-32 pb-10">
        <div className="rise mx-auto max-w-7xl">
          <PageSectionHeader
            label="CAREER / PROFESSIONAL JOURNEY"
            heading="Engineering experiences"
            headingHighlight=" beyond the code."
            subtext="5+ years of experience building enterprise applications and customer-facing digital products across financial services, travel, airline, and enterprise technology. Specializing in React, Next.js, TypeScript, scalable frontend architectures, design systems, performance optimization, and accessibility, with growing experience across backend development and AI-powered applications."
            action={
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex items-center gap-3 font-mono text-xs tracking-wide text-muted-foreground">
                  <span className="text-card-foreground">
                    {String(workExperiences.length).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-border" aria-hidden />
                  <span>Professional experiences</span>
                </div>

                <ul className="flex flex-wrap gap-2 lg:justify-end">
                  {["Enterprise Engineering"].map(focus => (
                    <li key={focus}>
                      <Badge
                        variant="outline"
                        className="h-9 rounded-full px-4 font-mono text-[11px] font-normal text-muted-foreground">
                        {focus}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </div>
      </section>

      <section
        id="experience"
        className="px-6 pb-24"
        aria-labelledby="experience-heading">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-panel/60 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                    OVERVIEW
                  </span>
                  <span className="h-px w-8 bg-border" aria-hidden />
                </div>

                <h2
                  id="experience-heading"
                  className="mt-5 max-w-[12ch] font-display font-bold tracking-tight text-card-foreground"
                  style={{
                    fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem)",
                    lineHeight: "1.05",
                  }}>
                  Professional journey.
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                  A timeline of roles, experiences, and engineering challenges
                  that have shaped my approach to building scalable enterprise
                  applications and digital products.
                </p>

                <nav aria-label="Jump to role" className="mt-8 hidden lg:block">
                  <ul className="border-l border-border">
                    {workExperiences.map((exp, index) => (
                      <li key={`nav-${exp.company}-${index}`}>
                        <a
                          href={`#role-${index}`}
                          aria-current={
                            activeIndex === index ? "location" : undefined
                          }
                          className={`-ml-px flex items-center justify-between border-l-2 py-3 pr-3 pl-4 text-sm transition-all duration-300 ${
                            activeIndex === index
                              ? "border-accent text-card-foreground"
                              : "border-transparent text-muted-foreground hover:text-card-foreground"
                          }`}>
                          <span>{exp.company}</span>
                          <ArrowUpRight
                            className={`size-3.5 transition-all duration-300 ${
                              activeIndex === index
                                ? "translate-x-0 text-accent opacity-100"
                                : "-translate-x-1 opacity-0"
                            }`}
                            aria-hidden
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <ol className="space-y-6 lg:col-span-8">
            {workExperiences.map((exp, index) => {
              const company = exp.company;
              const isCurrent = index === 0;
              const isImageLoading = !loadedImageSrcs.has(exp.logo);

              return (
                <li
                  key={`${company}-${index}`}
                  id={`role-${index}`}
                  data-role-item
                  data-index={index}
                  className="group relative scroll-mt-28">
                  <div className="relative rounded-2xl border border-border bg-panel p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8">
                    <div className="flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="flex gap-1.5" aria-hidden>
                          <span className="size-2 rounded-full bg-muted-foreground/40 transition-colors duration-300 group-hover:bg-accent" />
                          <span className="size-2 rounded-full bg-muted-foreground/40 transition-colors duration-300 group-hover:bg-accent" />
                          <span className="size-2 rounded-full bg-accent" />
                        </span>

                        <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
                          {exp.timeline}
                        </span>
                      </div>

                      {isCurrent && (
                        <span className="inline-flex items-center rounded-md bg-accent px-2.5 py-0.5 font-mono text-[10px] font-medium text-accent-foreground">
                          CURRENT
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex-1">
                      <div className="flex items-start gap-4 sm:gap-5">
                        <span
                          className="relative block size-12 shrink-0 overflow-hidden rounded-lg border border-border bg-background p-1.5 sm:size-14"
                          aria-busy={isImageLoading}>
                          {isImageLoading && (
                            <span
                              className="absolute inset-0 z-10 flex items-center justify-center bg-background/70"
                              role="status">
                              <LoaderCircle
                                className="size-5 animate-spin text-accent"
                                aria-hidden
                              />
                              <span className="sr-only">
                                Loading company logo
                              </span>
                            </span>
                          )}

                          <img
                            ref={image => {
                              if (image?.complete && image.naturalWidth > 0) {
                                markImageLoaded(exp.logo);
                              }
                            }}
                            src={optimizedCloudinaryUrl(
                              exp.logo,
                              LOGO_IMAGE_WIDTH,
                            )}
                            alt={`${company} logo`}
                            width={44}
                            height={44}
                            loading="lazy"
                            decoding="async"
                            onLoad={() => markImageLoaded(exp.logo)}
                            onError={() => markImageLoaded(exp.logo)}
                            className={`block size-full object-contain transition-opacity duration-300 ${
                              isImageLoading ? "opacity-0" : "opacity-100"
                            }`}
                          />
                        </span>

                        <div className="min-w-0 flex-1 pb-3">
                          <h3 className="font-display text-xl leading-tight font-semibold tracking-tight text-card-foreground sm:text-2xl">
                            {exp.role}
                          </h3>

                          <p className="mt-1.5 text-base font-medium text-accent">
                            {company}
                          </p>

                          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-border py-3">
                        <p className="mb-2 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                          Key contributions
                        </p>

                        <ul
                          aria-label={`Key contributions at ${company}`}
                          className="list-outside list-disc space-y-3 pl-5 marker:text-accent">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li
                              key={`${i}-${responsibility}`}
                              className="text-sm leading-5 text-muted-foreground">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
