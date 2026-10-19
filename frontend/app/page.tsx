import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Languages,
  Leaf,
  Lock,
  Mail,
  Play,
  ShieldCheck,
  Timer,
  Wallet,
  WifiOff,
  Smile,
  Stethoscope,
  Users,
  Volume2,
} from "lucide-react";
import { apps, accent } from "@/lib/apps";
import { site } from "@/lib/site";
import { AngelTalkPhone, BloomFocusPhone, BloomLearnPhone } from "@/components/Mockups";
import { AppMark } from "@/components/AppMark";
import { AppShowcase } from "@/components/AppShowcase";
import { CalmButton } from "@/components/CalmButton";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/Spotlight";
import {
  Badge,
  ButtonLink,
  Card,
  Container,
  GlassCard,
  Kicker,
  Section,
  SectionHead,
  cx,
  emClass,
  h1Class,
  h2Class,
  leadClass,
} from "@/components/ui";

const stats: [string, string][] = [
  ["4", "apps, one gentle journey"],
  ["2", "languages: English & Arabic"],
  ["14.8k", "picture symbols"],
  ["15", "adaptive focus games"],
  ["40", "heroes in 8 worlds"],
];

const marquee = ["English", "العربية", "Parents", "Teachers", "Therapists", "Schools", "Clinics", "Families"];

const principles = [
  { Icon: Leaf, title: "Calm by design", text: "Soft colours, large targets, no flashing and no clutter. Sensory-friendly options are built in, not bolted on.", span: "lg:col-span-4" },
  { Icon: Compass, title: "Predictable and visual", text: "Layouts that stay the same, picture-first screens, visual schedules and social stories.", span: "lg:col-span-2" },
  { Icon: HandHeart, title: "The child leads", text: "Children tap, speak and play at their own pace. The apps follow the child.", span: "lg:col-span-2" },
  { Icon: Languages, title: "Their home language", text: "English and Arabic are both first-class languages, with full right-to-left support and two languages on one tile.", span: "lg:col-span-4" },
  { Icon: HeartHandshake, title: "Grown-ups, together", text: "Parent PINs, therapist tools and private messaging keep families, teachers and therapists connected.", span: "lg:col-span-3" },
  { Icon: Lock, title: "Private by default", text: "Boards and progress stay on the device wherever possible, and grown-up areas are locked behind a PIN or passcode.", span: "lg:col-span-3" },
];

const benefits = [
  { Icon: Leaf, title: "Made for sensory needs", text: "Calm colours, no flashing, large targets and a Calm mode. Designed around how autistic children experience a screen." },
  { Icon: Languages, title: "English & Arabic", text: "Both languages are first-class, with right-to-left layouts and English + Arabic on the same tile." },
  { Icon: Play, title: "Try before you download", text: "Every app page has a live, interactive demo, so you can see exactly how it works first." },
  { Icon: WifiOff, title: "Works offline", text: "The Angel Talk core board and BloomLearn's instant pictures work without internet." },
  { Icon: ShieldCheck, title: "Private and kid-safe", text: "Boards and progress stay on the device wherever possible. BloomLearn and Bloom Focus are ad-free." },
  { Icon: Wallet, title: "Affordable", text: "BloomLearn's core features are free, and Angel Talk has no subscription lock-in." },
  { Icon: Timer, title: "Ready in minutes", text: "Set up Angel Talk in about 90 seconds, or build a whole board with one spoken sentence." },
  { Icon: Users, title: "Home, school & therapy", text: "One family of apps that connects parents, teachers and therapists around the same child." },
];

const who = [
  { Icon: Smile, title: "Children", text: "Autistic and non-verbal children, and children with speech delay, apraxia, Down syndrome, language or attention needs.", slugs: ["angel-talk", "bloomlearn", "bloom-focus"] },
  { Icon: Users, title: "Parents & families", text: "Set up in minutes, practise at home and see progress in plain language, in your own language.", slugs: ["angel-talk", "bloomlearn", "bloom-focus"] },
  { Icon: GraduationCap, title: "Teachers & schools", text: "Classroom vocabulary, Grade 1–5 visual lessons, learning games, and classroom progress shared with the child's team.", slugs: ["angel-talk", "bloomlearn", "nexia-bridge"] },
  { Icon: Stethoscope, title: "Therapists & clinics", text: "Verb teaching, activity builders and a game studio, plus one shared record for ABA, speech and OT teams.", slugs: ["angel-talk", "bloom-focus", "nexia-bridge"] },
];

const guide = [
  { q: "My child can't speak yet, or speech is delayed", a: "Picture tiles that speak, full sentences, and a board in your home language.", slug: "angel-talk" },
  { q: "My child is learning words, positions, numbers or lessons", a: "Any sentence becomes a picture, plus visual maths and Grade 1–5 lessons.", slug: "bloomlearn" },
  { q: "Their therapist is working on attention and focus", a: "Adaptive focus games with heroes, guided by the therapist, played at home.", slug: "bloom-focus" },
  { q: "Our therapy team or centre needs one shared record for each child", a: "Eight role-based portals for parents, therapists, teachers, supervisors and admins.", slug: "nexia-bridge" },
];

const journey = [
  { slug: "angel-talk", verb: "Communicate", text: "Say what they need, feel and think." },
  { slug: "bloomlearn", verb: "Understand", text: "See what words and numbers really mean." },
  { slug: "bloom-focus", verb: "Focus", text: "Build attention, one playful game at a time." },
  { slug: "nexia-bridge", verb: "Connect", text: "Bring the whole team around one shared picture." },
];

const promise: [string, string][] = [
  ["No invented claims", "We never say our apps cure or treat anything. They support communication, learning and therapy."],
  ["Grown-up areas stay locked", "Settings and editing sit behind a parent PIN or passcode, so children only see their own screens."],
  ["You stay in control", "Every word, picture and plan can be edited by the adults who know the child best."],
  ["Always improving", "Tell us what your child needs. Your feedback shapes what we build next."],
];

export default function Home() {
  const byslug = Object.fromEntries(apps.map((a) => [a.slug, a]));

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 xl:pt-40 xl:pb-24">
        {/* atmosphere */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 size-[640px] rounded-full bg-lavender blur-[110px] calm:opacity-50" />
          <div className="absolute top-1/3 -left-48 size-[520px] rounded-full bg-mint/80 blur-[110px] calm:opacity-50" />
          <div className="absolute right-1/4 bottom-0 size-[420px] rounded-full bg-peach/80 blur-[110px] calm:opacity-50" />
          <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-multiply" />
        </div>

        <Container className="grid items-center gap-14 xl:grid-cols-[1.08fr_1fr] xl:gap-10">
          <div className="max-w-[720px] animate-fade-up">
            <Badge className="mb-7">Apps for autistic children & their families</Badge>
            <h1 className={h1Class}>
              A bridge to <span className={emClass}>every</span> child&apos;s voice.
            </h1>
            <p className={cx(leadClass, "mt-7 max-w-[600px]")}>
              Hope Bridge Digital makes gentle, family-first apps that help autistic children and children with speech, language
              and attention needs <strong className="font-semibold text-ink">communicate, understand and focus</strong>, at home,
              at school and in therapy.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#apps">Explore our apps</ButtonLink>
              <ButtonLink href="/apps/angel-talk#try" variant="ghost">
                <Volume2 size={17} aria-hidden="true" /> Hear a live demo
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-soft">
              {[
                [Leaf, "Sensory-friendly"],
                [Languages, "English · العربية"],
                [ShieldCheck, "Private by design"],
              ].map(([I, t]) => {
                const Ico = I as typeof Leaf;
                return (
                  <li key={t as string} className="flex items-center gap-2">
                    <Ico size={17} className="text-brand" aria-hidden="true" /> {t as string}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Product stage */}
          <div className="relative mx-auto h-[540px] w-full max-w-[600px] xl:max-w-none" aria-label="Screens from our apps">
            <div aria-hidden="true" className="absolute inset-x-4 top-8 bottom-0 rounded-[48px] border border-white/70 bg-white/35 shadow-lift backdrop-blur-sm">
              <div className="absolute inset-0 rounded-[48px] bg-dots opacity-50" />
            </div>
            <AngelTalkPhone className="absolute top-[86px] left-[2%] hidden origin-bottom-left -rotate-[8deg] scale-[0.8] animate-float sm:block" />
            <BloomFocusPhone className="absolute top-[86px] right-[2%] hidden origin-bottom-right rotate-[8deg] scale-[0.8] animate-float [animation-delay:-3.5s] sm:block" />
            <BloomLearnPhone className="absolute top-0 left-1/2 z-10 -translate-x-1/2" />

            <GlassCard className="absolute top-[44%] left-0 z-20 hidden w-[200px] animate-float sm:block [animation-delay:-1s] sm:left-[-4%]">
              <div className="mb-1.5 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#6e7191]">
                <Volume2 size={13} className="text-violet" aria-hidden="true" /> Angel Talk · spoken
              </div>
              <p className="font-display text-[1.05rem] leading-snug italic">“I want water, please.”</p>
            </GlassCard>
            <GlassCard className="absolute right-0 bottom-[16%] z-20 w-[200px] animate-float [animation-delay:-4s] sm:right-[-2%]">
              <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#6e7191]">How do you feel?</div>
              <div className="flex gap-1.5 text-2xl">
                {["😊", "😌", "😴", "😟"].map((f) => (
                  <span key={f} className="grid size-10 place-items-center rounded-xl bg-[#f6f4ff]">
                    {f}
                  </span>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="absolute top-[4%] right-[-2%] z-20 hidden items-center gap-3 sm:flex">
              <span className="grid size-9 place-items-center rounded-full bg-mint text-emerald">
                <Leaf size={17} aria-hidden="true" />
              </span>
              <span className="text-sm leading-tight font-semibold">
                Calm mode
                <span className="block text-xs font-medium text-[#6e7191]">No flashing, ever</span>
              </span>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* ───────────── Marquee ───────────── */}
      <div className="relative overflow-hidden border-y border-line bg-surface/60 py-5" aria-label="Languages and people we serve">
        <div className="flex w-max animate-marquee gap-12 pr-12 whitespace-nowrap calm:w-full calm:flex-wrap calm:justify-center calm:gap-x-8 calm:gap-y-2">
          {[0, 1].map((k) => (
            <ul key={k} aria-hidden={k === 1} className={cx("flex items-center gap-12", k === 1 && "calm:hidden")}>
              {marquee.map((m) => (
                <li key={m} className="flex items-center gap-12 font-display text-2xl text-ink-soft italic">
                  {m}
                  <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-bg to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-bg to-transparent" />
      </div>

      {/* ───────────── Numbers ───────────── */}
      <Container className="py-16 md:py-20">
        <dl className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-line">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 80} className="px-2 text-center lg:px-6">
              <dt className="sr-only">{l}</dt>
              <dd className="font-display text-[clamp(2.8rem,5vw,4.2rem)] leading-none font-medium tracking-[-0.04em]">{n}</dd>
              <dd className="mt-3 text-sm font-medium text-muted">{l}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>

      {/* ───────────── Apps ───────────── */}
      <Section id="apps" tone="alt">
        <Container>
          <SectionHead index="01" kicker="Our apps" title={<>Four apps. <span className={emClass}>One gentle</span> journey.</>}>
            Each app solves a different everyday challenge, and all of them share the same calm, child-first design.
          </SectionHead>
          <Reveal>
            <AppShowcase apps={apps} />
          </Reveal>
        </Container>
      </Section>

      {/* ───────────── Benefits ───────────── */}
      <Section id="benefits">
        <Container>
          <SectionHead index="02" kicker="Why choose us" title={<>What you get with <span className={emClass}>Hope Bridge</span></>}>
            Every app is built around the same promises, so whichever one you choose, your child gets the same care.
          </SectionHead>
          <div className="grid gap-px overflow-hidden rounded-[32px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) * 70} className="group bg-surface p-7 transition duration-500 hover:bg-bg sm:p-8">
                <div className="mb-10 flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition duration-500 group-hover:bg-brand group-hover:text-white">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm text-muted italic">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mb-2 text-lg">{title}</h3>
                <p className="text-[0.95rem] text-ink-soft">{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="#apps">Choose your app</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Ask for early access
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      {/* ───────────── Finder ───────────── */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead align="left" index="03" kicker="Where to start" title={<>Find the right app <span className={emClass}>for your child</span></>} className="lg:sticky lg:top-32 lg:mb-0 lg:self-start">
            Start with the need, not the app. Each path below leads to the tool built for it.
          </SectionHead>
          <div className="divide-y divide-line border-y border-line">
            {guide.map((g, i) => {
              const a = byslug[g.slug];
              return (
                <Reveal key={g.slug} delay={i * 80}>
                  <Link
                    href={`/apps/${a.slug}`}
                    style={accent(a.accent)}
                    className="group grid grid-cols-[1fr_auto] items-center gap-6 py-8 no-underline transition sm:py-10"
                  >
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <AppMark app={a} size="sm" />
                        <span className="text-sm font-semibold text-accent">{a.name}</span>
                      </div>
                      <p className="mb-2 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug tracking-[-0.02em] transition group-hover:text-accent">
                        {g.q}
                      </p>
                      <p className="text-ink-soft">{g.a}</p>
                    </div>
                    <span className="grid size-12 place-items-center rounded-full border border-line transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white sm:size-14">
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ───────────── Manifesto + approach (dark) ───────────── */}
      <Section id="approach" tone="night" className="overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 size-[520px] rounded-full bg-violet/30 blur-[140px]" />
          <div className="absolute right-0 bottom-0 size-[460px] rounded-full bg-emerald/20 blur-[140px]" />
          <div className="absolute inset-0 bg-grain opacity-[0.07]" />
        </div>
        <Container className="relative">
          <Reveal className="mb-16 max-w-[980px] md:mb-24">
            <Kicker index="04" className="text-white/70">
              Our approach
            </Kicker>
            <p className="font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.06] tracking-[-0.03em] text-balance">
              We design for the child who notices <span className="text-gold italic">everything</span>
              <span className="text-white/45"> — the sound, the colour, the change. So every screen asks one question: will this feel safe, clear and kind?</span>
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {principles.map(({ Icon, title, text, span }, i) => (
              <Reveal key={title} delay={(i % 3) * 80} className={span}>
                <Spotlight dark>
                  <div className="flex h-full flex-col">
                    <span className="mb-10 grid size-12 place-items-center rounded-2xl bg-white/[0.08] text-gold ring-1 ring-white/10">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mb-2 text-xl text-white">{title}</h3>
                    <p className="text-white/60">{text}</p>
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:p-8">
            <p className="max-w-[620px] text-white/70">
              <strong className="font-semibold text-white">Feel it for yourself.</strong> Calm mode switches off all movement on this
              site and softens colours, the same way our apps respect sensory needs.
            </p>
            <CalmButton />
          </Reveal>
        </Container>
      </Section>

      {/* ───────────── Journey ───────────── */}
      <Section>
        <Container>
          <SectionHead index="05" kicker="One family of apps" title={<>From first words to <span className={emClass}>focused learning</span></>}>
            Use one app or all three. Together they grow with the child.
          </SectionHead>
          <div className="relative grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <div aria-hidden="true" className="absolute top-[52px] right-[12%] left-[12%] hidden h-px bg-linear-to-r from-violet via-emerald via-60% to-[#4f46e5] lg:block" />
            {journey.map((j, i) => {
              const a = byslug[j.slug];
              return (
                <Reveal key={j.slug} delay={i * 120}>
                  <Link href={`/apps/${a.slug}`} style={accent(a.accent)} className="group block text-center no-underline">
                    <div className="relative mx-auto mb-7 grid size-[104px] place-items-center rounded-full border border-line bg-surface shadow-lift transition duration-500 group-hover:-translate-y-1">
                      <AppMark app={a} size="lg" />
                    </div>
                    <p className="mb-1 font-display text-sm text-muted italic">Step {["one", "two", "three", "four"][i]}</p>
                    <h3 className="mb-2 font-display text-3xl font-medium tracking-[-0.02em]">{j.verb}</h3>
                    <p className="mx-auto mb-3 max-w-[260px] text-ink-soft">{j.text}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      with {a.name} <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ───────────── Who ───────────── */}
      <Section id="who" tone="alt">
        <Container>
          <SectionHead index="06" kicker="Who we serve" title={<>For the child, and <span className={emClass}>everyone</span> who helps them</>} />
          <div className="grid gap-4 lg:grid-cols-2">
            {who.map(({ Icon, title, text, slugs }, i) => (
              <Reveal key={title} delay={(i % 2) * 80}>
                <Spotlight>
                  <div className="flex h-full flex-col gap-5 sm:flex-row sm:gap-6 lg:flex-col xl:flex-row">
                    <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                      <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <h3 className="mb-2 text-xl">{title}</h3>
                      <p className="mb-6 flex-1 text-ink-soft">{text}</p>
                      {/* All of a group's apps sit on one line. */}
                      <div className="flex flex-wrap gap-1.5 min-[360px]:flex-nowrap sm:gap-2">
                        {slugs.map((s) => (
                          <Link
                            key={s}
                            href={`/apps/${s}`}
                            style={accent(byslug[s].accent)}
                            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-bg px-2.5 py-1 text-[0.75rem] font-semibold whitespace-nowrap text-ink-soft no-underline transition hover:border-accent hover:text-ink sm:py-1.5 sm:pr-3.5 sm:pl-2 sm:text-[0.84rem]"
                          >
                            <span aria-hidden="true" className="hidden size-2.5 rounded-full bg-accent sm:block" />
                            {byslug[s].name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── Promise ───────────── */}
      <Section id="promise">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHead align="left" index="07" kicker="Our promise" title={<>Honest technology for families <span className={emClass}>who trust us</span></>} className="lg:mb-0" />
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2">
            {promise.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="bg-surface p-7 sm:p-9">
                <span className="mb-6 block font-display text-4xl text-brand/80 italic">0{i + 1}</span>
                <h3 className="mb-2 text-lg">{t}</h3>
                <p className="text-ink-soft">{d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── Contact ───────────── */}
      <Section id="contact" tone="alt">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Kicker index="08">Contact</Kicker>
            <h2 className={h2Class}>
              We&apos;d love to <span className={emClass}>hear from you</span>
            </h2>
            <p className={cx(leadClass, "mt-5 mb-10")}>
              Parents, teachers, therapists and schools: ask a question, request access or book a demo.
            </p>
            <div className="grid gap-3">
              {[
                [Mail, <a key="m" href={`mailto:${site.email}`} className="no-underline hover:underline">{site.email}</a>],
                [GraduationCap, "School & clinic demos available"],
                [HeartHandshake, "Parents, teachers and therapists welcome"],
              ].map(([I, text], i) => {
                const Ico = I as typeof Mail;
                return (
                  <Card key={i} className="flex items-center gap-4 p-4! [overflow-wrap:anywhere] hover:translate-y-0">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Ico size={19} aria-hidden="true" />
                    </span>
                    <span className="font-semibold">{text as React.ReactNode}</span>
                  </Card>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
