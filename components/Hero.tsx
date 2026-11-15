"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Radio } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Network Nodes & Fiber Light Streams Animation
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

    // Nodes for ISP connectivity mesh
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
    }

    const nodeCount = 38;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Light pulses along connections
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

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        // Bounce from walls
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node
        const glow = Math.sin(node.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(66, 223, 255, ${0.45 * glow})`;
        ctx.shadowColor = "#42dfff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.18;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(65, 105, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Occasionally spawn pulse along line
            if (Math.random() < 0.0007 && pulses.length < 8) {
              pulses.push({
                nodeA: i,
                nodeB: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
              });
            }
          }
        }
      }

      // Draw and update active light pulses
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
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#42dfff";
          ctx.shadowBlur = 10;
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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Background Lighting Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[380px] h-[380px] bg-electric-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Network Animation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/80 border border-border text-xs font-medium text-electric-cyan mb-8 backdrop-blur-md shadow-sm">
          <Zap className="w-3.5 h-3.5 text-electric-cyan animate-pulse" />
          <span>Next-Generation Internet Service Provider</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-6">
          Power Your World.
          <br />
          <span className="text-gradient-electric">Connect Beyond Limits.</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-text-secondary font-normal leading-relaxed mb-10">
          Experience reliable internet connectivity with Next Broadband. High-speed
          fiber optic and wireless internet solutions for homes, offices and
          businesses.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="#packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-electric-blue hover:bg-[#3459eb] shadow-lg shadow-electric-blue/25 border border-white/10 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Internet Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/923491988224?text=Hello%20Next%20Broadband!%20I%20am%20interested%20in%20a%20new%20internet%20connection.%20Please%20provide%20pricing%20and%20coverage%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-text-primary bg-card/90 hover:bg-card-hover border border-border hover:border-electric-cyan/40 shadow-lg shadow-black/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Contact on WhatsApp</span>
          </a>
        </div>

        {/* Connectivity Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-6 border-t border-border/50 text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-card/40 border border-border/40">
            <div className="p-2 rounded-md bg-electric-cyan/10 text-electric-cyan">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                Fiber Optic
              </div>
              <div className="text-xs text-text-secondary">Ultra-low latency</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-card/40 border border-border/40">
            <div className="p-2 rounded-md bg-electric-blue/10 text-electric-blue">
              <Radio className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                Wireless Links
              </div>
              <div className="text-xs text-text-secondary">Dependable reach</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-card/40 border border-border/40">
            <div className="p-2 rounded-md bg-[#25D366]/10 text-[#25D366]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                Direct WhatsApp
              </div>
              <div className="text-xs text-text-secondary">Instant assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
