"use client";

import React from "react";
import { MessageCircle, Phone, ArrowUpRight, Zap } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 bg-[#0A0F1C] border-t border-white/[0.08] overflow-hidden">
      {/* Soft Cyan Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>Immediate Connection</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight uppercase mb-6">
          Ready To Get Connected?
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#94A3B8] mb-10 leading-relaxed">
          Reach out to Next Broadband today. Our team is available on WhatsApp to verify your
          premises, advise on the best speed tier, and arrange your quick installation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20ready%20to%20get%20connected.%20Please%20share%20package%20and%20coverage%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-[#25D366]/25 border border-[#25D366]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-90" />
          </a>

          <a
            href="tel:+923491988224"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-[#F8FAFC] bg-[#111827] hover:bg-[#162032] border border-white/[0.08] hover:border-[#00E5FF]/40 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4 text-[#00E5FF]" />
            <span>0349 1988224</span>
          </a>
        </div>

        <div className="text-xs text-[#94A3B8]/70 uppercase tracking-widest font-mono">
          Direct Inquiries • Fast Field Response • No Call Center Automation
        </div>
      </div>
    </section>
  );
}
