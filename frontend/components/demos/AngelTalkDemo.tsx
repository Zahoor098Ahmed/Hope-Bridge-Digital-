"use client";

import { useState } from "react";
import {
  Apple,
  Coffee,
  Droplets,
  Gamepad2,
  Hand,
  HandHeart,
  Heart,
  Home,
  Moon,
  OctagonAlert,
  PersonStanding,
  Plus,
  RotateCcw,
  Smile,
  Sparkles,
  Trees,
  User,
  Utensils,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import { speak } from "@/lib/speak";
import { cx, demoBoxClass, demoNoteClass } from "@/components/ui";
import { Segmented } from "./Segmented";

interface TileDef {
  icon: LucideIcon;
  word: string;
  bg: string;
  color?: string;
}

const tiles: TileDef[] = [
  { icon: User, word: "I", bg: "#ffe3ec", color: "#d946ef" },
  { icon: HandHeart, word: "want", bg: "#e3f1ff", color: "#3b82f6" },
  { icon: Heart, word: "feel", bg: "#fde6ff", color: "#ec4899" },
  { icon: Plus, word: "more", bg: "#efe9ff", color: "#8b5cf6" },
  { icon: Droplets, word: "water", bg: "#dff7f0", color: "#06b6d4" },
  { icon: Apple, word: "apple", bg: "#ffe3e3", color: "#ef4444" },
  { icon: Gamepad2, word: "play", bg: "#ffe9dc", color: "#f97316" },
  { icon: Trees, word: "outside", bg: "#e5f6df", color: "#10b981" },
  { icon: Smile, word: "happy", bg: "#fff3c9", color: "#eab308" },
  { icon: Moon, word: "tired", bg: "#efe9ff", color: "#6366f1" },
  { icon: PersonStanding, word: "go", bg: "#e3f1ff", color: "#2563eb" },
  { icon: Sparkles, word: "please", bg: "#fff3c9", color: "#f59e0b" },
];

const quick: { icon: LucideIcon; word: string; color: string }[] = [
  { icon: OctagonAlert, word: "Help", color: "#dc2626" },
  { icon: Droplets, word: "Water", color: "#0284c7" },
  { icon: Home, word: "Bathroom", color: "#7c3aed" },
  { icon: Hand, word: "Stop", color: "#b91c1c" },
];

const phrases: { icon: LucideIcon; phrase: string }[] = [
  { icon: Utensils, phrase: "I want food, please." },
  { icon: Moon, phrase: "I feel tired." },
  { icon: Trees, phrase: "Can we go outside?" },
  { icon: Coffee, phrase: "I need a break." },
  { icon: Heart, phrase: "I love you, mama." },
];

const tileClass =
  "cursor-pointer rounded-[18px] border-2 border-transparent text-center font-extrabold text-[#232546] transition duration-150 hover:border-accent active:scale-95";
const roundBtn = "grid size-11 cursor-pointer place-items-center rounded-full border-0 text-sm disabled:opacity-40 transition";

export function AngelTalkDemo() {
  const [mode, setMode] = useState<"builder" | "phrases">("builder");
  const [words, setWords] = useState<{ icon: LucideIcon; w: string }[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const [noVoice, setNoVoice] = useState(false);

  function say(text: string) {
    setSpeaking(true);
    const ok = speak(text, () => setSpeaking(false));
    if (!ok) {
      setSpeaking(false);
      setNoVoice(true);
    }
  }

  function addWord(icon: LucideIcon, w: string) {
    setWords((prev) => [...prev, { icon, w }]);
    say(w);
  }

  const sentence = words.map((x) => x.w).join(" ");

  return (
    <div className={demoBoxClass}>
      <Segmented
        label="Talk mode"
        value={mode}
        onChange={setMode}
        options={[
          ["builder", "Sentence Builder"],
          ["phrases", "Whole Phrases"],
        ]}
      />

      {mode === "builder" ? (
        <>
          <div className="mb-3.5 flex min-h-16 flex-wrap items-center gap-2 rounded-[18px] bg-accent-soft px-3 py-2.5" aria-live="polite">
            {words.length === 0 ? (
              <span className="pl-1.5 font-semibold text-muted">Tap symbols to build a sentence…</span>
            ) : (
              words.map((x, i) => {
                const Icon = x.icon;
                return (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-xl bg-surface px-2.5 py-1.5 font-extrabold text-ink shadow-xs">
                    <Icon size={14} className="text-accent" aria-hidden="true" />
                    {x.w}
                  </span>
                );
              })
            )}
            <span className="ml-auto flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Remove last word"
                onClick={() => setWords((w) => w.slice(0, -1))}
                disabled={!words.length}
                className={cx(roundBtn, "bg-surface text-ink hover:bg-surface-hover")}
                title="Undo last word"
              >
                <RotateCcw size={15} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Speak sentence"
                onClick={() => sentence && say(sentence)}
                disabled={!words.length}
                className={cx(roundBtn, "bg-accent text-white shadow-soft", speaking && "animate-ring")}
                title="Speak full sentence"
              >
                <Volume2 size={17} aria-hidden="true" />
              </button>
            </span>
          </div>

          <div className="mb-3.5 grid grid-cols-2 gap-2 min-[360px]:grid-cols-4">
            {quick.map((q) => {
              const Icon = q.icon;
              return (
                <button
                  key={q.word}
                  type="button"
                  onClick={() => say(q.word)}
                  className={cx(tileClass, "flex flex-col items-center justify-center gap-1.5 bg-[#fff3d6] px-2 py-3 text-[0.8rem] min-[400px]:text-sm")}
                >
                  <Icon size={20} style={{ color: q.color }} aria-hidden="true" />
                  <span>{q.word}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-2 min-[481px]:grid-cols-4 sm:gap-2.5 lg:grid-cols-6">
            {tiles.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.word}
                  type="button"
                  onClick={() => addWord(t.icon, t.word)}
                  className={cx(tileClass, "flex min-h-[82px] flex-col items-center justify-center gap-1.5 px-1 py-3 text-[0.85rem] sm:min-h-[90px] sm:text-[0.92rem]")}
                  style={{ background: t.bg }}
                >
                  <Icon size={24} style={{ color: t.color || "#232546" }} aria-hidden="true" />
                  <span>{t.word}</span>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div className="grid gap-2.5">
          {phrases.map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.phrase}
                type="button"
                onClick={() => say(p.phrase)}
                className={cx(tileClass, "flex items-center gap-3.5 bg-accent-soft px-4 py-3.5 text-left text-ink hover:bg-accent-soft/80")}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-surface text-accent shadow-xs">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="text-[0.95rem] font-semibold">{p.phrase}</span>
              </button>
            );
          })}
        </div>
      )}
      <p className={demoNoteClass}>
        {noVoice
          ? "Your browser doesn't support spoken voice, but the app speaks every tile out loud."
          : "Turn your sound on. This preview uses your browser's voice; the app offers boy, girl, woman and man voices in English and Arabic."}
      </p>
    </div>
  );
}
