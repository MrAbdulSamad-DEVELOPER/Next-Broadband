"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is the difference between Fiber Optic and Wireless Internet?",
      answer:
        "Fiber Optic uses dedicated glass strands to transmit data at light speed, providing ultra-low latency and peak bandwidth stability. Wireless Internet uses high-gain directional antennas to beam high-speed internet to premises where physical fiber cabling is not yet deployed.",
    },
    {
      question: "How do I check pricing and installation charges?",
      answer:
        "Because installation fees depend on your physical distance to our nearest optical distribution box or wireless tower, we provide exact pricing directly via WhatsApp. Simply click any package or coverage button to get a direct quote within minutes.",
    },
    {
      question: "How quickly can Next Broadband install my connection?",
      answer:
        "Once your location is verified on WhatsApp and you select a package, our local field team typically schedules installation within 24 to 48 hours, weather and local access permitting.",
    },
    {
      question: "Which package speed should I choose for my home or business?",
      answer:
        "For basic browsing and light messaging, 6 to 10 Mbps works well. For multi-device households streaming HD video, 12 to 20 Mbps offers an ideal balance. For 4K streaming, gaming, or commercial offices with multiple users, 25 to 30 Mbps is recommended.",
    },
    {
      question: "How do I reach customer support if I experience connectivity issues?",
      answer:
        "You can message our dispatch team directly on WhatsApp at 03491988224. Our site incharge and engineers handle support requests directly without automated call center barriers.",
    },
    {
      question: "Can I upgrade or downgrade my speed tier in the future?",
      answer:
        "Yes, you can adjust your package tier at any billing cycle. Just message us on WhatsApp and our network administrators will adjust your bandwidth profile remotely.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#94A3B8]">
            Everything you need to know about our connectivity, installation, and support.
          </p>
        </div>

        {/* Clickable Accordion List with Clean Plus/Minus Icons */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-[#111827] border transition-all overflow-hidden ${
                  isOpen
                    ? "border-[#00E5FF]/50 shadow-lg shadow-[#00E5FF]/10"
                    : "border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#F8FAFC] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                      isOpen
                        ? "bg-[#00E5FF] text-[#0A0F1C] shadow-md shadow-[#00E5FF]/30"
                        : "bg-[#0A0F1C] border border-white/[0.08] text-[#94A3B8]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-white/[0.08] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
