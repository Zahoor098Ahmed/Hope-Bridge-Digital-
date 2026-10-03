"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/lib/site";
import { ArrowChip, buttonClass } from "./ui";

const inputClass =
  "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 font-medium text-ink outline-none transition placeholder:text-muted/70 focus:border-ink/40 focus:bg-surface focus:ring-4 focus:ring-brand/10";

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `[${d.get("app")}] Message from ${d.get("name")} (${d.get("role")})`;
    const body = `${d.get("message")}\n\n— ${d.get("name")}\n${d.get("email")}\n${d.get("role")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[32px] border border-line bg-surface p-5 shadow-lift sm:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Your name">
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </Field>
        <Field id="email" label="Email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="role" label="I am a…">
          <select id="role" name="role" defaultValue="Parent" className={inputClass}>
            <option>Parent</option>
            <option>Teacher</option>
            <option>Therapist</option>
            <option>School or clinic</option>
            <option>Other</option>
          </select>
        </Field>
        <Field id="app" label="Interested in">
          <select id="app" name="app" defaultValue="All apps" className={inputClass}>
            <option>All apps</option>
            <option>Angel Talk</option>
            <option>BloomLearn</option>
            <option>Bloom Focus</option>
          </select>
        </Field>
      </div>
      <Field id="message" label="Message">
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us a little about your child, class or practice…"
          className={`${inputClass} min-h-[130px] resize-y`}
        />
      </Field>
      <button type="submit" className={buttonClass("primary", "justify-between sm:justify-self-start")}>
        Send message
        <ArrowChip />
      </button>
      <p className="text-[0.9rem] text-muted" aria-live="polite">
        {sent ? "Your email app should open with the message ready. Thank you!" : "This opens your email app with your message ready to send."}
      </p>
    </form>
  );
}
