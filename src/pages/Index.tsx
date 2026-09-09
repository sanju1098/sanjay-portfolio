import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownToLine, ArrowRight, ExternalLink } from "lucide-react";
import Typewriter from "typewriter-effect";
import { services, stats } from "@/content/home";
import Picture from "@/components/Picture";
import resumeUrl from "@/assets/Resume.pdf";
import { projects } from "@/content/project";

const Index: React.FC = React.memo(() => {
  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-8 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 grid-field"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-130 glow-accent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="rise text-center md:text-left">
            <span className="chip-accent">
              <span
                className="size-1.5 animate-pulse rounded-full bg-accent"
                aria-hidden
              />
              Available for collaboration
            </span>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start">
              <div
                className="hidden h-2 w-2 rounded-full bg-accent md:block"
                aria-hidden
              />
              <h2 className="text-xl font-medium text-muted-foreground md:text-2xl">
                <Typewriter
                  options={{
                    strings: [
                      "Senior Experience Engineer",
                      "Senior Frontend Developer",
                      "AI Product Engineer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    cursor: "",
                  }}
                />
              </h2>
              <div
                className="hidden h-2 w-2 rounded-full bg-accent md:block"
                aria-hidden
              />
            </div>

            <h1 className="mt-6 max-w-[22ch] text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-gradient md:text-7xl">
              Building high-performance interfaces and scalable systems.
            </h1>

            <p className="mt-8 max-w-[62ch] text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Frontend engineer with 4.5+ years building scalable React.js and
              Next.js applications with reusable UI architecture, REST API
              integration, state management, and rendering optimization. I am
              also interested in backend engineering and have built backend
              applications and REST APIs with Node.js and Express, while
              shipping AI-powered products with the Vercel AI SDK, Gemini, and
              Groq.
            </p>

            <div className="mt-10 flex flex-col flex-wrap justify-center gap-3 md:flex-row md:justify-start">
              <a
                href={resumeUrl}
                download="Sanjay Kumar S R_Resume"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-all hover:brightness-110 active:scale-[0.97]">
                <ArrowDownToLine className="size-4" aria-hidden />
                Download résumé
              </a>

              <Link
                to="/projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-border bg-secondary px-5 text-sm font-medium text-secondary-foreground transition-all hover:bg-muted">
                View projects
                <ArrowRight className="size-4 opacity-70" aria-hidden />
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map(stat => (
                <div
                  key={stat.label}
                  className="rounded-md border border-border bg-panel p-3 panel-hover">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-card-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 pt-4">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-md border border-border bg-panel p-7 shadow-panel">
            <p className="label-mono">Product-first engineering</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
              I mix product thinking with front-end execution.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I design reusable interfaces, improve performance, and build
              scalable user experiences that help teams ship faster without
              sacrificing clarity, accessibility, or quality.
            </p>
          </div>

          <div className="rounded-md border border-border bg-panel p-7 shadow-panel">
            <p className="label-mono">Core focus</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground md:text-base">
              <li className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" aria-hidden />
                UI systems and reusable components
              </li>
              <li className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" aria-hidden />
                Performance, accessibility, and design quality
              </li>
              <li className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" aria-hidden />
                AI products, enterprise apps, and product delivery
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center md:text-left">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-card-foreground md:text-5xl">
              What I do
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">
              I build reliable, user-centered interfaces and product experiences
              that help teams ship faster and scale with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={index}
                className="rounded-md bg-panel p-7 ring-1 ring-border panel-hover">
                <div className="flex size-12 items-center justify-center rounded-sm bg-accent/70 text-accent">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-medium text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-card-foreground md:text-4xl">
                Recent projects
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent hover:underline">
              All projects
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map(project => {
              const projectUrl = project.live || project.repo;

              return (
                <li key={project.name}>
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
                        <h3 className="font-display text-lg font-medium text-card-foreground">
                          {project.name}
                        </h3>

                        <a
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.name}`}
                          className="text-muted-foreground transition-colors hover:text-foreground">
                          <ExternalLink size={16} />
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

                    <p className="mt-2 text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-md bg-panel p-10 ring-1 ring-border/70 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-medium text-card-foreground md:text-3xl">
              Building something ambitious?
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm text-muted-foreground">
              Open to senior frontend roles and backend-focused collaborations
              across web, AI, and other emerging technology.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-all hover:brightness-110 active:scale-[0.97]">
            Get in touch
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
});

export default Index;
