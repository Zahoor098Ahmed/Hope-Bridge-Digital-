"use client";

/** A pill-shaped toggle group: one option is pressed at a time. */
export function Segmented<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: [T, string][];
}) {
  return (
    <div role="group" aria-label={label} className="mb-[18px] flex w-full rounded-full bg-bg-alt p-1 sm:inline-flex sm:w-auto">
      {options.map(([v, text]) => (
        <button
          key={v}
          type="button"
          aria-pressed={v === value}
          onClick={() => onChange(v)}
          className="min-h-10 flex-1 cursor-pointer rounded-full border-0 bg-transparent px-2 py-2 text-[0.82rem] min-[400px]:px-4 min-[400px]:text-[0.92rem] sm:flex-none font-bold text-ink-soft aria-pressed:bg-surface aria-pressed:text-ink aria-pressed:shadow-soft"
        >
          {text}
        </button>
      ))}
    </div>
  );
}
