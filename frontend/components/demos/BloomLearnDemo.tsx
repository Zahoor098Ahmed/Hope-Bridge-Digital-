"use client";

import { useState, type ReactNode } from "react";
import { SceneFrame, SceneObj, TableScene } from "@/components/Mockups";
import { buttonClass, cx, demoBoxClass, demoLabelClass, demoNoteClass } from "@/components/ui";
import { speak } from "@/lib/speak";

type Preset = { text: string; scene: () => ReactNode; answer?: string };

const presets: Preset[] = [
  { text: "three red apples under the table", scene: () => <TableScene count={3} size={40} /> },
  {
    text: "a cat on the box",
    scene: () => (
      <>
        <SceneObj style={{ left: "50%", bottom: "16%", fontSize: 90 }}>📦</SceneObj>
        <SceneObj style={{ left: "50%", bottom: "50%", fontSize: 60 }}>🐈</SceneObj>
      </>
    ),
  },
  {
    text: "a big sun above the house",
    scene: () => (
      <>
        <SceneObj style={{ left: "50%", top: "6%", fontSize: 80 }}>☀️</SceneObj>
        <SceneObj style={{ left: "50%", bottom: "16%", fontSize: 90 }}>🏠</SceneObj>
      </>
    ),
  },
  {
    text: "the dog is behind the tree",
    scene: () => (
      <>
        <SceneObj style={{ left: "58%", bottom: "24%", fontSize: 50, opacity: 0.9 }}>🐕</SceneObj>
        <SceneObj style={{ left: "46%", bottom: "14%", fontSize: 120 }}>🌳</SceneObj>
      </>
    ),
  },
  { text: "5 apples − 3 apples", scene: () => null, answer: "2 apples" },
];

export function BloomLearnDemo() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const p = presets[i];

  return (
    <div className={demoBoxClass}>
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <div className={demoLabelClass}>Pick a sentence</div>
          <div className="grid gap-2.5" role="group" aria-label="Example sentences">
            {presets.map((x, idx) => (
              <button
                key={x.text}
                type="button"
                aria-pressed={idx === i}
                onClick={() => {
                  setI(idx);
                  setShown(false);
                }}
                className="cursor-pointer rounded-2xl border-2 border-line bg-bg px-4 py-3.5 text-left font-bold text-ink aria-pressed:border-accent aria-pressed:bg-accent-soft"
              >
                {x.answer ? "➗ " : "💬 "}
                {x.text}
              </button>
            ))}
          </div>
          <p className={demoNoteClass}>
            A small preview. In the app, children can say or type <em>any</em> sentence and keep changing the picture by talking.
          </p>
        </div>
        <div>
          <div className={demoLabelClass}>BloomLearn draws it</div>
          <div className="mb-3 rounded-[14px] bg-accent-soft px-3 py-2.5 font-bold text-ink">🎙️ {p.text}</div>
          <SceneFrame className="min-h-[240px] border border-line sm:min-h-[300px]" label={`Picture of: ${p.text}`}>
            {p.answer ? (
              <div className="relative">
                <div className="flex flex-wrap justify-center gap-1.5 px-4 pt-10 pb-2 text-[2.2rem]" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, k) => (
                    <span key={k} className={cx(shown && k >= 2 && "line-through opacity-25 grayscale")}>
                      🍎
                    </span>
                  ))}
                </div>
                <div className="text-center font-head text-[1.6rem] text-[#232546]">
                  {shown ? (
                    `= ${p.answer}`
                  ) : (
                    <button type="button" className={buttonClass("primary")} onClick={() => setShown(true)}>
                      Show answer
                    </button>
                  )}
                </div>
              </div>
            ) : (
              p.scene()
            )}
          </SceneFrame>
          <div className="mt-3.5 flex flex-wrap gap-3">
            <button type="button" className={buttonClass("ghost")} onClick={() => speak(p.text)}>
              🔊 Read aloud
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
