"use client";

import React, { useState } from "react";
import { MessageCircle, Check, Sparkles, Smartphone, Users, Gamepad2, Zap } from "lucide-react";

interface PackagePlan {
  speed: string;
  speedNumber: number;
  featured?: boolean;
  idealFor: string;
  specs: string[];
}

export default function Packages() {
  const [activeTab, setActiveTab] = useState<"all" | "fiber" | "wireless">("all");

  const speedGuides = [
    {
      title: "Light Use",
      usage: "1–3 Mobiles, Browsing & WhatsApp",
      recommended: "6–8 Mbps",
      icon: Smartphone,
      accent: "border-[#E2E8F0] hover:border-[#CBD5E1]",
    },
    {
      title: "Family & Remote Work",
      usage: "HD Streaming, Zoom & Multiple Phones",
      recommended: "10–16 Mbps",
      icon: Users,
      accent: "border-[#1D4ED8]/40 ring-1 ring-[#1D4ED8]/20 bg-[#EFF6FF]/40",
      featured: true,
    },
    {
      title: "Heavy Gaming & Offices",
      usage: "4K Streaming, Low Latency & Multi-Device",
      recommended: "20–30 Mbps",
      icon: Gamepad2,
      accent: "border-[#E2E8F0] hover:border-[#CBD5E1]",
    },
  ];

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
    <section id="packages" className="relative py-20 sm:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 shadow-sm">
            Official Speed Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase font-heading">
            Internet Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] font-sans">
            Explore high-speed home WiFi packages and commercial broadband solutions across Pakistan. Select your preferred speed tier with direct WhatsApp assistance.
          </p>

          {/* Clean, Interactive, Touch-Friendly Filter Tabs */}
          <div className="inline-flex flex-wrap sm:flex-nowrap justify-center items-center p-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mt-8 shadow-inner max-w-full">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 min-h-[44px] flex items-center justify-center ${
                activeTab === "all"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setActiveTab("fiber")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 min-h-[44px] flex items-center justify-center ${
                activeTab === "fiber"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              Fiber Optic
            </button>
            <button
              onClick={() => setActiveTab("wireless")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 min-h-[44px] flex items-center justify-center ${
                activeTab === "wireless"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              Wireless
            </button>
          </div>
        </div>

        {/* 3-Card "Help Me Choose" Quick Speed Guide */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1D4ED8] font-bold">
              Speed Recommendation Guide
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mt-1">
              Need Help Deciding? Choose By Usage
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {speedGuides.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-2xl bg-[#FAFAFA] border ${guide.accent} transition-all duration-300 hover:bg-white hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.08)]`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1D4ED8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#DBEAFE] font-display tabular-nums">
                      {guide.recommended}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#0F172A] font-heading mb-1.5">
                    {guide.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
                    {guide.usage}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8 Packages Grid: 4 columns desktop, 2 columns tablet, 1 column mobile */}
        {/* pt-5 provides clearance so the 20 Mbps top badge never clips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-5">
          {packages.map((pkg) => {
            const isFeatured = pkg.featured;
            return (
              <div
                key={pkg.speed}
                className={`relative h-full rounded-[20px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#0F172A] text-white border-[1.5px] border-[#2563EB] shadow-[0_16px_36px_-8px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_45px_-8px_rgba(37,99,235,0.35)]"
                    : "bg-white text-[#0F172A] border border-[#E2E8F0] shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:border-[#CBD5E1]"
                }`}
              >
                {/* Prominent Featured Tier Badge on 20 Mbps with clearance */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2563EB] text-[11px] font-extrabold text-white uppercase tracking-wider shadow-md shadow-blue-500/30 flex items-center gap-1.5 whitespace-nowrap z-10">
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular Tier</span>
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  {/* Single-Line Speed Typography with HIGH SPEED Pill */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                      <span
                        className={`font-display font-extrabold text-[2.25rem] leading-none tracking-tight ${
                          isFeatured ? "text-white" : "text-[#0F172A]"
                        }`}
                      >
                        {pkg.speedNumber}
                      </span>
                      <span
                        className={`text-[1.1rem] font-bold font-sans leading-none ${
                          isFeatured ? "text-slate-300" : "text-[#64748B]"
                        }`}
                      >
                        Mbps
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap flex-shrink-0 ${
                        isFeatured
                          ? "bg-blue-500/20 text-[#60A5FA] border border-blue-500/30"
                          : "bg-[#EFF6FF] text-[#1D4ED8] border border-[#DBEAFE]"
                      }`}
                    >
                      High Speed
                    </span>
                  </div>

                  {/* Subtitle / Ideal For */}
                  <div
                    className={`text-xs font-medium mb-2 min-h-[32px] ${
                      isFeatured ? "text-slate-300" : "text-[#64748B]"
                    }`}
                  >
                    {pkg.idealFor}
                  </div>

                  {/* Subtle Muted Highlight (Eliminated box-in-box) */}
                  <div
                    className={`flex items-center gap-1.5 text-xs font-medium mb-5 ${
                      isFeatured ? "text-blue-300" : "text-[#1D4ED8]"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Fast Setup • Direct Engineer Support</span>
                  </div>

                  {/* Clean Horizontal Divider & Minimalist Pricing Typography */}
                  <div
                    className={`pt-4 pb-4 mb-5 border-t ${
                      isFeatured ? "border-white/10" : "border-[#E2E8F0]"
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider block font-semibold mb-0.5 ${
                            isFeatured ? "text-slate-400" : "text-[#64748B]"
                          }`}
                        >
                          Pricing
                        </span>
                        <span
                          className={`text-sm sm:text-base font-extrabold tracking-tight uppercase font-heading ${
                            isFeatured ? "text-white" : "text-[#0F172A]"
                          }`}
                        >
                          CONTACT FOR PRICE
                        </span>
                      </div>
                      <span
                        className={`text-[11px] font-sans font-medium ${
                          isFeatured ? "text-slate-400" : "text-[#64748B]"
                        }`}
                      >
                        Monthly & Setup Rates
                      </span>
                    </div>
                  </div>

                  {/* Specs List with Flex-1 to push CTA to identical baseline */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {pkg.specs.map((spec, sIdx) => (
                      <li
                        key={sIdx}
                        className={`flex items-start gap-2 text-xs sm:text-[13px] leading-snug ${
                          isFeatured ? "text-slate-200" : "text-[#475569]"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isFeatured ? "text-[#60A5FA]" : "text-[#1D4ED8]"
                          }`}
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sleek Pill Action Button Aligned at Bottom */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 min-h-[46px] transform hover:scale-[1.02] active:scale-[0.98] ${
                      isFeatured
                        ? "bg-[#059669] hover:bg-[#047857] text-white shadow-lg shadow-emerald-900/40"
                        : "bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-sm"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
                    <span>Inquire Package</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#64748B] font-sans max-w-xl mx-auto px-4">
          Need custom commercial bandwidth or dedicated corporate lines? Contact our technical team
          directly via WhatsApp for immediate assessment.
        </div>
      </div>
    </section>
  );
}
