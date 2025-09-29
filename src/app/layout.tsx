import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aroma Perfumery",
  description: "Discover your signature scent with our curated collection of exquisite fragrances, crafted with passion and precision.",
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
