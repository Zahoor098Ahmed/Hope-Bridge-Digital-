import {
  Award,
  BookOpen,
  Calculator,
  ChartColumn,
  Heart,
  Image,
  LayoutGrid,
  MessageCircle,
  MessagesSquare,
  Mic,
  Puzzle,
  School,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  type LucideProps,
} from "lucide-react";

// Icons referenced by name from data files (lib/apps.ts).
const icons = {
  Award,
  BookOpen,
  Calculator,
  ChartColumn,
  Heart,
  Image,
  LayoutGrid,
  MessageCircle,
  MessagesSquare,
  Mic,
  Puzzle,
  School,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = icons[name];
  return <C aria-hidden="true" strokeWidth={1.75} {...props} />;
}
