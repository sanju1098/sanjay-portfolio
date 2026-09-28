import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownToLine, ArrowRight, ExternalLink } from "lucide-react";
import { services, stats } from "@/content/home";
import Picture from "@/components/Picture";
import resumeUrl from "@/assets/Resume.pdf";
import { projects } from "@/content/project";

const Index: React.FC = React.memo(() => {
  return (
    <>
      <section
        id="main-content"
        className="relative overflow-hidden px-6 pt-32 pb-8 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 grid-field"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-130 glow-accent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="rise">
            <div className="inline-block">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent mb-2">
                Frontend Engineer
              </p>
            </div>

            <h1 className="mt-4 max-w-[24ch] text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-7xl">
              Building high-performance interfaces and scalable systems.
            </h1>

            <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Frontend engineer building responsive, accessible web applications
              with React, TypeScript, and Next.js. Contributed to significant
              booking conversion improvements for P&O Cruises and Cunard,
              maintained high quality gates in SonarQube CI/CD pipelines, and
              built Adobe Target experiments within experimentation pods. I also
              build REST APIs with Node.js and Express, and ship AI-powered
              products with Vercel AI SDK, Gemini, and Claude.
            </p>

            <div className="mt-10 flex flex-col flex-wrap gap-3 md:flex-row">
              <a
                href={resumeUrl}
                download="Sanjay Kumar S R_Resume"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground ring-1 ring-primary transition-all hover:brightness-110 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                <ArrowDownToLine className="size-4" aria-hidden />
                Download résumé
              </a>

              <Link
                to="/projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 text-base font-medium text-secondary-foreground transition-all hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                View projects
                <ArrowRight className="size-4 opacity-70" aria-hidden />
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(stat => {
                return (
                  <div
                    key={stat.label}
                    className="rounded-md border border-border bg-panel p-4 panel-hover">
                    <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-base font-medium text-card-foreground">
                      {stat.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 pt-4">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-md border border-border bg-panel p-7 shadow-panel">
            <p className="label-mono">Product-first engineering</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
              I mix product thinking with front-end execution.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I design reusable WCAG-compliant component libraries, optimize
              Core Web Vitals and Lighthouse performance scores, and build
              scalable micro-frontend architectures that help teams ship faster
              without sacrificing accessibility, performance, or quality. I use
              TanStack Query for data fetching, Redux Toolkit for state
              management, and secure multi-step forms with RBAC and Zod
              validation.
            </p>
          </div>

          <div className="rounded-md border border-border bg-panel p-7 shadow-panel">
            <p className="label-mono">Core focus</p>
            <ul className="mt-5 space-y-3 text-base text-muted-foreground md:text-lg list-disc list-inside marker:text-accent">
              <li>UI systems and reusable components</li>
              <li>Performance, accessibility, and design quality</li>
              <li>AI products, enterprise apps, and product delivery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
              What I do
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-xl">
              I build reliable, accessible, and performant user interfaces with
              React, TypeScript, and Next.js. Specializing in component-driven
              development, design systems, micro-frontends, performance
              optimization, and AI-powered product experiences.
            </p>
          </>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              return (
                <article
                  key={index}
                  className="rounded-md bg-panel p-7 ring-1 ring-border panel-hover">
                  <div className="flex size-12 items-center justify-center rounded-sm bg-accent/10 text-accent ring-1 ring-accent/30">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-medium text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-4xl">
                Recent projects
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-base uppercase tracking-widest text-accent hover:underline">
              All projects
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map(project => {
              const projectUrl = project.live || project.repo;

              return (
                <div key={project.name}>
                  <div className="block h-full rounded-md bg-panel p-6 ring-1 ring-border/70 panel-hover">
                    <Picture
                      src={project.images[0]?.src}
                      alt={
                        project.images[0]?.alt ||
                        `${project.name} project preview`
                      }
                      loading="lazy"
                      className="aspect-video w-full rounded-sm object-contain object-center"
                    />

                    <div className="mt-5 flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-xl font-medium text-card-foreground">
                          {project.name}
                        </h3>

                        <a
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.name}`}
                          className="text-muted-foreground transition-colors hover:text-foreground">
                          <ExternalLink size={18} />
                        </a>
                      </div>

                      <div className="flex flex-row flex-wrap gap-1.5">
                        {project?.category?.map(category => (
                          <span
                            key={category}
                            className="chip-accent inline-flex flex-row gap-1">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mt-2 text-base text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-md bg-panel p-10 ring-1 ring-border/70 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-medium text-card-foreground md:text-3xl">
              Building something ambitious?
            </h2>
            <p className="mt-3 max-w-[52ch] text-base text-muted-foreground">
              Open to senior frontend roles and backend-focused collaborations
              across web, AI, and other emerging technology.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-6 text-base font-medium text-primary-foreground ring-1 ring-primary transition-all hover:brightness-110 active:scale-[0.97]">
            Get in touch
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
});

export default Index;
