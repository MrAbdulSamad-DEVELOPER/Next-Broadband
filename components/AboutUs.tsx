import React from "react";
import Image from "next/image";
import { User, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Brand Emblem & Executive Leadership Profile Cards */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-md rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_15px_35px_-10px_rgba(15,23,42,0.08)]">
              <div className="w-24 h-24 sm:w-28 sm:h-28 relative mb-5 sm:mb-6">
                <Image
                  src="/logo.png"
                  alt="Next Broadband — Best Fiber Optic & Wireless Internet ISP in Pakistan"
                  width={112}
                  height={112}
                  priority
                  className="object-contain rounded-2xl shadow-sm"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight uppercase mb-1 font-heading">
                NEXT BROADBAND
              </h3>
              <p className="text-xs text-[#1D4ED8] font-mono font-semibold tracking-widest uppercase mb-6">
                Connecting Communities
              </p>

              {/* Clean Executive Profile Cards */}
              <div className="w-full space-y-3.5 border-t border-[#E2E8F0] pt-6 text-left">
                {/* Executive 1: CEO M. Jahangir */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1D4ED8] flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4ED8] font-bold">
                          Leadership
                        </span>
                        <span className="text-[10px] font-mono text-[#64748B]">
                          Executive
                        </span>
                      </div>
                      <div className="text-base font-extrabold text-[#0F172A] font-heading truncate">
                        M. Jahangir
                      </div>
                      <div className="text-xs text-[#64748B] font-sans truncate">
                        Chief Executive Officer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Executive 2: Site Incharge Sher Muhammad */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1D4ED8] flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4ED8] font-bold">
                          Operations & Field
                        </span>
                        <span className="text-[10px] font-mono text-[#64748B]">
                          Engineering
                        </span>
                      </div>
                      <div className="text-base font-extrabold text-[#0F172A] font-heading truncate">
                        Sher Muhammad
                      </div>
                      <div className="text-xs text-[#64748B] font-sans truncate">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 shadow-sm">
              About Next Broadband
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] uppercase mb-6 leading-tight font-heading">
              Reliable Internet Solutions Grounded in Local Excellence
            </h2>

            <p className="text-base text-[#475569] font-sans leading-relaxed mb-5">
              Next Broadband is dedicated to delivering robust internet connectivity across residential
              neighborhoods, commercial markets, and corporate premises. Under the leadership of CEO M.
              Jahangir and Site Incharge Sher Muhammad, our engineering team manages optical fiber
              installations and wireless infrastructure designed for continuous uptime.
            </p>

            <p className="text-base text-[#475569] font-sans leading-relaxed mb-8">
              We eliminate complex bureaucratic delays by connecting clients directly with our local
              technical specialists. Whether powering high-speed home entertainment or critical office
              workflows, Next Broadband focuses on consistent performance and personalized customer care.
            </p>

            {/* Scope of Services Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-6 border-t border-[#E2E8F0] text-left">
              {[
                "Fiber Optic Internet",
                "Wireless Internet",
                "Home Internet",
                "Office Internet",
                "Business Connectivity",
                "On-Site Technical Support",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-[#FAFAFA] border border-[#E2E8F0] text-xs font-semibold text-[#334155]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] flex-shrink-0" />
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
