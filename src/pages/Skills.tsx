import React from "react";
import { skillCategories } from "@/content/skills";

const Skills: React.FC = React.memo(() => {
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
          <h1 className="mt-6 max-w-[18ch] font-display text-4xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-7xl">
            Tools for thoughtful shipping.
          </h1>

          <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-xl">
            A practical toolkit for building polished interfaces, scalable
            systems, and dependable product experiences.
          </p>
        </div>
      </section>

      <section id="skills" className="px-6 pb-20 pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-12">
            {skillCategories.map((category, index) => (
              <article
                key={category.title || index}
                className={`group rounded-md bg-panel p-6 ring-1 ring-border panel-hover md:p-7 ${
                  index === 0 || index === 2
                    ? "lg:col-span-5"
                    : index === 1 || index === 3
                      ? "lg:col-span-7"
                      : "lg:col-span-12"
                }`}>
                <div
                  className="absolute top-0 right-0 size-32 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center gap-4 pb-6 border-b-2 border-accent/20">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-2 ring-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-accent/50">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-card-foreground">
                        {category.title}
                      </h2>
                      <p className="mt-1 text-sm text-accent font-mono uppercase tracking-wider">
                        {category.skills.length} tools
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                    {category.skills.map(skill => (
                      <div
                        key={skill.name}
                        className="group/skill relative flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-background/60 p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:bg-accent/5 hover:shadow-md">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-panel ring-1 ring-border transition-all duration-200 group-hover/skill:ring-accent/40 group-hover/skill:scale-110">
                          {skill.icon}
                        </div>
                        <span className="text-center font-medium text-sm leading-tight text-muted-foreground transition-colors group-hover/skill:text-accent">
                          {skill.name}
                        </span>
                      </div>
                    ))}
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

export default Skills;
