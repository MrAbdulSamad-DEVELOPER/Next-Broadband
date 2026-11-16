"use client";

import React from "react";
import { Cpu, Home, Shield, Headphones, Check, Sparkles, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Cpu,
      title: "Dual Fiber & Wireless Reach",
      badge: "Hybrid Core",
      description:
        "We combine optical fiber infrastructure with resilient long-range wireless links, ensuring connectivity even in challenging topologies.",
      highlight: "Continuous link redundancy across sectors",
      span: "lg:col-span-7",
    },
    {
      icon: Home,
      title: "Tailored Home & Office Setups",
      badge: "Premises Fit",
      description:
        "Every connection is configured according to your space, whether it's high-demand home streaming or multi-station business offices.",
      highlight: "Custom router & cabling placement",
      span: "lg:col-span-5",
    },
    {
      icon: Shield,
      title: "Simple & Transparent Tiers",
      badge: "Zero Hidden Fees",
      description:
        "Clear package speeds with straightforward selection. No hidden traps, no forced contracts, and direct human communication.",
      highlight: "Predictable monthly agreements",
      span: "lg:col-span-5",
    },
    {
      icon: Headphones,
      title: "Direct WhatsApp Technical Dispatch",
      badge: "Human Support",
      description:
        "No robotic call center menus. Reach our field engineers and dispatch coordinators directly on WhatsApp for prompt service.",
      highlight: "Direct coordination with site engineers",
      span: "lg:col-span-7",
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

        {/* Bento Grid Layout (4 Feature Cards with Asymmetric Span) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className={`${pt.span} p-8 rounded-3xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#0A0F1C] border border-white/[0.08] p-3 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 group-hover:border-[#00E5FF]/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                      {pt.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#00E5FF] transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs text-[#00E5FF] font-mono">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{pt.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
