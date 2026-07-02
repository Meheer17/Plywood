import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const categories = [
    "Premium (Waterproof) Plywood",
    "Commercial Plywood",
    "Block Boards",
    "Laminates",
    "Decorative Panels"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-charcoal text-white/70 border-t border-white/5 font-sans">
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
                className="object-contain brightness-0 invert"
              />
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-white/50 max-w-sm">
            Authorized sales partner and distributor: Rohini Plywood and Deco Panel. Offering premium Zentree waterproof and commercial plywood, laminates, veneers, and custom wood solutions.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-walnut flex items-center justify-center transition-all duration-300 text-white/75" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-walnut flex items-center justify-center transition-all duration-300 text-white/75" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-walnut flex items-center justify-center transition-all duration-300 text-white/75" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-white text-xs tracking-widest font-semibold uppercase relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[1px] after:bg-gold">
            Quick Links
          </h4>
          <ul className="space-y-3 pt-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:text-gold transition-colors duration-300 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-5">
          <h4 className="text-white text-xs tracking-widest font-semibold uppercase relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[1px] after:bg-gold">
            Categories
          </h4>
          <ul className="grid grid-cols-1 gap-2.5 pt-2">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat}>
                <Link href={`/products?category=${encodeURIComponent(cat)}`} className="text-sm hover:text-gold transition-colors duration-300 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-5">
          <h4 className="text-white text-xs tracking-widest font-semibold uppercase relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[1px] after:bg-gold">
            Showroom
          </h4>
          <ul className="space-y-3 pt-2 text-sm text-white/50">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span>Rohini Plywood and Deco Panel, Bangalore, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <span>+91 XXXXX XXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <span>info@rohiniplywood.com</span>
            </li>
          </ul>
          {/* Grayscale Map Embed */}
          <div className="w-full h-24 relative overflow-hidden grayscale contrast-125 opacity-70 hover:opacity-100 transition-all duration-300 border border-white/5 rounded-none">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784412342878!3d40.7580009713872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a27d4843fd%3A0x22ab59d7b973db63!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1718873000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-white/5 bg-charcoal/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Rohini Plywood and Deco Panel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
