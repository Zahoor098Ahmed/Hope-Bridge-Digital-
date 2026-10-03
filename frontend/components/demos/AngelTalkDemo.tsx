"use client";

import { useState } from "react";
import { speak } from "@/lib/speak";
import { cx, demoBoxClass, demoNoteClass } from "@/components/ui";
import { Segmented } from "./Segmented";

const tiles: [string, string, string][] = [
  ["🙋", "I", "#ffe3ec"],
  ["🤲", "want", "#e3f1ff"],
  ["💗", "feel", "#fde6ff"],
  ["➕", "more", "#efe9ff"],
  ["💧", "water", "#dff7f0"],
  ["🍎", "apple", "#ffe3e3"],
  ["⚽", "play", "#ffe9dc"],
  ["🌳", "outside", "#e5f6df"],
  ["😊", "happy", "#fff3c9"],
  ["😴", "tired", "#efe9ff"],
  ["🚶", "go", "#e3f1ff"],
  ["🙏", "please", "#fff3c9"],
];

const quick: [string, string][] = [
  ["🆘", "Help"],
  ["💧", "Water"],
  ["🚽", "Bathroom"],
  ["✋", "Stop"],
];

const phrases: [string, string][] = [
  ["🍕", "I want pizza, please."],
  ["😴", "I feel tired."],
  ["🌳", "Can we go outside?"],
  ["🧸", "I need a break."],
  ["🤗", "I love you, mama."],
];

const tileClass =
  "cursor-pointer rounded-[18px] border-2 border-transparent text-center font-extrabold text-[#232546] transition duration-150 hover:border-accent active:scale-95";
const roundBtn = "grid size-11 cursor-pointer place-items-center rounded-full border-0 text-lg disabled:opacity-40";

export function AngelTalkDemo() {
  const [mode, setMode] = useState<"builder" | "phrases">("builder");
  const [words, setWords] = useState<{ e: string; w: string }[]>([]);
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

  function addWord(e: string, w: string) {
    setWords((prev) => [...prev, { e, w }]);
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
          ["builder", "🧱 Sentence Builder"],
          ["phrases", "💬 Whole Phrases"],
        ]}
      />

      {mode === "builder" ? (
        <>
          <div className="mb-3.5 flex min-h-16 flex-wrap items-center gap-2 rounded-[18px] bg-accent-soft px-3 py-2.5" aria-live="polite">
            {words.length === 0 ? (
              <span className="pl-1.5 font-semibold text-muted">Tap pictures to build a sentence…</span>
            ) : (
              words.map((x, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 rounded-xl bg-surface px-2.5 py-1.5 font-extrabold text-ink">
                  <span aria-hidden="true">{x.e}</span>
                  {x.w}
                </span>
              ))
            )}
            <span className="ml-auto flex gap-1.5">
              <button
                type="button"
                aria-label="Remove last word"
                onClick={() => setWords((w) => w.slice(0, -1))}
                disabled={!words.length}
                className={cx(roundBtn, "bg-surface text-ink")}
              >
                ⌫
              </button>
              <button
                type="button"
                aria-label="Speak sentence"
                onClick={() => sentence && say(sentence)}
                className={cx(roundBtn, "bg-accent text-white", speaking && "animate-ring")}
              >
                🔊
              </button>
            </span>
          </div>
          <div className="mb-3.5 grid grid-cols-2 gap-2 min-[360px]:grid-cols-4">
            {quick.map(([e, w]) => (
              <button key={w} type="button" onClick={() => say(w)} className={cx(tileClass, "bg-[#fff3d6] px-1 py-2.5 text-[0.78rem] min-[400px]:text-sm")}>
                <span className="block text-[1.4rem] leading-tight" aria-hidden="true">
                  {e}
                </span>
                {w}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 min-[481px]:grid-cols-4 sm:gap-2.5 lg:grid-cols-6">
            {tiles.map(([e, w, bg]) => (
              <button
                key={w}
                type="button"
                onClick={() => addWord(e, w)}
                className={cx(tileClass, "min-h-[80px] px-1 pt-3 pb-2.5 text-[0.85rem] sm:min-h-[88px] sm:text-[0.92rem]")}
                style={{ background: bg }}
              >
                <span className="block text-[2rem] leading-tight" aria-hidden="true">
                  {e}
                </span>
                {w}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="grid gap-2.5">
          {phrases.map(([e, p]) => (
            <button
              key={p}
              type="button"
              onClick={() => say(p)}
              className={cx(tileClass, "flex items-center gap-3.5 bg-accent-soft px-[18px] py-3.5 text-left text-ink")}
            >
              <span className="text-[1.6rem]" aria-hidden="true">
                {e}
              </span>
              {p}
            </button>
          ))}
        </div>
      )}
      <p className={demoNoteClass}>
        {noVoice
          ? "Your browser doesn't support spoken voice, but the app speaks every tile out loud."
          : "Turn your sound on. This preview uses your browser's voice; the app offers boy, girl, woman and man voices in six languages."}
      </p>
    </div>
  );
}
