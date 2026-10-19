import type { AppInfo } from "./apps";

export type Store = "appStore" | "googlePlay";

/**
 * Store links for each app. Paste the real link when an app goes live;
 * an empty value shows that store's badge as "Coming soon".
 * Which badges appear is decided by each app's `platforms` in lib/apps.ts.
 */
export const storeLinks: Record<AppInfo["slug"], Partial<Record<Store, string>>> = {
  "angel-talk": { appStore: "", googlePlay: "" },
  bloomlearn: { appStore: "", googlePlay: "" },
  "bloom-focus": { appStore: "", googlePlay: "" },
  "nexia-bridge": { appStore: "", googlePlay: "" },
};

const platformToStore: Record<string, Store> = { iOS: "appStore", Android: "googlePlay" };

export function storesFor(app: AppInfo): { store: Store; href?: string }[] {
  const order: Store[] = ["appStore", "googlePlay"];
  return app.platforms
    .map((p) => platformToStore[p])
    .filter(Boolean)
    .sort((x, y) => order.indexOf(x) - order.indexOf(y))
    .map((store) => ({ store, href: storeLinks[app.slug][store] || undefined }));
}
