import type { Metadata } from "next";
import { Fraunces, Manrope, Newsreader, Hanken_Grotesk, Literata, Marcellus } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JourneyLayer } from "@/components/Journey";
import { PREPAINT_SCRIPT } from "@/lib/prepaint";

// Two faces per light, as in the design proposal: Night (Fraunces, Manrope),
// Prism (Newsreader, Hanken Grotesk), Stone (Marcellus, Literata).
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["SOFT", "WONK", "opsz"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], axes: ["opsz"] });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"] });
const literata = Literata({ variable: "--font-literata", subsets: ["latin"], axes: ["opsz"] });
const marcellus = Marcellus({ variable: "--font-marcellus", subsets: ["latin"], weight: "400" });

// Link previews (Telegram, iMessage, Slack…): absolute URLs and a real 1200×630 JPEG in public/.
const SITE = "https://drasticstatic.github.io/O-R-G-dapp-public-preview/";
const DESCRIPTION =
  "Where science and spirituality meet. A member-governed community that votes on its beliefs and plans octagon-shaped temples and research centers.";
const SOCIAL = {
  url: `${SITE}social-card.jpg`,
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "O-R-G dApp preview from the drasticstatic ORG lab: Where science and spirituality meet, with ORG's rainbow octagon art.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "ORG: Octagon Religious-Research Group",
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "O-R-G dApp preview",
    title: "O-R-G dApp preview: Octagon Religious-Research Group",
    description: DESCRIPTION,
    images: [SOCIAL],
  },
  twitter: {
    card: "summary_large_image",
    title: "O-R-G dApp preview: Octagon Religious-Research Group",
    description: DESCRIPTION,
    images: [{ url: SOCIAL.url, alt: SOCIAL.alt }],
  },
};

const fonts = [fraunces, manrope, newsreader, hanken, literata, marcellus].map((f) => f.variable).join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fonts} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PREPAINT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:p-3">
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <JourneyLayer />
        </Providers>
      </body>
    </html>
  );
}
