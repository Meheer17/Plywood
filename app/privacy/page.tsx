import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-charcoal text-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden select-none mb-12">
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase block">
            Legal Information
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm max-w-xl font-light">
            Your privacy is of paramount importance to us. This policy describes how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="bg-white p-8 sm:p-12 border border-walnut/10 shadow-sm space-y-8">
          <p className="text-xs text-walnut/50">Last updated: July 2026</p>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">1. Information We Collect</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              We collect information directly from you when you fill out our contact and sourcing form, request a quote, or contact us via phone or WhatsApp. This includes:
            </p>
            <ul className="list-disc pl-5 text-sm text-charcoal/70 font-light space-y-2">
              <li>Contact details such as your name, email address, and phone number.</li>
              <li>Details regarding your project requirements, quantities, and material specifications.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">2. How We Use Your Information</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              Zentree Plywood (Poetry Plywood LLP) is committed to protecting your privacy. We use your information solely to:
            </p>
            <ul className="list-disc pl-5 text-sm text-charcoal/70 font-light space-y-2">
              <li>Process and respond to your product inquiries and requests for quotes.</li>
              <li>Provide customer support and follow up on sourcing requests.</li>
              <li>Facilitate delivery of purchased products to your specified location.</li>
            </ul>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">3. Information Protection</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              We implement industry-standard administrative, technical, and physical security measures to safeguard your personal data from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">4. Cookies and Web Analytics</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              Our website uses basic cookies to improve user experience, remember your preferences, and analyze web traffic anonymously. You can configure your browser to reject cookies, though some features of the site may function differently.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-walnut font-light">5. Contact Information</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-cream/50 p-4 border border-walnut/5 text-sm text-charcoal/80 space-y-1">
              <p>Please submit your inquiry through the contact form on our website, and our team will get in touch with you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
