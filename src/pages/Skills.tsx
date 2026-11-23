import React from "react";
import { skillCategories } from "@/content/skills";
import { PageSectionHeader } from "@/components/page-section-header";

const Skills: React.FC = React.memo(() => {
  return (
    <>
      <section className="relative px-6 pt-32 pb-10">
        <div className="rise relative mx-auto max-w-7xl">
          <PageSectionHeader
            label="TECHNICAL TOOLKIT / EXPERTISE"
            heading="Technologies powering"
            headingHighlight=" the experience."
            subtext="A collection of technologies, tools, and engineering practices I've worked with to build scalable enterprise applications. Strongest in React, Next.js, TypeScript, and frontend architecture, with hands-on exposure to backend development, databases, testing, and modern development workflows."
            action={
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
                <div className="flex items-center gap-3 font-mono text-xs tracking-wide text-muted-foreground">
                  <span className="text-card-foreground">
                    {String(skillCategories.length).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-border" aria-hidden />
                  <span>Technology categories</span>
                </div>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="inline-flex items-center rounded-md bg-accent px-3 py-2 font-mono text-[11px] tracking-wide text-accent-foreground">
                    Frontend expertise
                  </span>
                  <span className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-3 py-2 font-mono text-[11px] tracking-wide text-muted-foreground">
                    Full-stack capabilities
                  </span>
                </div>
              </div>
            }
          />
        </div>
      </section>

      <section
        id="skills"
        className="px-6 pb-24"
        aria-labelledby="skills-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="skills-heading" className="sr-only">
            Technical skills and tools
          </h2>

          <div className="grid gap-6 lg:grid-cols-12">
            {skillCategories.map((category, index) => {
              return (
                <div
                  key={category.title || index}
                  className="rounded-2xl border border-border bg-panel p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8 lg:col-span-6 lg:col-start-auto">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                            {category.icon}
                          </div>
                        </div>
                        <div className="min-w-0">
                          <h3 className="truncate font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <span className="shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground">
                        {`${String(category.skills.length).padStart(2, "0")} ITEMS`}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-1 flex-col">
                    <p className="max-w-[52ch] text-sm leading-7 text-muted-foreground sm:text-base">
                      {category.description}
                    </p>

                    <div className="mt-6 border-t border-border/70 pt-5">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                          Technologies
                        </span>
                      </div>

                      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {category.skills.map(skill => (
                          <li key={skill.name}>
                            <div className="group/tile flex h-full min-h-11 items-center gap-2.5 rounded-lg border border-border/70 bg-background px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-secondary/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                              <span className="flex shrink-0 items-center justify-center text-muted-foreground transition-colors duration-200">
                                {skill.icon}
                              </span>
                              <span className="text-sm leading-snug font-medium text-secondary-foreground transition-colors duration-200">
                                {skill.name}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
