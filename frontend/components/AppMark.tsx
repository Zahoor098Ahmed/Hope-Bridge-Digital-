import { MessageCircleHeart, Sprout, Target } from "lucide-react";
import type { AppInfo } from "@/lib/apps";
import { cx } from "./ui";

const marks = {
  "angel-talk": MessageCircleHeart,
  bloomlearn: Sprout,
  "bloom-focus": Target,
};

const sizes = {
  sm: { box: "size-10 rounded-[12px]", icon: 20 },
  md: { box: "size-14 rounded-[17px]", icon: 26 },
  lg: { box: "size-[72px] rounded-[22px]", icon: 34 },
};

/** The app's icon: a glossy gradient squircle in the app's colour. */
export function AppMark({ app, size = "md", className }: { app: AppInfo; size?: keyof typeof sizes; className?: string }) {
  const M = marks[app.slug];
  const s = sizes[size];
  return (
    <span
      aria-hidden="true"
      className={cx(
        "relative grid shrink-0 place-items-center text-white shadow-[0_8px_20px_-8px_var(--mark),inset_0_1px_0_rgb(255_255_255/0.35)]",
        s.box,
        className
      )}
      style={
        {
          "--mark": app.accent,
          background: `linear-gradient(150deg, color-mix(in srgb, ${app.accent} 70%, white) 0%, ${app.accent} 45%, color-mix(in srgb, ${app.accent} 75%, black) 100%)`,
        } as React.CSSProperties
      }
    >
      <M size={s.icon} strokeWidth={1.9} />
    </span>
  );
}
