import React from "react";
import { skillCategories } from "@/content/skills";

const WIDE = {
  span: "lg:col-span-7",
  cols: "grid-cols-2 sm:grid-cols-3",
};

const NARROW = {
  span: "lg:col-span-5",
  cols: "grid-cols-2",
};

const layouts = [
  WIDE, // Frontend
  NARROW, // Backend
  WIDE, // Quality & Performance
  NARROW, // DevOps & Build Tools
  WIDE, // Tools & Platforms
  NARROW, // AI Application Development
];

const fallback = { span: "lg:col-span-12", cols: "grid-cols-2 sm:grid-cols-4" };

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
          <h1 className="mt-6 max-w-[18ch] font-display text-4xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-6xl">
            Tools for thoughtful shipping.
          </h1>

          <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            A practical toolkit for building polished interfaces, scalable
            systems, and dependable product experiences.
          </p>
        </div>
      </section>

      <section id="skills" className="px-6 pb-20 pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-12">
            {skillCategories.map((category, index) => {
              const { span, cols } = layouts[index] ?? fallback;

              return (
                <article
                  key={category.title || index}
                  className={`group relative overflow-hidden rounded-md bg-panel p-7 ring-1 ring-border/70 panel-hover ${span}`}>
                  <div
                    className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />

                  <header className="relative flex items-start gap-4 border-b border-border/60 pb-5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-secondary text-accent ring-1 ring-border/60 transition-colors duration-300 group-hover:ring-accent/40">
                      {category.icon}
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-xl font-medium text-card-foreground">
                        {category.title}
                      </h2>
                    </div>
                  </header>

                  <p className="relative mt-5 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>

                  <ul className={`relative mt-6 grid gap-2 ${cols}`}>
                    {category.skills.map(skill => (
                      <li key={skill.name}>
                        <div className="group/tile flex h-full items-center gap-2.5 rounded-sm bg-card px-3 py-2.5 ring-1 ring-border/60 transition-all duration-200 hover:-translate-y-0.5 hover:ring-accent/50">
                          <span className="shrink-0 text-muted-foreground transition-colors duration-200 group-hover/tile:text-accent">
                            {skill.icon}
                          </span>
                          <span className="text-base font-medium leading-snug text-secondary-foreground transition-colors duration-200 group-hover/tile:text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
