"use client";

import React from "react";
import { Zap, Radio, Building2, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

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
    <section id="services" className="relative py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-3">
            Internet Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase">
            Engineered For Every Need
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Next Broadband delivers robust connectivity options tailored to your location,
            usage volume, and operational requirements.
          </p>
        </div>

        {/* Structured Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Item 1: Fiber Optic Internet (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0A0F1C] border border-white/[0.08] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF]/50 transition-all duration-300">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30">
                  Pure Optical Infrastructure
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#00E5FF] transition-colors">
                Fiber Optic Internet
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                High-performance optical fiber connectivity engineered for seamless home streaming, low-latency online gaming, video conferences, and heavy multi-device environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {fiberFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F8FAFC]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href={`https://wa.me/923491988224?text=${encodeURIComponent(
                  "Hello Next Broadband! I am interested in your Fiber Optic Internet service. Please share details and availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/20 transition-all group/btn"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Inquire on WhatsApp
                </span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Bento Item 2: Wireless Internet (Spans 5 columns on desktop) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0A0F1C] border border-white/[0.08] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF]/50 transition-all duration-300">
                  <Radio className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30">
                  Long-Range Connectivity
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#00E5FF] transition-colors">
                Wireless Internet
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                Engineered wireless point-to-point internet solutions designed for areas where physical fiber cabling is restricted or undergoing expansion, ensuring continuous access.
              </p>

              <div className="space-y-2.5 mb-8">
                {wirelessFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F8FAFC]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href={`https://wa.me/923491988224?text=${encodeURIComponent(
                  "Hello Next Broadband! I am interested in your Wireless Internet service. Please share details and availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/20 transition-all group/btn"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Inquire on WhatsApp
                </span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Bento Item 3: Business Connectivity (Full width banner card) */}
          <div className="lg:col-span-12 rounded-3xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A0F1C] border border-white/[0.08] flex items-center justify-center text-[#00E5FF]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E5FF] block">
                      Commercial & Office Grade
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                      Business Connectivity
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 max-w-2xl">
                  Tailored internet infrastructure for corporate offices, commercial shops, software houses, and enterprises requiring dedicated uptime and direct support lines.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {businessFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F8FAFC]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
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
