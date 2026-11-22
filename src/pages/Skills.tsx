import React from "react";
import { skillCategories } from "@/content/skills";
import {
  Card,
  CardHeader,
  CardContent,
  AccentLine,
  SectionHeader,
} from "@/components/ui/card";

const Skills: React.FC = React.memo(() => {
  return (
    <>
      <section className="relative px-6 pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="rise relative mx-auto max-w-7xl">
          <SectionHeader
            label="TECHNICAL TOOLKIT / CAPABILITIES"
            heading="The tools behind"
            headingHighlight=" the work."
            subtext="A growing toolkit shaped by building digital products. Strongest in frontend engineering, with expanding experience across backend development, quality, infrastructure, and AI-powered applications."
            action={
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
                <div className="flex items-center gap-3 font-mono text-xs tracking-wide text-muted-foreground">
                  <span className="text-card-foreground">
                    {String(skillCategories.length).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-border" aria-hidden />
                  <span>Skill categories</span>
                </div>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="inline-flex items-center rounded-md border border-accent/30 bg-accent/10 px-3 py-2 font-mono text-[11px] tracking-wide text-accent">
                    Frontend focused
                  </span>
                  <span className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-3 py-2 font-mono text-[11px] tracking-wide text-muted-foreground">
                    Full-stack growth
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
                <Card
                  key={category.title || index}
                  variant="interactive"
                  padding="lg"
                  className="lg:col-span-6 lg:col-start-auto">
                  <AccentLine />
                  <CardHeader
                    title={category.title}
                    count={`${String(category.skills.length).padStart(2, "0")} ITEMS`}
                    icon={
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                        {category.icon}
                      </div>
                    }
                  />
                  <CardContent className="flex flex-1 flex-col">
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
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
