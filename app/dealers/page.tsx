"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export default function DealersPage() {
  const dealers = [
    {
      name: "Rohini Plywood & Deco Pannels",
      tagline: "Authorised Distributor - South India",
      address: "Rohini Plywood and Deco Pannels, Bangalore, Karnataka, India",
      phone1: "+91 62025 88042",
      phone2: "+91 63644 45712",
      whatsapp: "+916364445712",
      hours: "Mon – Sat: 9:00 AM – 7:00 PM (IST)",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1362799307775!2d77.59247731482194!3d12.971598790856018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x2029fed3be3d49ec!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
      features: [
        "Full Zentree plywood range available in stock",
        "On-site specification consultancy",
        "Doorstep contractor logistics and delivery",
        "Wholesale pricing & volume estimation"
      ]
    },
    {
      name: "Plywood Emporium",
      tagline: "Authorized Dealer - Puducherry",
      address: "Plywood Emporium, Puducherry, India",
      phone1: "",
      phone2: "",
      whatsapp: "",
      hours: "Mon – Sat: 9:30 AM – 7:30 PM (IST)",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124976.25700778687!2d79.74239855513813!3d11.932785461972583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0x73c3265a085b7e35!2sPuducherry!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
      features: [
        "Selected Zentree premium waterproof boards",
        "Quick sample displays & textures catalog",
        "Flexible builder discounts",
        "Local delivery coordination"
      ]
    },
    {
      name: "Deepam Plywoods",
      tagline: "Authorized Dealer - Chennai",
      address: "Chennai, Tamil Nadu, India",
      phone1: "",
      phone2: "",
      whatsapp: "",
      hours: "Mon – Sat: 9:30 AM – 7:30 PM (IST)",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865395689!2d80.11051154143485!3d13.047525319984954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x82e4b0387b025098!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
      features: [
        "Selected Zentree premium waterproof boards",
        "Quick sample displays & textures catalog",
        "Flexible builder discounts",
        "Local delivery coordination"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans pt-24 pb-20">

      {/* Title Header */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12 text-left">
        <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
          Our Distribution Network
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-walnut leading-tight">
          Authorized Dealers
        </h1>
        <p className="text-sm text-charcoal/60 max-w-xl font-light mt-4">
          Zentree premium products are available exclusively through our trusted network of sales partners. Locate a dealer near you for expert consultancy and order fulfillment.
        </p>
        <div className="w-16 h-[1px] bg-gold mt-4" />
      </section>

      {/* Main Content: Dealers Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {dealers.map((dealer, idx) => (
            <motion.div
              key={dealer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-walnut/10 p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:border-gold/40 transition-all duration-300"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-widest block mb-1">
                    {dealer.tagline}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-walnut">
                    {dealer.name}
                  </h2>
                </div>

                <div className="w-full h-48 relative overflow-hidden grayscale contrast-125 border border-walnut/10 rounded-none bg-cream">
                  <iframe
                    src={dealer.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${dealer.name} Showroom Map`}
                  ></iframe>
                </div>

                <ul className="space-y-4 text-sm text-charcoal/70">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                    <span>{dealer.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock size={18} className="text-gold shrink-0" />
                    <span>{dealer.hours}</span>
                  </li>
                  {dealer.phone1 && (
                    <li className="flex items-start gap-3">
                      <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span>{dealer.phone1}</span>
                        {dealer.phone2 && <span>{dealer.phone2}</span>}
                      </div>
                    </li>
                  )}
                </ul>

                <div className="pt-4 border-t border-walnut/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-walnut mb-3">
                    Available Services
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/60">
                    {dealer.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {dealer.phone1 && (
                <div className="mt-8 pt-6 border-t border-walnut/10 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={`tel:${dealer.phone1.replace(/\s+/g, "")}`}
                    className="w-full sm:w-auto px-6 py-3 bg-walnut hover:bg-gold text-white hover:text-walnut text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  >
                    Call Dealer
                  </a>
                  {dealer.whatsapp && (
                    <a
                      href={dealer.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 border border-walnut/20 hover:border-gold hover:text-gold text-walnut text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={14} /> WhatsApp Chat
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate Help Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="bg-walnut/5 border border-walnut/10 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <ShieldCheck className="text-gold mx-auto" size={40} />
          <h3 className="font-serif text-2xl font-light text-walnut">Interested in becoming a Zentree Partner?</h3>
          <p className="text-sm text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
            We are constantly expanding our retail network. If you are a high-end plywood distributor or showroom owner interested in partner benefits, contact our corporate office directly.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold hover:text-walnut transition-colors group"
            >
              Submit Distributorship Inquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
