import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

// Fraunces (soft, warm editorial serif) for display; Plus Jakarta Sans for reading and UI.
const fraunces = Fraunces({ subsets: ["latin"], axes: ["SOFT", "opsz"], style: ["normal", "italic"], variable: "--font-fraunces" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Apps for autistic children and their families`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["autism app", "AAC app", "Urdu AAC", "Arabic AAC", "speech delay", "special education", "attention training", "Angel Talk", "BloomLearn", "Bloom Focus"],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#12142b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`} data-calm="false" suppressHydrationWarning>
      <head>
        {/* Apply calm mode before paint so sensitive visitors never see motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("hb-calm")==="true")document.documentElement.dataset.calm="true"}catch(e){}`,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="absolute top-2 -left-[999px] z-[100] rounded-full bg-ink px-5 py-2.5 text-bg focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
