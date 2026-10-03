import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { Reveal } from "./Reveal";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1240px] px-4 sm:px-8 2xl:max-w-[1360px]", className)}>{children}</div>;
}

const tones = {
  paper: "",
  alt: "bg-bg-alt",
  night: "bg-night text-white",
};

export function Section({
  id,
  tone = "paper",
  className,
  style,
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section id={id} style={style} className={cx("relative scroll-mt-24 py-20 md:py-28 2xl:py-32", tones[tone], className)}>
      {children}
    </section>
  );
}

/** Editorial section label: "01 — Our apps". */
export function Kicker({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cx("mb-5 inline-flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.2em] opacity-80", className)}>
      {index && <span className="font-display text-[0.95rem] tracking-normal text-accent italic normal-case">{index}</span>}
      {index && <span className="h-px w-8 bg-current opacity-40" />}
      <span>{children}</span>
    </div>
  );
}

/** Small pill badge with a soft accent dot. */
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 py-1.5 pr-4 pl-2 text-[0.82rem] font-semibold text-ink-soft shadow-soft backdrop-blur",
        className
      )}
    >
      <span className="relative grid size-5 place-items-center rounded-full bg-accent-soft">
        <span className="size-2 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}

export const h1Class = "text-[clamp(2.7rem,6.4vw,5.6rem)] leading-[0.98] tracking-[-0.035em] text-balance";
export const h2Class = "text-[clamp(2.1rem,4.4vw,3.7rem)] leading-[1.03] tracking-[-0.03em] text-balance";
export const leadClass = "text-[clamp(1.05rem,1.5vw,1.25rem)] leading-relaxed text-ink-soft text-pretty";
/** Italic serif accent used for one emphasised word in a headline. */
export const emClass = "font-display italic font-normal text-accent";

export function SectionHead({
  index,
  kicker,
  title,
  children,
  align = "center",
  className,
}: {
  index?: string;
  kicker?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal className={cx("mb-12 md:mb-16", align === "center" ? "mx-auto max-w-[780px] text-center" : "max-w-[720px]", className)}>
      {kicker && <Kicker index={index}>{kicker}</Kicker>}
      <h2 className={h2Class}>{title}</h2>
      {children && <p className={cx(leadClass, "mt-5", align === "center" && "mx-auto max-w-[620px]")}>{children}</p>}
    </Reveal>
  );
}

const buttonBase =
  "group inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-full text-[0.95rem] font-semibold no-underline transition duration-300 ease-out active:scale-[0.98]";
const buttonVariants = {
  primary: "bg-ink pr-2 pl-6 text-bg shadow-[0_10px_30px_-12px_rgb(18_20_43/0.6)] hover:shadow-[0_16px_40px_-14px_rgb(18_20_43/0.7)]",
  accent: "bg-accent pr-2 pl-6 text-white shadow-[0_10px_30px_-12px_var(--accent)]",
  ghost: "border border-line bg-surface/80 px-6 text-ink backdrop-blur hover:border-ink/30 hover:bg-surface",
  white: "bg-white pr-2 pl-6 text-[#12142b] shadow-[0_10px_30px_-12px_rgb(0_0_0/0.5)]",
  outline: "border border-white/25 px-6 text-white hover:border-white/60 hover:bg-white/5",
};
export type ButtonVariant = keyof typeof buttonVariants;
const withArrow: ButtonVariant[] = ["primary", "accent", "white"];

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cx(buttonBase, buttonVariants[variant], className);
}

/** Round arrow chip that nudges forward on hover. */
export function ArrowChip({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "grid size-8 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5",
        className
      )}
    >
      <ArrowRight size={16} strokeWidth={2.2} />
    </span>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; children: ReactNode }) {
  return (
    <Link {...props} className={buttonClass(variant, className)}>
      {children}
      {withArrow.includes(variant) && <ArrowChip className={variant === "white" ? "bg-[#12142b]/8" : undefined} />}
    </Link>
  );
}

export const cardClass =
  "rounded-[28px] border border-line bg-surface p-6 shadow-soft transition duration-500 ease-out hover:-translate-y-1 hover:shadow-lift sm:p-8";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx(cardClass, "h-full", className)}>{children}</div>;
}

export function IconBox({ children, className = "bg-accent-soft text-accent" }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx("mb-6 grid size-12 shrink-0 place-items-center rounded-2xl", className)} aria-hidden="true">
      {children}
    </div>
  );
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cx("grid gap-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.98rem] font-medium text-ink-soft">
          <span aria-hidden="true" className="mt-[3px] grid size-[20px] shrink-0 place-items-center rounded-full bg-accent text-white">
            <svg viewBox="0 0 12 12" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 6.2 5 8.5l4.5-5" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cx("rounded-full border border-line bg-bg px-3 py-1 text-[0.82rem] font-semibold text-ink-soft", className)}>
      {children}
    </span>
  );
}

/** Frosted floating card used around product mockups. */
export function GlassCard({ className, children, style }: { className?: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={style}
      className={cx(
        "rounded-2xl border border-white/60 bg-white/75 p-3.5 text-[#12142b] shadow-float ring-1 ring-black/[0.03] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export const noticeClass = "rounded-2xl border border-line bg-bg-alt px-5 py-4 text-[0.92rem] text-ink-soft";
export const demoNoteClass = "mt-4 text-[0.88rem] text-muted";
export const demoLabelClass = "mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-muted";
export const demoBoxClass = "p-4 sm:p-8";
