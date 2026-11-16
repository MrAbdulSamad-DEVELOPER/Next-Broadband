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
    <section id="coverage" className="relative py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlighted, Centered Banner Card */}
        <div className="relative rounded-3xl bg-[#111827] border-2 border-[#00E5FF]/40 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-black/80">
          {/* Subtle Ambient Backlight */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0F1C] border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-5 shadow-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>Live Coverage Checker</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase mb-4 leading-tight">
              Is Next Broadband Available In Your Area?
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] mb-8 leading-relaxed">
              Enter your neighborhood, street, or sector to verify fiber optic and wireless
              connectivity directly with our dispatch team.
            </p>

            {/* Large, Clean Search Input + Bright Check Availability Button */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#94A3B8]">
                  <Search className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Enter your town, street or area name..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0A0F1C] border border-white/[0.12] focus:border-[#00E5FF] focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/30 text-sm sm:text-base text-[#F8FAFC] placeholder-[#94A3B8]/60 transition-all shadow-inner"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-[#25D366]/30 border border-[#25D366]/50 transition-all flex-shrink-0 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Check Availability</span>
              </button>
            </form>

            {/* Guarantee Note */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#94A3B8]/90">
              <ShieldCheck className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
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
