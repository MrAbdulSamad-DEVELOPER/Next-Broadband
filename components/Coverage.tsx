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
    <section id="coverage" className="relative py-20 sm:py-28 bg-[#FAFAFA] border-t border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sleek Elevated Floating Card */}
        <div className="relative rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)]">
          {/* Subtle background tint */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Live Coverage Checker</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase mb-4 leading-tight font-heading">
              Is Next Broadband Available In Your Area?
            </h2>

            <p className="text-sm sm:text-base text-[#475569] font-sans mb-8 leading-relaxed">
              Enter your neighborhood, street, or sector to verify fiber optic and wireless
              connectivity directly with our dispatch team.
            </p>

            {/* Unified Pill-Shaped Search Bar + Integrated Button */}
            <form onSubmit={handleSubmit} className="mb-6 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-2xl sm:rounded-full bg-[#F8FAFC] border border-[#CBD5E1] shadow-inner focus-within:border-[#1D4ED8] focus-within:ring-2 focus-within:ring-[#1D4ED8]/20 transition-all">
                <div className="relative flex-1 flex items-center pl-3">
                  <Search className="w-5 h-5 text-[#64748B] flex-shrink-0 mr-2" />
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Enter your town, street or area name..."
                    className="w-full bg-transparent py-2.5 sm:py-3 text-sm sm:text-base text-[#0F172A] placeholder-[#94A3B8] focus:outline-none min-h-[44px]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-full font-bold text-xs sm:text-sm text-white bg-[#059669] hover:bg-[#047857] shadow-md shadow-emerald-700/25 transition-all flex-shrink-0 min-h-[46px] transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
                  <span>Check Availability</span>
                </button>
              </div>
            </form>

            {/* Clickable Active Deployment Zone Tags */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B] font-mono uppercase tracking-wider mb-3">
                <Tag className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Active Deployment Zones:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {activeDeploymentZones.map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => handleAreaClick(zone)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#334155] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#E2E8F0] transition-colors"
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#64748B] font-sans">
              <ShieldCheck className="w-4 h-4 text-[#059669] flex-shrink-0" />
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
