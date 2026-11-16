"use client";

import React, { useState } from "react";
import { MapPin, Search, MessageCircle, ShieldCheck, Tag } from "lucide-react";

export default function Coverage() {
  const [area, setArea] = useState("");

  const activeDeploymentZones = [
    "Residential Sectors",
    "Main Commercial Markets",
    "Corporate Offices",
    "Surrounding Towns",
  ];

  const handleAreaClick = (zone: string) => {
    setArea(zone);
  };

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
    <section id="coverage" className="relative py-16 sm:py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlighted, Centered Banner Card */}
        <div className="relative rounded-3xl bg-[#111827] border-2 border-[#00E5FF]/40 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-2xl shadow-black/80">
          {/* Ambient Backlight with Safe Overflow */}
          <div className="absolute -top-24 -right-24 w-60 sm:w-80 h-60 sm:h-80 bg-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 sm:w-80 h-60 sm:h-80 bg-[#00E5FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0F1C] border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Live Coverage Checker</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase mb-4 leading-tight">
              Is Next Broadband Available In Your Area?
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#94A3B8] mb-8 leading-relaxed">
              Enter your neighborhood, street, or sector to verify fiber optic and wireless
              connectivity directly with our dispatch team.
            </p>

            {/* Search Input + Check Availability Button */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-5">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#94A3B8]">
                  <Search className="w-5 h-5 text-[#00E5FF] flex-shrink-0" />
                </div>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Enter your town, street or area name..."
                  className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-[#0A0F1C] border border-white/[0.12] focus:border-[#00E5FF] focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/30 text-sm sm:text-base text-[#F8FAFC] placeholder-[#94A3B8]/60 transition-all shadow-inner min-h-[48px]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-[#25D366]/30 border border-[#25D366]/50 transition-all flex-shrink-0 transform hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-white flex-shrink-0" />
                <span>Check Availability</span>
              </button>
            </form>

            {/* Clickable Active Deployment Zone Tags */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#94A3B8] font-mono uppercase tracking-wider mb-2.5">
                <Tag className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Active Deployment Zones:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {activeDeploymentZones.map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => handleAreaClick(zone)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#F8FAFC] bg-[#0A0F1C] hover:bg-[#152033] border border-white/[0.1] hover:border-[#00E5FF]/40 transition-colors"
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#94A3B8]/90">
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
