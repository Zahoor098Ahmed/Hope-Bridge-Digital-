"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Leaf, Menu, Moon, X } from "lucide-react";
import { LogoMark } from "./Logo";
import { ArrowChip, buttonClass, cx } from "./ui";

const links = [
  { href: "/apps/angel-talk", label: "Angel Talk" },
  { href: "/apps/bloomlearn", label: "BloomLearn" },
  { href: "/apps/bloom-focus", label: "Bloom Focus" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

const calmClass =
  "min-h-11 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-3.5 text-[0.88rem] font-semibold text-ink transition hover:border-ink/25 aria-pressed:border-emerald/50 aria-pressed:bg-mint";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // null until the saved preference is read, so the first render never overwrites it.
  const [calm, setCalm] = useState<boolean | null>(null);

  useEffect(() => {
    setCalm(document.documentElement.dataset.calm === "true");
    const onToggle = () => setCalm((c) => !c);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("hb-calm-toggle", onToggle);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("hb-calm-toggle", onToggle);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (calm === null) return;
    document.documentElement.dataset.calm = String(calm);
    try {
      localStorage.setItem("hb-calm", String(calm));
    } catch {}
  }, [calm]);

  useEffect(() => setOpen(false), [pathname]);

  const CalmIcon = calm ? Moon : Leaf;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cx(
          "mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-2 rounded-full border pr-2 pl-4 transition-all duration-500 sm:gap-4 sm:pl-5 2xl:max-w-[1360px]",
          scrolled || open
            ? "border-line bg-surface/80 shadow-lift backdrop-blur-xl"
            : "border-transparent bg-surface/40 backdrop-blur-md"
        )}
      >
        <Link
          href="/"
          aria-label="Hope Bridge Digital home"
          className="flex min-w-0 items-center gap-2.5 whitespace-nowrap text-[0.98rem] font-bold tracking-tight no-underline min-[400px]:text-[1.05rem]"
        >
          <LogoMark className="size-9 shrink-0" />
          <span>
            Hope Bridge<span className="hidden font-display font-normal italic min-[360px]:inline"> Digital</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="relative whitespace-nowrap rounded-full px-4 py-2 text-[0.93rem] font-medium text-ink-soft no-underline transition hover:bg-ink/5 hover:text-ink aria-[current=page]:bg-ink aria-[current=page]:text-bg"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            aria-pressed={!!calm}
            onClick={() => setCalm((c) => !c)}
            title="Turn off movement and soften colours"
            className={cx(calmClass, "hidden min-[400px]:inline-flex")}
          >
            <CalmIcon size={16} aria-hidden="true" />
            <span className="hidden 2xl:inline">Calm mode</span>
          </button>
          {/* Wrapper owns the visibility: buttonClass already sets display, so `hidden` can't go on the link itself. */}
          <div className="hidden xl:block">
            <Link href="/#contact" className={buttonClass("primary", "min-h-11")}>
              Get in touch
              <ArrowChip className="size-7" />
            </Link>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 cursor-pointer place-items-center rounded-full bg-ink text-bg xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cx(
          "absolute inset-x-3 top-[84px] mx-auto max-h-[calc(100dvh-100px)] max-w-[640px] overflow-y-auto rounded-[28px] border border-line bg-surface/95 p-3 shadow-lift backdrop-blur-xl sm:inset-x-5 xl:hidden",
          !open && "hidden"
        )}
      >
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-semibold no-underline hover:bg-bg"
          >
            {l.label}
            <span className="font-display text-sm text-muted italic">0{i + 1}</span>
          </Link>
        ))}
        {/* On the narrowest phones the calm toggle lives here instead of the header bar. */}
        <button
          type="button"
          aria-pressed={!!calm}
          onClick={() => setCalm((c) => !c)}
          className={cx(calmClass, "mt-2 flex w-full justify-center min-[400px]:hidden")}
        >
          <CalmIcon size={16} aria-hidden="true" /> Calm mode {calm ? "on" : "off"}
        </button>
        <Link href="/#contact" onClick={() => setOpen(false)} className={buttonClass("primary", "mt-2 w-full")}>
          Get in touch
          <ArrowChip />
        </Link>
      </div>
    </header>
  );
}
