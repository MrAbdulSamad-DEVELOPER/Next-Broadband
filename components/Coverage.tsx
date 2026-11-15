"use client";

import React, { useState } from "react";
import { MapPin, Search, MessageCircle, ShieldCheck } from "lucide-react";

export default function Coverage() {
  const [area, setArea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryArea = area.trim() || "my location";
    const text = `Hello Next Broadband!

I would like to check internet service availability for my area:
Location / Area: ${queryArea}

Please let me know if fiber optic or wireless coverage is available and share installation details.`;

    const url = `https://wa.me/923491988224?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="coverage" className="relative py-24 bg-secondary/40 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-card border border-border p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-black/60">
          {/* Subtle Ambient Backlight */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-electric-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-electric-cyan uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Service Area Inquiry</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
              Is Next Broadband Available In Your Area?
            </h2>

            <p className="text-sm sm:text-base text-text-secondary mb-8">
              Enter your neighborhood, street, or sector to verify fiber optic and wireless
              connectivity with our dispatch team.
            </p>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Enter your town, street or area name..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/80 border border-border focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan text-sm text-white placeholder-text-secondary/60 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-electric-blue hover:bg-[#3459eb] shadow-lg shadow-electric-blue/25 border border-white/10 transition-all flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Check Availability</span>
              </button>
            </form>

            {/* Guarantee Note */}
            <div className="flex items-center justify-center gap-2 text-xs text-text-secondary/80">
              <ShieldCheck className="w-4 h-4 text-electric-cyan flex-shrink-0" />
              <span>
                Coverage is manually verified by our engineering team to guarantee optimal line-of-sight & signal stability.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
