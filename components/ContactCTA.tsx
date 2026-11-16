import React from "react";
import { MessageCircle, Phone, ArrowUpRight, Zap } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#090D16] bg-cta-glow text-white overflow-hidden border-t border-white/10">
      {/* Subtle Blue-Indigo Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-5 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-blue-400" />
          <span>Immediate Connection</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] uppercase mb-5 leading-tight font-heading">
          Ready To Get Connected?
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-sans mb-10 leading-relaxed">
          Reach out to Next Broadband today. Our team is available on WhatsApp to verify your
          premises, advise on the best speed tier, and arrange your quick installation.
        </p>

        {/* Dual Pill CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20ready%20to%20get%20connected.%20Please%20share%20package%20and%20coverage%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-90" />
          </a>

          <a
            href="tel:+923491988224"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>0349 1988224</span>
          </a>
        </div>

        <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">
          Direct Inquiries • Fast Field Response • No Call Center Automation
        </div>
      </div>
    </section>
  );
}
