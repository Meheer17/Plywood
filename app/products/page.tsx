import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "The Timber Collection | Premium Plywoods, Blockboards & Laminates",
  description: "Browse the Zentree catalog featuring BWP waterproof plywood (Ultima, Gold), calibrated commercial panels, সুইড Pine solid-core block boards, and textured laminates.",
  keywords: "calibrated plywood catalog, BWP waterproof plywood sheets, Sweden Pine blockboard, fabric textured laminates, timber inventory bangalore",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5F0]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          <span className="font-serif text-lg text-walnut tracking-widest animate-pulse">LOADING COLLECTION...</span>
        </div>
      </div>
    }>
      <ProductsPageClient />
    </Suspense>
  );
}
