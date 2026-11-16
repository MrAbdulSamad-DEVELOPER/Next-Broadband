"use client";

import React from "react";
import { Cpu, Home, Shield, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Cpu,
      title: "Dual Fiber & Wireless Reach",
      description:
        "We combine optical fiber infrastructure with resilient long-range wireless links, ensuring connectivity even in challenging topologies.",
    },
    {
      icon: Home,
      title: "Tailored Home & Office Setups",
      description:
        "Every connection is configured according to your space, whether it's high-demand home streaming or multi-station business offices.",
    },
    {
      icon: Shield,
      title: "Simple & Transparent Tiers",
      description:
        "Clear package speeds with straightforward selection. No hidden traps, no forced contracts, and direct human communication.",
    },
    {
      icon: Headphones,
      title: "Direct WhatsApp Technical Dispatch",
      description:
        "No robotic call center menus. Reach our field engineers and dispatch coordinators directly on WhatsApp for prompt service.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-3">
            The Next Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase">
            Why Choose Next Broadband
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Built on engineering discipline, dependable hardware, and direct support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A0F1C] border border-white/[0.08] flex items-center justify-center text-[#00E5FF] mb-5 group-hover:scale-105 group-hover:border-[#00E5FF]/40 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00E5FF] transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
