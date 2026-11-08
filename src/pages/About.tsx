import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { certificates, workAchievements } from "@/content/about";
import { Link } from "react-router-dom";

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
          <h1 className="mt-6 max-w-[18ch] text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-6xl">
            About me
          </h1>

          <div className="mt-8 max-w-[62ch] space-y-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I’m Sanjay, a senior frontend engineer with 5+ years of
              experience.
            </p>
            <p>
              I started on VMware’s CSP Marketplace products, improving
              accessibility and form reliability. Then I built a design system
              for airline and cargo platforms at Unisys. Now I work on
              personalization and A/B testing for Cunard and P&O Cruises at
              Publicis Sapient.
            </p>
            <p>
              I care about interfaces that are fast, accessible, and easy to
              maintain, and I’m growing into backend and AI work.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="p-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col gap-3 rounded-xl bg-panel p-7 ring-1 ring-border md:flex-row md:items-baseline md:gap-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Education
            </h2>

            <div>
              <p className="text-base font-medium text-card-foreground">
                Bachelor of Engineering in Computer Science
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                T John Institute of Technology, Bengaluru, Karnataka
                <span className="mx-2" aria-hidden>
                  |
                </span>
                2016 – 2020
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="p-7">
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-card-foreground md:text-4xl">
                What I bring
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                I build production frontends that are accessible, fast, and easy
                for other engineers to extend. That means reusable components
                other teams adopt, accessibility checked with NVDA and
                VoiceOver, and features measured through A/B testing. I’ve also
                mentored junior engineers on React architecture and component
                design.
              </p>
            </div>

            <div className="bg-panel p-7 ring-1 ring-border rounded-xl">
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-card-foreground md:text-4xl">
                Right now
              </h2>
              <p className="mt-5 text-base text-pretty leading-relaxed text-foreground">
                I’m a Senior Experience Engineer at Publicis Sapient, building
                Next.js features for Cunard and P&O Cruises. I ship
                personalization variants and A/B tests, released safely behind
                AEM feature flags and brand- and locale-specific configurations,
                with Jest tests and SonarQube quality gates in CI. Outside
                client work, I’m learning backend with Node.js and Express and
                building AI apps, like AstraMind, a RAG PDF chatbot.
              </p>
              <Link
                to="/experience"
                className="mt-5 inline-flex items-center gap-2 font-mono text-base uppercase tracking-widest text-accent hover:underline">
                Full experience
                <ArrowRight className="size-4" aria-hidden />
              </Link>
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
