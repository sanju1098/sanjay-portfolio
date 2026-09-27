import React from "react";
import { workExperiences } from "@/content/experience";
import Picture from "@/components/Picture";

const Experience: React.FC = React.memo(() => {
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
            Professional experience
          </h1>

          <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-xl">
            A record of building high-load frontend systems, accessible
            interfaces, and dependable product experiences.
          </p>
        </div>
      </section>

      <section id="experience" className="px-6 pb-20 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="label-mono">Selected roles</p>
              <h2 className="mt-4 max-w-[12ch] text-balance font-display text-3xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-5xl">
                Professional background
              </h2>
              <p className="mt-4 max-w-[36ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-xl">
                Four teams, one throughline: frontend systems shaped by
                ownership, scale, and shipped outcomes.
              </p>
            </div>
          </div>

          <ol className="space-y-10 lg:col-span-8">
            {workExperiences.map((exp, index) => (
              <li
                key={`${exp.company}-${index}`}
                className="relative border-b border-l border-border/60 pb-6 pl-7 sm:pl-8">
                <span
                  className={`absolute -left-1.25 top-1.5 size-2.5 rounded-full ${
                    index === 0 ? "bg-accent" : "bg-border"
                  }`}
                  aria-hidden
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-start gap-3.5">
                    <Picture
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={44}
                      height={44}
                      loading="lazy"
                      className="size-11 shrink-0 rounded-sm border border-border bg-card object-contain p-1"
                    />
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {index === 0 ? "Current role" : "Previous role"}
                      </p>
                      <h3 className="text-xl font-medium leading-tight text-card-foreground md:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-lg text-accent">
                        {exp.company.trim()}
                      </p>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-accent sm:pt-1">
                    {exp.timeline}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map(technology => (
                    <span className="chip" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    Key contributions
                  </p>
                  <ul className="mt-3 space-y-2.5 list-disc list-inside marker:text-accent">
                    {exp.responsibilities.map(responsibility => (
                      <li
                        key={responsibility}
                        className="text-base leading-relaxed text-muted-foreground max-w-[62ch] text-pretty">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
});

export default Experience;
