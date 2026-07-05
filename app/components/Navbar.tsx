"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkHeroPage = pathname === "/";
  const textColorClass = "text-walnut/80 hover:text-walnut";

  const logoColorClass = "text-walnut";

  const activeLineColor = "bg-gold";

  const buttonClass = "bg-walnut/5 hover:bg-walnut text-walnut hover:text-white border-walnut/40 hover:border-walnut";

  const mobileToggleColorClass = "text-walnut hover:text-gold";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "Dealers", href: "/dealers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-walnut/10 py-4 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/zentree_logo.png"
              alt="Zentree Logo Mark"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div className="relative h-6 w-28 shrink-0">
            <Image
              src="/zentree_text_logo.png"
              alt="Zentree Text Logo"
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs tracking-widest uppercase font-medium transition-colors duration-300 py-2 ${textColorClass}`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavLine"
                    className={`absolute bottom-0 left-0 w-full h-[1px] ${activeLineColor}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-none transition-all duration-300 ${buttonClass}`}
          >
            Get a Quote <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden transition-colors p-1 cursor-pointer ${mobileToggleColorClass}`}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Pannels */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-walnut/10 backdrop-blur-lg"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm tracking-widest uppercase font-medium py-1 transition-colors ${isActive ? "text-gold" : "text-walnut/70 hover:text-walnut"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest py-4 bg-walnut hover:bg-gold text-white hover:text-walnut transition-colors w-full text-center"
              >
                Get a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
