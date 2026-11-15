"use client";

import React from "react";
import Image from "next/image";
import { User, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Emblem & Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-card border border-border p-8 flex flex-col items-center text-center shadow-2xl">
              <div className="w-36 h-36 relative mb-6">
                <Image
                  src="/logo.png"
                  alt="Next Broadband Official Brand Logo"
                  width={144}
                  height={144}
                  priority
                  className="object-contain filter drop-shadow-[0_0_20px_rgba(66,223,255,0.25)]"
                />
              </div>
              <h3 className="text-xl font-extrabold text-white tracking-wider uppercase mb-1">
                NEXT BROADBAND
              </h3>
              <p className="text-xs text-electric-cyan font-mono tracking-widest uppercase mb-6">
                Connecting Communities
              </p>

              {/* Leadership Cards */}
              <div className="w-full space-y-3 border-t border-border/80 pt-6 text-left">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/80 border border-border/80">
                  <div className="w-9 h-9 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-secondary uppercase">
                      Chief Executive Officer
                    </div>
                    <div className="text-sm font-bold text-white">M. Jahangir</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/80 border border-border/80">
                  <div className="w-9 h-9 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-secondary uppercase">
                      Site Incharge
                    </div>
                    <div className="text-sm font-bold text-white">Sher Muhammad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Focus */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-semibold text-electric-cyan uppercase tracking-wider mb-4">
              About Next Broadband
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-6 leading-tight">
              Reliable Internet Solutions Grounded in Local Excellence
            </h2>

            <p className="text-base text-text-secondary leading-relaxed mb-6">
              Next Broadband is dedicated to delivering robust internet connectivity across residential
              neighborhoods, commercial markets, and corporate premises. Under the leadership of CEO M.
              Jahangir and Site Incharge Sher Muhammad, our engineering team manages optical fiber
              installations and wireless infrastructure designed for continuous uptime.
            </p>

            <p className="text-base text-text-secondary leading-relaxed mb-8">
              We eliminate complex bureaucratic delays by connecting clients directly with our local
              technical specialists. Whether powering high-speed home entertainment or critical office
              workflows, Next Broadband focuses on consistent performance and personalized customer care.
            </p>

            {/* Scope of Services Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-border">
              {[
                "Fiber Optic Internet",
                "Wireless Internet",
                "Home Internet",
                "Office Internet",
                "Business Connectivity",
                "On-Site Technical Support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-electric-cyan flex-shrink-0" />
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
