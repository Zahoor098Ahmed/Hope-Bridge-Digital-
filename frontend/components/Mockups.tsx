"use client";

import { useState, type ReactNode } from "react";
import {
  Apple,
  Check,
  CheckCircle2,
  Droplets,
  Film,
  Gamepad2,
  Heart,
  HelpCircle,
  Home,
  Layers,
  Moon,
  OctagonAlert,
  Pause,
  Play,
  RotateCcw,
  Smile,
  Sparkles,
  Trees,
  User,
  Video,
  Volume2,
  Zap,
} from "lucide-react";
import { cx } from "./ui";
import { speak } from "@/lib/speak";

function Phone({ children, className, label }: { children: ReactNode; className?: string; label: string }) {
  return (
    <div
      className={cx(
        !className?.includes("absolute") && "relative",
        "w-[258px] shrink-0 rounded-[44px] bg-[linear-gradient(150deg,#34385a_0%,#14162a_45%,#262846_100%)] p-[9px] shadow-phone ring-1 ring-white/10 transition-transform duration-300 hover:[animation-play-state:paused]",
        className
      )}
      role="region"
      aria-label={label}
    >
      {/* side buttons */}
      <span aria-hidden="true" className="absolute top-28 -left-[3px] h-10 w-[3px] rounded-l bg-[#262846]" />
      <span aria-hidden="true" className="absolute top-40 -left-[3px] h-14 w-[3px] rounded-l bg-[#262846]" />
      <span aria-hidden="true" className="absolute top-32 -right-[3px] h-16 w-[3px] rounded-r bg-[#262846]" />
      <div className="relative flex h-[496px] flex-col overflow-hidden rounded-[36px] bg-white font-sans text-xs leading-snug text-[#232546]">
        <div className="relative z-10 mx-auto mt-2 mb-1.5 h-[20px] w-[76px] shrink-0 rounded-full bg-[#0c0d1c]" />
        {children}
        {/* glass reflection */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.22)_0%,transparent_28%)]"
        />
      </div>
    </div>
  );
}

function ScreenHead({ title, right }: { title: string; right: ReactNode }) {
  return (
    <div className="flex items-center justify-between px-3.5 pt-0.5 pb-1.5 font-head text-xs font-bold text-muted border-b border-black/5">
      <span className="flex items-center gap-1.5 text-ink font-semibold">
        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
        {title}
      </span>
      <span>{right}</span>
    </div>
  );
}

function ScreenBody({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 flex-col gap-2 p-3 overflow-hidden">{children}</div>;
}

/* ─────────────────────────────────────────────────────────────────────────────
   1. Angel Talk Phone (Clinical AAC Talk Board — Clean Vector Icons)
   ─────────────────────────────────────────────────────────────────────────── */

type TileDef = {
  icon: typeof User;
  labelEn: string;
  labelAr: string;
  bg: string;
  color: string;
};

const aacTiles: TileDef[] = [
  { icon: User, labelEn: "I", labelAr: "أنا", bg: "#fce7f3", color: "#be185d" },
  { icon: Sparkles, labelEn: "Want", labelAr: "أريد", bg: "#e0f2fe", color: "#0369a1" },
  { icon: Droplets, labelEn: "Water", labelAr: "ماء", bg: "#ccfbf1", color: "#0f766e" },
  { icon: Smile, labelEn: "Happy", labelAr: "سعيد", bg: "#fef3c7", color: "#b45309" },
  { icon: Moon, labelEn: "Tired", labelAr: "متعب", bg: "#ede9fe", color: "#6d28d9" },
  { icon: Gamepad2, labelEn: "Play", labelAr: "ألعب", bg: "#ffedd5", color: "#c2410c" },
  { icon: Apple, labelEn: "Food", labelAr: "طعام", bg: "#ffe4e6", color: "#e11d48" },
  { icon: Heart, labelEn: "Family", labelAr: "عائلة", bg: "#fae8ff", color: "#a21caf" },
  { icon: Trees, labelEn: "Outside", labelAr: "بالخارج", bg: "#dcfce7", color: "#15803d" },
];

export function AngelTalkPhone({ className }: { className?: string }) {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [words, setWords] = useState<string[]>(["I", "Want", "Water"]);

  const handleTileClick = (tile: TileDef) => {
    const text = lang === "en" ? tile.labelEn : tile.labelAr;
    setWords((prev) => [...prev, text]);
    speak(text, undefined, lang === "ar" ? "ar-SA" : "en-US");
  };

  const speakFullSentence = () => {
    if (words.length === 0) return;
    speak(words.join(" "), undefined, lang === "ar" ? "ar-SA" : "en-US");
  };

  const handleQuick = (phrase: string, spokenText: string) => {
    setWords((prev) => [...prev, phrase]);
    speak(spokenText, undefined, lang === "ar" ? "ar-SA" : "en-US");
  };

  const handleClear = () => {
    if (words.length > 1) {
      setWords((prev) => prev.slice(0, -1));
    } else {
      setWords([]);
    }
  };

  return (
    <Phone className={className} label="Angel Talk assistive communication AAC tablet app">
      <ScreenHead
        title="Angel Talk"
        right={
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-1 rounded-lg bg-black/5 px-2 py-0.5 text-[9.5px] font-bold text-muted hover:bg-black/10 active:scale-95 cursor-pointer"
            title="Clear last tile"
          >
            <RotateCcw size={10} />
            <span>Clear</span>
          </button>
        }
      />
      <ScreenBody>
        {/* Sentence strip — fixed with no-scrollbar and pinned speaker button */}
        <div className="flex min-h-[42px] items-center gap-1.5 rounded-[14px] bg-[#efeaff] p-1.5 font-bold text-[#372b73] shadow-inner">
          <div className="flex flex-1 items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
            {words.length === 0 ? (
              <span className="text-[10px] text-muted font-normal italic px-1.5">Tap tiles to formulate sentence...</span>
            ) : (
              words.map((w, idx) => (
                <span
                  key={`${w}-${idx}`}
                  className="shrink-0 rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-[#232546] shadow-2xs border border-[#e1daf5]"
                >
                  {w}
                </span>
              ))
            )}
          </div>
          <button
            type="button"
            onClick={speakFullSentence}
            disabled={words.length === 0}
            className="grid size-[28px] shrink-0 place-items-center rounded-xl bg-[#7a5af5] text-white shadow-2xs transition hover:bg-[#6846eb] active:scale-95 disabled:opacity-40 cursor-pointer"
            title="Speak sentence"
          >
            <Volume2 size={13} />
          </button>
        </div>

        {/* Quick access bar with clean Lucide icons */}
        <div className="grid grid-cols-4 gap-1">
          {[
            { icon: HelpCircle, label: "Help", spoken: "Help please", color: "text-amber-600 bg-amber-50" },
            { icon: Droplets, label: "Water", spoken: "Water please", color: "text-blue-600 bg-blue-50" },
            { icon: Home, label: "Restroom", spoken: "Restroom please", color: "text-teal-600 bg-teal-50" },
            { icon: OctagonAlert, label: "Stop", spoken: "Stop please", color: "text-rose-600 bg-rose-50" },
          ].map(({ icon: I, label, spoken, color }) => (
            <button
              key={label}
              type="button"
              onClick={() => handleQuick(label, spoken)}
              className={cx(
                "flex items-center justify-center gap-1 rounded-[10px] py-1 px-0.5 text-center text-[10px] font-bold transition hover:opacity-90 active:scale-95 cursor-pointer border border-black/5",
                color
              )}
            >
              <I size={11} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Professional AAC Pictogram Grid */}
        <div className="grid grid-cols-3 gap-1.5 flex-1">
          {aacTiles.map((t) => {
            const I = t.icon;
            const label = lang === "en" ? t.labelEn : t.labelAr;
            return (
              <button
                key={t.labelEn}
                type="button"
                onClick={() => handleTileClick(t)}
                className="flex flex-col items-center justify-center rounded-[14px] border border-black/5 p-1.5 text-center font-bold transition hover:shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
                style={{ background: t.bg }}
              >
                <span className="mb-1 grid size-7 place-items-center rounded-full bg-white/80 shadow-2xs">
                  <I size={16} style={{ color: t.color }} />
                </span>
                <span className="text-[11px] font-bold text-[#232546] truncate w-full">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Language switch */}
        <div className="flex items-center justify-between border-t border-black/5 pt-1.5">
          <span className="text-[9.5px] font-bold text-muted">Bilingual AAC:</span>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => {
                setLang("en");
                setWords(["I", "Want", "Water"]);
              }}
              className={cx(
                "rounded-full px-2 py-0.5 text-[9.5px] font-bold transition cursor-pointer",
                lang === "en" ? "bg-[#7a5af5] text-white" : "bg-black/5 text-muted hover:bg-black/10"
              )}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => {
                setLang("ar");
                setWords(["أنا", "أريد", "ماء"]);
              }}
              className={cx(
                "rounded-full px-2 py-0.5 text-[9.5px] font-bold transition cursor-pointer",
                lang === "ar" ? "bg-[#7a5af5] text-white" : "bg-black/5 text-muted hover:bg-black/10"
              )}
            >
              العربية
            </button>
          </div>
        </div>
      </ScreenBody>
    </Phone>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   2. BloomLearn Phone (AI Video Curriculum & Storyboard Studio Engine)
   ─────────────────────────────────────────────────────────────────────────── */

export function BloomLearnPhone({ className }: { className?: string }) {
  const [view, setView] = useState<"video" | "cutaway" | "prompt">("video");
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const togglePlay = () => {
    setPlaying(!playing);
    if (!playing) {
      speak("Macro sub-surface cutaway: plant root hairs actively absorbing moisture and dissolved minerals from topsoil horizons.");
    }
  };

  return (
    <Phone className={className} label="BloomLearn AI educational video curriculum generator phone app">
      <ScreenHead
        title="BloomLearn"
        right={
          <span className="flex items-center gap-1 rounded-full bg-[#18a57b]/10 px-2 py-0.5 text-[9.5px] font-bold text-[#18a57b]">
            <Video size={10} />
            <span>Video Engine</span>
          </span>
        }
      />
      <ScreenBody>
        {/* Navigation Tabs inside the phone */}
        <div className="grid grid-cols-3 gap-1 rounded-xl bg-black/5 p-1 text-[10px] font-bold">
          <button
            type="button"
            onClick={() => setView("video")}
            className={cx(
              "flex items-center justify-center gap-1 rounded-lg py-1 transition cursor-pointer",
              view === "video" ? "bg-white text-[#18a57b] shadow-2xs font-extrabold" : "text-muted hover:text-ink"
            )}
          >
            <Film size={11} /> Video
          </button>
          <button
            type="button"
            onClick={() => setView("cutaway")}
            className={cx(
              "flex items-center justify-center gap-1 rounded-lg py-1 transition cursor-pointer",
              view === "cutaway" ? "bg-white text-[#18a57b] shadow-2xs font-extrabold" : "text-muted hover:text-ink"
            )}
          >
            <Layers size={11} /> Cutaway
          </button>
          <button
            type="button"
            onClick={() => setView("prompt")}
            className={cx(
              "flex items-center justify-center gap-1 rounded-lg py-1 transition cursor-pointer",
              view === "prompt" ? "bg-white text-[#18a57b] shadow-2xs font-extrabold" : "text-muted hover:text-ink"
            )}
          >
            <Sparkles size={11} /> AI Spec
          </button>
        </div>

        {/* Lesson metadata banner */}
        <div className="flex items-center justify-between rounded-xl bg-[#e3f7ef] px-2.5 py-1.5 text-[10px] font-bold text-[#0d6e50]">
          <span className="truncate">sc3-plants · Lesson 1.2: Root Absorption</span>
          <span className="rounded bg-[#18a57b]/20 px-1 py-0.2 font-mono text-[8.5px]">MOE/Cambridge</span>
        </div>

        {/* Main Video Storyboard Stage */}
        <div className="relative flex-1 overflow-hidden rounded-[18px] border border-black/10 bg-[#0f172a] text-white shadow-inner flex flex-col">
          {view === "video" && (
            <div className="relative flex-1 flex flex-col justify-between p-3">
              {/* Video status overlay */}
              <div className="flex items-center justify-between text-[9px] text-white/80">
                <span className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                  AI Render: 1080p 60fps
                </span>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded">00:14 / 00:45</span>
              </div>

              {/* Simulated Cinematic Biological Scene */}
              <div className="my-auto text-center py-2">
                <div className="relative mx-auto w-fit">
                  <div className="text-3xl mb-1">🌻</div>
                  <div className="h-0.5 w-32 bg-amber-600/60 mx-auto my-1" />
                  <div className="text-xs font-mono text-emerald-300">🌱 Root Xylem Uptake</div>
                  <div className="flex justify-center gap-2 text-xs mt-1 text-cyan-300">
                    <span>💧</span>
                    <span>💧</span>
                    <span>💧</span>
                  </div>
                </div>
              </div>

              {/* Camera Directive Tag */}
              <div className="rounded-lg bg-black/60 backdrop-blur-xs p-1.5 text-[9px] leading-tight text-white/90">
                <span className="text-amber-400 font-bold block mb-0.5">Camera Directive:</span>
                Slow macro track-in with vertical sub-surface split view.
              </div>
            </div>
          )}

          {view === "cutaway" && (
            <div className="flex-1 p-3 flex flex-col justify-between text-[9.5px]">
              <span className="font-bold text-amber-300">Sub-surface Soil Horizons:</span>
              <div className="space-y-1.5 my-auto">
                <div className="rounded-lg bg-amber-900/60 p-2 border border-amber-700/50">
                  <span className="font-bold text-amber-200 block">Horizon A · Topsoil (0–15 cm)</span>
                  <span className="text-white/70 text-[8.5px]">Rich humus & earthworm biological aeration</span>
                </div>
                <div className="rounded-lg bg-yellow-950/60 p-2 border border-yellow-800/50">
                  <span className="font-bold text-yellow-200 block">Horizon B · Subsoil Layer</span>
                  <span className="text-white/70 text-[8.5px]">Mineral accumulation & deep moisture reservoir</span>
                </div>
              </div>
              <span className="text-[8.5px] text-emerald-400">Scientifically accurate anatomical perspective</span>
            </div>
          )}

          {view === "prompt" && (
            <div className="flex-1 p-3 overflow-y-auto no-scrollbar font-mono text-[8.5px] leading-relaxed text-emerald-300 bg-black/40">
              <span className="text-white font-bold block font-sans mb-1 text-[9px]">Sora / Runway Prompt Spec:</span>
              &quot;Macro underground split-view cutaway. Camera tilts down smoothly into aerated humus soil. Translucent plant root hairs absorb glowing water droplets into xylem vessels. Peaceful pacing, zero sensory overload.&quot;
            </div>
          )}

          {/* Video Scrub / Progress Bar */}
          <div className="h-1 bg-white/20 w-full">
            <div className="h-full bg-[#18a57b] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Video Player Action Controls */}
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={togglePlay}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#18a57b] py-2 text-[10.5px] font-bold text-white shadow-xs hover:bg-[#138965] active:scale-98 cursor-pointer"
          >
            {playing ? <Pause size={12} /> : <Play size={12} fill="currentColor" />}
            <span>{playing ? "Pause Clip" : "Play Lesson Clip"}</span>
          </button>
          <button
            type="button"
            onClick={() => speak("Plant roots absorb water and dissolved minerals from topsoil horizons.")}
            className="grid size-9 place-items-center rounded-xl border border-line bg-surface text-ink hover:bg-black/5 active:scale-95 cursor-pointer"
            title="Listen to audio narration"
          >
            <Volume2 size={14} />
          </button>
        </div>
      </ScreenBody>
    </Phone>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   3. Bloom Focus Phone (Pediatric Attention Training with Adaptive Feedback)
   ─────────────────────────────────────────────────────────────────────────── */

export function BloomFocusPhone({ className }: { className?: string }) {
  const [activeFeeling, setActiveFeeling] = useState<string>("focused");
  const [score, setScore] = useState(15);
  const [gameActive, setGameActive] = useState(false);
  const [tappedTargets, setTappedTargets] = useState<number[]>([]);

  const feelings = [
    { id: "focused", label: "Focused", icon: CheckCircle2, quote: "Excellent readiness! Let's conquer our attention targets." },
    { id: "calm", label: "Calm", icon: Sparkles, quote: "Tranquil breathing. Calm minds build deep focus." },
    { id: "energetic", label: "High Energy", icon: Zap, quote: "Great vitality! Let's channel that into Flash Match." },
    { id: "tired", label: "Low Energy", icon: Moon, quote: "Gentle pacing today. We'll do a relaxing warm-up." },
  ];

  const currentFeeling = feelings.find((f) => f.id === activeFeeling) || feelings[0];

  const handleTargetClick = (idx: number) => {
    if (tappedTargets.includes(idx)) return;
    setTappedTargets((prev) => [...prev, idx]);
    setScore((s) => s + 1);
    speak("Target hit!");
  };

  return (
    <Phone className={className} label="Bloom Focus clinical attention training phone app">
      <ScreenHead
        title="Bloom Focus"
        right={
          <span className="flex items-center gap-1 rounded-full bg-[#ef7d4f]/15 px-2 py-0.5 text-[9.5px] font-extrabold text-[#ef7d4f]">
            <Sparkles size={10} />
            <span>Score: {score}</span>
          </span>
        }
      />
      <ScreenBody>
        {!gameActive ? (
          <>
            {/* Attention Coach Dialogue */}
            <div className="flex items-center gap-2.5 rounded-2xl bg-[#fff0e8] p-2.5 border border-[#fed7aa]/50">
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#ef7d4f] text-white">
                <Sparkles size={16} />
              </span>
              <p className="text-[10px] font-bold text-[#431407] leading-snug">{currentFeeling.quote}</p>
            </div>

            <div className="text-[10px] font-bold text-muted px-0.5">Pre-Session Emotional State:</div>

            {/* Structured State Check-in Buttons */}
            <div className="grid grid-cols-2 gap-1.5 flex-1">
              {feelings.map((f) => {
                const I = f.icon;
                const isSel = f.id === activeFeeling;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => {
                      setActiveFeeling(f.id);
                      speak(f.label);
                    }}
                    className={cx(
                      "flex flex-col items-center justify-center rounded-xl border p-2 text-center transition active:scale-95 cursor-pointer",
                      isSel
                        ? "bg-[#fff0e8] border-[#ef7d4f] text-[#c2410c] shadow-2xs"
                        : "bg-surface border-line text-ink-soft hover:bg-black/5"
                    )}
                  >
                    <I size={18} className="mb-1" />
                    <span className="text-[10.5px] font-bold">{f.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Launch Attention Exercise */}
            <button
              type="button"
              onClick={() => {
                setGameActive(true);
                setTappedTargets([]);
                speak("Sustained attention exercise started.");
              }}
              className="mt-auto flex items-center justify-center gap-1.5 rounded-full bg-[#ef7d4f] py-2 text-center text-[11px] font-bold text-white shadow-xs hover:bg-[#d96637] active:scale-95 cursor-pointer"
            >
              <Play size={12} fill="currentColor" />
              <span>Start Attention Exercise</span>
            </button>
          </>
        ) : (
          <div className="flex flex-col h-full justify-between py-1 text-center">
            <div className="rounded-xl bg-[#fff0e8] p-2 text-[10.5px] font-bold text-[#b34015]">
              Sustained Visual Focus: Tap active targets
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto px-1">
              {[0, 1, 2].map((idx) => {
                const hit = tappedTargets.includes(idx);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTargetClick(idx)}
                    className={cx(
                      "grid size-14 mx-auto place-items-center rounded-2xl text-xs font-bold transition transform cursor-pointer border",
                      hit
                        ? "bg-emerald-100 border-emerald-300 text-emerald-800 scale-95"
                        : "bg-amber-100 border-amber-300 text-amber-900 animate-pulse hover:scale-105"
                    )}
                  >
                    {hit ? <Check size={20} /> : <Zap size={20} />}
                  </button>
                );
              })}
            </div>

            <div className="text-[10.5px] font-bold text-muted">
              {tappedTargets.length === 3 ? "Target accuracy achieved (>85%)" : `Targets: ${tappedTargets.length} / 3`}
            </div>

            <button
              type="button"
              onClick={() => setGameActive(false)}
              className="mt-2 rounded-full bg-[#232546] py-1.5 text-center text-[10px] font-bold text-white hover:bg-black active:scale-95 cursor-pointer"
            >
              Complete Exercise
            </button>
          </div>
        )}
      </ScreenBody>
    </Phone>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   4. Nexia Bridge Phone (Multi-Role Clinical Portal)
   ─────────────────────────────────────────────────────────────────────────── */

const nexiaTabs: [string, "home" | "progress" | "targets" | "messages"][] = [
  ["Home", "home"],
  ["Progress", "progress"],
  ["Targets", "targets"],
  ["Team", "messages"],
];

export function NexiaBridgePhone({ className }: { className?: string }) {
  const [tab, setTab] = useState<"home" | "progress" | "targets" | "messages">("home");
  const [tasks, setTasks] = useState<boolean[]>([true, true, false]);
  const [replied, setReplied] = useState(false);

  const toggleTask = (idx: number) => {
    setTasks((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const doneCount = tasks.filter(Boolean).length;

  return (
    <Phone className={className} label="Nexia Bridge clinical and education multidisciplinary portal app">
      <ScreenHead
        title="Nexia Bridge"
        right={
          <span className="rounded-full bg-[#4f46e5]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#4f46e5]">
            Clinical Portal
          </span>
        }
      />
      <ScreenBody>
        {/* Child Record Header */}
        <div className="flex items-center gap-2 rounded-xl bg-[#f4eee6] p-2 border border-[#e8e2d9]/60 shrink-0">
          <span className="grid size-7 place-items-center rounded-full bg-[#4f46e5] text-xs font-bold text-white">A</span>
          <span className="leading-tight">
            <span className="block font-bold text-xs text-ink">Adam · Age 6</span>
            <span className="text-[9px] text-[#6e7191]">Care Team: ABA · SLP · OT</span>
          </span>
          <span className="ml-auto rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8.5px] font-bold text-emerald-800">
            Active
          </span>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {tab === "home" && (
            <div className="grid gap-2">
              <div className="rounded-xl border border-line bg-surface p-2.5 shadow-2xs">
                <div className="mb-1 flex justify-between text-[10px] font-bold">
                  <span>Home Practice Completion</span>
                  <span className="text-[#4f46e5]">{doneCount} / 3 Tasks</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-black/5 mb-2">
                  <div
                    className="h-full rounded-full bg-[#4f46e5] transition-all duration-300"
                    style={{ width: `${(doneCount / 3) * 100}%` }}
                  />
                </div>
                <div className="grid gap-1.5 text-[10px]">
                  {[
                    "Request using picture tile",
                    "Independent tooth brushing (5 steps)",
                    "Identify 3 emotions during play",
                  ].map((t, idx) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggleTask(idx)}
                      className="flex items-center gap-2 text-left cursor-pointer transition active:scale-98"
                    >
                      <span
                        className={cx(
                          "grid size-3.5 place-items-center rounded-full text-[8px] text-white transition",
                          tasks[idx] ? "bg-[#12a37b]" : "border border-black/20 text-transparent"
                        )}
                      >
                        ✓
                      </span>
                      <span className={tasks[idx] ? "text-ink line-through opacity-70" : "text-ink font-semibold"}>
                        {t}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SLP Message */}
              <div className="rounded-xl bg-[#eef0ff] p-2.5 text-[9.5px] leading-relaxed border border-[#e0e4fc]">
                <span className="font-bold text-[#4f46e5] block mb-0.5">Sara SLP (Speech Therapist):</span>
                Adam mastered two-word spontaneous requests today using visual symbols.
                {replied ? (
                  <span className="mt-1 block font-bold text-[#12a37b]">Confirmed reply sent.</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setReplied(true)}
                    className="mt-1.5 block rounded-md bg-[#4f46e5] px-2 py-0.5 text-[8.5px] font-bold text-white hover:bg-[#3f38c9] cursor-pointer"
                  >
                    Confirm &amp; Acknowledge
                  </button>
                )}
              </div>
            </div>
          )}

          {tab === "progress" && (
            <div className="grid gap-2 text-[9.5px]">
              <div className="rounded-xl border border-line bg-surface p-2 shadow-2xs">
                <div className="flex justify-between font-bold mb-1">
                  <span>ABA Target Acquisition</span>
                  <span className="text-[#4f46e5]">88%</span>
                </div>
                <div className="h-1 rounded-full bg-black/5 overflow-hidden">
                  <div className="h-full bg-[#4f46e5] w-[88%]" />
                </div>
              </div>
              <div className="rounded-xl border border-line bg-surface p-2 shadow-2xs">
                <div className="flex justify-between font-bold mb-1">
                  <span>Speech &amp; Language Goals</span>
                  <span className="text-[#12a37b]">92%</span>
                </div>
                <div className="h-1 rounded-full bg-black/5 overflow-hidden">
                  <div className="h-full bg-[#12a37b] w-[92%]" />
                </div>
              </div>
              <div className="rounded-xl border border-line bg-surface p-2 shadow-2xs">
                <div className="flex justify-between font-bold mb-1">
                  <span>Occupational Therapy Regulation</span>
                  <span className="text-[#ef7d4f]">85%</span>
                </div>
                <div className="h-1 rounded-full bg-black/5 overflow-hidden">
                  <div className="h-full bg-[#ef7d4f] w-[85%]" />
                </div>
              </div>
            </div>
          )}

          {tab === "targets" && (
            <div className="grid gap-1.5 text-[9.5px]">
              <div className="rounded-xl border border-line bg-surface p-2">
                <span className="rounded bg-emerald-100 px-1 py-0.2 text-[8px] font-bold text-emerald-800">Achieved</span>
                <p className="mt-1 font-bold text-ink">Two-word spontaneous requests</p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-2">
                <span className="rounded bg-blue-100 px-1 py-0.2 text-[8px] font-bold text-blue-800">In Progress</span>
                <p className="mt-1 font-bold text-ink">Turn-taking during tabletop games</p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-2">
                <span className="rounded bg-purple-100 px-1 py-0.2 text-[8px] font-bold text-purple-800">In Progress</span>
                <p className="mt-1 font-bold text-ink">Independent task sequencing</p>
              </div>
            </div>
          )}

          {tab === "messages" && (
            <div className="grid gap-1.5 text-[9.5px]">
              <div className="rounded-xl bg-[#eef0ff] p-2 leading-relaxed">
                <span className="font-bold text-[#4f46e5] block text-[8.5px]">Speech Therapist (SLP)</span>
                We practiced naming actions with BloomLearn visual prompts today.
              </div>
              <div className="rounded-xl bg-[#f0fdf4] p-2 leading-relaxed ml-3 border border-emerald-100">
                <span className="font-bold text-[#12a37b] block text-[8.5px]">Parent Note</span>
                Adam demonstrated the same words at home during dinner!
              </div>
            </div>
          )}
        </div>

        {/* Tab Bar Navigation */}
        <div className="mt-auto grid grid-cols-4 rounded-xl border border-line p-0.5 text-center text-[9px] font-bold bg-surface">
          {nexiaTabs.map(([label, tKey]) => (
            <button
              key={label}
              type="button"
              onClick={() => setTab(tKey)}
              className={cx(
                "rounded-lg py-1 transition cursor-pointer",
                tab === tKey ? "bg-[#eef0ff] text-[#4f46e5] font-extrabold" : "text-[#6e7191] hover:text-ink"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </ScreenBody>
    </Phone>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Component Dispatcher
   ─────────────────────────────────────────────────────────────────────────── */

export function AppPhone({ slug, className }: { slug: string; className?: string }) {
  switch (slug) {
    case "angel-talk":
      return <AngelTalkPhone className={className} />;
    case "bloomlearn":
      return <BloomLearnPhone className={className} />;
    case "bloom-focus":
      return <BloomFocusPhone className={className} />;
    case "nexia-bridge":
      return <NexiaBridgePhone className={className} />;
    default:
      return null;
  }
}

export const phones = {
  "angel-talk": AngelTalkPhone,
  bloomlearn: BloomLearnPhone,
  "bloom-focus": BloomFocusPhone,
  "nexia-bridge": NexiaBridgePhone,
} as const;
