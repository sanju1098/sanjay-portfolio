import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sanju1098",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanjay-kumar-s-r/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:sanjaykumar.sr1011@gmail.com",
    icon: Mail,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-panel/40 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <p className="font-mono text-xs text-muted-foreground/70">
          React · TypeScript · Tailwind
        </p>

        <nav aria-label="Social links" className="flex items-center gap-2">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground ring-1 ring-border transition-colors hover:bg-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <Icon className="size-4" aria-hidden />
            </a>
          ))}
        </nav>

        <p className="text-base text-muted-foreground">
          Copyright © {currentYear}{" "}
          <span className="font-medium text-card-foreground">
            Sanjay Kumar S R
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
