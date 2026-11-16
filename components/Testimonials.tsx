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
    <section className="relative py-20 sm:py-28 bg-[#FAFAFA] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Customer Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase font-heading">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] font-sans">
            Real feedback from residential homes, competitive gamers, and local commercial businesses powered by Next Broadband.
          </p>
        </div>

        {/* 3-Column Responsive Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_12px_32px_-8px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#CBD5E1] group-hover:text-[#1D4ED8] transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-[#334155] font-sans leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                      {rev.name}
                    </span>
                    <CheckCircle className="w-4 h-4 text-[#059669] fill-[#059669]/10" />
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5 font-sans">
                    {rev.role}
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase font-semibold px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#1D4ED8]">
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
