"use client";

import React from "react";
import { Zap, Radio, Building2, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "fiber",
      icon: Zap,
      title: "Fiber Optic Internet",
      subtitle: "Pure Optical Infrastructure",
      description:
        "High-performance optical fiber connectivity engineered for seamless home streaming, low-latency online gaming, video conferences, and heavy multi-device environments.",
      features: [
        "Consistent optical transmission",
        "Low-latency response times",
        "Symmetrical data stability",
        "Ideal for streaming & gaming",
      ],
      whatsappMsg:
        "Hello Next Broadband! I am interested in your Fiber Optic Internet service. Please share details and availability.",
      accent: "from-[#00E5FF]/30 to-transparent",
      badgeColor: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30",
    },
    {
      id: "wireless",
      icon: Radio,
      title: "Wireless Internet",
      subtitle: "Long-Range Connectivity",
      description:
        "Engineered wireless point-to-point internet solutions designed for areas where physical fiber cabling is restricted or undergoing expansion, ensuring continuous access.",
      features: [
        "Rapid outdoor installation",
        "Dependable link availability",
        "Ideal for locations lacking fiber",
        "Robust weather-tested hardware",
      ],
      whatsappMsg:
        "Hello Next Broadband! I am interested in your Wireless Internet service. Please share details and availability.",
      accent: "from-[#00E5FF]/30 to-transparent",
      badgeColor: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30",
    },
    {
      id: "business",
      icon: Building2,
      title: "Business Connectivity",
      subtitle: "Commercial & Office Grade",
      description:
        "Tailored internet infrastructure for corporate offices, commercial shops, software houses, and enterprises requiring dedicated uptime and direct support lines.",
      features: [
        "Multi-device traffic capacity",
        "Optimized for office workflows",
        "Priority technical dispatch",
        "Custom deployment layouts",
      ],
      whatsappMsg:
        "Hello Next Broadband! I am inquiring about Business Connectivity for our office/commercial premises. Please share available packages.",
      accent: "from-[#00E5FF]/30 to-transparent",
      badgeColor: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30",
    },
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

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="relative rounded-2xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 group"
              >
                {/* Subtle Top Glow Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${srv.accent}`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0F1C] border border-white/[0.08] flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:border-[#00E5FF]/50 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${srv.badgeColor}`}
                    >
                      {srv.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#00E5FF] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[#F8FAFC]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <a
                    href={`https://wa.me/923491988224?text=${encodeURIComponent(
                      srv.whatsappMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/20 transition-all group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 fill-white" />
                      Inquire on WhatsApp
                    </span>
                    <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
