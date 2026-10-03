import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight, Check, Plus, Sparkles, Volume2 } from "lucide-react";
import { apps, accent, focusGames, getApp, heroWorlds, type AppInfo } from "@/lib/apps";
import { phones } from "@/components/Mockups";
import { AppMark } from "@/components/AppMark";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/Spotlight";
import { AngelTalkDemo } from "@/components/demos/AngelTalkDemo";
import { BloomLearnDemo } from "@/components/demos/BloomLearnDemo";
import { BloomFocusDemo } from "@/components/demos/BloomFocusDemo";
import {
  ButtonLink,
  Chip,
  Container,
  GlassCard,
  Kicker,
  Section,
  SectionHead,
  cx,
  demoNoteClass,
  emClass,
  h1Class,
  h2Class,
  leadClass,
  noticeClass,
} from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  return {
    title: `${app.name}: ${app.tagline}`,
    description: app.summary,
    openGraph: { title: `${app.name} by Hope Bridge Digital`, description: app.summary },
  };
}

const demos = {
  "angel-talk": {
    Demo: AngelTalkDemo,
    title: <>Tap a picture. <span className={emClass}>Hear a voice.</span></>,
    text: "This is how a child talks with Angel Talk. Build a sentence word by word, or switch to Whole Phrases for one-tap sentences.",
  },
  bloomlearn: {
    Demo: BloomLearnDemo,
    title: <>Choose a sentence. <span className={emClass}>Watch it appear.</span></>,
    text: "See how BloomLearn turns language into a picture, with every word in the right place.",
  },
  "bloom-focus": {
    Demo: BloomFocusDemo,
    title: <>Feelings first, <span className={emClass}>then focus.</span></>,
    text: "Every session starts by asking how the child feels. Try a happy face, then try a tired or worried one.",
  },
} as const;

// Two floating notes around the phone in each app's hero.
const heroNotes: Record<AppInfo["slug"], [string, string][]> = {
  "angel-talk": [
    ["Spoken aloud", "“I feel tired.”"],
    ["Two languages, one tile", "English + Urdu or Arabic"],
  ],
  bloomlearn: [
    ["Understands", "under · on · behind · beside"],
    ["Maths you can see", "5 apples − 3 apples = ?"],
  ],
  "bloom-focus": [
    ["Always just right", "Steps up above 85% accuracy"],
    ["Today's training", "4 games with Rexy Roarson"],
  ],
};

export default async function AppPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();

  const PhoneEl = phones[app.slug];
  const { Demo, title, text } = demos[app.slug];
  const others = apps.filter((a) => a.slug !== app.slug);
  const [noteA, noteB] = heroNotes[app.slug];

  const sections: [string, string][] = [
    ["#try", "Try it"],
    ["#features", "Features"],
    ["#who", "Who it's for"],
    ["#how", "How it works"],
    ["#compare", "Compare"],
    ...(app.faq ? ([["#faq", "FAQ"]] as [string, string][]) : []),
  ];

  // Bento: when the last row would hold two cards, let the first card span two columns.
  const featureSpan = (i: number) => (app.features.length % 3 === 2 && i === 0 ? "lg:col-span-2" : "");

  return (
    <div style={accent(app.accent)}>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pb-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 size-[640px] rounded-full bg-accent/20 blur-[120px] calm:opacity-50" />
          <div className="absolute bottom-0 -left-40 size-[480px] rounded-full bg-accent/10 blur-[120px] calm:opacity-50" />
          <div className="absolute inset-0 bg-grain opacity-[0.16] mix-blend-multiply" />
        </div>
        <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="animate-fade-up">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
              <Link href="/" className="no-underline hover:text-ink">
                Home
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <Link href="/#apps" className="no-underline hover:text-ink">
                Apps
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-ink">{app.name}</span>
            </nav>
            <div className="mb-6 flex items-center gap-4">
              <AppMark app={app} size="lg" />
              <span className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-muted">{app.category}</span>
            </div>
            <h1 className={h1Class}>
              {app.name}
              <span className={cx(emClass, "mt-2 block text-[0.5em] leading-tight tracking-[-0.02em]")}>{app.tagline}</span>
            </h1>
            <p className={cx(leadClass, "mt-7 max-w-[620px]")}>{app.intro}</p>

            <dl className="mt-9 grid max-w-[620px] gap-0 border-y border-line">
              {[
                ["Platforms", app.platforms],
                ["Languages", app.languages],
              ].map(([label, items], i) => (
                <div key={label as string} className={cx("grid gap-3 py-4 sm:grid-cols-[140px_1fr] sm:items-center", i > 0 && "border-t border-line")}>
                  <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted">{label as string}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {(items as string[]).map((x) => (
                      <Chip key={x} className="bg-surface">
                        {x}
                      </Chip>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#try" variant="accent">
                Try it live
              </ButtonLink>
              <ButtonLink href="/#contact" variant="ghost">
                Request access
              </ButtonLink>
            </div>
          </div>

          {/* Stage */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative isolate flex min-h-[560px] items-center justify-center overflow-hidden rounded-[44px] border border-white/60 bg-[linear-gradient(160deg,var(--accent-soft),color-mix(in_srgb,var(--accent)_26%,var(--color-surface)))] shadow-lift">
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dots opacity-60" />
              <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[400px] -translate-1/2 rounded-full bg-accent/30 blur-[90px]" />
              <PhoneEl className="animate-float" />
            </div>
            <GlassCard className="absolute top-10 -left-2 z-10 max-w-[220px] sm:-left-8">
              <div className="mb-1 flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#6e7191]">
                <Volume2 size={12} aria-hidden="true" style={{ color: app.accent }} /> {noteA[0]}
              </div>
              <p className="font-display text-[1.02rem] leading-snug italic">{noteA[1]}</p>
            </GlassCard>
            <GlassCard className="absolute -right-2 bottom-12 z-10 max-w-[230px] sm:-right-8">
              <div className="mb-1 flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#6e7191]">
                <Sparkles size={12} aria-hidden="true" style={{ color: app.accent }} /> {noteB[0]}
              </div>
              <p className="text-[0.95rem] leading-snug font-semibold">{noteB[1]}</p>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* ───────────── Section nav ───────────── */}
      <div className="sticky top-[84px] z-40 px-3">
        <nav
          aria-label={`${app.name} sections`}
          className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-surface/80 p-1.5 shadow-soft backdrop-blur-xl"
        >
          {sections.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-ink-soft no-underline transition hover:bg-accent-soft hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* ───────────── Live demo ───────────── */}
      <Section id="try" className="scroll-mt-36">
        <Container>
          <SectionHead index="01" kicker="Try it live" title={title}>
            {text}
          </SectionHead>
          <Reveal>
            <div className="overflow-hidden rounded-[32px] border border-line bg-surface shadow-lift">
              <div className="flex items-center gap-3 border-b border-line bg-bg-alt/70 px-5 py-3.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-3 rounded-full bg-[#ff6b6b]/70" />
                  <span className="size-3 rounded-full bg-[#ffc75f]/80" />
                  <span className="size-3 rounded-full bg-[#4cd38a]/70" />
                </span>
                <span className="mx-auto flex items-center gap-2 rounded-full bg-surface px-4 py-1 text-xs font-medium text-muted">
                  <AppMark app={app} size="sm" className="size-5! rounded-md! [&>svg]:size-3" /> Live preview · {app.name}
                </span>
                <span className="hidden items-center gap-1.5 text-xs font-semibold text-accent sm:flex">
                  <span className="size-2 animate-pulse rounded-full bg-accent" /> Interactive
                </span>
              </div>
              <Demo />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ───────────── Features (bento) ───────────── */}
      <Section id="features" tone="alt" className="scroll-mt-36">
        <Container>
          <SectionHead index="02" kicker="Features" title={<>Everything inside <span className={emClass}>{app.name}</span></>} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {app.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80} className={featureSpan(i)}>
                <Spotlight>
                  <span className="mb-8 grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <h3 className="mb-4 text-xl">{f.title}</h3>
                  <ul className="grid gap-2.5 text-[0.96rem] text-ink-soft">
                    {f.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Extras app={app} />

      {/* ───────────── Who it's for ───────────── */}
      <Section id="who" className="scroll-mt-36">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead align="left" index="03" kicker="Who it's for" title={<>Made for children, and the <span className={emClass}>grown-ups beside them</span></>} className="lg:sticky lg:top-40 lg:mb-0 lg:self-start" />
          <div className="divide-y divide-line border-y border-line">
            {app.audience.map((a, i) => (
              <Reveal key={a.who} delay={(i % 3) * 60} className="grid gap-2 py-6 sm:grid-cols-[56px_1fr] sm:gap-6">
                <span className="font-display text-xl text-accent italic">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="mb-1 text-lg">{a.who}</h3>
                  <p className="text-ink-soft">{a.how}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── How it works ───────────── */}
      <Section id="how" tone="night" className="scroll-mt-36 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/3 size-[520px] rounded-full bg-accent/30 blur-[140px]" />
          <div className="absolute inset-0 bg-grain opacity-[0.07]" />
        </div>
        <Container className="relative">
          <Reveal className="mb-14 max-w-[760px]">
            <Kicker index="04" className="text-white/70">
              How it works
            </Kicker>
            <h2 className={h2Class}>
              Up and running in <span className="text-gold italic">three steps</span>
            </h2>
          </Reveal>
          <ol className="grid gap-4 md:grid-cols-3">
            {app.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
                  <span className="mb-10 block font-display text-6xl leading-none text-white/25 italic">{i + 1}</span>
                  <h3 className="mb-2 text-xl text-white">{s.title}</h3>
                  <p className="text-white/60">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ───────────── Comparison ───────────── */}
      <Section id="compare" className="scroll-mt-36">
        <Container>
          <SectionHead index="05" kicker="At a glance" title={app.comparisonTitle} />
          <Reveal>
            <div className="overflow-x-auto rounded-[28px] border border-line bg-surface shadow-soft">
              <table className="w-full min-w-[720px] border-collapse text-left text-[0.95rem]">
                <thead>
                  <tr>
                    {app.comparison.columns.map((c, i) => (
                      <th
                        key={i}
                        scope="col"
                        className={cx(
                          "px-6 py-5 align-bottom text-[0.8rem] font-semibold uppercase tracking-[0.12em]",
                          i === 1 ? "bg-accent text-white" : "text-muted"
                        )}
                      >
                        {i === 1 ? (
                          <span className="flex items-center gap-2 text-sm tracking-normal normal-case">
                            <AppMark app={app} size="sm" className="size-7! rounded-lg! bg-white/20! shadow-none! [&>svg]:size-4" />
                            {c}
                          </span>
                        ) : (
                          c
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {app.comparison.rows.map((r) => (
                    <tr key={r[0]} className="border-t border-line">
                      {r.map((cell, i) => (
                        <td
                          key={i}
                          className={cx(
                            "px-6 py-4 align-top",
                            i === 0 && "font-semibold text-ink",
                            i === 1 && "bg-accent-soft font-semibold text-ink",
                            i > 1 && "text-ink-soft"
                          )}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {app.comparison.note && <p className="mt-4 max-w-[860px] text-[0.85rem] text-muted">{app.comparison.note}</p>}
          </Reveal>
        </Container>
      </Section>

      {/* ───────────── Why ───────────── */}
      <Section tone="alt">
        <Container>
          <SectionHead index="06" kicker="Why families choose it" title={<>Why <span className={emClass}>{app.name}</span>?</>} />
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {app.why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 70} className="bg-surface p-7 sm:p-9">
                <span className="mb-6 grid size-9 place-items-center rounded-full bg-accent text-white">
                  <Check size={18} strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-lg">{w.title}</h3>
                <p className="text-ink-soft">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── FAQ ───────────── */}
      {app.faq && (
        <Section id="faq" className="scroll-mt-36">
          <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHead align="left" index="07" kicker="FAQ" title={<>Questions <span className={emClass}>parents ask</span></>} className="lg:mb-0" />
            <div className="divide-y divide-line border-y border-line">
              {app.faq.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white"
                    >
                      <Plus size={16} />
                    </span>
                  </summary>
                  <p className="max-w-[640px] pb-6 text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ───────────── CTA ───────────── */}
      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[40px] bg-night px-6 py-16 text-center text-white sm:px-12 sm:py-24">
              <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-accent/50 blur-[120px]" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grain opacity-[0.08]" />
              <AppMark app={app} size="lg" className="mx-auto mb-8" />
              <h2 className={cx(h2Class, "mx-auto max-w-[820px]")}>{app.taglines[0]}</h2>
              <p className="mx-auto mt-5 mb-9 max-w-[560px] text-lg text-white/65">Ask us about access for your family, classroom or clinic.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <ButtonLink href="/#contact" variant="white">
                  Get in touch
                </ButtonLink>
                <ButtonLink href="#try" variant="outline">
                  Try the demo again
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          {(app.disclaimer || app.credits) && (
            <div className={cx(noticeClass, "mt-6 grid gap-2")}>
              {app.disclaimer && (
                <p>
                  <strong className="text-ink">Please note:</strong> {app.disclaimer}
                </p>
              )}
              {app.credits && (
                <p>
                  <strong className="text-ink">Credits:</strong> {app.credits}
                </p>
              )}
            </div>
          )}
        </Container>
      </Section>

      {/* ───────────── Other apps ───────────── */}
      <Section tone="alt" className="py-16! md:py-20!">
        <Container>
          <Kicker>More from Hope Bridge Digital</Kicker>
          <div className="grid gap-4 md:grid-cols-2">
            {others.map((o) => (
              <Reveal key={o.slug}>
                <Link
                  href={`/apps/${o.slug}`}
                  style={accent(o.accent)}
                  className="group flex items-center gap-5 rounded-[28px] border border-line bg-surface p-6 no-underline shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-8"
                >
                  <AppMark app={o} size="lg" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.02em] sm:text-3xl">{o.name}</h3>
                    <span className="text-muted">{o.tagline}</span>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

const verbForms: [string, string, string][] = [
  ["Go", "1st", "#7a5af5"],
  ["Went", "2nd", "#12a37b"],
  ["Gone", "3rd", "#f0784a"],
  ["Going", "4th", "#4b52d6"],
];

const treeList = "ml-2 list-none border-l border-dashed border-ink/20 py-1 pl-6";

function Extras({ app }: { app: AppInfo }) {
  if (app.slug === "angel-talk") {
    return (
      <Section>
        <Container className="grid items-start gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <Spotlight>
              <Kicker>Smart verbs</Kicker>
              <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.025em]">
                Add a verb once. <span className={emClass}>Get all four forms.</span>
              </h2>
              <p className="mb-8 text-ink-soft">Each form gets a colour-coded badge and shares the same picture. Edit one, and the others follow.</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {verbForms.map(([w, b, c]) => (
                  <div key={w} className="relative rounded-2xl border border-line bg-bg px-3 pt-8 pb-5 text-center">
                    <span className="absolute top-2.5 right-2.5 rounded-full px-2 py-0.5 text-[0.68rem] font-bold text-white" style={{ background: c }}>
                      {b}
                    </span>
                    <div className="text-[2.2rem]" aria-hidden="true">
                      🚶
                    </div>
                    <b className="mt-1 block text-lg">{w}</b>
                  </div>
                ))}
              </div>
            </Spotlight>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <Spotlight>
              <Kicker>Voice Add</Kicker>
              <h2 className="mb-6 text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.025em]">
                Build a whole board <span className={emClass}>by speaking</span>
              </h2>
              <q className="mb-6 block rounded-2xl bg-accent-soft p-5 font-display text-lg leading-snug italic">
                category fruits, sub category citrus, words orange and lemon, sub category berries, words strawberry and grapes
              </q>
              <ul className="font-semibold">
                <li>
                  🗂️ Fruits
                  <ul className={treeList}>
                    <li className="py-1">
                      🍋 Citrus
                      <ul className={treeList}>
                        <li className="py-1">🍊 Orange</li>
                        <li className="py-1">🍋 Lemon</li>
                      </ul>
                    </li>
                    <li className="py-1">
                      🍓 Berries
                      <ul className={treeList}>
                        <li className="py-1">🍓 Strawberry</li>
                        <li className="py-1">🍇 Grapes</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <p className={demoNoteClass}>Everything appears in an editable review list first. Nothing is created until you confirm.</p>
            </Spotlight>
          </Reveal>
        </Container>
      </Section>
    );
  }

  if (app.slug === "bloom-focus") {
    return (
      <>
        <Section>
          <Container>
            <SectionHead kicker="Heroes" title={<>40 heroes in <span className={emClass}>8 worlds</span></>}>
              Children pick up to 3 heroes who live inside every game, say hello by name and cheer every win. They can even make a hero
              from a photo of a favourite toy or pet.
            </SectionHead>
            <div className="grid gap-4 min-[440px]:grid-cols-2 lg:grid-cols-4">
              {heroWorlds.map((w, i) => (
                <Reveal key={w.name} delay={(i % 4) * 60}>
                  <Spotlight>
                    <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-accent-soft text-3xl" aria-hidden="true">
                      {w.emoji}
                    </span>
                    <h3 className="mb-2 text-lg">{w.name}</h3>
                    <p className="text-[0.9rem] text-muted">{w.heroes.join(" · ")}</p>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
        <Section tone="alt">
          <Container>
            <SectionHead kicker="Games" title={<>15 focus games, <span className={emClass}>12+ attention skills</span></>}>
              Every game adapts as the child plays, plus a Fun Zone reward with Bubble Pop, Hero Match and Connect the Dots.
            </SectionHead>
            <div className="grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
              {focusGames.map(([g, s], i) => (
                <div key={g} className="bg-surface p-5 transition hover:bg-accent-soft">
                  <span className="mb-4 block font-display text-sm text-accent italic">{String(i + 1).padStart(2, "0")}</span>
                  <b className="block font-semibold">{g}</b>
                  <span className="text-[0.86rem] text-muted">{s}</span>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </>
    );
  }

  return (
    <Section>
      <Container>
        <SectionHead kicker="Words it understands" title={<>Colours, numbers, actions <span className={emClass}>and positions</span></>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["🎨", "Colours & sizes", "red, blue, big, small"],
            ["🔢", "Numbers", "one, three, ten"],
            ["🏃", "Actions", "running, sitting, jumping"],
            ["📍", "Positions", "under, on, above, behind, in front of, beside, inside"],
          ].map(([e, t, d], i) => (
            <Reveal key={t} delay={i * 70}>
              <Spotlight>
                <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-accent-soft text-3xl" aria-hidden="true">
                  {e}
                </span>
                <h3 className="mb-2 text-lg">{t}</h3>
                <p className="text-ink-soft">{d}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
