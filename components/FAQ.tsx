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
        "Fiber Optic uses dedicated glass strands to transmit data at light speed, providing ultra-low latency, maximum speed consistency, and peak bandwidth stability. Wireless Internet uses high-gain directional antennas to beam high-speed internet to premises where physical fiber cabling is not yet deployed or is undergoing expansion.",
    },
    {
      question: "How do I check pricing and installation charges?",
      answer:
        "Pricing and installation charges depend on your physical location and the feasibility of fiber cable distance or wireless antenna alignment. By clicking any WhatsApp button on our website, you connect directly with our dispatch team, who will instantly share an exact, transparent quote with zero hidden charges.",
    },
    {
      question: "How quickly can Next Broadband install my connection?",
      answer:
        "Once your location coverage is verified on WhatsApp and your preferred package is confirmed, our local field engineers typically schedule and complete your wireless or optical fiber installation within 24 to 48 hours, weather and local site access permitting.",
    },
    {
      question: "Which package speed should I choose for my home or business?",
      answer:
        "For light use such as social browsing, messaging, and 1–3 phones, 6 to 8 Mbps is sufficient. For multi-device households streaming HD video and remote work Zoom calls, 10 to 16 Mbps offers an optimal balance. For competitive online gaming, 4K streaming, or commercial offices with heavy multi-user workloads, 20 to 30 Mbps is strongly recommended.",
    },
    {
      question: "How do I reach customer support if I experience connectivity issues?",
      answer:
        "Clients have direct WhatsApp and phone access to our site incharge and field engineers at 0349 1988224. There are zero robotic IVR call center menus—you communicate directly with our technical personnel who manage the physical fiber nodes and wireless links.",
    },
    {
      question: "Can I upgrade or downgrade my speed tier in the future?",
      answer:
        "Yes, absolutely. We offer flexible speed adjustments anytime without penalties or hidden lock-ins. Simply send a quick message to our team on WhatsApp at 0349 1988224, and our network administrators will adjust your bandwidth profile remotely for your next billing cycle.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#94A3B8]">
            Everything you need to know about our connectivity, installation, packages, and support.
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
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-[#F8FAFC] pr-4">
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
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm lg:text-base text-[#94A3B8] leading-relaxed border-t border-white/[0.08] animate-in fade-in duration-200">
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
