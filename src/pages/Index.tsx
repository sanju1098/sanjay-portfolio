import type { FC } from "react";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ArrowDownToLine, ArrowRight, ArrowUpRight } from "lucide-react";
import { addValuesSection, approach, pillars, services } from "@/content/home";
import resumeUrl from "@/assets/Resume.pdf";
import { projects } from "@/content/project";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/card";

const exploring = ["Node.js", "Express.js", "MongoDB", "AI Integration"];

const techBadge =
  "h-7 rounded-md border-accent/20 bg-accent/5 px-3 font-mono text-xs font-normal text-card-foreground";

const HeroVisual = lazy(() =>
  import("@/components/hero-visual").then(m => ({ default: m.HeroVisual })),
);
const HeroBackdrop = lazy(() =>
  import("@/components/hero-backdrop").then(m => ({ default: m.HeroBackdrop })),
);

const Index: FC = () => (
  <>
    <section
      className="relative overflow-hidden px-6 pt-24 pb-12"
      aria-labelledby="hero-heading">
      <Suspense fallback={null}>
        <HeroBackdrop />
      </Suspense>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rise">
          <h1
            id="hero-heading"
            tabIndex={-1}
            className="mt-6 font-display text-3xl leading-[1.08] font-bold tracking-tight text-card-foreground outline-none sm:text-5xl lg:text-[2.6rem] xl:text-[3.4rem]">
            <span className="block">Senior frontend engineer</span>
            <span className="block text-accent">building accessible,</span>
            <span className="block">scalable interfaces</span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
            5+ years building accessible, high-performance frontend applications
            with React, TypeScript, and Next.js — with growing full-stack
            capability across Node.js, Express, and AI-powered features.
          </p>

          <div className="mt-9 flex flex-col flex-wrap gap-4 sm:flex-row">
            <Button variant="default" asChild className="group">
              <a href={resumeUrl} download="Sanjay Kumar S R_Resume.pdf">
                <ArrowDownToLine
                  className="size-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                Download résumé
              </a>
            </Button>

            <Button variant="secondary" asChild className="group">
              <Link to="/projects">
                View projects
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 xl:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon className="size-6 text-accent" aria-hidden />
                <p className="mt-2 font-mono text-sm tracking-[0.12em] text-card-foreground uppercase">
                  {title}
                </p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <Suspense fallback={null}>
          <HeroVisual />
        </Suspense>
      </div>
    </section>

    <section className="px-6 pt-12 pb-4" aria-labelledby="beyond-heading">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2
          id="beyond-heading"
          className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
          Beyond writing code.
          <span className="block text-accent">
            Building experiences that matter.
          </span>
        </h2>

        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
          Thoughtful engineering is about understanding the problem, choosing
          the right tools, and delivering solutions that last.
        </p>
      </div>
    </section>

    <section className="px-6 pb-12" aria-labelledby="philosophy-heading">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-panel p-7 md:p-10">
          <div
            className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-accent/10 blur-[100px]"
            aria-hidden
          />

          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent" aria-hidden />
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Engineering philosophy
              </span>
            </div>

            <h3
              id="philosophy-heading"
              className="mt-5 max-w-xl font-display text-3xl leading-tight font-semibold tracking-tight text-card-foreground md:text-5xl">
              Good software starts with
              <span className="text-accent"> good decisions.</span>
            </h3>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              My approach combines frontend craftsmanship with practical
              engineering decisions. From structuring reusable React
              applications to integrating backend services, I focus on building
              maintainable, reliable and user-focused products.
            </p>
          </div>

          <div className="relative mt-12 border-t border-border pt-6">
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Currently exploring
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {exploring.map(item => (
                <li key={item}>
                  <Badge variant="outline" className={techBadge}>
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background/60 p-7 md:p-9">
          <div className="flex items-center justify-between">
            <h3 className="label-mono text-xs">How I approach development</h3>
            <span className="font-mono text-xs text-accent">
              {approach.length} steps
            </span>
          </div>

          <ol className="mt-2">
            {approach.map(step => (
              <li
                key={step.number}
                className="flex gap-5 border-b border-border py-5 first:pt-4 last:border-0 last:pb-0">
                <span className="pt-1 font-mono text-xs text-accent">
                  {step.number}
                </span>

                <div className="flex-1">
                  <h4 className="font-display text-xl font-medium text-card-foreground">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <section className="px-6 py-12" aria-labelledby="capabilities-heading">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Capabilities"
          heading="From interface to"
          headingHighlight=" implementation."
          subtext="I work across the application lifecycle, from translating product requirements into polished interfaces to connecting them with backend services and APIs."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(service => (
            <article
              key={service.title}
              className="group rounded-xl border border-border bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                {service.icon}
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-12" aria-labelledby="experience-heading">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-border bg-panel p-7 md:p-10">
        <div
          className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-accent/10 blur-[100px]"
          aria-hidden
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent" aria-hidden />
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Professional experience
              </span>
            </div>

            <h2
              id="experience-heading"
              className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-4xl">
              Engineering solutions for{" "}
              <span className="text-accent">real-world products.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              At Publicis Sapient, I work on enterprise digital experiences,
              contributing to frontend architecture, application development,
              and integrations across product modules. My work includes Adobe
              Experience Manager integrations and Adobe Target feature flags for
              controlled, environment-specific releases.
            </p>
          </div>

          <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <h3 className="label-mono text-xs">How I add value</h3>

            <ul className="mt-6 space-y-6">
              {addValuesSection.map(item => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />

                  <div>
                    <h4 className="font-display text-lg font-medium text-card-foreground">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 py-12" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="label-mono">Selected work</p>

            <h2
              id="projects-heading"
              className="mt-4 font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
              Things I’ve built.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              A selection of personal projects and practical experiments where
              ideas turn into working applications.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-mono text-sm tracking-widest text-accent uppercase transition-colors hover:text-foreground">
            Explore all projects
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden
            />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-12" aria-labelledby="contact-heading">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-border bg-panel p-8 md:p-12">
        <div
          className="pointer-events-none absolute -top-32 -right-20 size-96 rounded-full bg-accent/10 blur-[120px]"
          aria-hidden
        />

        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="label-mono">Have a project in mind?</p>

            <h2
              id="contact-heading"
              className="mt-4 font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
              Let’s build something{" "}
              <span className="text-accent">meaningful.</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Interested in working together or discussing an engineering
              opportunity? I’d be happy to connect.
            </p>
          </div>

          <Button variant="default" asChild className="group">
            <Link to="/about#contact">
              Start a conversation
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Index;
