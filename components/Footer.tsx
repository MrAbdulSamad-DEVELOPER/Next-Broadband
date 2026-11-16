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
    <footer className="relative bg-[#090D16] border-t border-white/10 pt-16 pb-32 sm:pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          {/* Brand Info & Leadership Credentials */}
          <div className="lg:col-span-5">
            <Link href="/#home" className="flex items-center gap-3 group mb-5 min-h-[44px]">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Next Broadband Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold tracking-tight text-base sm:text-lg text-white">
                  NEXT BROADBAND
                </span>
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-mono font-medium">
                  Enterprise & Home ISP
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-sm mb-6">
              High-speed optical fiber and wireless internet solutions delivering stable,
              low-latency connectivity for homes, commercial shops, and business offices.
            </p>

            <div className="space-y-2 text-xs font-mono p-4 rounded-2xl bg-white/[0.04] border border-white/10 max-w-sm">
              <div className="text-slate-400">
                CEO: <span className="text-white font-bold">M. Jahangir</span>
              </div>
              <div className="text-slate-400">
                Site Incharge: <span className="text-white font-bold">Sher Muhammad</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-sans">
              <li>
                <Link href="/#home" className="hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center">
                  Internet Technologies
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center">
                  Internet Packages
                </Link>
              </li>
              <li>
                <Link href="/#coverage" className="hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center">
                  Check Coverage
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center">
                  Guides & Blog
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors py-1 inline-block min-h-[32px] flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 font-mono">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/923491988224"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 transition-colors group min-h-[48px]"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">WhatsApp Support</div>
                  <div className="text-white font-bold group-hover:text-emerald-400 transition-colors">
                    0349 1988224
                  </div>
                </div>
              </a>

              <a
                href="tel:+923491988224"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/40 transition-colors group min-h-[48px]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Direct Helpline</div>
                  <div className="text-white font-bold group-hover:text-blue-400 transition-colors">
                    +92 349 1988224
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Next Broadband. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors min-h-[40px] px-4 py-2 rounded-full bg-white/[0.05] border border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
