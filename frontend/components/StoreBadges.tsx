import { Check } from "lucide-react";
import type { AppInfo } from "@/lib/apps";
import { storesFor, type Store } from "@/lib/downloads";
import { cx } from "./ui";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.33-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.65-1.05 1.68-.92 2.67.97.08 1.96-.49 2.56-1.22z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path d="M4.2 2.6 13.6 12l-9.4 9.4a1.4 1.4 0 0 1-.7-1.2V3.8c0-.5.3-1 .7-1.2z" fill="#34d399" />
      <path d="m16.9 8.7-3.3 3.3-9.4-9.4c.4-.2 1-.2 1.4.1l11.3 6z" fill="#60a5fa" />
      <path d="M16.9 15.3 5.6 21.3c-.4.3-1 .3-1.4.1l9.4-9.4 3.3 3.3z" fill="#f87171" />
      <path d="m20.4 13.3-3.5 2-3.3-3.3 3.3-3.3 3.5 2c1 .6 1 2 0 2.6z" fill="#fbbf24" />
    </svg>
  );
}

const storeInfo: Record<Store, { small: string; big: string; Glyph: () => React.ReactElement }> = {
  appStore: { small: "Download on the", big: "App Store", Glyph: AppleGlyph },
  googlePlay: { small: "Get it on", big: "Google Play", Glyph: PlayGlyph },
};

/** App Store / Google Play badges. A store without a link shows as "Coming soon". */
export function StoreBadges({ app, className, dark }: { app: AppInfo; className?: string; dark?: boolean }) {
  return (
    <div className={cx("flex flex-wrap gap-3", className)}>
      {storesFor(app).map(({ store, href }) => {
        const { small, big, Glyph } = storeInfo[store];
        const body = (
          <>
            <Glyph />
            <span className="text-left leading-tight">
              <span className="block text-[0.66rem] font-medium tracking-wide opacity-75">{small}</span>
              <span className="block text-[1.02rem] font-semibold tracking-tight">{big}</span>
            </span>
            {!href && (
              <span className="absolute -top-2.5 -right-2 rounded-full bg-gold px-2 py-0.5 text-[0.62rem] font-bold tracking-wide text-[#12142b] uppercase shadow-soft">
                Coming soon
              </span>
            )}
          </>
        );
        const cls = cx(
          "relative inline-flex min-h-[54px] items-center gap-2.5 rounded-2xl border px-4 py-2 no-underline transition duration-300",
          dark ? "border-white/15 bg-white/[0.06] text-white" : "border-transparent bg-[#12142b] text-white",
          href ? "hover:-translate-y-0.5 hover:shadow-lift" : "cursor-default"
        );
        return href ? (
          <a key={store} href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${small} ${big}: ${app.name}`}>
            {body}
          </a>
        ) : (
          <span key={store} className={cls} aria-label={`${app.name} on ${big}: coming soon`} role="img">
            {body}
          </span>
        );
      })}
    </div>
  );
}

/** Full download block for an app page: store badges plus the benefits you get. */
export function DownloadPanel({ app }: { app: AppInfo }) {
  return (
    <div className="relative isolate grid gap-10 overflow-hidden rounded-[40px] bg-night p-7 text-white sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-16">
      <div aria-hidden="true" className="absolute -top-32 -left-20 -z-10 size-[480px] rounded-full bg-accent/40 blur-[120px]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grain opacity-[0.08]" />
      <div>
        <div className="mb-5 text-[0.74rem] font-semibold tracking-[0.2em] text-white/60 uppercase">Download</div>
        <h2 className="mb-5 text-[clamp(2rem,4vw,3.3rem)] leading-[1.04] tracking-[-0.03em]">
          Get <span className="italic">{app.name}</span>
        </h2>
        <p className="mb-8 max-w-[480px] text-white/65">
          Available for {app.platforms.join(", ").replace(/, ([^,]*)$/, " and $1")}, in {app.languages.length > 1 ? "English and Arabic" : app.languages[0]}. {" "}
          {storesFor(app).some((s) => s.href) ? "Download it today." : "Store links are on their way. Contact us for early access."}
        </p>
        <StoreBadges app={app} dark />
      </div>
      <div>
        <div className="mb-5 text-[0.74rem] font-semibold tracking-[0.2em] text-white/60 uppercase">What you get</div>
        <ul className="grid gap-4">
          {app.why.map((w) => (
            <li key={w.title} className="flex gap-3.5">
              <span aria-hidden="true" className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-white">
                <Check size={14} strokeWidth={2.6} />
              </span>
              <span>
                <span className="block font-semibold">{w.title}</span>
                <span className="text-[0.93rem] text-white/60">{w.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
