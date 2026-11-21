import { EMAIL, footerLinks } from "@/content/layout";
import { ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-border bg-panel/40 px-6 pt-14 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-card-foreground">
              Sanjay<span className="text-accent">.</span>SR
            </p>
            <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
              Senior frontend engineer building accessible, scalable interfaces.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-card-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
              <Mail className="size-4" aria-hidden />
              {EMAIL}
            </a>
          </div>

          <nav aria-label="Social links" className="md:justify-self-end">
            <ul className="mt-4 grid-cols-2 space-y-2.5 gap-x-6">
              <p className="label-mono">Elsewhere</p>
              {footerLinks.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-sm transition-colors hover:text-foreground">
                    <Icon
                      className="size-4 transition-colors group-hover:text-accent"
                      aria-hidden
                    />
                    {name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sanjay Kumar S R
          </p>

          <p className="font-mono text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center justify-center gap-1 font-mono text-sm! text-primary uppercase transition-all duration-300 hover:border-accent/40 hover:text-accent">
            Back to top
            <ArrowUp
              className="size-5 transition-transform duration-300 group-hover:-translate-y-1"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
