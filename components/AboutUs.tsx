"use client";

import React from "react";
import Image from "next/image";
import { User, ShieldCheck, CheckCircle2, Award, MapPin } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 bg-[#0A0F1C] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Emblem & Executive Leadership Profile Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-[#111827] border border-white/[0.08] p-8 flex flex-col items-center text-center shadow-2xl">
              <div className="w-36 h-36 relative mb-6">
                <Image
                  src="/logo.png"
                  alt="Next Broadband Official Brand Logo"
                  width={144}
                  height={144}
                  priority
                  className="object-contain filter drop-shadow-[0_0_20px_rgba(0,229,255,0.25)]"
                />
              </div>
              <h3 className="text-xl font-extrabold text-[#F8FAFC] tracking-wider uppercase mb-1">
                NEXT BROADBAND
              </h3>
              <p className="text-xs text-[#00E5FF] font-mono tracking-widest uppercase mb-6">
                Connecting Communities
              </p>

              {/* Clean Executive Profile Badges for Strong Local & Corporate Trust */}
              <div className="w-full space-y-3.5 border-t border-white/[0.08] pt-6 text-left">
                {/* Executive 1: CEO */}
                <div className="p-4 rounded-2xl bg-[#0A0F1C] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5FF]">
                          Leadership
                        </span>
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          Executive
                        </span>
                      </div>
                      <div className="text-base font-extrabold text-[#F8FAFC]">
                        M. Jahangir
                      </div>
                      <div className="text-xs text-[#94A3B8]">
                        Chief Executive Officer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Executive 2: Site Incharge */}
                <div className="p-4 rounded-2xl bg-[#0A0F1C] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5FF]">
                          Operations & Field
                        </span>
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          Engineering
                        </span>
                      </div>
                      <div className="text-base font-extrabold text-[#F8FAFC]">
                        Sher Muhammad
                      </div>
                      <div className="text-xs text-[#94A3B8]">
                        Site Incharge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Scope of Services */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-4">
              About Next Broadband
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight uppercase mb-6 leading-tight">
              Reliable Internet Solutions Grounded in Local Excellence
            </h2>

            <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
              Next Broadband is dedicated to delivering robust internet connectivity across residential
              neighborhoods, commercial markets, and corporate premises. Under the leadership of CEO M.
              Jahangir and Site Incharge Sher Muhammad, our engineering team manages optical fiber
              installations and wireless infrastructure designed for continuous uptime.
            </p>

            <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
              We eliminate complex bureaucratic delays by connecting clients directly with our local
              technical specialists. Whether powering high-speed home entertainment or critical office
              workflows, Next Broadband focuses on consistent performance and personalized customer care.
            </p>

            {/* Scope of Services Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08]">
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
