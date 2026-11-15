"use client";

import React from "react";
import { Zap, Radio, Building2, CheckCircle2, ArrowRight } from "lucide-react";

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
      accent: "from-electric-cyan/20 to-transparent",
      badgeColor: "text-electric-cyan bg-electric-cyan/10 border-electric-cyan/20",
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
      accent: "from-electric-blue/20 to-transparent",
      badgeColor: "text-electric-blue bg-electric-blue/10 border-electric-blue/20",
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
      accent: "from-[#43DFFF]/20 to-transparent",
      badgeColor: "text-white bg-white/10 border-white/20",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold text-electric-cyan uppercase tracking-wider mb-3">
            Internet Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Engineered For Every Need
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary">
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
                className="relative rounded-2xl bg-card border border-border hover:border-electric-cyan/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 group"
              >
                {/* Subtle Top Glow Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${srv.accent}`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-electric-cyan group-hover:scale-110 group-hover:border-electric-cyan/50 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${srv.badgeColor}`}
                    >
                      {srv.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-text-primary/90">
                        <CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <a
                    href={`https://wa.me/923491988224?text=${encodeURIComponent(
                      srv.whatsappMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-text-primary bg-secondary hover:bg-white/[0.08] border border-border hover:border-electric-cyan/30 transition-colors group/btn"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-electric-cyan transition-transform group-hover/btn:translate-x-1" />
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
