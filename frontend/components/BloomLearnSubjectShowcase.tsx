"use client";

import { useState, useCallback, type ReactNode } from "react";
import {
  Apple,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Film,
  Layers,
  Pause,
  Play,
  Smile,
  Sparkles,
  Sprout,
  Sun,
  Trees,
  Video,
  Volume2,
} from "lucide-react";
import { cx, GlassCard } from "./ui";
import { speak } from "@/lib/speak";

/* ─────────────────────────────────────────────────────────────────────────────
   Phone Frame Reusable Wrapper
   ─────────────────────────────────────────────────────────────────────────── */

function SubjectPhoneFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      className="relative w-[258px] shrink-0 rounded-[44px] bg-[linear-gradient(150deg,#34385a_0%,#14162a_45%,#262846_100%)] p-[9px] shadow-phone ring-1 ring-white/10 select-none"
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

function SubjectScreenHead({ title, right }: { title: string; right: ReactNode }) {
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

function SubjectScreenBody({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 flex-col gap-2 p-3 overflow-hidden">{children}</div>;
}

/* ─────────────────────────────────────────────────────────────────────────────
   1. Science Phone (PEHEL / FIRST) — Video-Ready AI & Cutaway Studio
   ─────────────────────────────────────────────────────────────────────────── */

function ScienceMobile() {
  const [view, setView] = useState<"video" | "cutaway" | "prompt">("video");
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(42);

  const togglePlay = () => {
    setPlaying(!playing);
    if (!playing) {
      speak("Macro sub-surface cutaway: plant root hairs actively absorbing moisture and dissolved minerals from topsoil horizons.");
    }
  };

  return (
    <SubjectPhoneFrame label="BloomLearn Science Video Curriculum Phone">
      <SubjectScreenHead
        title="BloomLearn · Science"
        right={
          <span className="flex items-center gap-1 rounded-full bg-[#18a57b]/15 px-2 py-0.5 text-[9.5px] font-bold text-[#18a57b]">
            <Video size={10} />
            <span>Video Engine</span>
          </span>
        }
      />
      <SubjectScreenBody>
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
          <span className="rounded bg-[#18a57b]/20 px-1 py-0.2 font-mono text-[8.5px]">Grade 3</span>
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
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded">00:18 / 00:45</span>
              </div>

              {/* Simulated Cinematic Biological Scene (100% SVG Vector) */}
              <div className="my-auto text-center py-2">
                <div className="relative mx-auto w-fit">
                  <div className="flex justify-center text-amber-400 mb-1">
                    <Sun size={26} className="animate-spin-slow" />
                  </div>
                  <div className="h-0.5 w-32 bg-amber-600/60 mx-auto my-1" />
                  <div className="flex items-center justify-center gap-1 text-xs font-mono text-emerald-300">
                    <Sprout size={14} /> Root Xylem Uptake
                  </div>
                  <div className="flex justify-center gap-2 text-xs mt-1.5 text-cyan-300">
                    <Droplets size={13} />
                    <Droplets size={13} />
                    <Droplets size={13} />
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
      </SubjectScreenBody>
    </SubjectPhoneFrame>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   2. Mathematics Phone (SECOND) — Visual Concrete Counting & Word Problems
   ─────────────────────────────────────────────────────────────────────────── */

function MathMobile() {
  const [eqIdx, setEqIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const equations = [
    {
      title: "5 − 3",
      eq: "5 apples − 3 apples",
      total: 5,
      sub: 3,
      result: 2,
      story: "Sara has 5 apples. She gives 3 apples to Ali. How many are left?",
    },
    {
      title: "3 × 2",
      eq: "3 groups × 2 stars",
      total: 6,
      sub: 0,
      result: 6,
      story: "Tariq arranged 3 plates with 2 stars on each plate. How many in all?",
    },
    {
      title: "4 + 2",
      eq: "4 drops + 2 drops",
      total: 6,
      sub: 0,
      result: 6,
      story: "The beaker has 4 mL of water. We add 2 mL more. What is the sum?",
    },
  ];

  const curr = equations[eqIdx];

  const handleSpeak = () => {
    speak(curr.story + " Answer: " + curr.result);
  };

  return (
    <SubjectPhoneFrame label="BloomLearn Math Visual Counting Phone">
      <SubjectScreenHead
        title="BloomLearn · Math"
        right={
          <span className="flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[9.5px] font-bold text-amber-700">
            <Calculator size={10} />
            <span>Visual Math</span>
          </span>
        }
      />
      <SubjectScreenBody>
        {/* Math Mode Selector */}
        <div className="grid grid-cols-3 gap-1 rounded-xl bg-black/5 p-1 text-[10px] font-bold">
          {equations.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              onClick={() => {
                setEqIdx(idx);
                setRevealed(false);
              }}
              className={cx(
                "rounded-lg py-1 transition cursor-pointer text-center",
                eqIdx === idx ? "bg-white text-amber-700 shadow-2xs font-extrabold" : "text-muted hover:text-ink"
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Word Problem Card */}
        <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 p-2.5 text-[10px] leading-relaxed">
          <span className="font-bold text-amber-900 block mb-0.5">Word Problem Story:</span>
          <p className="text-amber-950 font-medium">{curr.story}</p>
        </div>

        {/* Visual Concrete Stage */}
        <div className="relative flex-1 overflow-hidden rounded-[18px] border border-black/10 bg-[#f8fafc] p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-muted border-b border-black/5 pb-1">
            <span>Model: {curr.eq}</span>
            <span className="text-amber-600 font-bold">Concrete Set</span>
          </div>

          {/* Interactive Item Display */}
          <div className="my-auto py-2">
            <div className="flex flex-wrap justify-center items-center gap-2">
              {Array.from({ length: curr.total }).map((_, i) => {
                const isSubtracted = curr.sub > 0 && i >= curr.total - curr.sub;
                return (
                  <div
                    key={i}
                    className={cx(
                      "grid size-10 place-items-center rounded-2xl border transition-all duration-300",
                      isSubtracted
                        ? "border-dashed border-red-300 bg-red-50/60 opacity-40 scale-90"
                        : "border-amber-300 bg-amber-100/70 text-amber-600 shadow-xs scale-100"
                    )}
                  >
                    {eqIdx === 0 && <Apple size={20} className={isSubtracted ? "text-red-300" : "text-red-500"} />}
                    {eqIdx === 1 && <Sparkles size={20} className="text-amber-500" />}
                    {eqIdx === 2 && <Droplets size={20} className="text-sky-500" />}
                  </div>
                );
              })}
            </div>
            {curr.sub > 0 && (
              <span className="mt-2 block text-center text-[9px] font-semibold text-muted">
                {curr.sub} removed · {curr.result} remaining
              </span>
            )}
          </div>

          {/* Reveal Answer Active Recall Box */}
          <button
            type="button"
            onClick={() => setRevealed(!revealed)}
            className={cx(
              "rounded-xl py-2 px-3 text-center text-[10.5px] font-bold transition cursor-pointer border",
              revealed
                ? "bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs"
                : "bg-surface text-ink border-line hover:bg-black/5"
            )}
          >
            {revealed ? (
              <span className="flex items-center justify-center gap-1.5">
                <Check size={12} className="text-emerald-600" />
                <span>Result: {curr.result} units verified</span>
              </span>
            ) : (
              <span>Tap to Reveal Active Recall Answer</span>
            )}
          </button>
        </div>

        {/* Narration Controls */}
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={handleSpeak}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-amber-600 py-2 text-[10.5px] font-bold text-white shadow-xs hover:bg-amber-700 active:scale-98 cursor-pointer"
          >
            <Volume2 size={13} />
            <span>Read Math Problem</span>
          </button>
        </div>
      </SubjectScreenBody>
    </SubjectPhoneFrame>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   3. English & Phonics Phone (THIRD) — Spatial Scenes & Grammar Studio
   ─────────────────────────────────────────────────────────────────────────── */

function EnglishMobile() {
  const [sIdx, setSIdx] = useState(0);

  const sentences = [
    {
      tab: "Under",
      sentence: "three red apples under the table",
      tags: [["3", "quantity"], ["red", "colour"], ["under", "spatial"], ["table", "noun"]],
    },
    {
      tab: "On",
      sentence: "a gentle cat on the box",
      tags: [["1", "quantity"], ["gentle", "trait"], ["on", "spatial"], ["box", "noun"]],
    },
    {
      tab: "Behind",
      sentence: "the dog is behind the tree",
      tags: [["1", "quantity"], ["dog", "subject"], ["behind", "spatial"], ["tree", "noun"]],
    },
  ];

  const curr = sentences[sIdx];

  const handleSpeak = () => {
    speak(curr.sentence);
  };

  return (
    <SubjectPhoneFrame label="BloomLearn English Spatial Scenes Phone">
      <SubjectScreenHead
        title="BloomLearn · English"
        right={
          <span className="flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-0.5 text-[9.5px] font-bold text-sky-700">
            <Sparkles size={10} />
            <span>Spatial Language</span>
          </span>
        }
      />
      <SubjectScreenBody>
        {/* Preposition Tabs */}
        <div className="grid grid-cols-3 gap-1 rounded-xl bg-black/5 p-1 text-[10px] font-bold">
          {sentences.map((item, idx) => (
            <button
              key={item.tab}
              type="button"
              onClick={() => setSIdx(idx)}
              className={cx(
                "rounded-lg py-1 transition cursor-pointer text-center",
                sIdx === idx ? "bg-white text-sky-700 shadow-2xs font-extrabold" : "text-muted hover:text-ink"
              )}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Sentence Prompt Strip */}
        <div className="rounded-xl border border-sky-200 bg-sky-50/80 p-2 text-[10px] font-semibold text-sky-950 flex items-center justify-between">
          <span className="truncate">“{curr.sentence}”</span>
          <span className="rounded bg-sky-600/15 px-1 py-0.2 font-mono text-[8.5px] text-sky-800">Spatial</span>
        </div>

        {/* Spatial Scene Canvas */}
        <div className="relative flex-1 overflow-hidden rounded-[18px] border border-black/10 bg-[#eef7ff] p-3 flex flex-col justify-between">
          {/* Sky & Sun */}
          <div className="flex justify-between items-center text-[9px] text-sky-700 font-bold">
            <span className="font-mono">Scene Canvas</span>
            <span className="flex items-center gap-1 text-amber-500">
              <Sun size={14} /> Morning Light
            </span>
          </div>

          {/* Visual Spatial Objects Stage */}
          <div className="my-auto py-2 text-center">
            {sIdx === 0 && (
              <div className="relative mx-auto w-40">
                {/* Table top */}
                <div className="h-2.5 w-full rounded-md bg-amber-800 shadow-xs" />
                {/* Table legs */}
                <div className="flex justify-between px-3">
                  <div className="h-12 w-2 bg-amber-900" />
                  <div className="h-12 w-2 bg-amber-900" />
                </div>
                {/* 3 Red Apples UNDER the table */}
                <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-1.5">
                  <Apple size={18} className="text-red-500" />
                  <Apple size={18} className="text-red-500" />
                  <Apple size={18} className="text-red-500" />
                </div>
              </div>
            )}

            {sIdx === 1 && (
              <div className="relative mx-auto w-32 flex flex-col items-center">
                {/* Cat ON top */}
                <div className="flex items-center gap-1 text-amber-600 font-bold text-xs mb-1">
                  <Smile size={16} /> Cat
                </div>
                {/* Box */}
                <div className="h-14 w-24 rounded-xl border border-amber-800 bg-amber-700/80 flex items-center justify-center text-white text-[9px] font-mono shadow-xs">
                  Storage Box
                </div>
              </div>
            )}

            {sIdx === 2 && (
              <div className="relative mx-auto w-36 flex items-center justify-center">
                {/* Tree */}
                <div className="relative z-10 flex flex-col items-center">
                  <Trees size={44} className="text-emerald-600" />
                  <div className="h-4 w-3 bg-amber-900" />
                </div>
                {/* Dog behind */}
                <div className="absolute right-6 top-6 z-0 flex items-center gap-0.5 text-ink-soft text-[9px] font-bold">
                  <Smile size={15} className="text-amber-700" />
                </div>
              </div>
            )}
          </div>

          {/* Grammatical Breakdown Tags */}
          <div className="flex flex-wrap gap-1 border-t border-sky-200/80 pt-2">
            {curr.tags.map(([val, role]) => (
              <span key={val} className="rounded-md bg-white/90 border border-sky-200 px-1.5 py-0.5 text-[8.5px] font-medium text-sky-900">
                <strong className="font-bold">{val}</strong>: {role}
              </span>
            ))}
          </div>
        </div>

        {/* Read Aloud Button */}
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={handleSpeak}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-sky-600 py-2 text-[10.5px] font-bold text-white shadow-xs hover:bg-sky-700 active:scale-98 cursor-pointer"
          >
            <Volume2 size={13} />
            <span>Read Aloud Scene</span>
          </button>
        </div>
      </SubjectScreenBody>
    </SubjectPhoneFrame>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main 3D Multi-Phone Subject Showcase for BloomLearn
   Order: 1. Science (PEHLE) → 2. Mathematics → 3. English
   ─────────────────────────────────────────────────────────────────────────── */

interface SubjectItem {
  id: string;
  name: string;
  badge: string;
  highlight: string;
  icon: typeof Video;
  component: typeof ScienceMobile;
}

const subjects: SubjectItem[] = [
  {
    id: "science",
    name: "Science",
    badge: "13 Master Chapters",
    highlight: "Grade 3 MOE/Cambridge Curriculum, Video Storyboard Engine & Sub-surface Cutaways",
    icon: Video,
    component: ScienceMobile,
  },
  {
    id: "math",
    name: "Mathematics",
    badge: "Visual Counting",
    highlight: "Concrete Manipulatives, Dynamic Equation Models & Word Problem Parser",
    icon: Calculator,
    component: MathMobile,
  },
  {
    id: "english",
    name: "English & Phonics",
    badge: "Spatial Scenes",
    highlight: "Spatial Prepositions (under, on, behind) & Grammatical Scene Generation",
    icon: Sparkles,
    component: EnglishMobile,
  },
];

export function BloomLearnSubjectShowcase() {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => {
    setActive((curr) => (curr - 1 + subjects.length) % subjects.length);
  }, []);

  const next = useCallback(() => {
    setActive((curr) => (curr + 1) % subjects.length);
  }, []);

  const activeSubject = subjects[active];
  const ActiveIcon = activeSubject.icon;

  return (
    <div className="relative mx-auto w-full max-w-[620px] xl:max-w-[680px]">
      {/* 3D Carousel Stage */}
      <div className="relative isolate flex min-h-[560px] sm:min-h-[580px] items-center justify-center overflow-hidden rounded-[44px] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.7),rgba(227,247,239,0.55))] shadow-lift backdrop-blur-md px-2 py-6">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dots opacity-45" />
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[420px] -translate-1/2 rounded-full bg-[#18a57b]/20 blur-[100px]" />

        {/* Previous Subject Arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous subject"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-40 grid size-10 sm:size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface/90 text-ink shadow-soft backdrop-blur transition hover:scale-105 hover:bg-surface active:scale-95"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Next Subject Arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Next subject"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-40 grid size-10 sm:size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface/90 text-ink shadow-soft backdrop-blur transition hover:scale-105 hover:bg-surface active:scale-95"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>

        {/* 3D Track of Phones */}
        <div className="relative flex h-[500px] w-full items-center justify-center">
          {subjects.map((item, idx) => {
            const count = subjects.length;
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

            const PhoneComponent = item.component;

            return (
              <div
                key={item.id}
                onClick={() => !isCenter && setActive(idx)}
                className={cx(
                  "absolute top-0 transition-all duration-500 ease-out select-none",
                  styleClass
                )}
                role={isCenter ? "region" : "button"}
                aria-label={isCenter ? `Active interactive subject: ${item.name}` : `Switch to ${item.name}`}
                title={!isCenter ? `Click to view ${item.name} phone` : undefined}
              >
                {!isCenter && (
                  <div className="absolute inset-0 z-40 rounded-[44px] bg-black/5 hover:bg-transparent transition" />
                )}
                <PhoneComponent />
              </div>
            );
          })}
        </div>
      </div>

      {/* Switcher Controls & Info Bar (Cleanly placed below stage) */}
      <div className="mt-4 flex flex-col items-center gap-3">
        {/* Subject Switcher Tabs */}
        <div
          role="tablist"
          aria-label="Select BloomLearn Subject"
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-line bg-surface/80 p-1.5 shadow-soft backdrop-blur-md"
        >
          {subjects.map((item, idx) => {
            const isSelected = active === idx;
            return (
              <button
                key={item.id}
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

        {/* Dynamic Feature Highlight Pill */}
        <div className="flex items-center gap-2 rounded-2xl border border-line bg-surface/90 px-4 py-2 text-xs font-medium text-ink-soft shadow-xs backdrop-blur max-w-full">
          <ActiveIcon size={14} className="shrink-0 text-[#18a57b]" aria-hidden="true" />
          <span className="font-bold text-ink">{activeSubject.name}:</span>
          <span className="truncate">{activeSubject.highlight}</span>
        </div>
      </div>
    </div>
  );
}
