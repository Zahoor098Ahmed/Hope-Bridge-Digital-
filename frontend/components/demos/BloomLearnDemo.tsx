"use client";

import { useState } from "react";
import {
  Atom,
  BookOpen,
  Calculator,
  CheckCircle2,
  Eye,
  Film,
  HelpCircle,
  Layers,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Video,
  Volume2,
} from "lucide-react";
import { buttonClass, cx, demoBoxClass, demoLabelClass, demoNoteClass } from "@/components/ui";
import { speak } from "@/lib/speak";

export type SubjectFilter = "all" | "science" | "math" | "literacy";

type CurriculumLesson = {
  id: string;
  subject: "science" | "math" | "literacy";
  subjectBadge: string;
  curriculumCode: string;
  standard: string;
  title: string;
  narrationText: string;
  duration: string;
  cameraDirective: string;
  perspectiveType: string;
  childSafeRule: string;
  videoPrompt: string;
  conceptTags: string[];
  comprehensionQuestion: string;
  comprehensionAnswer: string;
  mathCounters?: { total: number; subtract: number; unit: string };
};

const curriculumLessons: CurriculumLesson[] = [
  // ─── Grade 3 Science Master Chapters (Video-Ready Storyboards) ───
  {
    id: "sc3-plants",
    subject: "science",
    subjectBadge: "Grade 3 Science · Chapter 1",
    curriculumCode: "sc3-plants",
    standard: "Cambridge Primary & Saudi MOE Aligned",
    title: "Sub-surface Root Hydration & Soil Horizons",
    narrationText:
      "Plant roots absorb water and dissolved minerals from moist topsoil horizons, transporting hydration upward through vascular xylem vessels.",
    duration: "00:45",
    cameraDirective: "Slow macro vertical tilt-down with underground split-screen cross section",
    perspectiveType: "Sub-surface botanical cutaway of soil horizons (Humus to Subsoil)",
    childSafeRule: "Zero sensory overload, peaceful biological transport dynamics",
    videoPrompt:
      "Macro underground split-view cutaway. Camera slowly tilts down from a bright sunflower into dark, aerated loam soil horizons. Translucent plant root hairs actively absorb glistening water droplets into xylem vessels. Soft educational daylight; gentle earthworm tunnels peacefully in background loam. Calm pacing, zero visual overload.",
    conceptTags: ["Root Xylem Uptake", "Humus Horizon A", "Capillary Action", "Mineral Osmosis"],
    comprehensionQuestion: "Which specialized structures on the roots absorb water and mineral nutrients from the soil?",
    comprehensionAnswer:
      "Microscopic root hairs on the root system absorb water and dissolved minerals from topsoil horizons via osmosis.",
  },
  {
    id: "sc3-body",
    subject: "science",
    subjectBadge: "Grade 3 Science · Chapter 12",
    curriculumCode: "sc3-body",
    standard: "Cambridge Primary & Oxford Science Aligned",
    title: "Pulmonary Oxygen Exchange & Cardiovascular Transport",
    narrationText:
      "When we inhale air, our lungs expand and transfer fresh oxygen into the bloodstream while the heart pumps vital nutrients through the body.",
    duration: "00:50",
    cameraDirective: "Gentle transparent tracking pan across thoracic chest cavity",
    perspectiveType: "Non-medical stylized internal organ transparency with rhythmic lung expansion",
    childSafeRule: "Soft pastel aesthetics, reassuring rhythm, zero medical anxiety",
    videoPrompt:
      "Gentle educational thoracic cutaway animation. Stylized semi-transparent lungs softly expand and contract in tranquil rhythm. Glowing sky-blue oxygen particles flow through bronchial branches into capillaries, entering the circulatory stream. Soft pastel tones, calm rhythmic motion, child-safe educational tone.",
    conceptTags: ["Bronchial Tree", "Oxygen Diffusion", "Cardiovascular Flow", "Pulmonary Respiration"],
    comprehensionQuestion: "What vital gas is absorbed into our bloodstream when our lungs expand during inhalation?",
    comprehensionAnswer:
      "Oxygen is absorbed through the microscopic alveoli in our lungs directly into the bloodstream.",
  },
  {
    id: "sc3-water",
    subject: "science",
    subjectBadge: "Grade 3 Science · Chapter 9",
    curriculumCode: "sc3-water",
    standard: "Saudi MOE & McGraw-Hill Framework",
    title: "Hydrological Cycle: Evaporation & Cumulus Condensation",
    narrationText:
      "Thermal energy from sunlight warms surface water, causing it to evaporate into invisible vapor before condensing into cumulus rain clouds.",
    duration: "00:42",
    cameraDirective: "Cinematic vertical time-lapse rising from lake surface toward atmosphere",
    perspectiveType: "Molecular droplet transformation from liquid state to gaseous cloud condensation",
    childSafeRule: "Tranquil ambient flow, scientifically accurate states of matter",
    videoPrompt:
      "Cinematic time-lapse view of a calm freshwater lake under warm morning sun. Sparkling micro-droplets of water vapor rise smoothly into cooler upper atmospheric air, condensing together into a dense, puffy cumulus rain cloud. Natural physics of hydrological cycle, tranquil educational pacing.",
    conceptTags: ["Thermal Energy", "Vapor Condensation", "Atmospheric Cycle", "States of Matter"],
    comprehensionQuestion: "What thermal process converts liquid surface water into gaseous water vapor in the air?",
    comprehensionAnswer:
      "Evaporation, powered by thermal solar energy, converts liquid water into gaseous water vapor.",
  },
  {
    id: "sc3-adaptations",
    subject: "science",
    subjectBadge: "Grade 3 Science · Chapter 3",
    curriculumCode: "sc3-adaptations",
    standard: "Regional Saudi MOE & Cambridge Aligned",
    title: "Desert Ecosystems & Arabian Wildlife Adaptations",
    narrationText:
      "Arabian camels and native desert wildlife use specialized physical adaptations, such as wide padded hooves and water-storing tissue, to thrive across desert dunes.",
    duration: "00:48",
    cameraDirective: "Wide sweeping aerial drone tracking over golden sand dunes of Al-Qassim",
    perspectiveType: "Macro anatomical view of foot padding and thermal insulation against hot sand",
    childSafeRule: "Wildlife observed in peaceful natural habitat, non-violent biology",
    videoPrompt:
      "Sweeping cinematic aerial tracking shot over golden dunes in the Arabian desert. A healthy camel navigates soft shifting sand with wide padded hooves. In the background, green native Ghaf trees thrive in the arid terrain. Clear blue sky, peaceful educational pacing, child-safe standard.",
    conceptTags: ["Padded Hooves", "Ghaf Tree Ecosystem", "Thermal Regulation", "Desert Horizons"],
    comprehensionQuestion: "Why do camels have wide padded feet in desert environments?",
    comprehensionAnswer:
      "Wide padded hooves distribute the camel's weight across a larger surface area so it walks smoothly without sinking into loose sand.",
  },

  // ─── Visual Mathematics Concrete Models ───
  {
    id: "math-subtraction",
    subject: "math",
    subjectBadge: "Primary Mathematics · Concrete Modeling",
    curriculumCode: "math-sub-1",
    standard: "Early Numeracy Standards",
    title: "Interactive Concrete Subtraction & Partitioning",
    narrationText:
      "We begin with a group of five objects. When we partition and remove three objects, two objects remain.",
    duration: "00:30",
    cameraDirective: "Overhead tabletop stage with tactile manipulative counters",
    perspectiveType: "Visual object partitioning with animated deduction line",
    childSafeRule: "Zero pressure, positive reinforcement, clear visual counting",
    videoPrompt:
      "Bright, clean educational top-down view. Five crisp geometric apple counters sit on a soft wood surface. A clean dashed line partitions three counters away into a marked removal zone. Two counters remain highlighted in vibrant green. Bold text overlay confirms equation: 5 minus 3 equals 2.",
    conceptTags: ["Partitioning", "Deduction Model", "Equation Balance", "Concrete Counting"],
    comprehensionQuestion: "If we have 5 concrete counters and subtract 3 counters, what is the remaining quantity?",
    comprehensionAnswer: "Exactly 2 counters remain: 5 − 3 = 2.",
    mathCounters: { total: 5, subtract: 3, unit: "Apples" },
  },
  {
    id: "math-multiplication",
    subject: "math",
    subjectBadge: "Primary Mathematics · Array Arrays",
    curriculumCode: "math-mult-2",
    standard: "Cambridge Primary Mathematics",
    title: "Array Multiplication: Three Groups of Two",
    narrationText:
      "Multiplication represents repeated equal groups. Three groups of two items equal six items in total.",
    duration: "00:35",
    cameraDirective: "Slow horizontal pan highlighting each grouped array bracket",
    perspectiveType: "Structured visual grid demonstrating repeated addition",
    childSafeRule: "Predictable rhythm, clear grouping outlines, structured layout",
    videoPrompt:
      "Overhead macro studio shot. Three clearly outlined circular trays each contain two bright citrus oranges. Camera pans smoothly across each tray as a soft chime rings: 2 plus 2 plus 2. The groups merge cleanly into an array grid showing 3 times 2 equals 6.",
    conceptTags: ["Repeated Addition", "Array Grouping", "Multiplicative Reasoning", "Grid Representation"],
    comprehensionQuestion: "How can repeated addition (2 + 2 + 2) be expressed as a multiplication equation?",
    comprehensionAnswer: "It is expressed as 3 × 2 = 6 (three groups of two).",
    mathCounters: { total: 6, subtract: 0, unit: "Oranges" },
  },

  // ─── Literacy & Environmental Language ───
  {
    id: "lit-prepositions",
    subject: "literacy",
    subjectBadge: "Primary English & Phonics · Spatial Grammar",
    curriculumCode: "eng-prep-1",
    standard: "Oxford Literacy & ARASAAC Aligned",
    title: "Spatial Preposition Modeling: Three Objects Under Table",
    narrationText:
      "The spatial preposition 'under' defines the position of objects directly beneath a surface.",
    duration: "00:30",
    cameraDirective: "Fixed eye-level framing showing 3D spatial relationships in one unified scene",
    perspectiveType: "Dual visualization: on-device ARASAAC symbol stage and physical 3D scene",
    childSafeRule: "Uncluttered layout, clear depth cues, calm color contrast",
    videoPrompt:
      "Clean eye-level scene of an educational playroom. A sturdy wooden table stands in center. Directly beneath the horizontal tabletop, three red apples sit aligned on the floor. Soft lighting emphasizes the spatial position 'under'. Text pill highlights preposition 'under' in deep violet.",
    conceptTags: ["Spatial Relationships", "Preposition: Under", "Noun-Modifier Agreement", "Syntactic Parsing"],
    comprehensionQuestion: "What word describes the position of the apples relative to the table?",
    comprehensionAnswer: "The spatial preposition 'under' describes their position beneath the table surface.",
  },
];

export function BloomLearnDemo() {
  const [filter, setFilter] = useState<SubjectFilter>("all");
  const [activeId, setActiveId] = useState<string>("sc3-plants");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [activeMathTapped, setActiveMathTapped] = useState<number[]>([3, 4]);

  const filtered =
    filter === "all" ? curriculumLessons : curriculumLessons.filter((l) => l.subject === filter);

  const current = filtered.find((l) => l.id === activeId) || filtered[0] || curriculumLessons[0];

  const handleSelectLesson = (id: string) => {
    setActiveId(id);
    setIsPlaying(false);
    setShowAnswer(false);
    setActiveMathTapped([3, 4]);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      speak(current.narrationText);
    }
  };

  const toggleMathCounter = (idx: number) => {
    setActiveMathTapped((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className={demoBoxClass}>
      {/* ─── Studio Header & Curriculum Filter ─── */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-lg bg-accent text-white">
              <Video size={13} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-ink">
              AI Video Lesson &amp; Storyboard Studio
            </span>
          </div>
          <span className="text-xs text-muted">
            Calibrated for Next-Gen Video Generators (Sora, Runway Gen-3, Luma, Kling, Pika)
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Curriculum subjects">
          {[
            { id: "all", label: "All Subjects", icon: Sparkles },
            { id: "science", label: "Science & Video Lessons (Grade 3)", icon: Atom },
            { id: "math", label: "Mathematics Models", icon: Calculator },
            { id: "literacy", label: "Spatial Language", icon: BookOpen },
          ].map(({ id, label, icon: I }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(id as SubjectFilter)}
                className={cx(
                  "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition cursor-pointer",
                  active
                    ? "bg-accent text-white shadow-2xs"
                    : "bg-surface border border-line text-ink-soft hover:bg-bg-alt"
                )}
              >
                <I size={12} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.3fr]">
        {/* ─── Left Column: Standard-Aligned Lesson Directory ─── */}
        <div>
          <div className={demoLabelClass}>Select Curriculum Storyboard</div>
          <div className="grid gap-2.5" role="group" aria-label="Lessons list">
            {filtered.map((l) => {
              const selected = l.id === current.id;
              return (
                <button
                  key={l.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => handleSelectLesson(l.id)}
                  className={cx(
                    "flex flex-col gap-1 rounded-2xl border-2 p-3.5 text-left transition active:scale-98 cursor-pointer",
                    selected
                      ? "border-accent bg-accent-soft text-ink shadow-2xs"
                      : "border-line bg-surface text-ink-soft hover:border-accent/40 hover:bg-bg"
                  )}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-muted">
                    <span className="flex items-center gap-1.5">
                      <Film size={11} className={selected ? "text-accent" : "text-muted"} />
                      {l.subjectBadge}
                    </span>
                    <span className="rounded bg-black/5 px-1.5 py-0.2 font-mono text-[9px] text-accent font-bold">
                      {l.curriculumCode}
                    </span>
                  </div>
                  <h4 className="text-[0.96rem] font-bold text-ink leading-snug">{l.title}</h4>
                  <p className="text-[0.82rem] text-muted line-clamp-1">{l.standard}</p>
                </button>
              );
            })}
          </div>

          <div className={demoNoteClass}>
            Every lesson embeds cinematic camera directives, non-violent biology guardrails, and structured prompt metadata for grant-compliant multimodal delivery.
          </div>
        </div>

        {/* ─── Right Column: Simulated Video Storyboard & Technical Specification ─── */}
        <div className="grid gap-3.5">
          {/* Video Player Card Frame */}
          <div className="overflow-hidden rounded-[24px] border border-line bg-surface shadow-lift">
            {/* Player Control Bar Top */}
            <div className="flex items-center justify-between border-b border-line bg-[#0f172a] px-4 py-2.5 text-xs text-white">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-bold text-[11px] text-white/90">
                  AI Video Storyboard · 1080p 60fps Spec
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                  {current.curriculumCode}
                </span>
                <span className="font-mono text-white/70 text-[11px]">{current.duration}</span>
              </div>
            </div>

            {/* Video Stage Display */}
            <div className="relative min-h-[220px] bg-[#1e293b] p-5 text-white flex flex-col justify-between overflow-hidden">
              {/* Camera Perspective Indicator Badge */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 rounded-lg bg-black/60 px-2.5 py-1 text-[10px] font-bold text-amber-400 backdrop-blur-xs">
                  <Video size={11} />
                  <span>{current.cameraDirective}</span>
                </span>
                <span className="rounded-lg bg-black/50 px-2 py-1 text-[10px] font-mono text-white/80">
                  Child-Safe Biology
                </span>
              </div>

              {/* Biological / Mathematical Visual Schematic */}
              <div className="my-auto py-3 text-center">
                {current.subject === "science" && current.id === "sc3-plants" && (
                  <div className="space-y-2">
                    <div className="text-4xl">🌻</div>
                    <div className="h-0.5 w-48 bg-amber-600/70 mx-auto" />
                    <div className="font-mono text-xs text-emerald-300 font-bold">
                      Horizon A: Sub-surface Root Absorption
                    </div>
                    <div className="flex justify-center gap-3 text-sm text-cyan-300 font-mono">
                      <span>💧 Moisture Uptake</span>
                      <span>🪱 Loam Aeration</span>
                    </div>
                  </div>
                )}

                {current.subject === "science" && current.id === "sc3-body" && (
                  <div className="space-y-2">
                    <div className="text-4xl">🫁</div>
                    <div className="font-mono text-xs text-cyan-300 font-bold">
                      Thoracic Alveoli · Oxygen Diffusion
                    </div>
                    <div className="flex justify-center gap-2 text-xs text-rose-300">
                      <span>❤️ Cardiovascular Transport Stream</span>
                    </div>
                  </div>
                )}

                {current.subject === "science" && current.id === "sc3-water" && (
                  <div className="space-y-2">
                    <div className="text-3xl">☁️</div>
                    <div className="text-xs font-mono text-cyan-300">Vapor Condensation Zone</div>
                    <div className="text-sm">💧 💧 💧</div>
                    <div className="h-0.5 w-44 bg-blue-500/60 mx-auto" />
                    <div className="text-xs text-blue-300 font-mono">Solar Thermal Evaporation</div>
                  </div>
                )}

                {current.subject === "science" && current.id === "sc3-adaptations" && (
                  <div className="space-y-2">
                    <div className="text-3xl">🐪</div>
                    <div className="text-xs font-mono text-amber-300 font-bold">
                      Arabian Desert Ecosystem · Al-Qassim Dunes
                    </div>
                    <div className="flex justify-center gap-2 text-xs text-emerald-300">
                      <span>🌿 Ghaf Tree Native Habitat</span>
                    </div>
                  </div>
                )}

                {current.subject === "math" && current.mathCounters && (
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-white/70 block">
                      Interactive Concrete Counters (Tap to partition):
                    </span>
                    <div className="flex justify-center gap-2 text-3xl">
                      {Array.from({ length: current.mathCounters.total }, (_, k) => {
                        const crossed = activeMathTapped.includes(k);
                        return (
                          <button
                            key={k}
                            type="button"
                            onClick={() => toggleMathCounter(k)}
                            className={cx(
                              "transition transform active:scale-90 cursor-pointer",
                              crossed && "line-through opacity-25 grayscale scale-90"
                            )}
                            title="Tap counter"
                          >
                            🍎
                          </button>
                        );
                      })}
                    </div>
                    <div className="font-mono text-xs text-emerald-400 font-bold">
                      Active equation: 5 − 3 = 2 Remaining
                    </div>
                  </div>
                )}

                {current.subject === "literacy" && (
                  <div className="space-y-2">
                    <div className="rounded-xl border border-white/20 bg-white/10 p-3 max-w-[280px] mx-auto text-center">
                      <div className="text-xs font-mono text-amber-300 mb-1">Spatial Preposition Scene</div>
                      <div className="text-2xl mb-1">🪑</div>
                      <div className="text-xs font-mono text-emerald-300">🍎 🍎 🍎 [UNDER]</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Timeline Bar */}
              <div className="h-1.5 w-full bg-white/15 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: isPlaying ? "85%" : "35%" }}
                />
              </div>
            </div>

            {/* Video Action Bar Bottom */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-bg-alt p-3.5 border-t border-line">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-accent/90 active:scale-95 cursor-pointer"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} fill="currentColor" />}
                  <span>{isPlaying ? "Pause Narration" : "Play Clip & Narration"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => speak(current.narrationText)}
                  className="flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3 py-2 text-xs font-bold text-ink hover:bg-black/5 active:scale-95 cursor-pointer"
                >
                  <Volume2 size={13} />
                  <span>Bilingual TTS</span>
                </button>
              </div>

              <span className="text-[11px] font-mono text-muted">{current.standard}</span>
            </div>
          </div>

          {/* AI Production-Ready Prompt Specification Drawer */}
          <div className="rounded-[20px] border border-accent/25 bg-accent-soft/40 p-4 text-xs">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-accent/20">
              <span className="font-extrabold text-accent flex items-center gap-1.5">
                <Film size={13} />
                <span>Video Prompt Directive (`video` Metadata Field)</span>
              </span>
              <span className="font-mono text-[9.5px] rounded bg-accent/20 px-1.5 py-0.5 text-accent font-bold">
                API Ready: Sora / Runway / Kling
              </span>
            </div>

            <div className="grid gap-1.5 text-[11px] text-ink-soft mb-2.5">
              <div><strong>Camera Motion:</strong> {current.cameraDirective}</div>
              <div><strong>Scientific Perspective:</strong> {current.perspectiveType}</div>
              <div><strong>Pedagogical Guardrails:</strong> {current.childSafeRule}</div>
            </div>

            <div className="rounded-xl border border-line/60 bg-surface/90 p-3 font-mono text-[0.82rem] leading-relaxed text-ink shadow-2xs">
              &quot;{current.videoPrompt}&quot;
            </div>
          </div>

          {/* Active Recall Question & Answer Revelation */}
          <div className="rounded-[20px] border border-line bg-surface p-4 text-xs shadow-soft">
            <div className="flex items-center justify-between font-bold text-ink mb-1.5">
              <span className="flex items-center gap-1.5 text-accent">
                <HelpCircle size={14} />
                <span>Active Recall Comprehension Check</span>
              </span>
              <button
                type="button"
                onClick={() => setShowAnswer(!showAnswer)}
                className="text-xs font-bold text-accent underline cursor-pointer hover:opacity-80"
              >
                {showAnswer ? "Hide Solution" : "Reveal Pedagogical Answer"}
              </button>
            </div>
            <p className="font-semibold text-ink-soft text-[0.92rem] mb-2">
              {current.comprehensionQuestion}
            </p>
            {showAnswer && (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2.5 text-emerald-900 font-medium text-[0.88rem] leading-relaxed flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>{current.comprehensionAnswer}</span>
              </div>
            )}
          </div>

          {/* Concept tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted mr-1">
              Curriculum Competencies:
            </span>
            {current.conceptTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface border border-line px-2.5 py-0.5 text-[10.5px] font-semibold text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
