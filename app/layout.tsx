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
  title: "Zentree Plywood | Authorized Partner: Rohini Plywood & Deco Panel",
  description: "Rohini Plywood and Deco Panel is an authorized sales partner of Zentree, offering premium BWP waterproof plywood, semi-calibrated commercial plywood, laminates, and veneers.",
  keywords: ["Zentree Plywood", "Rohini Plywood and Deco Panel", "Zentree Ultima WP Ply", "Zentree Gold WP Ply", "commercial plywood", "waterproof plywood", "architectural veneers", "laminates", "MDF boards"],
  authors: [{ name: "Rohini Plywood & Deco Panel" }],
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
