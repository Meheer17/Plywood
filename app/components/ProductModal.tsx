"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: Record<string, string>;
  features: string[];
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: "",
    message: ""
  });

  if (!product) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productName: product.name,
          productCategory: product.category,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", quantity: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 2000);
      } else {
        setErrorMsg(data.error || "Failed to submit request.");
      }
    } catch (err) {
      setErrorMsg("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-[#F8F5F0] max-w-4xl w-full border border-gold/20 shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] rounded-none"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-charcoal text-white hover:text-gold transition-colors duration-300 border border-white/10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Left: Media & Features */}
          <div className="md:col-span-5 bg-charcoal text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto md:max-h-[85vh]">
            <div className="space-y-6">
              <div className="relative h-48 w-full border border-white/5 overflow-hidden bg-charcoal">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain rotate-90 scale-[1.35]"
                />
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-gold bg-gold/10 px-2.5 py-1 border border-gold/20">
                  {product.category}
                </span>
                <h3 className="font-serif text-2xl font-light tracking-wide mt-3 text-white">
                  {product.name}
                </h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-sans font-light">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 mt-8 pt-6 border-t border-white/5">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Key Highlights</h4>
              <ul className="space-y-2">
                {product.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-white/70">
                    <Check size={14} className="text-gold shrink-0 mt-0.5 animate-pulse" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Technical Specs & Inquiry Form */}
          <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto md:max-h-[85vh] flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-walnut/70 border-b border-walnut/10 pb-2 mb-4">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 mb-8 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <span className="text-[10px] font-bold text-walnut/50 uppercase tracking-widest block">{key}</span>
                    <span className="text-charcoal font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-walnut/5 border border-walnut/10 p-5 mt-auto">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-6 space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="font-serif text-lg text-walnut">Request Received</h4>
                  <p className="text-xs text-walnut/70 max-w-xs">
                    Our wood architectural specialist will contact you shortly with samples and pricing options.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="font-serif text-base text-walnut font-medium tracking-wide">
                    Request Architectural Consultation
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border border-walnut/20 px-3 py-2 text-xs focus:outline-none focus:border-gold w-full text-charcoal"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border border-walnut/20 px-3 py-2 text-xs focus:outline-none focus:border-gold w-full text-charcoal"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Est. Quantity (e.g. 50 sheets, custom project)"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="bg-white border border-walnut/20 px-3 py-2 text-xs focus:outline-none focus:border-gold w-full text-charcoal"
                  />
                  <textarea
                    placeholder="Describe your design specifications or custom requirements..."
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white border border-walnut/20 px-3 py-2 text-xs focus:outline-none focus:border-gold w-full resize-none text-charcoal"
                  ></textarea>

                  {errorMsg && (
                    <p className="text-red-600 text-[10px] font-medium text-center bg-red-50 border border-red-200 p-2">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-walnut hover:bg-gold text-white hover:text-walnut text-xs font-semibold uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Request Pricing & Specs"} 
                    {!loading && <ArrowRight size={14} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
