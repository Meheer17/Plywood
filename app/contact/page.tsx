"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "Premium (Waterproof) Plywood",
    message: ""
  });

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
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirement: "Premium (Waterproof) Plywood",
          message: ""
        });
      } else {
        setErrorMsg(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      setErrorMsg("An unexpected error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans pt-24 pb-20">

      {/* Title Header */}
      <section className="py-12 md:py-16 max-w-3xl mx-auto px-6 text-center animate-fade-in">
        <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
          Sourcing & Support
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-walnut leading-tight">
          Contact Zentree Plywood
        </h1>
        <p className="text-sm text-charcoal/60 max-w-md mx-auto font-light mt-4">
          Have a question or require custom specifications? Submit your details below, and our team will get in touch with you.
        </p>
        <div className="w-16 h-[1px] bg-gold mt-6 mx-auto" />
      </section>

      {/* Main Sourcing Form */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="bg-white p-8 sm:p-12 border border-walnut/10 shadow-sm relative overflow-hidden">
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
                Thank you for contacting Zentree Plywood. A corporate representative will review your project details and respond within 24 business hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-light text-walnut">Project Sourcing Form</h3>
                <p className="text-xs text-charcoal/50 font-light font-sans">
                  Submit your enquiries below.
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
                    <option value="Premium (Waterproof) Plywood">Premium (Waterproof) Plywood</option>
                    <option value="Commercial Plywood">Commercial Plywood</option>
                    <option value="Block Boards">Block Boards</option>
                    <option value="Laminates">Laminates</option>
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

              {errorMsg && (
                <p className="text-red-600 text-xs font-medium bg-red-50 border border-red-200 p-3 text-center">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-walnut hover:bg-gold text-white hover:text-walnut text-xs font-semibold uppercase tracking-widest py-4 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending Sourcing Request..." : "Submit Sourcing Request"}
                {!loading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
