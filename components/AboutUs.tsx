"use client";

import React from "react";
import Image from "next/image";
import { User, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Brand Emblem & Executive Leadership Profile Badges */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-md rounded-3xl bg-[#111827] border border-white/[0.08] p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl">
              <div className="w-28 h-28 sm:w-36 sm:h-36 relative mb-5 sm:mb-6">
                <Image
                  src="/logo.png"
                  alt="Next Broadband Official Brand Logo"
                  width={144}
                  height={144}
                  priority
                  className="object-contain filter drop-shadow-[0_0_20px_rgba(0,229,255,0.25)]"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#F8FAFC] tracking-wider uppercase mb-1">
                NEXT BROADBAND
              </h3>
              <p className="text-[11px] sm:text-xs text-[#00E5FF] font-mono tracking-widest uppercase mb-5 sm:mb-6">
                Connecting Communities
              </p>

              {/* Responsive Executive Profile Cards */}
              <div className="w-full space-y-3 sm:space-y-3.5 border-t border-white/[0.08] pt-5 sm:pt-6 text-left">
                {/* Executive 1: CEO */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A0F1C] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-colors">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5FF]">
                          Leadership
                        </span>
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          Executive
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-[#F8FAFC] truncate">
                        M. Jahangir
                      </div>
                      <div className="text-xs text-[#94A3B8] truncate">
                        Chief Executive Officer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Executive 2: Site Incharge */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0A0F1C] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-colors">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5FF]">
                          Operations & Field
                        </span>
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          Engineering
                        </span>
                      </div>
                      <div className="text-base font-extrabold text-[#F8FAFC] truncate">
                        Sher Muhammad
                      </div>
                      <div className="text-xs text-[#94A3B8] truncate">
                        Site Incharge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Scope of Services */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-4">
              About Next Broadband
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase mb-5 sm:mb-6 leading-tight">
              Reliable Internet Solutions Grounded in Local Excellence
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-5 sm:mb-6">
              Next Broadband is dedicated to delivering robust internet connectivity across residential
              neighborhoods, commercial markets, and corporate premises. Under the leadership of CEO M.
              Jahangir and Site Incharge Sher Muhammad, our engineering team manages optical fiber
              installations and wireless infrastructure designed for continuous uptime.
            </p>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 sm:mb-8">
              We eliminate complex bureaucratic delays by connecting clients directly with our local
              technical specialists. Whether powering high-speed home entertainment or critical office
              workflows, Next Broadband focuses on consistent performance and personalized customer care.
            </p>

            {/* Scope of Services Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-white/[0.08] text-left">
              {[
                "Fiber Optic Internet",
                "Wireless Internet",
                "Home Internet",
                "Office Internet",
                "Business Connectivity",
                "On-Site Technical Support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#F8FAFC]">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
