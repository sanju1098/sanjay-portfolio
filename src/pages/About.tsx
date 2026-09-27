import React from "react";
import { ExternalLink } from "lucide-react";
import { certificates, workAchievements } from "@/content/about";

const About: React.FC = React.memo(() => {
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
          <h1 className="mt-6 max-w-[18ch] text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-7xl">
            About me
          </h1>

          <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-xl">
            Frontend Engineer building responsive, accessible web applications
            with React, TypeScript, and Next.js across enterprise, airline, and
            AI-driven platforms. Contributed to significant booking conversion
            improvements, high Lighthouse performance scores, and enhanced WCAG
            accessibility. Experienced in design systems, CI/CD with GitHub
            Actions, SonarQube, Docker, and Agile/Scrum cross-functional teams.
          </p>
        </div>
      </section>

      <section id="about" className="p-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="p-7">
              <p className="label-mono">Summary</p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-card-foreground md:text-3xl">
                What I bring
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Shipping production-ready frontends with measurable impact:
                significant booking conversion lift for P&O Cruises and Cunard,
                excellent Lighthouse performance scores with improved LCP,
                enhanced WCAG accessibility standards, and design systems
                adopted across multiple engineering teams. Experienced with
                micro-frontends, component-driven development, Storybook, Figma,
                and server-side rendering. I build for scale, not just for
                demos.
              </p>
            </div>

            <div className="bg-panel p-7 ring-1 ring-border rounded-xl">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                What I do
              </h3>
              <p className="mt-5 text-base text-pretty leading-relaxed text-foreground">
                Currently a Senior Experience Engineer at Publicis Sapient
                driving frontend architecture, micro-frontends, and design
                systems within an experimentation pod. I specialize in building
                reusable Adobe Target component libraries with zero-rollout
                components for scroll-polls across booking, CRF, and shores
                modules with zero production incidents. Maintained high quality
                gates in GitHub Actions CI/CD and improved SonarQube scores
                through code splitting, lazy loading, and image optimization. I
                also build Node.js/Express REST APIs and ship AI-powered
                products with Next.js, Vercel AI SDK, and Gemini.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-panel p-7 ring-1 ring-border rounded-xl">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Achievements
              </h3>
              <div className="mt-6 space-y-1 grid gap-1  grid-cols-1 md:grid-cols-2">
                {workAchievements.map(item => {
                  const targetUrl = item.redirectLink || item.image;

                  return (
                    <div
                      key={item.name}
                      className="group relative flex flex-col gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background">
                      <div className="flex items-start gap-3.5">
                        <img
                          src={item.badgeImage}
                          alt={item.name}
                          loading="lazy"
                          className="size-10 shrink-0 rounded-sm border border-border bg-panel object-contain p-1"
                        />
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-muted-foreground mt-1">
                            Issued {item.issueDate}
                          </span>
                        </div>
                      </div>

                      {targetUrl && (
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all w-full">
                          {item.buttonName || "View"}
                          <ExternalLink className="size-4" aria-hidden />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-panel p-7 ring-1 ring-border rounded-xl">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Certificates
              </h3>
              <div className="mt-6 space-y-1 grid gap-1  grid-cols-1 md:grid-cols-2">
                {certificates.map(item => (
                  <div
                    key={item.name}
                    className="group relative flex flex-col gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background">
                    <div className="flex items-start gap-3.5">
                      <img
                        src={item.badgeImage}
                        alt={item.name}
                        loading="lazy"
                        className="size-10 shrink-0 rounded-sm border border-border bg-panel object-contain p-1"
                      />
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                          {item.name}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">
                          Issued {item.issueDate}
                        </span>
                      </div>
                    </div>

                    {item.redirectLink && (
                      <a
                        href={item.redirectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all w-full">
                        {item.buttonName || "View"}
                        <ExternalLink className="size-4" aria-hidden />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
