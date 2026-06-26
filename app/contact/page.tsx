"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "Premium Plywood",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        requirement: "Premium Plywood",
        message: ""
      });
    }, 3000);
  };

  const showroomImages = [
    { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600", title: "Timber Wall Panelling Showroom" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600", title: "Luxury Kitchen Cabinetry Display" },
    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600", title: "Oak Flooring & Veneer Gallery" },
    { url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=600", title: "Curved Architectural Timber Pavilion" }
  ];

  const contactCards = [
    {
      title: "Call Us Direct",
      desc: "Speak with a product engineer",
      val: "+1 (503) 555-0142",
      action: "tel:+15035550142",
      icon: <Phone className="text-gold" size={20} />
    },
    {
      title: "WhatsApp Chat",
      desc: "Instant specs & sample requests",
      val: "+1 (503) 555-0199",
      action: "https://wa.me/15035550199",
      icon: <MessageSquare className="text-gold" size={20} />
    },
    {
      title: "Email Inquiry",
      desc: "Submit project blueprints",
      val: "estimates@sylvawood.com",
      action: "mailto:estimates@sylvawood.com",
      icon: <Mail className="text-gold" size={20} />
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans pt-24 pb-0">
      
      {/* Title Header */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12 text-left animate-fade-in">
        <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
          Contact Details
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-walnut leading-tight">
          Connect with Our Experts
        </h1>
        <div className="w-16 h-[1px] bg-gold mt-4" />
      </section>

      {/* Main Grid: Details & Form */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
        
        {/* Left Column: Contact info & Quick cards */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Main Info */}
          <div className="space-y-6 bg-white p-8 border border-walnut/10 shadow-sm">
            <h3 className="font-serif text-2xl font-light text-walnut">Sylva Head Office</h3>
            <ul className="space-y-4 text-sm text-charcoal/70">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>102 Timber Plaza, Architectural District, Portland, OR 97201</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={18} className="text-gold shrink-0" />
                <span>Mon – Fri: 8:00 AM – 6:00 PM (EST)</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+1 (503) 555-0142</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@sylvawood.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Contact Cards */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-walnut/60">
              Quick Connections
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white hover:bg-walnut/5 p-4 border border-walnut/10 hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-cream group-hover:bg-white flex items-center justify-center border border-walnut/5 rounded-none transition-colors">
                    {card.icon}
                  </div>
                  <div className="text-left flex-grow">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-walnut">
                      {card.title}
                    </h4>
                    <p className="text-[10px] text-charcoal/50 font-light mt-0.5">{card.desc}</p>
                    <span className="text-sm font-semibold text-walnut mt-1 block group-hover:text-gold transition-colors">{card.val}</span>
                  </div>
                  <ArrowRight size={14} className="text-walnut/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 sm:p-10 border border-walnut/10 shadow-sm relative overflow-hidden h-full flex flex-col justify-center">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <ShieldCheck size={36} />
                </div>
                <h3 className="font-serif text-2xl text-walnut">Inquiry Sent Successfully</h3>
                <p className="text-sm text-charcoal/60 max-w-sm">
                  Thank you for contacting Sylva. An architectural account manager will review your project details and respond within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-light text-walnut">Project Sourcing Form</h3>
                  <p className="text-xs text-charcoal/50 font-light font-sans">
                    Submit your requirements below to request custom thicknesses, species samples, or bulk contractor discounts.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-walnut/60 uppercase tracking-widest block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexis Thorne"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-cream/50 border border-walnut/15 px-4 py-3 text-sm focus:outline-none focus:border-gold text-charcoal rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-walnut/60 uppercase tracking-widest block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (503) 555-0142"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-cream/50 border border-walnut/15 px-4 py-3 text-sm focus:outline-none focus:border-gold text-charcoal rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-walnut/60 uppercase tracking-widest block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alexis@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-cream/50 border border-walnut/15 px-4 py-3 text-sm focus:outline-none focus:border-gold text-charcoal rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-walnut/60 uppercase tracking-widest block">Product Requirement *</label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full bg-cream/50 border border-walnut/15 px-4 py-3 text-sm focus:outline-none focus:border-gold text-charcoal rounded-none"
                    >
                      <option value="Premium Plywood">Premium Plywood</option>
                      <option value="Marine Plywood">Marine Plywood</option>
                      <option value="Veneers">Veneers</option>
                      <option value="Laminates">Laminates</option>
                      <option value="MDF Boards">MDF Boards</option>
                      <option value="Block Boards">Block Boards</option>
                      <option value="Decorative Panels">Decorative Panels</option>
                      <option value="Custom Wood Solutions">Custom Wood Solutions</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-walnut/60 uppercase tracking-widest block">Project details / Sourcing volume *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your project timeline, requested dimensions, core treatment specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-cream/50 border border-walnut/15 px-4 py-3 text-sm focus:outline-none focus:border-gold text-charcoal resize-none rounded-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-walnut hover:bg-gold text-white hover:text-walnut text-xs font-semibold uppercase tracking-widest py-4 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Submit Sourcing Request
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Showroom Gallery Section */}
      <section className="bg-charcoal text-white py-24 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Luxury spaces</span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
              Experience the Showroom
            </h2>
            <div className="w-16 h-[1px] bg-gold mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {showroomImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden border border-white/5 bg-walnut/10"
              >
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <h4 className="font-serif text-base font-light text-white tracking-wide">{img.title}</h4>
                  <span className="text-[10px] text-gold tracking-widest uppercase font-semibold mt-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Showroom Spec
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map Full-Width Section */}
      <section className="w-full h-[450px] relative overflow-hidden grayscale contrast-125 border-t border-walnut/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784412342878!3d40.7580009713872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a27d4843fd%3A0x22ab59d7b973db63!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1718873000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sylva Wood Showroom Location Map"
        ></iframe>
      </section>

    </div>
  );
}
