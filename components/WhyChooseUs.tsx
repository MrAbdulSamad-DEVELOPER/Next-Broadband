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
    <section className="relative py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold text-electric-cyan uppercase tracking-wider mb-3">
            The Next Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Why Choose Next Broadband
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary">
            Built on engineering discipline, dependable hardware, and direct support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border hover:border-electric-cyan/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-electric-cyan mb-5 group-hover:scale-105 group-hover:border-electric-cyan/40 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-cyan transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
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
