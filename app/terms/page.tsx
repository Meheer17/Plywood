import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-charcoal text-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden select-none mb-12">
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase block">
            Legal Terms
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Terms of Service
          </h1>
          <p className="text-white/60 text-sm max-w-xl font-light">
            Welcome to Zentree Plywood. Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="bg-white p-8 sm:p-12 border border-walnut/10 shadow-sm space-y-8">
          <p className="text-xs text-walnut/50">Last updated: July 2026</p>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">1. Agreement to Terms</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              By accessing and using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you should immediately cease use of the site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">2. Website Purpose & Scope</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              This website provides information, product catalogs, and specifications for Zentree Plywood. Products are available through our network of authorized sales partners and distributors. Final specifications, pricing, delivery times, and product warranties are subject to the physical invoices and contracts signed at the time of purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">3. Use of Website Materials</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              All content on this website, including logos, designs, text, catalog descriptions, and images, is the intellectual property of Zentree Plywood (Poetry Plywood LLP) or its content suppliers. You may not copy, reproduce, republish, or distribute any materials without prior written consent.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">4. Disclaimers & Warranties</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              While we strive to ensure that all information regarding thicknesses, sizes, and species is accurate and up-to-date, minor variations in wood grains and manufacturing calibrations can occur. Official warranties (such as the Zentree Ultima lifetime warranty) are governed by the terms specified on the official physical warranty certificate provided upon purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">5. Limitation of Liability</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              In no event shall Zentree Plywood or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">6. Governing Law</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              These terms are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
