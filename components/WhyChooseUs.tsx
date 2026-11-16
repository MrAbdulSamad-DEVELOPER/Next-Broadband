import React from "react";
import { Cpu, Home, Shield, Headphones, Check } from "lucide-react";

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
    <section className="relative py-20 sm:py-28 bg-[#FAFAFA] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 shadow-sm">
            The Next Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase font-heading">
            Why Choose Next Broadband
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] font-sans">
            Built on engineering discipline, dependable hardware, and direct support.
          </p>
        </div>

        {/* Bento Grid Layout (4 Feature Cards with Asymmetric Span) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className={`${pt.span} p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 group relative flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] p-3 flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0] font-semibold">
                      {pt.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-heading mb-3 group-hover:text-[#1D4ED8] transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed mb-6">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E2E8F0] flex items-center gap-2 text-xs sm:text-sm text-[#1D4ED8] font-mono font-medium">
                  <Check className="w-4 h-4 flex-shrink-0" />
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
