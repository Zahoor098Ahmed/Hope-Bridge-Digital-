"use client";

import { useRef, type ReactNode } from "react";
import { cx } from "./ui";

/** A card with a soft accent glow that follows the pointer. */
export function Spotlight({ className, children, dark }: { className?: string; children: ReactNode; dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={cx(
        "group relative h-full overflow-hidden rounded-[28px] border p-6 transition duration-500 sm:p-8",
        dark ? "border-white/10 bg-white/[0.04] hover:border-white/20" : "border-line bg-surface shadow-soft hover:shadow-lift",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--accent) ${dark ? 22 : 12}%, transparent), transparent 45%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
