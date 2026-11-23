import React, { useEffect, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { workExperiences } from "@/content/experience";
import { optimizedCloudinaryUrl } from "@/lib/cloudinary";
import {
  Card,
  CardContent,
  AccentLine,
  SectionHeader,
} from "@/components/ui/card";

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
      <section className="relative px-6 pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="rise mx-auto max-w-7xl">
          <SectionHeader
            label="CAREER / PROFESSIONAL JOURNEY"
            heading="A journey through"
            headingHighlight=" engineering."
            subtext="Over 5 years of professional experience building and evolving digital products across enterprise, airline, and cruise domains. From crafting scalable frontend architectures to collaborating across teams, each role has shaped how I approach engineering challenges and product development."
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
              <Card variant="panel" padding="lg">
                <AccentLine />
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
                  Career so far.
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                  A progression of roles, teams, and challenges shaping how I
                  approach product engineering.
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
              </Card>
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
                  <Card variant="interactive" padding="lg" className="relative">
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

                    <CardContent className="flex-1">
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
                    </CardContent>
                  </Card>
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
