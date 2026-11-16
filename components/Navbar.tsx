"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for styling and progress bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Coverage", href: "#coverage" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#00E5FF] to-white shadow-[0_0_10px_#00E5FF] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar with Frosted Glass Effect */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0F1C]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link
              href="#home"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-h-[44px]"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Next Broadband Logo"
                  width={44}
                  height={44}
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-sm sm:text-base lg:text-lg text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors leading-tight">
                  NEXT BROADBAND
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono">
                  ISP Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Visible on 1024px+ screens) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] rounded-lg hover:bg-white/[0.04] transition-all duration-200 min-h-[44px] flex items-center"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
              </a>
            </div>

            {/* Mobile / Tablet Menu Button (screens below 1024px) */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#00E5FF]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0F1C]/98 border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-1 backdrop-blur-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center px-4 py-3 rounded-xl text-base font-semibold text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.06] transition-colors min-h-[48px]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/[0.08]">
              <a
                href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20interested%20in%20a%20new%20internet%20connection."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
