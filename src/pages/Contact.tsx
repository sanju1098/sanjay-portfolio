import React, { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Send,
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
  const [sent, setSent] = useState(false);

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
            Get in touch
          </h1>
          <p className="mt-8 max-w-[62ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-xl">
            Open to senior frontend engineering roles, full-stack opportunities,
            and building AI-powered products with React, Next.js, TypeScript,
            and modern backend technologies.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-hairline bg-panel/40 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-mono">Connection</p>
            <h2 className="mt-4 max-w-[12ch] font-display text-3xl font-bold leading-tight tracking-tight text-card-foreground md:text-5xl">
              Direct lines
            </h2>
            <p className="mt-5 max-w-[42ch] text-base text-pretty leading-relaxed text-muted-foreground">
              My inbox is open for frontend engineering opportunities,
              full-stack collaborations, technical discussions about React,
              TypeScript, design systems, performance optimization, and
              AI-powered product development.
            </p>

            <dl className="mt-8 space-y-5">
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-base text-card-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent">
                  {profile.email}
                </a>
              </dd>

              <div></div>
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
                Download resume (PDF)
              </a>
            </Button>
          </div>

          <div className="lg:col-span-7">
            <form
              className="rounded-md bg-panel p-6 ring-1 ring-border/70 md:p-7"
              onSubmit={event => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const subject = encodeURIComponent(
                  `Portfolio enquiry - ${data.get("name")}`,
                );
                const body = encodeURIComponent(
                  `${data.get("message")}\n\n- ${data.get("name")} (${data.get("email")})`,
                );
                window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
                setSent(true);
              }}>
              <div className="mb-6 flex items-center gap-3 border-b border-border/70 pb-5">
                <span className="flex size-10 items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-card-foreground">
                    Send a message
                  </h3>
                  <p className="mt-1 text-base text-muted-foreground">
                    I will get back to you by email.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="field mt-2"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="field mt-2"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="field mt-2 resize-none"
                />
              </div>

              <Button type="submit" className="mt-6 w-full">
                <Send className="size-4" aria-hidden />
                Send message
              </Button>
              <p
                aria-live="polite"
                className="mt-4 min-h-5 font-mono text-xs uppercase tracking-widest text-accent">
                {sent ? "Opening your email client..." : ""}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
});

export default Contact;
