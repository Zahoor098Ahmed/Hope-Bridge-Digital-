import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";
import { LogoMark } from "./Logo";
import { ButtonLink, Container } from "./ui";

const linkClass = "text-white/65 no-underline transition hover:text-white";

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: "Who it's for",
    links: [
      ["Parents & families", "/#who"],
      ["Teachers & schools", "/#who"],
      ["Therapists & clinics", "/#who"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Our approach", "/#approach"],
      ["Our promise", "/#promise"],
      ["Contact", "/#contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grain opacity-[0.07]" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-violet/25 blur-[120px]" />

      <Container className="relative">
        {/* Closing statement */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-16 md:flex-row md:items-end md:py-20">
          <h2 className="max-w-[640px] text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.04] tracking-[-0.03em]">
            Every child has something to say. <span className="font-normal text-white/50 italic">Let&apos;s help them say it.</span>
          </h2>
          <ButtonLink href="/#contact" variant="white">
            Start a conversation
          </ButtonLink>
        </div>

        <div className="grid grid-cols-1 gap-10 py-14 min-[440px]:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="min-[440px]:col-span-2 md:col-span-1">
            <Link href="/" className="mb-5 inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-white no-underline">
              <LogoMark className="size-10" />
              <span>
                Hope Bridge <span className="font-display font-normal italic">Digital</span>
              </span>
            </Link>
            <p className="mb-5 max-w-[320px] text-white/65">{site.tagline}</p>
            <a href={`mailto:${site.email}`} className={`${linkClass} inline-flex items-center gap-2 [overflow-wrap:anywhere]`}>
              <Mail size={16} aria-hidden="true" /> {site.email}
            </a>
          </div>
          <div>
            <h4 className="mb-4 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white/45">Our apps</h4>
            <ul className="grid gap-3">
              {apps.map((a) => (
                <li key={a.slug}>
                  <Link href={`/apps/${a.slug}`} className={`${linkClass} group inline-flex items-center gap-1`}>
                    {a.name}
                    <ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white/45">{col.title}</h4>
              <ul className="grid gap-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-3 border-t border-white/10 py-8 text-[0.82rem] leading-relaxed text-white/45">
          <p>
            Our apps support communication, learning and therapy practice. They are not medical devices and do not diagnose or
            treat any condition. Always follow the guidance of your child&apos;s healthcare professional.
          </p>
          <p>Credits: ARASAAC pictograms (CC BY-NC-SA) · OpenSymbols · Global Digital Library · Microsoft Fluent Emoji 3D (MIT licence).</p>
          <p>
            © {new Date().getFullYear()} {site.name}. Made with care for every child.
          </p>
        </div>
      </Container>

      {/* Oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] text-center font-display text-[19vw] leading-[0.8] font-medium tracking-[-0.05em] whitespace-nowrap text-white/[0.05] select-none"
      >
        Hope Bridge
      </div>
    </footer>
  );
}
