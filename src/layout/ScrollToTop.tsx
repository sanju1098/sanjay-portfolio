import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MAX_WAIT_MS = 3000;

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const arrivedFromAnotherPage = previousPath.current !== pathname;
    previousPath.current = pathname;

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const id = decodeURIComponent(hash.slice(1));

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) return false;

      target.scrollIntoView({
        behavior: arrivedFromAnotherPage || reduceMotion ? "instant" : "smooth",
        block: "start",
      });
      target.focus({ preventScroll: true });
      return true;
    };

    if (scrollToTarget()) return;

    // The lazy page has not rendered yet: wait for the element to appear
    const observer = new MutationObserver(() => {
      if (scrollToTarget()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const timer = window.setTimeout(() => observer.disconnect(), MAX_WAIT_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
