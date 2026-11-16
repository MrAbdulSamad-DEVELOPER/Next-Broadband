"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolledRef = useRef(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const nextScrolled = scrollY > 20;

      if (nextScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      if (progressRef.current) {
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
          progressRef.current.style.width = `${progress}%`;
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Packages", href: "/#packages" },
    { name: "Coverage", href: "/#coverage" },
    { name: "Guides & Blog", href: "/blog" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] transition-all duration-75 ease-out w-0"
        />
      </div>

      {/* Main Navbar with Adaptive Enterprise Theme */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm py-3"
            : "bg-[#090D16]/80 backdrop-blur-md border-b border-white/10 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link
              href="/#home"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-h-[44px]"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Next Broadband Logo"
                  width={40}
                  height={40}
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-105 rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-heading font-extrabold tracking-tight text-sm sm:text-base lg:text-lg transition-colors leading-tight ${
                    isScrolled
                      ? "text-[#0F172A] group-hover:text-[#1D4ED8]"
                      : "text-white group-hover:text-blue-400"
                  }`}
                >
                  NEXT BROADBAND
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-mono font-medium ${
                    isScrolled ? "text-[#64748B]" : "text-slate-400"
                  }`}
                >
                  Enterprise & Home ISP
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 min-h-[44px] flex items-center ${
                    isScrolled
                      ? "text-[#475569] hover:text-[#0F172A] hover:bg-slate-100"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop WhatsApp CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20interested%20in%20a%20new%20internet%20connection.%20Please%20share%20package%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-md shadow-emerald-700/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
              </a>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-xl focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors ${
                  isScrolled
                    ? "text-[#0F172A] hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#1D4ED8]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-1 backdrop-blur-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-80px)] overflow-y-auto ${
              isScrolled
                ? "bg-white/98 border-[#E2E8F0]"
                : "bg-[#090D16]/98 border-white/10"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors min-h-[48px] ${
                  isScrolled
                    ? "text-[#475569] hover:text-[#0F172A] hover:bg-slate-100"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div
              className={`pt-3 border-t ${
                isScrolled ? "border-[#E2E8F0]" : "border-white/10"
              }`}
            >
              <a
                href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20interested%20in%20a%20new%20internet%20connection."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-full text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-lg shadow-emerald-700/25 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (0349 1988224)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
