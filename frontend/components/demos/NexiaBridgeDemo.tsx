"use client";

import { useState } from "react";
import { Check, Lock } from "lucide-react";
import { cx, demoBoxClass, demoLabelClass, demoNoteClass } from "@/components/ui";

type Role = "parent" | "therapist" | "supervisor" | "admin";

const roles: [Role, string][] = [
  ["parent", "👪 Parent"],
  ["therapist", "🩺 Therapist"],
  ["supervisor", "🧭 Supervisor"],
  ["admin", "🏢 Admin"],
];

// What each role can do with each part of the child's shared record.
const record: { item: string; access: Record<Role, string | null> }[] = [
  { item: "Targets and goals", access: { parent: "Read", therapist: "Read and write", supervisor: "Read and write", admin: "Read" } },
  { item: "Session summaries", access: { parent: "Read", therapist: "Read and write", supervisor: "Read and review", admin: "Summary only" } },
  { item: "Home tasks", access: { parent: "Tick off and add a note", therapist: "Read and write", supervisor: "Read", admin: "Completion status" } },
  { item: "Family messages", access: { parent: "Chat with the therapist", therapist: "Read and write", supervisor: "Read", admin: null } },
  { item: "ABC events", access: { parent: null, therapist: "Read and write", supervisor: "Read", admin: null } },
  { item: "Case notes and observations", access: { parent: null, therapist: "Staff only", supervisor: "Staff only", admin: null } },
  { item: "Accounts, centres, billing", access: { parent: null, therapist: null, supervisor: null, admin: "Manage" } },
];

const portalOf: Record<Role, string> = {
  parent: "Parent portal: Home, Progress, Targets, Sessions, Messages and Child Mode",
  therapist: "Therapist portal: Today, Targets, Graphs, Notes and Family",
  supervisor: "Supervisor portal: Review, Children, Staff, Reports and Templates",
  admin: "Admin portal: Home, Portals, Cases, Centers, Billing and Settings",
};

export function NexiaBridgeDemo() {
  const [role, setRole] = useState<Role>("parent");
  const visible = record.filter((r) => r.access[role]).length;

  return (
    <div className={demoBoxClass}>
      <div className={demoLabelClass}>Open the same child as…</div>
      <div role="group" aria-label="Role" className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {roles.map(([r, label]) => (
          <button
            key={r}
            type="button"
            aria-pressed={r === role}
            onClick={() => setRole(r)}
            className="min-h-11 cursor-pointer rounded-2xl border-2 border-line bg-bg px-3 py-2 text-[0.92rem] font-bold text-ink-soft aria-pressed:border-accent aria-pressed:bg-accent-soft aria-pressed:text-ink"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid items-start gap-6 md:grid-cols-[260px_1fr]">
        <div className="rounded-[22px] bg-accent-soft p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full bg-accent text-lg font-bold text-white">A</span>
            <span>
              <span className="block font-bold">Adam · Age 6</span>
              <span className="text-sm text-muted">One shared record</span>
            </span>
          </div>
          <p className="text-sm text-ink-soft">{portalOf[role]}</p>
          <p className="mt-4 font-display text-3xl">
            {visible}
            <span className="text-base text-muted"> / {record.length} parts visible</span>
          </p>
        </div>

        <ul className="divide-y divide-line overflow-hidden rounded-[22px] border border-line" aria-live="polite">
          {record.map((r) => {
            const a = r.access[role];
            return (
              <li key={r.item} className={cx("flex items-center gap-3 px-4 py-3", !a && "bg-bg-alt/60")}>
                <span
                  aria-hidden="true"
                  className={cx(
                    "grid size-7 shrink-0 place-items-center rounded-full",
                    a ? "bg-accent text-white" : "bg-line text-muted"
                  )}
                >
                  {a ? <Check size={14} strokeWidth={2.6} /> : <Lock size={13} />}
                </span>
                <span className={cx("min-w-0 flex-1 font-semibold", !a && "text-muted")}>{r.item}</span>
                <span className={cx("text-right text-sm", a ? "text-ink-soft" : "text-muted")}>{a ?? "Hidden"}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <p className={demoNoteClass}>A parent can only ever see their own child, and decides which professionals can see their child&apos;s information.</p>
    </div>
  );
}
