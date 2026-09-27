import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const STORAGE_KEY = "sanjay-theme";

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light") return true;
  if (stored === "dark") return false;

  return !window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Header = () => {
  const [isLight, setIsLight] = useState<boolean>(getInitialTheme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !isLight);
    document.documentElement.classList.toggle("light", isLight);
    window.localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
  }, [isLight]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveRoute = (href: string) => location.pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-lg">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-md rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-card-foreground group-hover:text-accent transition-colors">
              Sanjay.SR
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-4 py-2 font-mono text-sm font-medium uppercase tracking-wider transition-all duration-200 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActiveRoute(item.href)
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={
              isLight ? "Switch to dark theme" : "Switch to light theme"
            }
            onClick={() => setIsLight(value => !value)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground border border-border/50 bg-secondary/50 backdrop-blur-sm transition-all hover:text-accent hover:border-accent/50 hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            {isLight ? (
              <Moon className="size-4" aria-hidden />
            ) : (
              <Sun className="size-4" aria-hidden />
            )}
          </button>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(value => !value)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground border border-border/50 bg-secondary/50 backdrop-blur-sm md:hidden">
            {isMobileMenuOpen ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-border/50 bg-panel/95 backdrop-blur-md px-6 py-6 md:hidden">
          <ul className="grid gap-2">
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 font-mono text-base uppercase tracking-wider transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActiveRoute(item.href)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
