"use client";

import React from "react";
import { Zap, Radio, Building2, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const fiberFeatures = [
    "Consistent optical transmission",
    "Low-latency response times",
    "Symmetrical data stability",
    "Ideal for streaming & gaming",
  ];

  const wirelessFeatures = [
    "Rapid outdoor installation",
    "Dependable link availability",
    "Ideal for locations lacking fiber",
    "Robust weather-tested hardware",
  ];

  const businessFeatures = [
    "Multi-device traffic capacity",
    "Optimized for office workflows",
    "Priority technical dispatch",
    "Custom deployment layouts",
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#FAFAFA] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 shadow-sm">
            Internet Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase font-heading">
            Engineered For Every Need
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] font-sans">
            Next Broadband delivers robust connectivity options tailored to your location,
            usage volume, and operational requirements.
          </p>
        </div>

        {/* Structured Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Bento Item 1: Fiber Optic Internet (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:-translate-y-1 relative group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform duration-300">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border text-[#1D4ED8] bg-[#EFF6FF] border-[#DBEAFE] font-semibold">
                  Pure Optical Infrastructure
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading mb-3 group-hover:text-[#1D4ED8] transition-colors">
                Fiber Optic Internet
              </h3>

              <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed mb-6">
                High-performance optical fiber connectivity engineered for seamless home streaming, low-latency online gaming, video conferences, and heavy multi-device environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {fiberFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#E2E8F0]">
              <a
                href={`https://wa.me/923491988224?text=${encodeURIComponent(
                  "Hello Next Broadband! I am interested in your Fiber Optic Internet service. Please share details and availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0F172A] hover:bg-[#1E293B] shadow-sm transition-all min-h-[48px] group/btn"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Inquire Fiber on WhatsApp
                </span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Bento Item 2: Wireless Internet (Spans 5 columns on desktop) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] hover:-translate-y-1 relative group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform duration-300">
                  <Radio className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border text-[#1D4ED8] bg-[#EFF6FF] border-[#DBEAFE] font-semibold">
                  Long-Range Connectivity
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading mb-3 group-hover:text-[#1D4ED8] transition-colors">
                Wireless Internet
              </h3>

              <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed mb-6">
                Engineered wireless point-to-point internet solutions designed for areas where physical fiber cabling is restricted or undergoing expansion, ensuring continuous access.
              </p>

              <div className="space-y-3 mb-8">
                {wirelessFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#E2E8F0]">
              <a
                href={`https://wa.me/923491988224?text=${encodeURIComponent(
                  "Hello Next Broadband! I am interested in your Wireless Internet service. Please share details and availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-6 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0F172A] hover:bg-[#1E293B] shadow-sm transition-all min-h-[48px] group/btn"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Inquire Wireless on WhatsApp
                </span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Bento Item 3: Business Connectivity (Full width banner card) */}
          <div className="lg:col-span-12 rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-10 lg:p-12 transition-all duration-300 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] p-3 flex items-center justify-center text-[#1D4ED8]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#1D4ED8] font-bold block">
                      Commercial & Office Grade
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading group-hover:text-[#1D4ED8] transition-colors">
                      Business Connectivity
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed mb-6 max-w-2xl">
                  Tailored internet infrastructure for corporate offices, commercial shops, software houses, and enterprises requiring dedicated uptime and direct support lines.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                  {businessFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href={`https://wa.me/923491988224?text=${encodeURIComponent(
                    "Hello Next Broadband! I am inquiring about Business Connectivity for our office/commercial premises. Please share available packages."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-lg shadow-emerald-700/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire Business Plans</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
