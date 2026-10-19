import type { ReactNode } from "react";
import { cx } from "./ui";

function Phone({ children, className, label }: { children: ReactNode; className?: string; label: string }) {
  return (
    <div
      className={cx(
        // Positioned for the side buttons; callers may pass `absolute` instead (both can't coexist in one class list).
        !className?.includes("absolute") && "relative",
        "w-[248px] shrink-0 rounded-[44px] bg-[linear-gradient(150deg,#3a3d63_0%,#16182f_45%,#2a2d52_100%)] p-[9px] shadow-phone ring-1 ring-white/10",
        className
      )}
      role="img"
      aria-label={label}
    >
      {/* side buttons */}
      <span aria-hidden="true" className="absolute top-28 -left-[3px] h-10 w-[3px] rounded-l bg-[#2a2d52]" />
      <span aria-hidden="true" className="absolute top-40 -left-[3px] h-14 w-[3px] rounded-l bg-[#2a2d52]" />
      <span aria-hidden="true" className="absolute top-32 -right-[3px] h-16 w-[3px] rounded-r bg-[#2a2d52]" />
      <div className="relative flex h-[480px] flex-col overflow-hidden rounded-[36px] bg-white font-sans text-xs leading-snug text-[#232546]">
        <div className="relative z-10 mx-auto mt-2 mb-2 h-[22px] w-[78px] shrink-0 rounded-full bg-[#0c0d1c]" />
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
    <div className="flex items-center justify-between px-3.5 pt-1 pb-2 font-head text-sm font-semibold">
      <span>{title}</span>
      <span>{right}</span>
    </div>
  );
}

function ScreenBody({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 flex-col gap-2 px-3 pb-3">{children}</div>;
}

function MiniChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((i) => (
        <span key={i} className="rounded-full bg-[#f1f1f6] px-2 py-0.5 text-[10px] font-bold">
          {i}
        </span>
      ))}
    </div>
  );
}

const atTiles: [string, string, string][] = [
  ["🙋", "I", "#ffe3ec"],
  ["🤲", "want", "#e3f1ff"],
  ["💧", "water", "#dff7f0"],
  ["😊", "happy", "#fff3c9"],
  ["😴", "tired", "#efe9ff"],
  ["⚽", "play", "#ffe9dc"],
  ["🍎", "apple", "#ffe3e3"],
  ["👩", "mama", "#fde6ff"],
  ["🌳", "outside", "#e5f6df"],
];

export function AngelTalkPhone({ className }: { className?: string }) {
  return (
    <Phone className={className} label="Angel Talk talk board with picture tiles and a sentence strip">
      <ScreenHead title="Angel Talk" right="🗣️" />
      <ScreenBody>
        <div className="flex items-center gap-1.5 rounded-[14px] bg-[#efeaff] px-2.5 py-2 font-extrabold">
          {["I", "want", "water"].map((w) => (
            <span key={w} className="rounded-lg bg-white px-2 py-0.5">
              {w}
            </span>
          ))}
          <span className="ml-auto grid size-[26px] place-items-center rounded-full bg-[#7a5af5] text-white">🔊</span>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {["🆘 Help", "💧 Water", "🚽 Toilet", "✋ Stop"].map((q) => (
            <span key={q} className="rounded-[10px] bg-[#fff3d6] px-0.5 py-1 text-center text-[10px] font-extrabold">
              {q}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[7px]">
          {atTiles.map(([e, w, bg]) => (
            <div key={w} className="rounded-[14px] border-2 border-black/5 px-0.5 pt-2 pb-1.5 text-center text-[11px] font-extrabold" style={{ background: bg }}>
              <span className="block text-[26px] leading-tight">{e}</span>
              {w}
            </div>
          ))}
        </div>
        <MiniChips items={["English", "العربية"]} />
      </ScreenBody>
    </Phone>
  );
}

/** Sky, grass and a sun: the backdrop every BloomLearn scene is drawn on. */
export function SceneFrame({ children, className, label }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <div
      className={cx("relative min-h-[210px] flex-1 overflow-hidden rounded-[18px] bg-linear-to-b from-[#eaf6ff] to-[#fdfcf7]", className)}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[#e9f5df]" />
      {children}
    </div>
  );
}

/** An emoji placed at a position inside a SceneFrame (horizontally centred on `left`). */
export function SceneObj({ children, style }: { children: ReactNode; style: React.CSSProperties }) {
  return (
    <div className="absolute -translate-x-1/2 leading-none" style={style}>
      {children}
    </div>
  );
}

export function TableScene({ count = 3, size = 26 }: { count?: number; size?: number }) {
  return (
    <>
      <SceneObj style={{ left: "82%", top: "8%", fontSize: size * 1.2 }}>☀️</SceneObj>
      <div className="absolute inset-x-[16%] top-[38%] h-3 rounded-md bg-[#b9814f]" />
      <div className="absolute top-[38%] left-[20%] h-[44%] w-2.5 rounded-[3px] bg-[#9a6a40]" />
      <div className="absolute top-[38%] right-[20%] h-[44%] w-2.5 rounded-[3px] bg-[#9a6a40]" />
      {Array.from({ length: count }, (_, i) => (
        <SceneObj key={i} style={{ left: `${38 + i * 12}%`, bottom: "16%", fontSize: size }}>
          🍎
        </SceneObj>
      ))}
    </>
  );
}

export function BloomLearnPhone({ className }: { className?: string }) {
  return (
    <Phone className={className} label="BloomLearn drawing three red apples under a table from a sentence">
      <ScreenHead title="BloomLearn" right="🌱" />
      <ScreenBody>
        <div className="flex items-center gap-2 rounded-[14px] bg-[#e3f7ef] px-3 py-2 font-bold">🎙️ three red apples under the table</div>
        <SceneFrame>
          <TableScene />
        </SceneFrame>
        <MiniChips items={["🔴 red", "3️⃣ three", "⬇️ under", "🍎 apples"]} />
        <div className="mt-auto rounded-full bg-[#18a57b] p-2.5 text-center font-extrabold text-white">🔊 Read aloud</div>
      </ScreenBody>
    </Phone>
  );
}

const faces: [string, string][] = [
  ["😊", "Happy"],
  ["😌", "Calm"],
  ["🤩", "Excited"],
  ["😴", "Tired"],
  ["😟", "Worried"],
  ["😠", "Grumpy"],
];

export function BloomFocusPhone({ className }: { className?: string }) {
  return (
    <Phone className={className} label="Bloom Focus feelings check-in with a dinosaur hero">
      <ScreenHead title="Bloom Focus" right="⭐ 12" />
      <ScreenBody>
        <div className="flex items-center gap-2 rounded-2xl bg-[#fff0e8] p-2.5">
          <span className="text-[34px]">🦖</span>
          <span className="rounded-xl bg-white px-2 py-1.5 font-bold">Hi friend! How are you feeling today?</span>
        </div>
        <div className="grid grid-cols-3 gap-[7px]">
          {faces.map(([e, l]) => (
            <div key={l} className="rounded-[14px] bg-[#f6f4ff] px-0.5 py-2 text-center text-[10.5px] font-extrabold">
              <span className="block text-[28px]">{e}</span>
              {l}
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-full bg-[#ef7d4f] p-2.5 text-center font-extrabold text-white">Let&apos;s go! →</div>
      </ScreenBody>
    </Phone>
  );
}

const nexiaTabs: [string, string][] = [
  ["🏠", "Home"],
  ["📈", "Progress"],
  ["🎯", "Targets"],
  ["💬", "Messages"],
];

export function NexiaBridgePhone({ className }: { className?: string }) {
  return (
    <Phone className={className} label="Nexia Bridge parent portal with progress, home tasks and a message from the therapist">
      <ScreenHead title="Nexia Bridge" right="🔔" />
      <ScreenBody>
        <div className="flex items-center gap-2 rounded-2xl bg-[#f4eee6] p-2.5">
          <span className="grid size-9 place-items-center rounded-full bg-[#4f46e5] text-sm font-extrabold text-white">A</span>
          <span className="leading-tight">
            <span className="block font-extrabold">Adam · Age 6</span>
            <span className="text-[10px] text-[#6e7191]">Parent portal</span>
          </span>
          <span className="ml-auto rounded-full bg-[#ffe4ea] px-2 py-0.5 text-[9.5px] font-extrabold text-[#e11d48]">2 new</span>
        </div>
        <div className="rounded-2xl border border-[#e8e2d9] p-2.5">
          <div className="mb-1.5 flex justify-between text-[10.5px] font-extrabold">
            <span>Today&apos;s home practice</span>
            <span className="text-[#4f46e5]">3 / 4</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#eeeaf9]">
            <div className="h-full w-3/4 rounded-full bg-[#4f46e5]" />
          </div>
          <div className="mt-2 grid gap-1 text-[10.5px] font-bold">
            {["Request with a picture card", "Brush teeth: 5 steps", "Name 3 feelings"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="grid size-3.5 place-items-center rounded-full bg-[#12a37b] text-[8px] text-white">✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl rounded-tl-sm bg-[#eef0ff] p-2.5 text-[10.5px] leading-snug">
          <span className="mb-0.5 block font-extrabold text-[#4f46e5]">Speech therapist</span>
          Great work this week! New target added: two-word requests. ✓✓
        </div>
        <div className="mt-auto grid grid-cols-4 rounded-2xl border border-[#e8e2d9] p-1.5 text-center text-[9px] font-bold">
          {nexiaTabs.map(([e, l], i) => (
            <span key={l} className={i === 0 ? "rounded-xl bg-[#eef0ff] py-1 text-[#4f46e5]" : "py-1 text-[#6e7191]"}>
              <span className="block text-sm">{e}</span>
              {l}
            </span>
          ))}
        </div>
      </ScreenBody>
    </Phone>
  );
}

export const phones = {
  "angel-talk": AngelTalkPhone,
  bloomlearn: BloomLearnPhone,
  "bloom-focus": BloomFocusPhone,
  "nexia-bridge": NexiaBridgePhone,
} as const;
