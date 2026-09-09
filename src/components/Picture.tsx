import React, { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const loadedImageSources = new Set<string>();
const IMAGE_LOAD_TIMEOUT = 15000;

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dwsalphhy/image/upload/v1788338164/ef104d58-b653-45be-afeb-510b4aa77c69.png";

interface PictureProps {
  src?: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
  fallbackSrc?: string;
}

const Picture: React.FC<PictureProps> = ({
  src,
  alt = "",
  className,
  loading = "lazy",
  fetchPriority = "auto",
  width,
  height,
  fallbackSrc = FALLBACK_IMAGE,
}) => {
  const initialSrc = src || fallbackSrc;
  const [imageSrc, setImageSrc] = useState(initialSrc);
  const [isLoading, setIsLoading] = useState(
    !loadedImageSources.has(initialSrc),
  );

  useEffect(() => {
    const nextSrc = src || fallbackSrc;
    setImageSrc(nextSrc);
    setIsLoading(!loadedImageSources.has(nextSrc));
  }, [src, fallbackSrc]);

  useEffect(() => {
    if (!isLoading) return;

    const timeoutId = window.setTimeout(
      () => setIsLoading(false),
      IMAGE_LOAD_TIMEOUT,
    );
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [imageSrc, isLoading]);

  const handleError = () => {
    if (imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setIsLoading(true);
      return;
    }

    setIsLoading(false);
  };

  const handleLoad = () => {
    loadedImageSources.add(imageSrc);
    setIsLoading(false);
  };

  return (
    <span className={cn("relative block", className)} aria-busy={isLoading}>
      {isLoading && (
        <span
          className="absolute inset-0 z-10 flex items-center justify-center bg-background/60"
          aria-label="Loading image">
          <LoaderCircle
            className="size-8 animate-spin text-accent"
            aria-hidden
          />
        </span>
      )}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "block size-full object-contain transition-opacity duration-200",
          isLoading ? "opacity-0" : "opacity-100",
        )}
      />
    </span>
  );
};

export default Picture;
