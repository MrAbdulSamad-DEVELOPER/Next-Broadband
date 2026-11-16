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
    <section className="relative py-20 sm:py-28 bg-[#FAFAFA] border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] font-sans">
            Everything you need to know about our connectivity, installation, packages, and support.
          </p>
        </div>

        {/* Clean Enterprise Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white border transition-all overflow-hidden ${
                  isOpen
                    ? "border-[#1D4ED8] shadow-[0_10px_30px_-10px_rgba(29,78,216,0.12)]"
                    : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none min-h-[60px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] font-heading pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                      isOpen
                        ? "bg-[#1D4ED8] text-white shadow-sm"
                        : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#475569] font-sans leading-relaxed border-t border-[#F1F5F9] animate-in fade-in-50 duration-200">
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
