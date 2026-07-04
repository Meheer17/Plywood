"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Droplet, Bug, Leaf, Award, 
  ChevronLeft, ChevronRight, Star, Quote, Phone, HelpCircle, X
} from "lucide-react";
import rawProducts from "@/app/data/products.json";
import ProductModal from "@/app/components/ProductModal";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: Record<string, string>;
  features: string[];
}

const mockProducts = rawProducts as unknown as Product[];

// Reusable animated counter component using native IntersectionObserver (React 19 Safe)
function AnimatedCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [count, setCount] = useState(0);

  const numericVal = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericVal;
    const totalFrames = 60 * duration;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(end * (1 - (1 - progress) * (1 - progress)));
      
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, numericVal, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProduct, setActiveProduct] = useState<any>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { name: "Premium (Waterproof) Plywood", img: "/categories/premium_waterproof_plywood.jpg", desc: "100% boiling-water waterproof & termite-proof panels" },
    { name: "Commercial Plywood", img: "/categories/commercial_plywood.jpg", desc: "Semi-calibrated & budget wardrobe panels" },
    { name: "Block Boards", img: "/categories/block_boards.jpg", desc: "Strong kiln-dried timber frames" },
    { name: "Laminates", img: "/categories/laminates.jpg", desc: "Premium textured style embodiment surfaces" }
  ];

  const whyChooseUs = [
    { icon: <Award className="text-gold" size={24} />, title: "Premium Quality", desc: "Sourced under rigorous calibration standards for consistent face grain and core density." },
    { icon: <Droplet className="text-gold" size={24} />, title: "Water Resistant", desc: "BWP phenolic bonding ensures structural integrity in high moisture environments." },
    { icon: <Bug className="text-gold" size={24} />, title: "Termite Resistant", desc: "Pressure treated with organic preservatives to prevent borer and wood decay." },
    { icon: <Leaf className="text-gold" size={24} />, title: "Sustainable Sourcing", desc: "Certified forest harvesting complying with FSC® guidelines and E0 emission safety." },
    { icon: <ShieldCheck className="text-gold" size={24} />, title: "Trusted Brands", desc: "Endorsed by leading international architectural bureaus and design houses." },
    { icon: <HelpCircle className="text-gold" size={24} />, title: "Expert Guidance", desc: "Consult directly with our project wood technicians to finalize specifications." }
  ];

  const testimonials = [
    {
      text: "The quality of the smoked walnut veneers from Zentree's distributor is unmatched. We used them in our latest penthouse project, and the depth of natural wood grain exceeded our clients' expectations.",
      name: "Marcus Vance",
      role: "Principal Architect, Vance & Partners",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120"
    },
    {
      text: "Zentree's BWP Gold and Ultima waterproof plywood options have become our standard. Incredibly stable, zero internal voids, and absolute peace of mind during heavy seasonal rains.",
      name: "Elena Rostova",
      role: "Creative Director, Rostova Design Studio",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120"
    },
    {
      text: "We sourced custom curved timber baffles from Rohini Plywood and Deco Panel. Their Zentree engineering precision, scheduling, and craftsmanship were truly world-class.",
      name: "David Cho",
      role: "Senior Construction Manager, BuildCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120"
    }
  ];

  const partners = [
    { name: "Porro", id: 1 },
    { name: "Herman Miller", id: 2 },
    { name: "Fritz Hansen", id: 3 },
    { name: "B&B Italia", id: 4 },
    { name: "Poliform", id: 5 },
    { name: "Ligne Roset", id: 6 }
  ];

  const showcaseCategories = ["All", "Premium (Waterproof) Plywood", "Commercial Plywood", "Block Boards", "Laminates"];

  const filteredShowcase = selectedCategory === "All" 
    ? mockProducts.slice(0, 6) 
    : mockProducts.filter(p => p.category === selectedCategory);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col w-full bg-cream text-charcoal font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-walnut overflow-hidden select-none">
        {/* Parallax / Animated Wood texture background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507346122424-9f719067f08d?q=80&w=1600"
            alt="Warm Premium Wood grain Texture"
            fill
            priority
            className="object-cover opacity-60 scale-105"
          />
          {/* Deep luxury walnut-teak tinted overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-walnut/90 via-walnut/60 to-charcoal/95" />
        </div>

        {/* Floating Organic Tree Ring / Wood Grain SVG Graphics */}
        <div className="absolute inset-0 pointer-events-none opacity-25 z-1">
          <motion.svg
            className="absolute top-[10%] left-[5%] w-[450px] h-[450px] text-gold"
            viewBox="0 0 100 100"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Concentric growth rings */}
            <path d="M 0,20 C 30,10 40,30 60,15 C 80,0 90,20 100,10" fill="none" stroke="currentColor" strokeWidth="0.15" />
            <path d="M 0,25 C 30,15 40,35 60,20 C 80,5 90,25 100,15" fill="none" stroke="currentColor" strokeWidth="0.15" />
            <path d="M 0,30 C 30,20 40,40 60,25 C 80,10 90,30 100,20" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1,2" />
            <path d="M 0,35 C 30,25 40,45 60,30 C 80,15 90,35 100,25" fill="none" stroke="currentColor" strokeWidth="0.15" />
            <path d="M 0,40 C 30,30 40,50 60,35 C 80,20 90,40 100,30" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </motion.svg>

          <motion.svg
            className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] text-gold"
            viewBox="0 0 100 100"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Concentric growth rings on the right */}
            <path d="M 100,30 C 70,40 60,20 40,35 C 20,50 10,30 0,40" fill="none" stroke="currentColor" strokeWidth="0.15" />
            <path d="M 100,35 C 70,45 60,25 40,40 C 20,55 10,35 0,45" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="2,2" />
            <path d="M 100,40 C 70,50 60,30 40,45 C 20,60 10,40 0,50" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <path d="M 100,45 C 70,55 60,35 40,50 C 20,65 10,45 0,55" fill="none" stroke="currentColor" strokeWidth="0.15" />
            <path d="M 100,50 C 70,60 60,40 40,55 C 20,70 10,50 0,60" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </motion.svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center text-white mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase block">
              Architectural Craftsmanship
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-extralight tracking-tight leading-tight max-w-4xl mx-auto">
              Crafting Spaces with <span className="italic font-light text-gold text-stroke-gold">Premium Wood</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Exceptional plywood, veneers, laminates, and wood solutions trusted by architects, interior designers, and premium builders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-white text-walnut font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore Collection 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:border-gold hover:text-gold text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gold rounded-full"
          />
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start gap-4 mb-16">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Showroom Selection</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-walnut">
            Featured Categories
          </h2>
          <div className="w-16 h-[1px] bg-gold mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link 
                href={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group block relative aspect-[4/5] overflow-hidden border border-walnut/10 bg-charcoal"
              >
                {/* Image zoom on hover */}
                <div className="absolute inset-0 z-0 bg-cream">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                </div>

                {/* Details overlay */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-gold mb-1 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Discover More
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-light text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-white/50 text-xs mt-1.5 line-clamp-1 font-light font-sans">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="bg-white text-charcoal border-y border-walnut/10 py-24 px-6 md:px-12 w-full relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Uncompromising Standards</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-walnut leading-tight">
              Why Architects Trust Zentree
            </h2>
            <p className="text-charcoal/70 text-sm leading-relaxed font-light font-sans">
              From sustainable forestry sourcing to precise mechanical calibrating, our wood panels deliver stability, style, and structure for years to come.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold hover:text-walnut transition-colors duration-300"
              >
                Learn About Our Standards <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 border-l border-gold/20 pl-6 py-1"
              >
                <div className="w-10 h-10 rounded-full bg-walnut/5 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-light tracking-wide text-walnut">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 text-xs leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PRODUCT SHOWCASE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">The Collection</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-walnut">
              Material Showcase
            </h2>
            <div className="w-16 h-[1px] bg-gold mt-2" />
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-2 pt-4">
            {showcaseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 border rounded-none cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-walnut text-white border-walnut"
                    : "bg-transparent text-walnut/60 border-walnut/15 hover:border-walnut/40 hover:text-walnut"
                }`}
              >
                {cat === "All" ? "All Products" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredShowcase.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
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
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-gold">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-light text-walnut mt-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-charcoal/60 mt-2 font-sans font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-walnut/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProduct(product)}
                    className="text-xs font-semibold uppercase tracking-widest text-walnut hover:text-gold transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    Quick View
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-walnut/50 font-sans tracking-wide">
                    {product.specs["Origin"] || "India"}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section className="bg-walnut/5 py-24 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left image */}
          <div className="lg:col-span-5 relative aspect-[4/5] w-full border border-walnut/10 shadow-xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"
              alt="Artisanal Wood Crafting Workshop"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-walnut/10 mix-blend-multiply" />
          </div>

          {/* Right details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Craft & Heritage</span>
              <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-walnut leading-tight">
                Rooted in generations <br />of expertise
              </h2>
              <div className="w-16 h-[1px] bg-gold" />
            </div>

            <div className="text-sm text-charcoal/70 leading-relaxed font-sans font-light max-w-2xl space-y-4">
              <p>
                Rooted in generations of expertise within the plywood and laminate trade, Zentree was conceived to bridge the gap between demand and dependable, high-quality interior solutions.
              </p>
              <p>
                By establishing our ultra-modern manufacturing facility in close proximity to premium raw material sources, we ensure that every product we deliver meets the highest standards of excellence at a competitive value. Our vision is to transcend industry norms and redefine excellence through precision engineering and professional, expert-led execution.
              </p>
              <p>
                At Zentree, we live by the philosophy that quality is not a singular act, but a habit—a standard that is rigorously upheld from the selection of our timber to the final stages of our manufacturing process.
              </p>
            </div>

            {/* Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-6 border-t border-walnut/10">
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-walnut font-light block">
                  <AnimatedCounter value="25+" />
                </span>
                <span className="text-[10px] font-bold text-walnut/50 uppercase tracking-widest block">Years Experience</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-walnut font-light block">
                  <AnimatedCounter value="5000+" />
                </span>
                <span className="text-[10px] font-bold text-walnut/50 uppercase tracking-widest block">Projects Shaped</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-walnut font-light block">
                  <AnimatedCounter value="10000+" />
                </span>
                <span className="text-[10px] font-bold text-walnut/50 uppercase tracking-widest block">Happy Customers</span>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl text-walnut font-light block">
                  <AnimatedCounter value="100+" />
                </span>
                <span className="text-[10px] font-bold text-walnut/50 uppercase tracking-widest block">Wood Variants</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5.5. AUTHORIZED DEALERS SECTION */}
      <section className="py-24 px-6 md:px-12 bg-walnut/5 text-charcoal w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Find Your Authorized Dealer</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-walnut leading-tight">
              Authorized Sales Partner & Distributor
            </h2>
            <p className="text-charcoal/70 text-sm leading-relaxed font-light max-w-xl">
              Zentree products are available through our network of authorized sales experts. Our premier partner and distributor, Rohini Plywood and Deco Panel, provides professional sourcing, specification consultancy, and logistics support for residential and commercial interior projects.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact"
                className="px-6 py-3.5 bg-gold hover:bg-walnut text-walnut hover:text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2 group"
              >
                Inquire with Dealer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 bg-white border border-walnut/15 p-8 sm:p-10 space-y-6 shadow-sm">
            <span className="text-gold text-xs font-semibold tracking-wider uppercase block">Featured Distributor</span>
            <h3 className="font-serif text-2xl font-light text-walnut">Rohini Plywood & Deco Panel</h3>
            
            <div className="space-y-4 text-sm text-charcoal/70">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"></span>
                <p><strong>Primary Sourcing Hub:</strong> Bangalore, Karnataka, India</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"></span>
                <p><strong>Offerings:</strong> Full Zentree plywood lines, custom architectural veneers and laminates.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"></span>
                <p><strong>Services:</strong> Wholesale supply, project estimation, size customization, and doorstep delivery.</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-walnut/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-charcoal/40 block uppercase tracking-widest">Direct Contact</span>
                <span className="text-sm font-semibold text-walnut font-sans">+91 62025 88042, +91 63644 45712</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Client Testimonials</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-walnut">
            Resonating in Premium Spaces
          </h2>
          <div className="w-16 h-[1px] bg-gold mt-2" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto bg-white border border-walnut/10 p-8 sm:p-16 shadow-sm overflow-hidden min-h-[300px] flex flex-col justify-between">
          <div className="absolute top-6 left-6 text-walnut/10">
            <Quote size={80} className="stroke-[0.5]" />
          </div>

          <div className="relative z-10 min-h-[140px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={testimonialIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-base sm:text-lg text-walnut italic leading-relaxed font-sans font-light"
              >
                "{testimonials[testimonialIndex].text}"
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-8 pt-8 border-t border-walnut/5 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            {/* Author Profile */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-walnut/10">
                {/* <Image
                  src={testimonials[testimonialIndex].avatar}
                  alt={testimonials[testimonialIndex].name}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-walnut leading-none">
                  {/* {testimonials[testimonialIndex].name} */}
                </h4>
                <span className="text-xs text-charcoal/50 font-light mt-1 block">
                  {/* {testimonials[testimonialIndex].role} */}
                </span>
              </div>
            </div>

            {/* Control & Rating */}
            <div className="flex items-center gap-6">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border border-walnut/10 hover:bg-walnut hover:text-white transition-colors duration-300 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border border-walnut/10 hover:bg-walnut hover:text-white transition-colors duration-300 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BRANDS WE DEAL WITH */}
      <section className="bg-white text-charcoal py-16 px-6 md:px-12 border-t border-b border-walnut/10 w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left lg:max-w-xs space-y-2">
            <span className="text-gold text-[10px] tracking-widest font-semibold uppercase block">Collaborative Network</span>
            <h3 className="font-serif text-lg tracking-wide font-light text-walnut">Trusted by Global Furnishing Brands</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-8 w-full max-w-3xl justify-items-center items-center">
            {partners.map((p) => (
              <span
                key={p.id}
                className="font-serif text-sm tracking-[0.3em] font-light text-walnut/30 hover:text-gold transition-all duration-300 cursor-default uppercase"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT CTA SECTION */}
      <section className="relative py-28 px-6 md:px-12 bg-cream overflow-hidden text-center text-charcoal w-full select-none border-t border-walnut/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507346122424-9f719067f08d?q=80&w=1200"
            alt="Walnut panel texture"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-cream" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase block">Work with Us</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-walnut leading-tight">
            Let's Build Something Timeless
          </h2>
          <p className="text-charcoal/70 text-sm max-w-xl mx-auto font-light font-sans leading-relaxed">
            Collaborate directly with our timber specialists to request materials specs, get pricing parameters, and plan wood deliveries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-walnut hover:bg-gold text-white hover:text-walnut font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              Get a Quote <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+919741767564"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-walnut/20 hover:border-gold hover:text-gold text-walnut font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone size={14} /> Call Sales Partner
            </a>
          </div>
        </div>
      </section>

      {/* 9. PRODUCT MODAL */}
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
