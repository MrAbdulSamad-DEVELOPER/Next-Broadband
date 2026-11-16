"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080C16] border-t border-white/[0.08] pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info & Leadership Credentials */}
          <div className="lg:col-span-5">
            <Link href="#home" className="flex items-center gap-3 group mb-4">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Next Broadband Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-lg text-[#F8FAFC]">
                  NEXT BROADBAND
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#00E5FF] font-mono">
                  Premium ISP
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm mb-6">
              High-speed optical fiber and wireless internet solutions delivering stable,
              low-latency connectivity for homes, commercial shops, and business offices.
            </p>

            <div className="space-y-2 text-xs font-mono p-3.5 rounded-xl bg-[#111827] border border-white/[0.08] max-w-sm">
              <div className="text-[#94A3B8]">
                CEO: <span className="text-[#F8FAFC] font-bold">M. Jahangir</span>
              </div>
              <div className="text-[#94A3B8]">
                Site Incharge: <span className="text-[#F8FAFC] font-bold">Sher Muhammad</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link href="#home" className="hover:text-[#00E5FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#00E5FF] transition-colors">
                  Internet Technologies
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-[#00E5FF] transition-colors">
                  Internet Packages
                </Link>
              </li>
              <li>
                <Link href="#coverage" className="hover:text-[#00E5FF] transition-colors">
                  Check Coverage
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#00E5FF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#00E5FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-4 font-mono">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href="https://wa.me/923491988224"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111827] border border-white/[0.08] hover:border-[#25D366]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[11px] text-[#94A3B8] font-mono">WhatsApp Support</div>
                  <div className="text-[#F8FAFC] font-bold group-hover:text-[#25D366] transition-colors">
                    0349 1988224
                  </div>
                </div>
              </a>

              <a
                href="tel:+923491988224"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111827] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#00E5FF]/15 flex items-center justify-center text-[#00E5FF] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-[#94A3B8] font-mono">Direct Helpline</div>
                  <div className="text-[#F8FAFC] font-bold group-hover:text-[#00E5FF] transition-colors">
                    +92 349 1988224
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Next Broadband. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#00E5FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
