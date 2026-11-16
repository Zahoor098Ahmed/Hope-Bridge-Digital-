import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  CircleCheck,
  CircleX,
  Egg,
  Film,
  Fish,
  Folder,
  FolderTree,
  Footprints,
  Hash,
  Layers,
  MapPin,
  Palette,
  PersonStanding,
  Plus,
  Rocket,
  Sparkles,
  Tractor,
  TreePalm,
  TriangleAlert,
  Trophy,
  Video,
  Volume2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  apps,
  accent,
  bloomScienceChapters,
  bloomVideoFeatures,
  focusGames,
  getApp,
  heroWorlds,
  type AppInfo,
} from "@/lib/apps";
import { AppPhone } from "@/components/Mockups";
import { BloomLearnSubjectShowcase } from "@/components/BloomLearnSubjectShowcase";
import { AppMark } from "@/components/AppMark";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/Spotlight";
import { DownloadPanel, StoreBadges } from "@/components/StoreBadges";
import { AngelTalkDemo } from "@/components/demos/AngelTalkDemo";
import { BloomLearnDemo } from "@/components/demos/BloomLearnDemo";
import { BloomFocusDemo } from "@/components/demos/BloomFocusDemo";
import { NexiaBridgeDemo } from "@/components/demos/NexiaBridgeDemo";
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
  "nexia-bridge": {
    Demo: NexiaBridgeDemo,
    title: <>One child. <span className={emClass}>Every role sees its part.</span></>,
    text: "Open the same child as a parent, therapist, supervisor or administrator, and see what each portal shows and keeps private.",
  },
} as const;

// Two floating notes around the phone in each app's hero.
const heroNotes: Record<AppInfo["slug"], [string, string][]> = {
  "angel-talk": [
    ["Spoken aloud", "“I feel tired.”"],
    ["Two languages, one tile", "English + Arabic"],
  ],
  bloomlearn: [
    ["Video-Ready AI", "Cinematic prompts & cutaways"],
    ["13 Science chapters", "Grade 3 master curriculum"],
  ],
  "bloom-focus": [
    ["Always just right", "Steps up above 85% accuracy"],
    ["Today's training", "4 games with Rexy Roarson"],
  ],
  "nexia-bridge": [
    ["One shared picture", "Parent · Therapists · Teachers"],
    ["Eight portals", "Each role sees only its part"],
  ],
};

export default async function AppPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();

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
    ["#download", "Download"],
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
            <StoreBadges app={app} className="mt-8" />
          </div>

          {/* Stage */}
          {app.slug === "bloomlearn" ? (
            <BloomLearnSubjectShowcase />
          ) : (
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="relative isolate flex min-h-[580px] items-center justify-center overflow-hidden rounded-[44px] border border-white/60 bg-[linear-gradient(160deg,var(--accent-soft),color-mix(in_srgb,var(--accent)_26%,var(--color-surface)))] p-4 shadow-lift">
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dots opacity-60" />
                <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[400px] -translate-1/2 rounded-full bg-accent/30 blur-[90px]" />
                <AppPhone slug={app.slug} className="animate-float z-10" />
              </div>

              {/* Feature highlights placed cleanly below stage - never overlaps phone */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <GlassCard className="transition-all duration-300 hover:shadow-lift">
                  <div className="mb-1 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#6e7191]">
                    {app.slug === "angel-talk" ? (
                      <Volume2 size={12} aria-hidden="true" style={{ color: app.accent }} />
                    ) : (
                      <Sparkles size={12} aria-hidden="true" style={{ color: app.accent }} />
                    )}{" "}
                    {noteA[0]}
                  </div>
                  <p className="font-display text-[0.98rem] leading-snug italic text-ink">{noteA[1]}</p>
                </GlassCard>

                <GlassCard className="transition-all duration-300 hover:shadow-lift">
                  <div className="mb-1 flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#6e7191]">
                    <Sparkles size={12} aria-hidden="true" style={{ color: app.accent }} /> {noteB[0]}
                  </div>
                  <p className="text-[0.92rem] leading-snug font-semibold text-ink">{noteB[1]}</p>
                </GlassCard>
              </div>
            </div>
          )}
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
                          <CompareCell value={cell} />
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

      {/* ───────────── FAQ ───────────── */}
      {app.faq && (
        <Section id="faq" className="scroll-mt-36">
          <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHead align="left" index="06" kicker="FAQ" title={<>Questions <span className={emClass}>parents ask</span></>} className="lg:mb-0" />
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

      {/* ───────────── Download + benefits ───────────── */}
      <Section id="download" className="scroll-mt-36">
        <Container>
          <Reveal>
            <DownloadPanel app={app} />
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
                  className="group flex items-center gap-4 rounded-[28px] border border-line bg-surface p-5 no-underline shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift sm:gap-5 sm:p-8"
                >
                  {/* Smaller icon and no arrow on phones, so the card never pushes past the screen edge. */}
                  <span className="sm:hidden">
                    <AppMark app={o} size="md" />
                  </span>
                  <span className="hidden sm:block">
                    <AppMark app={o} size="lg" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[1.4rem] leading-tight font-medium tracking-[-0.02em] sm:text-3xl">{o.name}</h3>
                    <span className="text-muted">{o.tagline}</span>
                  </div>
                  <span className="hidden size-12 shrink-0 place-items-center rounded-full border border-line transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white sm:grid">
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

const nexiaPortals: [string, string][] = [
  ["Parent", "Progress, home practice, messages and Child Mode"],
  ["Behavior (ABA)", "Datasheets, targets, graphs, BIP and notes"],
  ["Speech (SLP)", "Plan, drills, goals, practice and graphs"],
  ["Occupational therapy", "Plan, tools, checklists, goals and graphs"],
  ["Remedial", "Plan, goals, graphs and notes"],
  ["Teacher", "Today, students, notes and Family"],
  ["Supervisor", "Reviews, staff observation, reports and templates"],
  ["Administrator", "Portals, cases, centres, billing and settings"],
];

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
                    <div className="flex justify-center text-accent" aria-hidden="true">
                      <PersonStanding size={34} />
                    </div>
                    <b className="mt-2 block text-lg">{w}</b>
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
                “category fruits, sub category citrus, words orange and lemon, sub category berries, words strawberry and grapes”
              </q>
              <ul className="font-semibold text-ink">
                <li className="flex items-center gap-2">
                  <FolderTree size={16} className="text-accent" /> Fruits
                  <ul className={treeList}>
                    <li className="py-1">
                      <span className="inline-flex items-center gap-1.5 font-medium text-ink-soft">
                        <Folder size={14} className="text-amber-500" /> Citrus
                      </span>
                      <ul className={treeList}>
                        <li className="py-1 text-sm font-normal text-ink">Orange</li>
                        <li className="py-1 text-sm font-normal text-ink">Lemon</li>
                      </ul>
                    </li>
                    <li className="py-1">
                      <span className="inline-flex items-center gap-1.5 font-medium text-ink-soft">
                        <Folder size={14} className="text-rose-500" /> Berries
                      </span>
                      <ul className={treeList}>
                        <li className="py-1 text-sm font-normal text-ink">Strawberry</li>
                        <li className="py-1 text-sm font-normal text-ink">Grapes</li>
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

  if (app.slug === "nexia-bridge") {
    return (
      <Section>
        <Container>
          <SectionHead kicker="Eight portals" title={<>One portal <span className={emClass}>for every role</span></>}>
            On a phone the tabs sit in a bottom bar; on a computer they become a menu on the left. Supervisor and Administrator are
            designed for a computer, with tables and side panels.
          </SectionHead>
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {nexiaPortals.map(([who, job], i) => (
              <div key={who} className="bg-surface p-6 transition hover:bg-accent-soft">
                <span className="mb-4 block font-display text-sm text-accent italic">{String(i + 1).padStart(2, "0")}</span>
                <b className="mb-1 block font-semibold">{who}</b>
                <span className="text-[0.9rem] text-muted">{job}</span>
              </div>
            ))}
          </div>
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
                    <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true">
                      {(() => {
                        const W = worldIcons[i];
                        return <W size={22} strokeWidth={1.75} />;
                      })()}
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

  if (app.slug === "bloomlearn") {
    return (
      <>
        {/* ───────────── Video-Ready Learning Engine ───────────── */}
        <Section>
          <Container>
            <SectionHead
              kicker="Video-Ready AI Engine"
              title={<>Cinematic storyboard prompts & <span className={emClass}>scientific cutaways</span></>}
            >
              Engineered as a live storyboard generator for next-generation text-to-video AI models like Sora, Runway Gen-3,
              Luma Dream Machine, Kling, and Pika. Every lesson includes calibrated prompts, camera motion directives,
              and child-safe scientific perspectives.
            </SectionHead>

            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {bloomVideoFeatures.map((f, i) => (
                <Reveal key={f.title} delay={i * 70}>
                  <Spotlight className="h-full">
                    <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true">
                      {i === 0 && <Video size={22} strokeWidth={1.75} />}
                      {i === 1 && <Film size={22} strokeWidth={1.75} />}
                      {i === 2 && <Layers size={22} strokeWidth={1.75} />}
                      {i === 3 && <CircleCheck size={22} strokeWidth={1.75} />}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                    <p className="text-[0.92rem] leading-relaxed text-ink-soft">{f.detail}</p>
                  </Spotlight>
                </Reveal>
              ))}
            </div>

            {/* Live Video Prompt Card Preview */}
            <Reveal delay={200}>
              <div className="rounded-[28px] border border-line bg-surface p-6 shadow-soft sm:p-8">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Film size={18} />
                    </span>
                    <div>
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">Curriculum Video Spec</span>
                      <h4 className="text-base font-semibold">sc3-plants · Chapter 1: Root Hydration & Growth</h4>
                    </div>
                  </div>
                  <Chip className="bg-accent-soft text-xs font-semibold text-accent flex items-center gap-1.5">
                    <Film size={12} />
                    <span>Video-Ready Metadata</span>
                  </Chip>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
                  <div className="rounded-2xl border border-line bg-bg p-5 font-mono text-[0.88rem] leading-relaxed text-ink-soft">
                    <div className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-muted">Video Prompt (`video` field):</div>
                    <p className="text-ink">
                      &quot;Macro underground split-view cutaway. Camera tilts down smoothly into dark, aerated humus soil.
                      Translucent plant root hairs absorb glowing water droplets from moist soil particles. Earthworm moves gently in
                      the background. Diffused, calm educational lighting; slow-motion fluid transport up xylem vessels. Child-safe,
                      peaceful pacing, zero sensory overload.&quot;
                    </p>
                  </div>
                  <div className="flex flex-col justify-between gap-3 rounded-2xl border border-line bg-accent-soft/40 p-5 text-sm">
                    <div>
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-accent">Engine Directives:</span>
                      <ul className="grid gap-2 text-[0.86rem] text-ink-soft">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span><strong>Camera:</strong> Slow macro track-in with vertical split-view</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span><strong>Perspective:</strong> Sub-surface cutaway of soil horizons</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span><strong>Guardrails:</strong> Non-violent, calm pacing, sensory-friendly</span>
                        </li>
                      </ul>
                    </div>
                    <div className="border-t border-line/60 pt-3 text-xs text-muted">
                      Ready for direct integration with Sora, Runway Gen-3, Luma & Kling pipelines.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* ───────────── 13 Science Chapters Curriculum ───────────── */}
        <Section tone="alt">
          <Container>
            <SectionHead
              kicker="Grade 3 Science Deep-Dive"
              title={<>13 Complete <span className={emClass}>Master Chapters</span></>}
            >
              Standard-aligned across Saudi MOE, Cambridge Primary, Oxford, and McGraw-Hill. Each chapter contains
              multi-part paragraph lessons with dedicated active recall Q&amp;A, on-device ARASAAC scene specs, and video prompts.
            </SectionHead>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {bloomScienceChapters.map((ch, i) => (
                <Reveal key={ch.id} delay={(i % 4) * 50}>
                  <Spotlight className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[0.72rem] font-bold text-accent">
                          Ch {String(ch.number).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[0.72rem] text-muted">{ch.code}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold leading-snug">{ch.title}</h3>
                      <p className="mb-4 text-[0.88rem] leading-relaxed text-ink-soft">{ch.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 border-t border-line/60 pt-3">
                      {ch.concepts.map((c) => (
                        <span key={c} className="rounded-md bg-bg px-2 py-0.5 text-[0.74rem] font-medium text-muted">
                          {c}
                        </span>
                      ))}
                    </div>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ───────────── Words & Concepts It Understands ───────────── */}
        <Section>
          <Container>
            <SectionHead
              kicker="Natural Language Understanding"
              title={<>Colours, numbers, actions <span className={emClass}>and positions</span></>}
            >
              Speak or type freely in English or Arabic. BloomLearn parses the grammatical relationships, spatial prepositions,
              and quantities to assemble the exact visual stage.
            </SectionHead>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Palette, "Colours & sizes", "red, blue, big, small, tiny, giant"],
                [Hash, "Numbers & math", "1 to 100, equations, word problems"],
                [PersonStanding, "Actions & verbs", "running, sitting, jumping, growing"],
                [MapPin, "Spatial positions", "under, on, above, behind, in front of, beside, inside"],
              ].map(([I, t, d], i) => (
                <Reveal key={t as string} delay={i * 70}>
                  <Spotlight>
                    <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true">
                      {(() => {
                        const W = I as LucideIcon;
                        return <W size={22} strokeWidth={1.75} />;
                      })()}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold">{t as string}</h3>
                    <p className="text-ink-soft">{d as string}</p>
                  </Spotlight>
                </Reveal>
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
            [Palette, "Colours & sizes", "red, blue, big, small"],
            [Hash, "Numbers", "one, three, ten"],
            [PersonStanding, "Actions", "running, sitting, jumping"],
            [MapPin, "Positions", "under, on, above, behind, in front of, beside, inside"],
          ].map(([I, t, d], i) => (
            <Reveal key={t as string} delay={i * 70}>
              <Spotlight>
                <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true">
                  {(() => {
                    const W = I as LucideIcon;
                    return <W size={22} strokeWidth={1.75} />;
                  })()}
                </span>
                <h3 className="mb-2 text-lg">{t as string}</h3>
                <p className="text-ink-soft">{d as string}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Matches heroWorlds order in lib/apps.ts.
const worldIcons: LucideIcon[] = [Rocket, Egg, Fish, Sparkles, Zap, TreePalm, Tractor, Trophy];

const marks = {
  "✅": { Icon: CircleCheck, cls: "text-emerald", label: "Yes" },
  "❌": { Icon: CircleX, cls: "text-coral", label: "No" },
  "⚠️": { Icon: TriangleAlert, cls: "text-gold", label: "Partly" },
} as const;

/** Comparison cell: a leading ✅ / ❌ / ⚠️ in the data becomes a proper icon. */
function CompareCell({ value }: { value: string }) {
  const m = value.match(/^(✅|❌|⚠️)s*(.*)$/u);
  if (!m) return <>{value}</>;
  const { Icon: I, cls, label } = marks[m[1] as keyof typeof marks];
  return (
    <span className="inline-flex items-start gap-2">
      <I size={19} strokeWidth={2} className={cx("mt-[2px] shrink-0", cls)} aria-label={m[2] ? undefined : label} aria-hidden={m[2] ? true : undefined} />
      {m[2] && <span>{m[2]}</span>}
    </span>
  );
}
