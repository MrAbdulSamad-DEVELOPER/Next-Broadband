"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
          className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white shadow-xl shadow-emerald-900/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="text-sm font-bold tracking-wide">
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
        <div className="bg-white/95 backdrop-blur-xl border-t border-[#E2E8F0] p-3 px-4 flex items-center justify-between gap-3 shadow-lg">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#0F172A] font-heading uppercase tracking-wider">
              Next Broadband
            </span>
            <span className="text-[11px] text-[#1D4ED8] font-mono font-medium">
              0349 1988224
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+923491988224"
              className="p-2.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A]"
              aria-label="Call Helpline"
            >
              <Phone className="w-4 h-4 text-[#1D4ED8]" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-md shadow-emerald-700/25"
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
