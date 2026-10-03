"use client";

import { useState } from "react";
import { accent, type AppInfo } from "@/lib/apps";
import { AppMark } from "./AppMark";
import { phones } from "./Mockups";
import { ButtonLink, CheckList, Chip, cx, emClass } from "./ui";

/** Tabbed product showcase: pick an app on the left, see it on a large stage on the right. */
export function AppShowcase({ apps }: { apps: AppInfo[] }) {
  const [active, setActive] = useState(0);
  const app = apps[active];
  const PhoneEl = phones[app.slug];

  return (
    <div className="grid gap-5 lg:grid-cols-[320px_1fr] lg:gap-6">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Our apps"
        className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 lg:flex-col lg:overflow-visible"
      >
        {apps.map((a, i) => {
          const selected = i === active;
          return (
            <button
              key={a.slug}
              role="tab"
              id={`tab-${a.slug}`}
              aria-selected={selected}
              aria-controls={`panel-${a.slug}`}
              onClick={() => setActive(i)}
              style={accent(a.accent)}
              className={cx(
                "group relative flex min-w-[250px] shrink-0 snap-start cursor-pointer items-center gap-4 overflow-hidden rounded-[24px] border p-4 text-left transition duration-300 lg:min-w-0",
                selected ? "border-accent/40 bg-surface shadow-lift" : "border-line bg-surface/50 hover:bg-surface"
              )}
            >
              <AppMark app={a} />
              <span className="min-w-0">
                <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">0{i + 1}</span>
                <span className="block text-lg font-bold tracking-tight">{a.name}</span>
                <span className="block truncate text-sm text-muted">{a.category}</span>
              </span>
              <span
                aria-hidden="true"
                className={cx(
                  "absolute inset-y-4 left-0 w-1 rounded-r-full bg-accent transition-opacity",
                  selected ? "opacity-100" : "opacity-0"
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        key={app.slug}
        role="tabpanel"
        id={`panel-${app.slug}`}
        aria-labelledby={`tab-${app.slug}`}
        style={accent(app.accent)}
        className="grid animate-fade-up overflow-hidden rounded-[32px] border border-line bg-surface shadow-lift md:grid-cols-[1.1fr_1fr]"
      >
        <div className="flex flex-col p-6 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <AppMark app={app} size="sm" />
            <span className="text-sm font-semibold text-muted">{app.category}</span>
          </div>
          <h3 className="mb-4 font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.02] font-medium tracking-[-0.03em]">
            {app.name}
            <span className={cx(emClass, "block text-[0.62em] leading-tight")}>{app.tagline}</span>
          </h3>
          <p className="mb-7 text-ink-soft text-pretty">{app.summary}</p>
          <CheckList items={app.highlights} className="mb-8" />
          <div className="mt-auto">
            <div className="mb-6 flex flex-wrap gap-2">
              {app.platforms.map((p) => (
                <Chip key={p}>{p}</Chip>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={`/apps/${app.slug}`} variant="accent">
                Explore {app.name}
              </ButtonLink>
              <ButtonLink href={`/apps/${app.slug}#try`} variant="ghost">
                Try it live
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Stage */}
        <div className="relative isolate flex min-h-[460px] items-center justify-center overflow-hidden bg-[linear-gradient(160deg,var(--accent-soft),color-mix(in_srgb,var(--accent)_22%,var(--color-surface)))] p-8">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dots opacity-60" />
          <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[380px] -translate-1/2 rounded-full bg-accent/25 blur-[80px]" />
          <PhoneEl className="scale-[0.92] sm:scale-100" />
        </div>
      </div>
    </div>
  );
}
