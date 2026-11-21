import type { FC } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, workProfiles } from "@/content/project";
import {
  Card,
  CardContent,
  AccentLine,
  SectionHeader,
} from "@/components/ui/card";

const actionButton = "h-10 w-full px-4 text-sm sm:w-auto";

const Projects: FC = () => (
  <>
    <section className="relative px-6 pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="rise mx-auto max-w-7xl">
        <SectionHeader
          label="PERSONAL WORK / EXPERIMENTS"
          heading="Building things"
          headingHighlight=" beyond the brief."
          subtext="Personal builds, side projects, and technical experiments. Exploring frontend engineering, full-stack development, and ideas that turn into something useful."
          action={
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
              <div className="flex items-center gap-3 font-mono text-xs tracking-wide text-muted-foreground">
                <span className="text-card-foreground">
                  {String(projects.length).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-border" aria-hidden />
                <span>Projects & explorations</span>
              </div>
              <ul className="flex flex-wrap gap-2 lg:justify-end">
                {workProfiles.map(profile => (
                  <li key={profile.profileName}>
                    <Button
                      asChild
                      variant="secondary"
                      className="h-10 px-4 text-sm">
                      <a
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {profile.icon}
                        {profile.profileName}
                        <ArrowUpRight
                          className="size-3.5 opacity-60"
                          aria-hidden
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      </div>
    </section>

    <section
      id="projects"
      className="px-6 pb-24"
      aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="projects-heading" className="sr-only">
          Selected projects
        </h2>

        <div className="space-y-6 md:space-y-10">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const titleLink = project.live ?? project.repo;
            const liveLabel = project.liveLabel ?? "Live preview";

            return (
              <Card
                key={project.name}
                variant="interactive"
                padding="none"
                className="flex h-full flex-col">
                <AccentLine />
                <div className="flex items-center justify-between gap-3 border-b border-border bg-background px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="size-2 rounded-full bg-muted-foreground/40 transition-colors duration-300 group-hover:bg-accent" />
                      <span className="size-2 rounded-full bg-muted-foreground/40 transition-colors duration-300 group-hover:bg-accent" />
                      <span className="size-2 rounded-full bg-accent" />
                    </span>
                    <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
                      {String(index + 1).padStart(2, "0")} / {project.subtitle}
                    </span>
                  </div>
                </div>

                <CardContent className="flex-1 p-3 sm:p-5 lg:p-6">
                  <div className="grid flex-1 lg:grid-cols-12 lg:items-stretch">
                    <div
                      className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
                      <div className="relative overflow-hidden rounded-xl bg-background">
                        <ProjectCarousel
                          name={project.name}
                          images={project.images}
                        />
                      </div>
                    </div>

                    <div
                      className={`flex min-w-0 flex-col lg:col-span-7 ${isReversed ? "lg:order-1" : ""}`}>
                      <h3
                        className="mt-2 font-display font-bold tracking-tight text-card-foreground"
                        style={{
                          fontSize: "clamp(1.5rem, 2vw + 0.5rem, 2.25rem)",
                        }}>
                        {titleLink ? (
                          <a
                            href={titleLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="decoration-accent/60 decoration-2 underline-offset-4 outline-none hover:underline focus-visible:underline">
                            {project.name}
                            <span className="sr-only">
                              (opens in a new tab)
                            </span>
                          </a>
                        ) : (
                          project.name
                        )}
                      </h3>

                      <p className="mt-4 max-w-[60ch] text-sm leading-7 text-muted-foreground sm:text-base">
                        {project.description}
                      </p>

                      <div className="mt-7">
                        <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                          Technologies
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {project.stack.map(tech => (
                            <li key={tech}>
                              <Badge
                                variant="outline"
                                className="h-7 rounded-md px-2.5 font-mono text-[11px] font-normal text-muted-foreground transition-colors duration-300 group-hover:border-accent/40 group-hover:text-card-foreground">
                                {tech}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {(project.live || project.repo) && (
                        <div className="mt-auto pt-7">
                          <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:flex-wrap">
                            {project.live && (
                              <Button asChild className={actionButton}>
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  {liveLabel}
                                  <ArrowUpRight aria-hidden />
                                  <span className="sr-only">
                                    for {project.name} (opens in a new tab)
                                  </span>
                                </a>
                              </Button>
                            )}
                            {project.repo && (
                              <Button
                                asChild
                                variant="secondary"
                                className={actionButton}>
                                <a
                                  href={project.repo}
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  <Code2 aria-hidden /> Source code
                                  <span className="sr-only">
                                    of {project.name} (opens in a new tab)
                                  </span>
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
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

export default Projects;
