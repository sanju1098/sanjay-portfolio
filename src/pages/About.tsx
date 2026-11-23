import React, { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { certificates, socialLinks, workAchievements } from "@/content/about";
import { EMAIL } from "@/content/layout";
import resumeUrl from "@/assets/Resume.pdf";
import { optimizedCloudinaryUrl } from "@/lib/cloudinary";
import {
  Card,
  CardHeader,
  CardContent,
  AccentLine,
  SectionHeader,
} from "@/components/ui/card";

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
      <section className="relative px-6 pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="rise relative mx-auto max-w-7xl">
          <SectionHeader
            label="A LITTLE ABOUT ME"
            heading="Engineering with"
            headingHighlight=" purpose and curiosity."
            subtext="I'm Sanjay, a Senior Experience Engineer with 5+ years of experience building digital products and frontend applications. My journey started with VMware's CSP Marketplace products, where I focused on accessibility and form reliability. At Unisys, I helped build a design system for airline and cargo platforms. Today, at Publicis Sapient, I work on personalization and experimentation for Cunard and P&O Cruises. I enjoy solving engineering problems through thoughtful interfaces, scalable architecture, and reusable solutions. I'm also expanding my skills into backend development and AI-powered applications."
            action={
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <div className="rounded-xl border border-border bg-panel/80 px-5 py-4">
                  <p className="font-display text-3xl font-bold tracking-tight text-card-foreground">
                    5<span className="text-accent">+</span>
                  </p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                    Years of experience
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-panel/80 px-5 py-4">
                  <p className="font-display text-3xl font-bold tracking-tight text-card-foreground">
                    03
                  </p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                    Industry domains
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <Card variant="interactive" padding="lg">
            <AccentLine />
            <CardHeader
              title="EDUCATION"
              subtitle="Bachelor of Engineering in Computer Science"
              count="2016 — 2020"
              icon={
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
              }
            />
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                T John Institute of Technology{" "}
                <span className="mx-2 text-border" aria-hidden>
                  {" "}
                  /{" "}
                </span>{" "}
                Bengaluru, Karnataka
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="HOW I WORK / WHAT I'M EXPLORING"
            heading=""
            number="02"
            action={
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-accent uppercase transition-all outline-none hover:gap-3 hover:text-card-foreground focus-visible:underline">
                Explore full experience
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            }
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card variant="interactive" padding="lg">
              <AccentLine />
              <CardHeader
                title="MY APPROACH"
                subtitle="What I bring to the table."
                count="01 / 02"
              />
              <CardContent className="flex flex-1 flex-col">
                <p className="text-base leading-7 text-muted-foreground">
                  I build production frontends that are accessible, performant,
                  and easy for other engineers to extend. My approach combines
                  reusable component architecture, accessibility testing with
                  NVDA and VoiceOver, and experimentation through A/B testing. I
                  also enjoy mentoring junior engineers on React architecture
                  and component design.
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {[
                    "Frontend architecture",
                    "Accessibility",
                    "Design systems",
                    "Mentoring",
                  ].map(item => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="h-7 rounded-md px-2.5 font-mono text-[10px] font-normal text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-card-foreground">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card variant="interactive" padding="lg">
              <AccentLine />
              <CardHeader
                title="CURRENT FOCUS"
                subtitle="Right now."
                count={
                  <span className="flex items-center gap-2 font-mono text-[10px] tracking-wide text-accent uppercase">
                    <span className="size-1.5 rounded-full bg-accent" />
                    In progress
                  </span>
                }
              />
              <CardContent className="flex flex-1 flex-col">
                <p className="text-base leading-7 text-muted-foreground">
                  I'm a Senior Frontend Engineer (titled Senior Experience
                  Engineer) at Publicis Sapient, building Next.js features for
                  Cunard and P&O Cruises. My work includes personalization
                  variants, A/B testing, AEM feature flags, brand and
                  locale-specific configurations, Jest tests, and SonarQube
                  quality gates in CI.
                </p>

                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  Outside client work, I'm learning backend development with
                  Node.js and Express and building AI applications, including
                  AstraMind, a RAG-based PDF chatbot.
                </p>

                <div className="mt-auto border-t border-border pt-6">
                  <Link
                    to="/experience"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-accent uppercase transition-all outline-none hover:gap-3 hover:text-card-foreground focus-visible:underline">
                    Explore full experience
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="MILESTONES / CONTINUOUS LEARNING"
            heading=""
            number="03"
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card variant="interactive" padding="lg" className="flex flex-col">
              <AccentLine />
              <CardHeader
                title="RECOGNITION"
                subtitle="Achievements"
                count={`${String(workAchievements.length).padStart(2, "0")} ITEMS`}
              />
              <CardContent className="flex flex-1 flex-col">
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
              </CardContent>
            </Card>

            <Card variant="interactive" padding="lg" className="flex flex-col">
              <AccentLine />
              <CardHeader
                title="LEARNING"
                subtitle="Certificates"
                count={`${String(certificates.length).padStart(2, "0")} ITEMS`}
              />
              <CardContent className="flex flex-1 flex-col">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="contact"
        tabIndex={-1}
        aria-labelledby="contact-heading"
        className="relative mt-8 overflow-hidden border-t border-border bg-panel/40 px-6 py-16 outline-none md:py-24">
        <div
          className="grid-field pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            label="GET IN TOUCH"
            number="04"
            heading="Let's build something"
            headingHighlight=" meaningful."
            subtext="I'm open to senior frontend and full-stack opportunities where thoughtful engineering makes a difference. Email is the best way to reach me."
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

            <div className="lg:col-span-5">
              <Card variant="interactive" padding="lg">
                <AccentLine />
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                    EMAIL / CONTACT
                  </span>
                </div>

                <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight text-card-foreground">
                  Drop me a line.
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Whether it's a role, a collaboration, or a question about my
                  work, I'd be happy to hear from you.
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
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
