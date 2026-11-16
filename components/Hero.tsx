"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Radio, Activity } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  // Optical Packet Visualization with IntersectionObserver & Auto-Pause
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth || 300);
    let height = (canvas.height = canvas.offsetHeight || 200);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const nodeCount = isMobile ? 12 : 22;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 300;
      height = canvas.height = canvas.offsetHeight || 200;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
    }

    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.8 + 1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    interface Pulse {
      nodeA: number;
      nodeB: number;
      progress: number;
      speed: number;
    }
    const pulses: Pulse[] = [];

    let animId: number = 0;
    let isRunning = false;

    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.025;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const glow = Math.sin(node.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${0.45 * glow})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 13225) { // 115 * 115 = 13225, avoids Math.sqrt in hot loop
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / 115) * 0.16;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            if (Math.random() < 0.0015 && pulses.length < 4) {
              pulses.push({
                nodeA: i,
                nodeB: j,
                progress: 0,
                speed: 0.016 + Math.random() * 0.016,
              });
            }
          }
        }
      }

      // Draw active pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const nA = nodes[pulse.nodeA];
        const nB = nodes[pulse.nodeB];
        if (nA && nB) {
          const px = nA.x + (nB.x - nA.x) * pulse.progress;
          const py = nA.y + (nB.y - nA.y) * pulse.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    // Auto-pause when hero is not visible (0% CPU offscreen)
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isRunning) {
            isRunning = true;
            animId = requestAnimationFrame(render);
          }
        } else {
          isRunning = false;
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0.05 }
    );

    const target = heroRef.current || canvas;
    if (target) observer.observe(target);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#090D16] bg-hero-glow bg-tech-grid-dark text-white"
    >
      {/* Refined subtle Blue-Indigo ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: 2 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-14 sm:mb-16">
          {/* Headline & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Live Status & Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-white/90 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse flex-shrink-0" />
                <span>99.9% Network Uptime • Local Dispatch Active</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300">
                <Zap className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>ISP Solutions</span>
              </div>
            </div>

            {/* Main Headline with Plus Jakarta Sans & Tight Tracking */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-[-0.03em] uppercase leading-[1.08] mb-6">
              Power Your World.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-white">
                Connect Beyond Limits.
              </span>
            </h1>

            {/* Supporting Text in Inter */}
            <p className="max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
              Experience reliable internet connectivity with Next Broadband. High-speed
              fiber optic and wireless internet solutions for homes, offices and
              businesses.
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
              <Link
                href="/#packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-lg shadow-blue-900/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center min-h-[48px]"
              >
                <span>Explore Internet Plans</span>
                <ArrowRight className="w-4 h-4 text-white flex-shrink-0" />
              </Link>

              <a
                href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20interested%20in%20a%20new%20internet%20connection.%20Please%20provide%20pricing%20and%20coverage%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white bg-[#059669] hover:bg-[#047857] shadow-lg shadow-emerald-900/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            {/* Status indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span>Optical Core Active</span>
              </div>
              <a
                href="https://wa.me/923491988224"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#10B981] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>WhatsApp Dispatch: 0349 1988224</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Glassmorphic Network Status Card */}
          <div className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
            <div className="relative rounded-3xl bg-[#0F172A]/90 border border-white/10 p-6 sm:p-8 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden">
              {/* Internal Mesh Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
              />

              <div className="relative z-10 space-y-5 sm:space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-heading">Live Network Core</div>
                      <div className="text-[10px] font-mono text-blue-300">Next Broadband ISP</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                    ONLINE
                  </span>
                </div>

                {/* Central Speeds Banner with Space Grotesk Tabular Numerals */}
                <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-center">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Available Bandwidth Tiers
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tabular-nums tracking-tight">
                    6 Mbps — 30 Mbps
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Fiber Optic & Long-Range Wireless
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Response Time</div>
                    <div className="text-sm sm:text-base font-bold text-white font-display mt-0.5">&lt; 5ms Latency</div>
                    <div className="text-[10px] text-blue-400 font-medium">Ultra-Low Jitter</div>
                  </div>
                  <a
                    href="tel:+923491988224"
                    className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 transition-colors group block"
                  >
                    <div className="text-[10px] font-mono text-slate-400 uppercase group-hover:text-emerald-400 transition-colors">Direct Dispatch</div>
                    <div className="text-sm sm:text-base font-bold text-white font-display mt-0.5 group-hover:text-emerald-400 transition-colors">0349 1988224</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Tap to Call</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Glassmorphism Quick-Trust Bar directly below the Hero */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0F172A]/85 backdrop-blur-xl border border-white/10 p-5 sm:p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5 pt-3 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide font-heading">
                  Fiber Optic
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Ultra-low latency connectivity
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Radio className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wide font-heading">
                  Wireless Links
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Dependable reach for wide areas
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6">
              <a
                href="https://wa.me/923491988224"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-emerald-400 transition-colors font-heading">
                    Direct WhatsApp
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    Instant assistance & fast setup
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
