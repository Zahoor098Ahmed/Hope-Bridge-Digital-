"use client";

import { useState, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Sparkles,
  Volume2,
  Gamepad2,
  Network,
  Video,
} from "lucide-react";
import {
  BloomLearnPhone,
  AngelTalkPhone,
  BloomFocusPhone,
  NexiaBridgePhone,
} from "./Mockups";
import { GlassCard, cx } from "./ui";

interface AppItem {
  slug: string;
  name: string;
  category: string;
  highlight: string;
  icon: typeof Video;
  accent: string;
}

const heroApps: AppItem[] = [
  {
    slug: "angel-talk",
    name: "Angel Talk",
    category: "Bilingual AAC Speech",
    highlight: "Visual Symbol Tiles, Sentence Builder & Native Voice",
    icon: Volume2,
    accent: "#7a5af5",
  },
  {
    slug: "bloomlearn",
    name: "BloomLearn",
    category: "Multimodal Video Engine",
    highlight: "AI Video Prompts, Soil Cutaways & Grade 1–5 Curriculum",
    icon: Video,
    accent: "#0ea5e9",
  },
  {
    slug: "bloom-focus",
    name: "Bloom Focus",
    category: "ADHD & Sensory Regulation",
    highlight: "15 Adaptive Focus Games & Tranquil Breathing Exercises",
    icon: Gamepad2,
    accent: "#f0784a",
  },
  {
    slug: "nexia-bridge",
    name: "Nexia Bridge",
    category: "Unified Care Platform",
    highlight: "8 Role-Based Portals for Parents, Therapists & Teachers",
    icon: Network,
    accent: "#4b52d6",
  },
];

export function HeroDeviceShowcase() {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => {
    setActive((curr) => (curr - 1 + heroApps.length) % heroApps.length);
  }, []);

  const next = useCallback(() => {
    setActive((curr) => (curr + 1) % heroApps.length);
  }, []);

  const activeApp = heroApps[active];
  const ActiveIcon = activeApp.icon;

  return (
    <div className="relative mx-auto w-full max-w-[640px] xl:max-w-[700px]">
      {/* 3D Carousel Stage */}
      <div className="relative isolate flex min-h-[560px] sm:min-h-[580px] items-center justify-center overflow-hidden rounded-[44px] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.7),rgba(240,243,255,0.6))] shadow-lift backdrop-blur-md px-2 py-6">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dots opacity-45" />
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[420px] -translate-1/2 rounded-full bg-accent/20 blur-[100px]" />

        {/* Calm mode top-right floating badge (safely placed outside phone area) */}
        <div className="pointer-events-none absolute top-4 right-4 z-40 hidden sm:block">
          <GlassCard className="flex items-center gap-2 py-1.5 px-3 text-xs font-semibold shadow-soft">
            <span className="grid size-6 place-items-center rounded-full bg-mint text-emerald">
              <Leaf size={13} aria-hidden="true" />
            </span>
            <span className="text-ink">Calm mode · Zero flashing</span>
          </GlassCard>
        </div>

        {/* Previous App Arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous app"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-40 grid size-10 sm:size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface/90 text-ink shadow-soft backdrop-blur transition hover:scale-105 hover:bg-surface active:scale-95"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Next App Arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Next app"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-40 grid size-10 sm:size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface/90 text-ink shadow-soft backdrop-blur transition hover:scale-105 hover:bg-surface active:scale-95"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>

        {/* Carousel Phones Track */}
        <div className="relative flex h-[500px] w-full items-center justify-center">
          {heroApps.map((item, idx) => {
            const count = heroApps.length;
            // Calculate relative offset (-1: left, 0: center, 1: right, others: background)
            let diff = (idx - active) % count;
            if (diff > count / 2) diff -= count;
            if (diff < -count / 2) diff += count;

            const isCenter = diff === 0;
            const isLeft = diff === -1 || (diff === count - 1 && count > 2);
            const isRight = diff === 1 || (diff === -(count - 1) && count > 2);

            let styleClass = "opacity-0 pointer-events-none scale-[0.6] z-0";

            if (isCenter) {
              styleClass = "translate-x-0 scale-100 rotate-0 z-30 opacity-100 shadow-lift";
            } else if (isLeft) {
              styleClass = "-translate-x-[150px] sm:-translate-x-[190px] lg:-translate-x-[220px] scale-[0.80] sm:scale-[0.83] -rotate-[7deg] z-10 opacity-60 sm:opacity-75 hover:opacity-100 hover:scale-[0.85] cursor-pointer";
            } else if (isRight) {
              styleClass = "translate-x-[150px] sm:translate-x-[190px] lg:translate-x-[220px] scale-[0.80] sm:scale-[0.83] rotate-[7deg] z-10 opacity-60 sm:opacity-75 hover:opacity-100 hover:scale-[0.85] cursor-pointer";
            }

            return (
              <div
                key={item.slug}
                onClick={() => !isCenter && setActive(idx)}
                className={cx(
                  "absolute top-0 transition-all duration-500 ease-out select-none",
                  styleClass
                )}
                role={isCenter ? "region" : "button"}
                aria-label={isCenter ? `Active interactive demo: ${item.name}` : `Switch to ${item.name}`}
                title={!isCenter ? `Click to view ${item.name}` : undefined}
              >
                {/* Visual click affordance on side cards */}
                {!isCenter && (
                  <div className="absolute inset-0 z-40 rounded-[44px] bg-black/5 hover:bg-transparent transition" />
                )}

                {item.slug === "bloomlearn" && <BloomLearnPhone />}
                {item.slug === "angel-talk" && <AngelTalkPhone />}
                {item.slug === "bloom-focus" && <BloomFocusPhone />}
                {item.slug === "nexia-bridge" && <NexiaBridgePhone />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Switcher Controls & Info Bar (Cleanly placed below stage so zero screen overlap occurs) */}
      <div className="mt-4 flex flex-col items-center gap-3">
        {/* App Switcher Tabs */}
        <div
          role="tablist"
          aria-label="Select hero app"
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-line bg-surface/80 p-1.5 shadow-soft backdrop-blur-md"
        >
          {heroApps.map((item, idx) => {
            const isSelected = active === idx;
            return (
              <button
                key={item.slug}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActive(idx)}
                className={cx(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer",
                  isSelected
                    ? "bg-ink text-white shadow-lift scale-[1.02]"
                    : "text-ink-soft hover:bg-accent-soft hover:text-ink"
                )}
              >
                <span>{item.name}</span>
                {isSelected && (
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic App Feature Highlight Pill */}
        <div className="flex items-center gap-2 rounded-2xl border border-line bg-surface/90 px-4 py-2 text-xs font-medium text-ink-soft shadow-xs backdrop-blur">
          <ActiveIcon size={14} className="shrink-0 text-accent" aria-hidden="true" />
          <span className="font-bold text-ink">{activeApp.name}:</span>
          <span className="truncate">{activeApp.highlight}</span>
        </div>
      </div>
    </div>
  );
}
