import React, { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import resumeUrl from "@/assets/Resume.pdf";

const profile = {
  email: "sanjaykumar.sr1011@gmail.com",
  resumeUrl,
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sanjay-kumar-s-r",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/sanju1098",
    icon: Github,
  },
  {
    name: "StackBlitz",
    href: "https://stackblitz.com/@sanju1098",
    icon: Zap,
  },
];

const Contact: React.FC = React.memo(() => {
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
          <h1 className="mt-6 max-w-[18ch] text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-card-foreground md:text-6xl">
            Get in touch
          </h1>
          <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I’m open to senior frontend roles where the interface is central to
            the product. Email is the best way to reach me.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-hairline bg-panel/40 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label-mono">Contact details</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-card-foreground md:text-4xl">
              Reach me directly
            </h2>
            <p className="mt-5 max-w-[56ch] text-base text-pretty leading-relaxed text-muted-foreground">
              Hiring for a senior frontend role, or want to talk React, design
              systems, or accessibility? Email me or send a message on LinkedIn.
            </p>

            <dl className="mt-8">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Location
              </dt>
              <dd className="mt-1 text-base text-card-foreground">
                Bangalore, India
              </dd>
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary px-4 py-2.5 text-base text-secondary-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent">
                  <Icon className="size-4" aria-hidden />
                  {name}
                  <ArrowUpRight className="size-4 opacity-60" aria-hidden />
                </a>
              ))}
            </div>

            <Button asChild variant="secondary" className="mt-8">
              <a
                href={profile.resumeUrl}
                download="Sanjay Kumar S R_Resume.pdf">
                <ArrowDownToLine className="size-4" aria-hidden />
                Download résumé (PDF)
              </a>
            </Button>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-md bg-panel p-6 ring-1 ring-border/70 md:p-7">
              <span className="flex size-10 items-center justify-center rounded-sm bg-accent/15 text-accent">
                <Mail className="size-5" aria-hidden />
              </span>

              <h2 className="mt-5 font-display text-xl font-medium text-card-foreground">
                Drop me a mail
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Whether it’s a role or a question about my work, you can drop a
                mail at the address below. I’ll reply by email.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-5 block break-all font-mono text-base text-card-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent">
                {profile.email}
              </a>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`mailto:${profile.email}`}>Email me</a>
                </Button>
                <Button type="button" variant="secondary" onClick={copyEmail}>
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
      </section>
    </>
  );
});

export default Contact;
