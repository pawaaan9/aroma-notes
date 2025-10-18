import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import WhatsAppChat from "@/components/WhatsAppChat";
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
    <html lang="en">
      <body
        className={`${manrope.variable} bg-white font-display text-gray-900 antialiased bg-perfume-gradient bg-perfume-paper bg-perfume-vignette`}
      >
        {/* Floating sparkles layer */}
        <div className="perfume-sparkles" aria-hidden>
          <span className="dot" style={{ left: '10%', bottom: '5%' }} />
          <span className="dot alt" style={{ left: '30%', bottom: '10%' }} />
          <span className="dot" style={{ left: '55%', bottom: '0%' }} />
          <span className="dot alt" style={{ left: '75%', bottom: '12%' }} />
          <span className="dot" style={{ left: '90%', bottom: '8%' }} />
        </div>
        <div className="relative z-10">
          {children}
          <WhatsAppChat />
        </div>
      </body>
    </html>
  );
}
