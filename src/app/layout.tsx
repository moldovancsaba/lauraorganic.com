import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { getGdsMessages } from "@doneisbetter/gds-core/server";
import { Fraunces, Manrope } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import Providers from "./providers";

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
  applicationName: "Laura Organic",
  keywords: [
    "Laura Organic",
    "organikus fogások",
    "szombati piac",
    "előrendelés",
    "biopiac Budapest",
    "foodtruck",
  ],
  category: "food",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lauraorganic.com",
  },
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
  const locale = "hu";
  const messages = getGdsMessages(locale);

  return (
    <html lang={locale} dir="ltr" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
