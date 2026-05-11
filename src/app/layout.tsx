import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lauraorganic.com"),
  title: "Laura Organic | Szombati piac, organikus fogások",
  description:
    "Kis tételben készített organikus fogások előrendeléssel, szombati átvétellel a biopiacon vagy a foodtrucknál.",
  openGraph: {
    title: "Laura Organic | Szombati piac, organikus fogások",
    description:
      "Kis tételben készített organikus fogások előrendeléssel, szombati átvétellel a biopiacon vagy a foodtrucknál.",
    url: "https://lauraorganic.com",
    siteName: "Laura Organic",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/laura_organic_hero_postcard.png",
        width: 1536,
        height: 1024,
        alt: "Laura Organic foodtruck a piacon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Organic | Szombati piac, organikus fogások",
    description:
      "Kis tételben készített organikus fogások előrendeléssel, szombati átvétellel a biopiacon vagy a foodtrucknál.",
    images: ["/laura_organic_hero_postcard.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
