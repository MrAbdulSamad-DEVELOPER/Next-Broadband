"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05060A] border-t border-border/80 pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border/50">
          {/* Brand Info */}
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
                <span className="font-extrabold tracking-wider text-lg text-white">
                  NEXT BROADBAND
                </span>
                <span className="text-[10px] uppercase tracking-widest text-electric-cyan font-mono">
                  Premium ISP
                </span>
              </div>
            </Link>

            <p className="text-sm text-text-secondary leading-relaxed max-w-sm mb-6">
              High-speed optical fiber and wireless internet solutions delivering stable,
              low-latency connectivity for homes, commercial shops, and business offices.
            </p>

            <div className="space-y-1.5 text-xs text-text-secondary/80 font-mono">
              <div>CEO: <span className="text-white font-medium">M. Jahangir</span></div>
              <div>Site Incharge: <span className="text-white font-medium">Sher Muhammad</span></div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li>
                <Link href="#home" className="hover:text-electric-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-electric-cyan transition-colors">
                  Internet Technologies
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-electric-cyan transition-colors">
                  Internet Packages
                </Link>
              </li>
              <li>
                <Link href="#coverage" className="hover:text-electric-cyan transition-colors">
                  Check Coverage
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-electric-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-electric-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href="https://wa.me/923491988224"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-electric-cyan/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-text-secondary font-mono">WhatsApp Support</div>
                  <div className="text-white font-semibold group-hover:text-electric-cyan transition-colors">
                    0349 1988224
                  </div>
                </div>
              </a>

              <a
                href="tel:+923491988224"
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-electric-cyan/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-electric-blue/10 flex items-center justify-center text-electric-blue">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-text-secondary font-mono">Direct Helpline</div>
                  <div className="text-white font-semibold group-hover:text-electric-cyan transition-colors">
                    +92 349 1988224
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} Next Broadband. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-electric-cyan" />
          </button>
        </div>
      </div>
    </footer>
  );
}
