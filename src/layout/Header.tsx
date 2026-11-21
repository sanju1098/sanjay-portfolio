import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "@/content/layout";

const STORAGE_KEY = "sanjay-theme";

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light") return true;
    if (stored === "dark") return false;
  } catch {}

  return !window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Header = () => {
  const [isLight, setIsLight] = useState<boolean>(getInitialTheme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", !isLight);
    root.classList.toggle("light", isLight);

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isLight ? "#f7f7f2" : "#111315");

    try {
      window.localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
    } catch {}
  }, [isLight]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "border-border/80 bg-background/90 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          : "border-transparent bg-background/20"
      }`}>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          aria-label="Sanjay Kumar S R, home"
          className="group rounded-md font-display text-2xl font-semibold tracking-tight text-card-foreground transition-colors outline-none hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background">
          Sanjay<span className="text-accent">.</span>SR
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map(item => {
            const active = isActiveRoute(item.href);

            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative inline-flex py-3 font-mono text-sm tracking-[0.16em] uppercase transition-colors duration-300 outline-none focus-visible:text-accent ${
                    active
                      ? "text-accent"
                      : "text-muted-foreground hover:text-card-foreground"
                  }`}>
                  {item.name}

                  <span
                    className={`absolute inset-x-0 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ease-out motion-reduce:transition-none ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    }`}
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label={
              isLight ? "Switch to dark theme" : "Switch to light theme"
            }
            onClick={() => setIsLight(value => !value)}
            className="group inline-flex size-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 outline-none hover:border-accent/50 hover:bg-accent/10 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <span className="transition-transform duration-300 group-hover:rotate-12">
              {isLight ? (
                <Moon className="size-4" aria-hidden />
              ) : (
                <Sun className="size-4" aria-hidden />
              )}
            </span>
          </button>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(value => !value)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 outline-none hover:border-accent/50 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden">
            {isMobileMenuOpen ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        aria-hidden={!isMobileMenuOpen}
        className={`grid overflow-hidden border-t border-border/70 bg-background/95 transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          isMobileMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}>
        <div className="overflow-hidden">
          <nav aria-label="Mobile navigation" className="px-6 py-4">
            <ul className="grid gap-1">
              {navItems.map((item, index) => {
                const active = isActiveRoute(item.href);

                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-center justify-between rounded-lg border px-4 py-3.5 font-mono text-xs tracking-[0.14em] uppercase transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        active
                          ? "border-accent/25 bg-accent/10 text-accent"
                          : "border-transparent text-muted-foreground hover:border-border hover:bg-secondary/60 hover:text-card-foreground"
                      }`}
                      style={{
                        transitionDelay: isMobileMenuOpen
                          ? `${index * 35}ms`
                          : "0ms",
                      }}>
                      <span>{item.name}</span>

                      <ArrowUpRight
                        className={`size-4 transition-all duration-300 ${
                          active
                            ? "translate-x-0 text-accent opacity-100"
                            : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                        aria-hidden
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                Portfolio / 2026
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] tracking-wide text-muted-foreground">
                <span className="size-1.5 rounded-full bg-accent" />
                Available for opportunities
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
