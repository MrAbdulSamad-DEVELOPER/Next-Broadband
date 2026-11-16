"use client";

import React, { useState } from "react";
import { MessageCircle, Check, Sparkles } from "lucide-react";

interface PackagePlan {
  speed: string;
  speedNumber: number;
  featured?: boolean;
  idealFor: string;
  specs: string[];
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState<"all" | "fiber" | "wireless">("all");

  const packages: PackagePlan[] = [
    {
      speed: "6 Mbps",
      speedNumber: 6,
      idealFor: "Essential Browsing & Messaging",
      specs: [
        "Consistent daily connectivity",
        "WhatsApp, web browsing & email",
        "Standard definition streaming",
        "Fiber or Wireless deployment",
      ],
    },
    {
      speed: "8 Mbps",
      speedNumber: 8,
      idealFor: "Social Media & Everyday Use",
      specs: [
        "Smooth social media browsing",
        "Multi-person mobile usage",
        "HD video playback capability",
        "Fiber or Wireless deployment",
      ],
    },
    {
      speed: "10 Mbps",
      speedNumber: 10,
      idealFor: "Family Home Connectivity",
      specs: [
        "Reliable multi-user streaming",
        "Smooth video calls & online work",
        "Zero-buffer standard HD video",
        "Fiber or Wireless deployment",
      ],
    },
    {
      speed: "12 Mbps",
      speedNumber: 12,
      idealFor: "Home Streaming & Remote Work",
      specs: [
        "Comfortable remote working & Zoom",
        "Simultaneous multiple devices",
        "Low-latency daily operations",
        "Fiber or Wireless deployment",
      ],
    },
    {
      speed: "16 Mbps",
      speedNumber: 16,
      idealFor: "High-Definition Entertainment",
      specs: [
        "Full HD 1080p multiple streams",
        "Faster file downloads & uploads",
        "Online gaming stability",
        "Fiber or Wireless deployment",
      ],
    },
    {
      speed: "20 Mbps",
      speedNumber: 20,
      featured: true,
      idealFor: "Power Users & Heavy Streaming",
      specs: [
        "Flagship residential throughput",
        "4K Ultra HD streaming readiness",
        "Low latency for competitive gaming",
        "Multi-screen family support",
      ],
    },
    {
      speed: "25 Mbps",
      speedNumber: 25,
      idealFor: "Commercial Shops & Smart Homes",
      specs: [
        "High bandwidth multi-client demand",
        "Cloud backups & large file transfers",
        "Smart home & surveillance cameras",
        "Fiber or Wireless deployment",
      ],
    },
    {
      speed: "30 Mbps",
      speedNumber: 30,
      idealFor: "Offices & Maximum Performance",
      specs: [
        "Maximum speed tier available",
        "Heavy office & workstation workload",
        "Instant transfers & conference rooms",
        "Fiber or Wireless deployment",
      ],
    },
  ];

  const getConnectionName = () => {
    if (activeTab === "fiber") return "Fiber Optic";
    if (activeTab === "wireless") return "Wireless Internet";
    return "Fiber Optic / Wireless";
  };

  const getWhatsAppUrl = (pkg: PackagePlan) => {
    const connectionType = getConnectionName();
    const text = `Hello Next Broadband!

I am interested in a new internet connection.

Connection Type: ${connectionType}
Package: ${pkg.speed}
Pricing: Please share package price.

Please confirm availability and installation details.`;

    return `https://wa.me/923491988224?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="relative py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-3">
            Official Speed Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase">
            Internet Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Select your preferred speed tier. All packages are deployed across our high-reliability
            network with direct WhatsApp assistance.
          </p>

          {/* Connection Type Filters with Electric Fiber Cyan active highlights */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-[#111827] border border-white/[0.08] mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#00E5FF] text-[#0A0F1C] shadow-md shadow-[#00E5FF]/30"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setActiveTab("fiber")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "fiber"
                  ? "bg-[#00E5FF] text-[#0A0F1C] shadow-md shadow-[#00E5FF]/30"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              Fiber Optic
            </button>
            <button
              onClick={() => setActiveTab("wireless")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "wireless"
                  ? "bg-[#00E5FF] text-[#0A0F1C] shadow-md shadow-[#00E5FF]/30"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
            >
              Wireless
            </button>
          </div>
        </div>

        {/* 8 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => {
            const isFeatured = pkg.featured;
            return (
              <div
                key={pkg.speed}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#111827] via-[#16253b] to-[#111827] border-2 border-[#00E5FF] shadow-[0_0_35px_rgba(0,229,255,0.28)] transform lg:-translate-y-2"
                    : "bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/50 hover:bg-[#152033] shadow-lg shadow-black/40"
                }`}
              >
                {/* Prominent Featured Tier Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#00E5FF] text-[11px] font-extrabold text-[#0A0F1C] uppercase tracking-wider shadow-lg shadow-[#00E5FF]/40 flex items-center gap-1.5 border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 fill-[#0A0F1C]" />
                    <span>Featured Tier</span>
                  </div>
                )}

                <div>
                  {/* Speed Header with Electric Fiber Cyan (#00E5FF) Speed Numbers */}
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#00E5FF] drop-shadow-[0_0_12px_rgba(0,229,255,0.35)]">
                      {pkg.speed}
                    </span>
                    <span className="text-[11px] font-mono text-[#00E5FF] px-2 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                      High Speed
                    </span>
                  </div>

                  <div className="text-xs text-[#94A3B8] font-medium mb-5 min-h-[32px]">
                    {pkg.idealFor}
                  </div>

                  {/* Pricing Label: CONTACT FOR PRICE */}
                  <div className="p-3.5 rounded-xl bg-[#0A0F1C] border border-white/[0.08] mb-6 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block font-mono">
                      Pricing
                    </span>
                    <span className="text-sm font-extrabold text-[#F8FAFC] tracking-wider uppercase text-gradient-cyan">
                      CONTACT FOR PRICE
                    </span>
                  </div>

                  {/* Package Specs */}
                  <ul className="space-y-2.5 mb-8">
                    {pkg.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                        <Check className="w-3.5 h-3.5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                        <span className="text-[#94A3B8]">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp & Conversion Buttons: WhatsApp Emerald (#25D366) with crisp white bold text */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 border border-[#25D366]/40 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire Package</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note below packages */}
        <div className="mt-12 text-center text-xs text-[#94A3B8] max-w-xl mx-auto">
          Need custom commercial bandwidth or dedicated corporate lines? Contact our technical team
          directly via WhatsApp for immediate assessment.
        </div>
      </div>
    </section>
  );
}
