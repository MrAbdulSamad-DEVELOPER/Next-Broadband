"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after slight scroll
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20interested%20in%20a%20new%20internet%20connection.%20Please%20share%20package%20and%20coverage%20details.";

  return (
    <>
      {/* Sleek Floating WhatsApp Button at Bottom-Right on Desktop */}
      <aside
        aria-label="Contact options"
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 hidden sm:block ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/35 border border-[#25D366]/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="text-sm font-extrabold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Slim Sticky Bottom WhatsApp Inquiry Bar on Mobile Devices */}
      <aside
        aria-label="Mobile quick contact"
        className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-[#0A0F1C]/95 backdrop-blur-xl border-t border-white/[0.12] p-3 px-4 flex items-center justify-between gap-3 shadow-2xl">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider">
              Next Broadband
            </span>
            <span className="text-[11px] text-[#00E5FF] font-mono">
              0349 1988224
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+923491988224"
              className="p-2.5 rounded-xl bg-[#111827] border border-white/[0.08] text-[#F8FAFC]"
              aria-label="Call Helpline"
            >
              <Phone className="w-4 h-4 text-[#00E5FF]" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/30 border border-[#25D366]/40"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
