"use client";

import { Moon } from "lucide-react";
import { buttonClass } from "./ui";

/** Toggles Calm mode from anywhere on the page; the Header listens and keeps the state. */
export function CalmButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("hb-calm-toggle"))}
      className={buttonClass("outline", "px-5")}
    >
      <Moon size={16} aria-hidden="true" /> Try Calm mode
    </button>
  );
}
