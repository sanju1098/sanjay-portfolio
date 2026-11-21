import { useState, type FC, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dwsalphhy/image/upload/v1788338164/ef104d58-b653-45be-afeb-510b4aa77c69.png";

const controlButton =
  "inline-flex size-8 items-center justify-center rounded-full bg-muted text-foreground ring-1 ring-border transition-all hover:scale-105 hover:bg-muted/70 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100";

export const ProjectCarousel: FC<{
  name: string;
  images: { src: string; alt: string }[];
}> = ({ name, images }) => {
  const slides =
    images.length > 0 ? images : [{ src: FALLBACK_IMAGE, alt: name }];
  const count = slides.length;

  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<Set<string>>(() => new Set());

  const go = (next: number) => setIndex((next + count) % count);

  const markLoaded = (src: string) =>
    setLoaded(previous =>
      previous.has(src) ? previous : new Set(previous).add(src),
    );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") go(index - 1);
    if (event.key === "ArrowRight") go(index + 1);
  };

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-muted/20 ring-1 ring-border">
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${name} screenshots`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="absolute inset-0 flex flex-col overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {/* Image area: identical size for every project */}
        <div className="min-h-0 flex-1 px-3 pt-3">
          <div className="relative h-full overflow-hidden rounded-lg">
            <div
              className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}>
              {slides.map((slide, i) => {
                const isLoading = !loaded.has(slide.src);

                return (
                  <div
                    key={`${slide.src}-${i}`}
                    className="relative h-full w-full shrink-0"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${count}`}
                    aria-hidden={i !== index}>
                    {isLoading ? (
                      <div
                        className="absolute inset-0 z-10 flex items-center justify-center"
                        aria-hidden>
                        <LoaderCircle className="size-8 animate-spin text-accent" />
                      </div>
                    ) : null}

                    <img
                      ref={element => {
                        // Handles images the browser already cached
                        if (element?.complete && element.naturalWidth > 0) {
                          markLoaded(slide.src);
                        }
                      }}
                      src={slide.src}
                      alt={slide.alt}
                      width={1200}
                      height={750}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => markLoaded(slide.src)}
                      onError={() => markLoaded(slide.src)}
                      className={`size-full object-contain transition-opacity duration-200 ${
                        isLoading ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Controls bar: always rendered so every card matches */}
        <div className="flex h-12 shrink-0 items-center justify-between gap-3 px-4">
          {count > 1 ? (
            <>
              <div className="flex items-center gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={`${slide.src}-${i}`}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    aria-current={i === index}
                    className={`relative h-1.5 rounded-full transition-all after:absolute after:-inset-x-1 after:-inset-y-2.5 motion-reduce:transition-none ${
                      i === index
                        ? "w-6 bg-primary"
                        : "w-3 bg-muted-foreground hover:bg-foreground"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous screenshot"
                  className={controlButton}>
                  <ChevronLeft className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next screenshot"
                  className={controlButton}>
                  <ChevronRight className="size-4" aria-hidden />
                </button>
              </div>
            </>
          ) : null}
        </div>

        <p aria-live="polite" className="sr-only">
          Screenshot {index + 1} of {count}
        </p>
      </div>
    </div>
  );
};
