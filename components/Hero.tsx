"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Radio, Activity, Wifi } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Fiber Optic Mesh & Packet Visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
    }

    const nodeCount = 32;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.2,
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

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const glow = Math.sin(node.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${0.5 * glow})`;
        ctx.shadowColor = "#00E5FF";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            if (Math.random() < 0.001 && pulses.length < 8) {
              pulses.push({
                nodeA: i,
                nodeB: j,
                progress: 0,
                speed: 0.018 + Math.random() * 0.02,
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
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#00E5FF";
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 overflow-hidden bg-[#0A0F1C] bg-tech-grid"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[650px] h-[400px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Split Hero: Headline + CTAs on Left, Fiber Graphic Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-white/[0.08] text-xs font-semibold text-[#00E5FF] mb-6 backdrop-blur-md shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
              <span>Next-Generation Internet Service Provider</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] uppercase leading-[1.08] mb-6">
              Power Your World.
              <br />
              <span className="text-gradient-electric">Connect Beyond Limits.</span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-xl text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed mb-8">
              Experience reliable internet connectivity with Next Broadband. High-speed
              fiber optic and wireless internet solutions for homes, offices and
              businesses.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-[#0A0F1C] bg-[#00E5FF] hover:bg-[#33ebff] shadow-lg shadow-[#00E5FF]/25 border border-[#00E5FF] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Internet Plans</span>
                <ArrowRight className="w-4 h-4 text-[#0A0F1C]" />
              </Link>

              <a
                href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20interested%20in%20a%20new%20internet%20connection.%20Please%20provide%20pricing%20and%20coverage%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/25 border border-[#25D366]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs text-[#94A3B8] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                <span>Optical Core Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>WhatsApp Dispatch Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Fiber-Optic Telemetry & Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#111827] border border-white/[0.08] p-6 sm:p-8 shadow-2xl shadow-black/70 overflow-hidden">
              {/* Subtle Internal Canvas */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              />

              <div className="relative z-10 space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#F8FAFC]">Live Network Core</div>
                      <div className="text-[10px] font-mono text-[#00E5FF]">Next Broadband ISP</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                    ONLINE
                  </span>
                </div>

                {/* Central Speeds Banner */}
                <div className="p-4 rounded-2xl bg-[#0A0F1C] border border-white/[0.08] text-center">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-1">
                    Available Bandwidth Tiers
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#00E5FF] tracking-tight drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                    6 Mbps — 30 Mbps
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1">
                    Fiber Optic & Long-Range Wireless
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#0A0F1C]/80 border border-white/[0.08]">
                    <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Response Time</div>
                    <div className="text-base font-bold text-[#F8FAFC] mt-0.5">&lt; 5ms Latency</div>
                    <div className="text-[10px] text-[#00E5FF]">Ultra-Low Jitter</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0A0F1C]/80 border border-white/[0.08]">
                    <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Direct Dispatch</div>
                    <div className="text-base font-bold text-[#F8FAFC] mt-0.5">0349 1988224</div>
                    <div className="text-[10px] text-[#25D366]">Local Technicians</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Glassmorphism Quick-Trust Bar directly below the Hero */}
        <div className="rounded-2xl bg-[#111827]/80 backdrop-blur-xl border border-white/[0.08] p-4 sm:p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {/* Pillar 1 */}
            <div className="flex items-center gap-4 pt-3 md:pt-0">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-wide">
                  Fiber Optic
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  Ultra-low latency connectivity
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-4 pt-3 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] flex-shrink-0">
                <Radio className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-wide">
                  Wireless Links
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  Dependable reach for wide areas
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-4 pt-3 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-wide">
                  Direct WhatsApp
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  Instant assistance & fast setup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
