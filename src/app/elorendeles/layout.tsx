import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laura Organic | Átvétel véglegesítése",
  description:
    "Ellenőrizd a szombati rendelésedet, válaszd ki az átvételi helyet, és véglegesítsd az előrendelést.",
  alternates: {
    canonical: "https://lauraorganic.com/elorendeles",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReservationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
