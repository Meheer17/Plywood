import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const categories = [
    "Premium (Waterproof) Plywood",
    "Commercial Plywood",
    "Block Boards",
    "Laminates"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "Dealers", href: "/dealers" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-white text-walnut/70 border-t border-walnut/10 font-sans">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2.5 group w-max">
            <div className="relative h-8 w-8 shrink-0">
              <Image
                src="/zentree_logo.png"
                alt="Zentree Logo Mark"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <div className="relative h-5 w-24 shrink-0">
              <Image
                src="/zentree_text_logo.png"
                alt="Zentree Text Logo"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-walnut/60 max-w-sm">
            Zentree Plywood offers premium boiling-water waterproof plywood, semi-calibrated commercial plywood, block boards, and textured laminates engineered for high-end architecture.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-walnut/5 hover:bg-gold hover:text-white flex items-center justify-center transition-all duration-300 text-walnut/75" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-walnut/5 hover:bg-gold hover:text-white flex items-center justify-center transition-all duration-300 text-walnut/75" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-walnut/5 hover:bg-gold hover:text-white flex items-center justify-center transition-all duration-300 text-walnut/75" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-walnut text-xs tracking-widest font-semibold uppercase relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[1px] after:bg-gold">
            Navigation
          </h4>
          <ul className="space-y-3 pt-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors duration-300 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-5">
          <h4 className="text-walnut text-xs tracking-widest font-semibold uppercase relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[1px] after:bg-gold">
            Categories
          </h4>
          <ul className="space-y-3 pt-2 text-sm">
            {categories.slice(0, 4).map((cat) => (
              <li key={cat}>
                <Link href={`/products?category=${encodeURIComponent(cat)}`} className="hover:text-gold transition-colors duration-300 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Authorized Dealers Column */}
        <div className="space-y-5">
          <h4 className="text-walnut text-xs tracking-widest font-semibold uppercase relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[1px] after:bg-gold">
            Authorized Dealers
          </h4>
          <div className="space-y-4 pt-2 text-sm text-walnut/60">
            <div className="space-y-1">
              <p className="font-semibold text-walnut leading-snug">Rohini Plywood & Deco Pannels</p>
              <p className="text-[11px] text-charcoal/50">Bangalore</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-semibold text-walnut">Plywood Emporium</p>
              <p className="text-[11px] text-charcoal/50">Puducherry</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-semibold text-walnut">Deepam Plywoods</p>
              <p className="text-[11px] text-charcoal/50">Chennai</p>
            </div>
            <div className="pt-2 border-t border-walnut/5">
              <Link href="/dealers" className="text-xs font-bold uppercase tracking-wider text-gold hover:text-walnut transition-colors flex items-center gap-1">
                View Dealer Details <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-walnut/10 bg-cream/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-walnut/50">
          <p>© {new Date().getFullYear()} Poetry Plywood LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
