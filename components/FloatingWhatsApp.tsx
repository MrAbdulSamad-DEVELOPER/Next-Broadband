"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after initial scroll
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
      {/* Floating Desktop Button */}
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
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wide">
            Chat with us
          </span>
        </a>
      </aside>

      {/* Sticky Mobile Bottom CTA Bar */}
      <aside
        aria-label="Mobile quick contact"
        className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-[#07090E]/95 backdrop-blur-xl border-t border-border p-3 px-4 flex items-center justify-between gap-3 shadow-2xl">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Next Broadband
            </span>
            <span className="text-[11px] text-text-secondary font-mono">
              0349 1988224
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-md shadow-[#25D366]/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
