import type { Metadata } from "next";
import { Barlow_Condensed, Work_Sans } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import TopBanner from "./components/TopBanner";
import SiteHeader from "./components/SiteHeader";

const heading = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PUBZA | Signs & Printing",
  description:
    "Impression, lettrage, enseignes et graphisme. PUBZA donne vie à votre communication visuelle, du design à la pose.",
};

// Enforce static rendering across all routes (including future ones)
export const dynamic = "force-static";
export const revalidate = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <ThemeRegistry>
          <TopBanner />
          <SiteHeader />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
