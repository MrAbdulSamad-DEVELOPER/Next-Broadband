"use client";

import React, { useState } from "react";
import { MessageCircle, Check, Zap, Sparkles } from "lucide-react";

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
    <section id="packages" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-card border border-border text-xs font-semibold text-electric-cyan uppercase tracking-wider mb-3">
            Official Speed Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Internet Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary">
            Select your preferred speed tier. All packages are deployed across our high-reliability
            network with direct WhatsApp assistance.
          </p>

          {/* Connection Type Filters */}
          <div className="inline-flex items-center p-1.5 rounded-xl bg-card border border-border mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-electric-blue text-white shadow-md shadow-electric-blue/30"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setActiveTab("fiber")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "fiber"
                  ? "bg-electric-blue text-white shadow-md shadow-electric-blue/30"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              Fiber Optic
            </button>
            <button
              onClick={() => setActiveTab("wireless")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "wireless"
                  ? "bg-electric-blue text-white shadow-md shadow-electric-blue/30"
                  : "text-text-secondary hover:text-white"
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
                    ? "bg-[#142033] border-2 border-electric-cyan/70 shadow-2xl shadow-electric-cyan/10 transform lg:-translate-y-2"
                    : "bg-card border border-border hover:border-electric-cyan/40 hover:bg-[#131d2e] shadow-lg shadow-black/40"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-electric-blue to-electric-cyan text-[11px] font-bold text-white uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured Tier</span>
                  </div>
                )}

                <div>
                  {/* Speed Header */}
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {pkg.speed}
                    </span>
                    <span className="text-xs font-mono text-electric-cyan px-2 py-0.5 rounded bg-electric-cyan/10 border border-electric-cyan/20">
                      High Speed
                    </span>
                  </div>

                  <div className="text-xs text-text-secondary font-medium mb-5 min-h-[32px]">
                    {pkg.idealFor}
                  </div>

                  {/* Pricing Label: CONTACT FOR PRICE */}
                  <div className="p-3.5 rounded-xl bg-background/80 border border-border/80 mb-6 text-center">
                    <span className="text-xs uppercase tracking-wider text-text-secondary block font-mono">
                      Pricing
                    </span>
                    <span className="text-sm font-bold text-white tracking-wider uppercase text-gradient-cyan">
                      CONTACT FOR PRICE
                    </span>
                  </div>

                  {/* Package Specs */}
                  <ul className="space-y-2.5 mb-8">
                    {pkg.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-text-secondary">
                        <Check className="w-3.5 h-3.5 text-electric-cyan mt-0.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isFeatured
                        ? "bg-gradient-to-r from-electric-blue to-electric-cyan text-white hover:opacity-95 shadow-lg shadow-electric-cyan/20"
                        : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-electric-cyan/40"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Inquire Package</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note below packages */}
        <div className="mt-12 text-center text-xs text-text-secondary max-w-xl mx-auto">
          Need custom commercial bandwidth or dedicated corporate lines? Contact our technical team
          directly via WhatsApp for immediate assessment.
        </div>
      </div>
    </section>
  );
}
