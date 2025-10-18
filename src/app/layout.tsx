import type { Metadata } from "next";
import { Poppins, Smooch_Sans, Saira, Exo_2, Audiowide } from "next/font/google";
import WhatsAppChat from "@/components/WhatsAppChat";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  style: ["normal","italic"],
});

const smooch = Smooch_Sans({
  variable: "--font-smooch",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
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
        className={`${poppins.variable} ${smooch.variable} ${saira.variable} ${exo2.variable} ${audiowide.variable} bg-white font-sans text-gray-900 antialiased bg-perfume-gradient bg-perfume-paper bg-perfume-vignette`}
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
          <SplashScreen />
          {children}
          <WhatsAppChat />
        </div>
      </body>
    </html>
  );
}
