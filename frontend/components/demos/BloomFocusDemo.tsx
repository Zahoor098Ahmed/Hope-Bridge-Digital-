"use client";

import { useEffect, useState } from "react";
import { buttonClass, demoBoxClass, demoLabelClass } from "@/components/ui";

const heroes: [string, string][] = [
  ["🦖", "Rexy Roarson"],
  ["🚀", "Captain Blastoff"],
  ["🐬", "Splash Dash"],
  ["🦄", "Sparkle Hoof"],
];

const feelings: [string, string, boolean][] = [
  ["😊", "Happy", true],
  ["😌", "Calm", true],
  ["🤩", "Excited", true],
  ["😴", "Tired", false],
  ["😟", "Worried", false],
  ["😠", "Grumpy", false],
];

const today: [string, string][] = [
  ["⭐ Tap the Stars", "Sustained attention"],
  ["🧠 Memory Sequence", "Working memory"],
  ["🚦 Go / No-Go", "Impulse control"],
  ["🔵 Find the Blue", "Visual attention"],
];

const phases = [
  { label: "Breathe in…", scale: 1.25, ms: 4000 },
  { label: "Hold…", scale: 1.25, ms: 2000 },
  { label: "Breathe out…", scale: 0.85, ms: 4000 },
];

const pickClass =
  "cursor-pointer border-2 border-line bg-bg font-bold text-ink aria-pressed:border-accent aria-pressed:bg-accent-soft";

function Breathing() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setP((x) => (x + 1) % phases.length), phases[p].ms);
    return () => clearTimeout(t);
  }, [p]);
  return (
    <div
      aria-live="polite"
      className="mx-auto my-2.5 grid size-[150px] place-items-center rounded-full bg-[radial-gradient(circle,#fff_0%,color-mix(in_srgb,var(--accent)_45%,#fff)_100%)] text-center font-extrabold text-[#232546] transition-transform duration-[4000ms] ease-in-out"
      style={{ transform: `scale(${phases[p].scale})` }}
    >
      {phases[p].label}
    </div>
  );
}

function HeroSays({ emoji, children }: { emoji: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-4xl leading-none sm:text-5xl" aria-hidden="true">
        {emoji}
      </span>
      <span className="rounded-[18px] rounded-tl-[4px] bg-surface px-4 py-3 font-bold">{children}</span>
    </div>
  );
}

function TodayGames() {
  return (
    <div className="grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2">
      {today.map(([g, s]) => (
        <div key={g} className="rounded-2xl bg-surface p-3 text-[0.92rem] font-extrabold">
          {g}
          <small className="block font-semibold text-muted">{s}</small>
        </div>
      ))}
    </div>
  );
}

export function BloomFocusDemo() {
  const [hero, setHero] = useState(0);
  const [feeling, setFeeling] = useState<number | null>(null);
  const [calmFirst, setCalmFirst] = useState(true);

  const [heroEmoji, heroName] = heroes[hero];
  const f = feeling === null ? null : feelings[feeling];

  return (
    <div className={demoBoxClass}>
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <div className={demoLabelClass}>1 · Choose a hero</div>
          <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Heroes">
            {heroes.map(([e, n], idx) => (
              <button
                key={n}
                type="button"
                aria-pressed={idx === hero}
                onClick={() => setHero(idx)}
                className={`${pickClass} flex items-center gap-1.5 rounded-2xl px-3 py-2 text-[0.9rem]`}
              >
                <span aria-hidden="true">{e}</span> {n}
              </button>
            ))}
          </div>
          <div className={demoLabelClass}>2 · How are you feeling today?</div>
          <div className="grid grid-cols-3 gap-2.5" role="group" aria-label="Feelings">
            {feelings.map(([e, l], idx) => (
              <button
                key={l}
                type="button"
                aria-pressed={idx === feeling}
                onClick={() => {
                  setFeeling(idx);
                  setCalmFirst(true);
                }}
                className={`${pickClass} rounded-[18px] px-1 py-3 text-[0.85rem] font-extrabold sm:px-1.5 sm:py-3.5 sm:text-[0.95rem]`}
              >
                <span className="block text-[2rem] sm:text-[2.3rem]" aria-hidden="true">
                  {e}
                </span>
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="flex min-h-[260px] flex-col gap-3.5 rounded-[22px] bg-accent-soft p-4 sm:min-h-[340px] sm:p-6" aria-live="polite">
          {!f && <HeroSays emoji={heroEmoji}>Hi friend, I&apos;m {heroName}! Tap a face to tell me how you feel.</HeroSays>}
          {f && f[2] && (
            <>
              <HeroSays emoji={heroEmoji}>Yay, you feel {f[1].toLowerCase()}! Here is today&apos;s training. Let&apos;s go!</HeroSays>
              <TodayGames />
            </>
          )}
          {f && !f[2] && calmFirst && (
            <>
              <HeroSays emoji={heroEmoji}>
                It&apos;s okay to feel {f[1].toLowerCase()}. Let&apos;s visit the Calm Corner and breathe together first.
              </HeroSays>
              <Breathing />
              <button type="button" className={buttonClass("ghost")} onClick={() => setCalmFirst(false)}>
                I feel better now →
              </button>
            </>
          )}
          {f && !f[2] && !calmFirst && (
            <>
              <HeroSays emoji={heroEmoji}>Great breathing! Calm mode is on, so today&apos;s games will be gentle.</HeroSays>
              <TodayGames />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
