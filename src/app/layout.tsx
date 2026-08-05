import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sefasogutma.com"), // Domaini alınca değiştireceğiz

  title: {
    default: "Sefa Soğutma | Endüstriyel Soğutucu Kapak Sistemleri",
    template: "%s | Sefa Soğutma",
  },

  description:
    "Sefa Soğutma; Çorlu/Tekirdağ'da sürgülü kapak, çarpma kapak, projeye özel üretim, soğuk hava tünelleri ve yedek parça üretimi yapmaktadır.",

  keywords: [
    "Sefa Soğutma",
    "Sürgülü Kapak",
    "Çarpma Kapak",
    "Market Dolabı Kapağı",
    "Pastane Dolabı",
    "Endüstriyel Soğutucu",
    "Soğutucu Kapak",
    "Çorlu",
    "Tekirdağ",
    "Yedek Parça",
    "Soğuk Hava Tüneli",
  ],

  authors: [
    {
      name: "Sefa Soğutma",
    },
  ],

  creator: "Sefa Soğutma",

  openGraph: {
    title: "Sefa Soğutma",

    description:
      "Market, pastane ve endüstriyel soğutucu dolapları için profesyonel kapak sistemleri.",

    url: "https://www.sefasogutma.com",

    siteName: "Sefa Soğutma",

    locale: "tr_TR",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}