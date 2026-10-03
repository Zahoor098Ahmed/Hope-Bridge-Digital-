"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// Content is visible by default (no-JS, above the fold, calm mode, reduced motion).
// Only blocks that start below the fold are hidden after mount, then faded in on scroll.
export function Reveal({
  children,
  className = "",
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (document.documentElement.dataset.calm === "true") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.pending = "";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          delete el.dataset.pending;
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-out data-pending:translate-y-6 data-pending:opacity-0 ${className}`}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
    >
      {children}
    </div>
  );
}
