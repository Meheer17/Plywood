import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sylva Wood | Premium Architectural Plywood, Veneers & Wood Solutions",
  description: "Sylva Wood crafts exceptional architectural plywood, veneers, laminates, and custom wood solutions trusted by premium architects, interior designers, and builders worldwide.",
  keywords: ["premium plywood", "architectural veneers", "luxury woodwork", "marine plywood", "decorative panels", "MDF boards", "sustainable sourcing"],
  authors: [{ name: "Sylva Wood" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal selection:bg-gold selection:text-walnut">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
