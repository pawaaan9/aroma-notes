import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aroma Notes - Luxury Perfumery & Signature Fragrances",
  description: "Where every scent tells a story. Discover our exclusive collection of artisanal perfumes and signature fragrances, each bottle a masterpiece of olfactory artistry. Hand-crafted with passion, precision, and the finest ingredients from around the world.",
  keywords: "luxury perfume, signature fragrances, artisanal perfumery, exclusive scents, premium fragrances, Aroma Notes",
  authors: [{ name: "Aroma Notes" }],
  openGraph: {
    title: "Aroma Notes - Luxury Perfumery & Signature Fragrances",
    description: "Where every scent tells a story. Discover our exclusive collection of artisanal perfumes.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} bg-gray-900 font-display text-gray-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
