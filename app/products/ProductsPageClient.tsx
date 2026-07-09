"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowRight, X } from "lucide-react";
import rawProducts from "@/app/data/products.json";
import ProductModal from "@/app/components/ProductModal";

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  image: string;
  description: string;
  specs: Record<string, string>;
  features: string[];
}

const mockProducts = rawProducts as unknown as Product[];

export default function ProductsPageClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [activeProduct, setActiveProduct] = useState<any>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Sync category if URL parameter changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  useEffect(() => {
    setSelectedSubcategory("All");
  }, [selectedCategory]);

  const categories = [
    "All",
    "Premium (Waterproof) Plywood",
    "Commercial Plywood",
    "Block Boards",
    "Laminates"
  ];

  // Filtering logic
  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.values(product.specs).some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSubcategory = selectedCategory !== "Laminates" || selectedSubcategory === "All" || product.subcategory === selectedSubcategory;

    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans pt-24 pb-20">
      {/* Hero Banner */}
      <section className="bg-charcoal text-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden select-none mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpeg"
            alt="Luxury wood textures"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase block">
            Inventory
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            The Timber Collection
          </h1>
          <p className="text-white/60 text-sm max-w-xl font-light">
            Browse our curated collection of reliable plywoods, solid blockboards and exquisite laminates.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Controls: Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-between mb-10 pb-6 border-b border-walnut/10">
          {/* Search bar */}
          <div className="relative flex-grow max-w-lg">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-walnut/40">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search by product name, thickness, wood origin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-walnut/20 pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-gold placeholder:text-walnut/30 text-charcoal rounded-none"
            />
          </div>

          {/* Inline desktop filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <SlidersHorizontal size={14} className="text-gold shrink-0 mr-2 hidden sm:block" />
            <div className="flex gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border rounded-none shrink-0 cursor-pointer ${selectedCategory === cat
                    ? "bg-walnut text-white border-walnut"
                    : "bg-white text-walnut/70 border-walnut/15 hover:border-walnut/40 hover:text-walnut"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subcategories row for Laminates */}
        {selectedCategory === "Laminates" && (
          <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-2 scrollbar-none bg-walnut/5 p-2 border border-walnut/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-walnut/50 mr-2 ml-1">Laminate Types:</span>
            {["All", "Solid", "Fabric", "Stone and Marble"].map((subcat) => (
              <button
                key={subcat}
                onClick={() => setSelectedSubcategory(subcat)}
                className={`px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 border rounded-none cursor-pointer ${selectedSubcategory === subcat
                  ? "bg-gold text-walnut border-gold"
                  : "bg-white text-walnut/70 border-walnut/15 hover:border-walnut/40 hover:text-walnut"
                  }`}
              >
                {subcat}
              </button>
            ))}
          </div>
        )}

        {/* Results Counter */}
        <div className="text-xs text-walnut/50 mb-6 font-sans tracking-wide">
          Showing {filteredProducts.length} of {mockProducts.length} products
        </div>

        {/* Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-walnut/20 bg-white space-y-4">
            <SlidersHorizontal size={36} className="mx-auto text-walnut/30" />
            <h3 className="font-serif text-lg text-walnut">No Products Match Your Search</h3>
            <p className="text-xs text-walnut/60 max-w-sm mx-auto">
              Try adjusting your spelling, typing a generic term like "birch" or "oak", or clearing your category filters.
            </p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="px-6 py-2.5 bg-walnut text-white text-xs font-semibold uppercase tracking-widest hover:bg-gold hover:text-walnut transition-all cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col justify-between border border-walnut/10 bg-white p-4 shadow-sm"
                >
                  <div className="space-y-4">
                    <div
                      onClick={() => setLightboxImage(product.image)}
                      className="relative aspect-[4/3] w-full overflow-hidden bg-cream border border-walnut/5 cursor-zoom-in"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-[1.41] origin-center transition duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest uppercase font-semibold text-gold">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-lg font-light text-walnut mt-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-charcoal/60 mt-2 font-sans font-light leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <ul className="grid grid-cols-2 gap-2 text-[10px] font-sans text-walnut/60 bg-cream/50 p-2.5 border border-walnut/5">
                        <li><strong>Thick:</strong> {product.specs["Thickness"] || product.specs["Dimensions"] || "Custom"}</li>
                        <li><strong>Origin:</strong> {product.specs["Origin"] || "India"}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-walnut/5 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProduct(product)}
                      className="text-xs font-semibold uppercase tracking-widest text-walnut hover:text-gold transition-colors flex items-center gap-1.5 group cursor-pointer"
                    >
                      Specifications
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] font-bold text-gold tracking-wide uppercase px-2 py-0.5 bg-gold/10 border border-gold/20">
                      {product.specs["Emission Grade"] || "FSC®"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Product Modal */}
      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />

      {/* Lightbox Modal for Full Image View */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors p-2.5 bg-white/10 border border-white/10 cursor-pointer"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>

            {/* Image Box */}
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Plywood product detail"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
