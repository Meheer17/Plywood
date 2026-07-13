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

// A curated collection of 100+ target search keywords and long-tail query phrases
// mapping directly to user search behaviors for premium plywood, construction, and interior design materials.
const seoKeywordsList = [
  "Zentree Plywood", "Poetry Plywood LLP", "Zentree Ultima WP Ply", "Zentree Gold WP Ply",
  "Zentree Neem Gurjan Com Ply", "Zentree Project Com Ply", "Zentree Solid Core Block Board",
  "India Pine block board", "Zentree laminates", "Zentree decorative panels", "commercial plywood",
  "waterproof plywood", "marine grade plywood", "IS 710 plywood", "BWP plywood", "BWR plywood",
  "moisture resistant plywood", "MR grade plywood", "calibrated plywood Bangalore", "calibrated commercial plywood",
  "calibrated waterproof plywood", "double calibrated plywood", "neo calibrated plywood", "red core plywood",
  "pine blockboard", "India pine core blockboard", "solid core blockboard", "laminates sheets Bangalore",
  "MDF boards Bangalore", "particle boards", "decorative laminates", "6mm waterproof plywood price",
  "9mm waterproof plywood price", "12mm calibrated plywood", "16mm calibrated plywood", "18mm calibrated plywood",
  "19mm block board Bangalore", "8x4 plywood sheet price Bangalore", "7x4 plywood sheet", "full thickness plywood",
  "premium Gurjan core plywood", "select Neem core plywood", "Nilgiri timber core", "Eucalyptus core plywood",
  "maritime pine core block board", "1.0mm fabric textured laminates", "borer proof plywood", "termite proof plywood",
  "chemical treated plywood", "organic preservative treated wood", "termite proof blockboard", "E0 emission grade plywood",
  "E1 emission plywood", "low formaldehyde emission plywood", "FSC certified plywood", "eco friendly plywood brand India",
  "modular kitchen plywood material", "waterproof plywood for kitchen cabinets", "wardrobe design plywood",
  "bedroom wardrobe plywood sheets", "bathroom vanity plywood Bangalore", "heavy load load-bearing shelves", "pine core doors",
  "study table wood sheets", "TV unit laminate finishes", "fabric texture laminates Bangalore", "cotton fabric grey laminate",
  "dotted fabric laminate", "linen beige laminate", "wood veneers Bangalore", "commercial shop fit-outs",
  "Poetry Plywood LLP Bangalore", "Rohini Plywood and Deco Pannels", "Rohini Plywood Bangalore",
  "Plywood Emporium Puducherry", "Deepam Plywoods Chennai", "plywood dealers in Bangalore", "plywood wholesale rate Bangalore",
  "calibrated plywood suppliers Bangalore", "plywood manufacturers in Karnataka", "buy commercial plywood Chennai",
  "waterproof plywood price per sq ft Bangalore", "top plywood brands in South India", "premium plywood showroom Bangalore",
  "local plywood distributors India", "contractor discount plywood Bangalore", "wholesale blockboard price Bangalore",
  "carpentry plywood suppliers", "architectural plywood brands India", "high density plywood", "four stage pressed plywood",
  "boiling water resistant ply", "100 percent gurjan plywood", "distributor of zentree plywood", "timber supply bangalore",
  "builders plywood wholesale", "phenolic resin bonded plywood", "wbp glue plywood", "interior design timber materials"
];

export const metadata: Metadata = {
  metadataBase: new URL("https://zentreeplywood.com"),
  title: {
    default: "Zentree Plywood | Premium Waterproof & Commercial Plywood",
    template: "%s | Zentree Plywood"
  },
  description: "Zentree Plywood offers premium BWP waterproof plywood, neo-calibrated commercial plywood, India Pine block boards, and fabric-textured laminates for luxury and durable interiors.",
  keywords: seoKeywordsList,
  authors: [{ name: "Zentree Plywood" }],
  creator: "Zentree Plywood",
  publisher: "Poetry Plywood LLP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Zentree Plywood - Premium Architectural Timber & Panels",
    description: "Zentree Plywood offers premium BWP waterproof plywood, neo-calibrated commercial plywood, India Pine block boards, and fabric-textured laminates.",
    url: "https://zentreeplywood.com",
    siteName: "Zentree Plywood",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://zentreeplywood.com/zentree_logo.png",
        width: 800,
        height: 800,
        alt: "Zentree Plywood - Premium Waterproof & Commercial Plywood",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentree Plywood | Premium Architectural Panels",
    description: "Zentree Plywood offers premium BWP waterproof plywood, neo-calibrated commercial plywood, and fabric-textured laminates.",
    images: ["https://zentreeplywood.com/zentree_logo.png"],
  }
};

// Schema.org LocalBusiness Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zentree Plywood",
  "legalName": "Poetry Plywood LLP",
  "description": "Zentree Plywood offers premium BWP waterproof plywood, neo-calibrated commercial plywood, India Pine block boards, and fabric-textured laminates.",
  "image": "https://zentreeplywood.com/zentree_logo.png",
  "@id": "https://zentreeplywood.com/#brand",
  "url": "https://zentreeplywood.com",
  "telephone": "+916364445712",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rohini Plywood and Deco Pannels, Bangalore",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://instagram.com/zentreeplywood",
    "https://linkedin.com/company/zentreeplywood",
    "https://facebook.com/zentreeplywood"
  ]
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
        {/* Add LocalBusiness JSON-LD structure */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
