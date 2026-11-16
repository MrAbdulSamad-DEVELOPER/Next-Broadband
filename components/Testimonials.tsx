"use client";

import React from "react";
import { Star, MessageSquareQuote, CheckCircle, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Tariq Mehmood",
      role: "Home Fiber Subscriber (Family Plan)",
      quote:
        "We switched our entire household to Next Broadband's Fiber connection. Even with four smartphones connected and the living room TV streaming 4K Netflix simultaneously, there is zero buffering or lag. The connection stability has been rock solid.",
      rating: 5,
      type: "Home Internet",
    },
    {
      name: "Hamza Raza",
      role: "Esports Gamer & Heavy Streamer",
      quote:
        "As an online gamer, packet loss and sudden ping spikes are complete dealbreakers. On Next Broadband's Fiber Optic, I consistently get single-digit latency (<5ms) with zero jitter. Easily the most reliable ISP performance in our sector.",
      rating: 5,
      type: "Fiber Optic",
    },
    {
      name: "Bilal Aslam",
      role: "Commercial Retail & Office Manager",
      quote:
        "Our business location needed high-speed connectivity where physical cabling couldn't immediately reach. Next Broadband dispatched their engineers and completed the point-to-point wireless setup within 24 hours. Their WhatsApp support response is genuinely instant.",
      rating: 5,
      type: "Wireless Business",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Customer Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase">
            What Our Clients Say
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#94A3B8]">
            Real feedback from residential homes, competitive gamers, and local commercial businesses powered by Next Broadband.
          </p>
        </div>

        {/* 3-Column Responsive Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl shadow-black/40 group"
            >
              <div>
                {/* Top Row: 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#00E5FF] text-[#00E5FF]"
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-white/10 group-hover:text-[#00E5FF]/30 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#F8FAFC]">
                      {rev.name}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] fill-[#00E5FF]/20" />
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">
                    {rev.role}
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0A0F1C] border border-white/[0.08] text-[#00E5FF]">
                  {rev.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
