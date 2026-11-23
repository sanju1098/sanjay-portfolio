import React, { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { certificates, socialLinks, workAchievements } from "@/content/about";
import { EMAIL } from "@/content/layout";
import resumeUrl from "@/assets/Resume.pdf";
import { optimizedCloudinaryUrl } from "@/lib/cloudinary";
import { PageSectionHeader } from "@/components/page-section-header";

const BADGE_IMAGE_WIDTH = 88;

const profile = {
  email: EMAIL,
  resumeUrl,
};

const cardClass =
  "group relative overflow-hidden rounded-2xl border border-border bg-panel transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0";

const accentLineClass =
  "pointer-events-none absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none";

const About: React.FC = React.memo(() => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      {/* Introduction */}
      <section className="relative px-6 pt-32 pb-10">
        <div className="rise relative mx-auto max-w-7xl">
          <PageSectionHeader
            label="A LITTLE ABOUT ME"
            heading="Curious by nature,"
            headingHighlight=" an engineer by choice."
            subtext="I'm Sanjay, a software engineer who enjoys understanding how things work and finding thoughtful ways to make them better. What started as an interest in building interfaces has grown into a deeper appreciation for problem-solving, clean code, and the decisions that shape great software. I value curiosity over assumptions, simplicity over unnecessary complexity, and learning through hands-on exploration. Outside of delivering software, I'm always looking for new ideas to explore, concepts to understand, and opportunities to become a better engineer."
          />
        </div>
      </section>

      {/* Education */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-border bg-panel p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                      <svg
                        className="size-5"
                        aria-hidden
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
                      EDUCATION
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Bachelor of Engineering in Computer Science{" "}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground">
                  2016 — 2020{" "}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                T John Institute of Technology{" "}
                <span className="mx-2 text-border" aria-hidden>
                  /
                </span>
                Bengaluru, Karnataka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work / What I'm Exploring */}
      <section id="about" className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <PageSectionHeader
            label="HOW I WORK / WHAT I'M EXPLORING"
            heading=""
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* My Approach */}
            <div className="rounded-2xl border border-border bg-panel p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
                        MY APPROACH
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        How I think about engineering.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground">
                    01 / 02
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <p className="text-base leading-7 text-muted-foreground">
                  I believe good engineering starts with understanding the
                  problem, not immediately jumping into implementation. I value
                  clear communication, thoughtful trade-offs, maintainable
                  solutions, and attention to the details that often go
                  unnoticed. I enjoy collaborating with different teams, sharing
                  knowledge, and continuously finding ways to improve how I
                  work.
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {[
                  "Problem solving",
                  "Ownership",
                  "Collaboration",
                  "Continuous improvement",
                ].map(item => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="h-7 rounded-md px-2.5 font-mono text-[10px] font-normal text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-card-foreground">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Beyond the Day Job */}
            <div className="rounded-2xl border border-border bg-panel p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
                        BEYOND THE DAY JOB
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        What keeps me curious.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground">
                    02 / 02
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <p className="text-base leading-7 text-muted-foreground">
                  I enjoy stepping outside familiar territory and learning by
                  building. Recently, I've been spending time understanding
                  backend concepts, exploring how AI systems work, and
                  experimenting with ideas that connect different parts of
                  software development. I find the process of turning an
                  unfamiliar concept into something practical especially
                  rewarding.
                </p>

                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  I'm also interested in developer productivity, emerging
                  technologies, and finding better ways to approach everyday
                  engineering challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth and Recognition */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <PageSectionHeader
            label="GROWTH / RECOGNITION"
            heading=""
            number="03"
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recognition */}
            <div className="flex flex-col rounded-2xl border border-border bg-panel p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
                        RECOGNITION{" "}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Professional milestones{" "}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground">
                    {`${String(workAchievements.length).padStart(2, "0")} ITEMS`}{" "}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {workAchievements.map(item => {
                    const targetUrl = item.redirectLink || item.image;

                    return (
                      <article key={item.name} className={cardClass}>
                        <span className={accentLineClass} />
                        <div className="flex h-full flex-col p-4">
                          <div className="flex items-start gap-3">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background p-1.5">
                              <img
                                src={optimizedCloudinaryUrl(
                                  item.badgeImage,
                                  BADGE_IMAGE_WIDTH,
                                )}
                                alt=""
                                width={44}
                                height={44}
                                loading="lazy"
                                decoding="async"
                                className="size-full object-contain"
                              />
                            </span>

                            <div className="min-w-0">
                              <h3 className="line-clamp-3 text-sm leading-5 font-semibold text-card-foreground transition-colors group-hover:text-accent">
                                {item.name}
                              </h3>

                              <p className="mt-2 font-mono text-[10px] tracking-wide text-muted-foreground">
                                ISSUED {item.issueDate}
                              </p>
                            </div>
                          </div>

                          {targetUrl && (
                            <a
                              href={targetUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-5 inline-flex items-center gap-2 border-t border-border pt-3 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-accent">
                              {item.buttonName || "View achievement"}
                              <ExternalLink className="size-3.5" aria-hidden />
                            </a>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-col rounded-2xl border border-border bg-panel p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
                        CERTIFICATIONS{" "}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Learning milestones{" "}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground">
                    {`${String(certificates.length).padStart(2, "0")} ITEMS`}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {certificates.map(item => (
                    <article key={item.name} className={cardClass}>
                      <span className={accentLineClass} />

                      <div className="flex h-full flex-col p-4">
                        <div className="flex items-start gap-3">
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background p-1.5">
                            <img
                              src={optimizedCloudinaryUrl(
                                item.badgeImage,
                                BADGE_IMAGE_WIDTH,
                              )}
                              alt=""
                              width={44}
                              height={44}
                              loading="lazy"
                              decoding="async"
                              className="size-full object-contain"
                            />
                          </span>

                          <div className="min-w-0">
                            <h3 className="line-clamp-3 text-sm leading-5 font-semibold text-card-foreground transition-colors group-hover:text-accent">
                              {item.name}
                            </h3>

                            <p className="mt-2 font-mono text-[10px] tracking-wide text-muted-foreground">
                              ISSUED {item.issueDate}
                            </p>
                          </div>
                        </div>

                        {item.redirectLink && (
                          <a
                            href={item.redirectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 border-t border-border pt-3 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-accent">
                            {item.buttonName || "View certificate"}
                            <ExternalLink className="size-3.5" aria-hidden />
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        tabIndex={-1}
        aria-labelledby="contact-heading"
        className="relative mt-8 overflow-hidden border-t border-border bg-panel/40 px-6 py-12 outline-none">
        <div
          className="grid-field pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <PageSectionHeader
            label="GET IN TOUCH"
            number="04"
            heading="Good conversations"
            headingHighlight=" start somewhere."
            subtext="Have an interesting idea, a challenging problem, or an opportunity to collaborate? I'm always happy to connect, exchange perspectives, and explore possibilities. Feel free to reach out."
          />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="mt-8">
                <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  LOCATION
                </p>

                <p className="mt-2 text-base text-card-foreground">
                  Bengaluru, India
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <Badge
                    key={name}
                    asChild
                    variant="secondary"
                    className="h-10 gap-2 rounded-lg border border-border px-4 text-sm transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent [&>svg]:size-4!">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon aria-hidden />
                      {name}
                      <ArrowUpRight className="opacity-60" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </Badge>
                ))}
              </div>

              <Button asChild variant="secondary" className="mt-8 h-11 px-5">
                <a
                  href={profile.resumeUrl}
                  download="Sanjay Kumar S R_Resume.pdf">
                  <ArrowDownToLine className="size-4" aria-hidden />
                  Download résumé
                  <span className="text-xs text-muted-foreground">PDF</span>
                </a>
              </Button>
            </div>

            {/* Email Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-panel p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_6px_0_0_var(--signal)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--signal)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Mail className="size-5" aria-hidden />
                  </span>

                  <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                    EMAIL / CONTACT
                  </span>
                </div>

                <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight text-card-foreground">
                  Let's connect.
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Whether you'd like to discuss engineering, share an idea, or
                  simply start a conversation, I'd be glad to hear from you.
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-6 block border-b border-border pb-4 font-mono text-base break-all text-card-foreground transition-colors hover:border-accent hover:text-accent">
                  {profile.email}
                </a>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-11 flex-1">
                    <a href={`mailto:${profile.email}`}>
                      Email me
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    className="h-11 flex-1"
                    onClick={copyEmail}>
                    {copied ? (
                      <Check className="size-4" aria-hidden />
                    ) : (
                      <Copy className="size-4" aria-hidden />
                    )}

                    {copied ? "Copied" : "Copy address"}
                  </Button>
                </div>

                <p aria-live="polite" className="sr-only">
                  {copied ? "Email address copied to clipboard" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
