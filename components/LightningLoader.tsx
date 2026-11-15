"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface LightningLoaderProps {
  onComplete: () => void;
}

interface Point {
  x: number;
  y: number;
}

interface Segment {
  start: Point;
  end: Point;
  width: number;
  alpha: number;
  isBranch?: boolean;
}

export default function LightningLoader({ onComplete }: LightningLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<"dark" | "logo" | "strike" | "shockwave" | "dissolve">("dark");
  const [flashIntensity, setFlashIntensity] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  const finish = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setPhase("dissolve");
    setTimeout(() => {
      onComplete();
    }, 400);
  }, [onComplete]);

  // Handle escape / click skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        setIsSkipped(true);
        finish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finish]);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        const timer = setTimeout(() => {
          finish();
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [finish]);

  // Main animation orchestrator
  useEffect(() => {
    if (isSkipped) return;

    // Phase 1: Dark start -> Logo appears at 400ms
    const tLogo = setTimeout(() => {
      setPhase("logo");
    }, 400);

    // Phase 2: Lightning Strike at 1200ms
    const tStrike = setTimeout(() => {
      setPhase("strike");
      setFlashIntensity(0.95);
    }, 1300);

    // Shockwave expansion at 1700ms
    const tWave = setTimeout(() => {
      setPhase("shockwave");
    }, 1750);

    // Dissolve into website at 2700ms
    const tDissolve = setTimeout(() => {
      setPhase("dissolve");
    }, 2800);

    // Complete at 3300ms (Fail-safe timeout ensures the site ALWAYS appears)
    const tDone = setTimeout(() => {
      finish();
    }, 3400);

    return () => {
      clearTimeout(tLogo);
      clearTimeout(tStrike);
      clearTimeout(tWave);
      clearTimeout(tDissolve);
      clearTimeout(tDone);
    };
  }, [isSkipped, finish]);

  // Flash decay
  useEffect(() => {
    if (flashIntensity > 0) {
      const interval = setInterval(() => {
        setFlashIntensity((prev) => {
          if (prev <= 0.05) {
            clearInterval(interval);
            return 0;
          }
          return prev * 0.78;
        });
      }, 35);
      return () => clearInterval(interval);
    }
  }, [flashIntensity]);

  // Lightning Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Fractal lightning generator
    function createBolt(
      start: Point,
      end: Point,
      displace: number,
      minDisplace: number,
      branchProb: number,
      depth: number = 0
    ): Segment[] {
      const segments: Segment[] = [];

      function subdivide(p1: Point, p2: Point, disp: number, d: number) {
        if (disp < minDisplace || d > 6) {
          segments.push({
            start: p1,
            end: p2,
            width: Math.max(1, (7 - d) * 0.7),
            alpha: 1,
            isBranch: d > 1,
          });
          return;
        }

        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        // Perpendicular offset
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const normalX = -dy / Math.sqrt(dx * dx + dy * dy);
        const normalY = dx / Math.sqrt(dx * dx + dy * dy);
        const offset = (Math.random() - 0.5) * disp;

        const mid: Point = {
          x: midX + normalX * offset,
          y: midY + normalY * offset,
        };

        subdivide(p1, mid, disp / 2, d + 1);
        subdivide(mid, p2, disp / 2, d + 1);

        // Branching bolt
        if (Math.random() < branchProb && d < 4) {
          const branchAngle = (Math.random() - 0.5) * 0.8;
          const branchLen = disp * 1.5;
          const branchEnd: Point = {
            x: mid.x + Math.sin(branchAngle) * branchLen + (Math.random() - 0.5) * 30,
            y: mid.y + Math.cos(branchAngle) * branchLen + 20,
          };
          subdivide(mid, branchEnd, disp / 1.8, d + 2);
        }
      }

      subdivide(start, end, displace, depth);
      return segments;
    }

    let bolts: Segment[][] = [];
    let shockwaveRadius = 0;
    let shockwaveAlpha = 0;
    let boltLife = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const targetX = width / 2;
      const targetY = height / 2;

      // Strike Phase
      if (phase === "strike" || phase === "shockwave") {
        if (bolts.length === 0 || boltLife % 4 === 0) {
          // Generate new bolt frame with jitter
          bolts = [
            createBolt({ x: width * 0.5 + (Math.random() - 0.5) * 80, y: -20 }, { x: targetX, y: targetY }, 120, 10, 0.45),
            createBolt({ x: width * 0.48, y: -10 }, { x: targetX - 5, y: targetY - 10 }, 90, 12, 0.3),
          ];
        }

        boltLife++;

        // Draw bolts if active
        if (boltLife < 22) {
          ctx.save();
          bolts.forEach((segments) => {
            // Layer 1: Cyan outer glow
            ctx.shadowColor = "#42dfff";
            ctx.shadowBlur = 24;
            ctx.strokeStyle = "rgba(66, 223, 255, 0.7)";
            ctx.lineCap = "round";
            ctx.beginPath();
            segments.forEach((s) => {
              ctx.lineWidth = s.width * 2.8;
              ctx.moveTo(s.start.x, s.start.y);
              ctx.lineTo(s.end.x, s.end.y);
            });
            ctx.stroke();

            // Layer 2: Electric blue mid glow
            ctx.shadowColor = "#4169ff";
            ctx.shadowBlur = 12;
            ctx.strokeStyle = "rgba(100, 180, 255, 0.9)";
            ctx.beginPath();
            segments.forEach((s) => {
              ctx.lineWidth = s.width * 1.6;
              ctx.moveTo(s.start.x, s.start.y);
              ctx.lineTo(s.end.x, s.end.y);
            });
            ctx.stroke();

            // Layer 3: Pure white bright core
            ctx.shadowColor = "#ffffff";
            ctx.shadowBlur = 4;
            ctx.strokeStyle = "#ffffff";
            ctx.beginPath();
            segments.forEach((s) => {
              ctx.lineWidth = Math.max(1, s.width * 0.8);
              ctx.moveTo(s.start.x, s.start.y);
              ctx.lineTo(s.end.x, s.end.y);
            });
            ctx.stroke();
          });
          ctx.restore();
        }

        // Shockwave expansion
        if (phase === "shockwave") {
          if (shockwaveRadius === 0) {
            shockwaveRadius = 20;
            shockwaveAlpha = 0.9;
          }
          shockwaveRadius += 14;
          shockwaveAlpha *= 0.92;

          if (shockwaveAlpha > 0.02) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(targetX, targetY, shockwaveRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(66, 223, 255, ${shockwaveAlpha})`;
            ctx.lineWidth = 3;
            ctx.shadowColor = "#42dfff";
            ctx.shadowBlur = 18;
            ctx.stroke();

            // Inner subtle secondary wave
            if (shockwaveRadius > 40) {
              ctx.beginPath();
              ctx.arc(targetX, targetY, shockwaveRadius * 0.65, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(65, 105, 255, ${shockwaveAlpha * 0.6})`;
              ctx.lineWidth = 2;
              ctx.stroke();
            }
            ctx.restore();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [phase]);

  return (
    <div
      onClick={finish}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#07090E] transition-opacity duration-700 select-none cursor-pointer ${
        phase === "dissolve" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Next Broadband Cinematic Intro"
      role="region"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Atmospheric Dark Gradient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(65,105,255,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Lightning Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20"
      />

      {/* Full-screen Impact Flash */}
      <div
        className="absolute inset-0 bg-white pointer-events-none z-30 transition-opacity"
        style={{
          opacity: flashIntensity,
          mixBlendMode: "screen",
        }}
      />

      {/* Center Brand Identity with original logo.png */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Ambient Cyan/Blue Glow Behind Logo */}
        <div
          className={`absolute -inset-10 rounded-full transition-all duration-1000 blur-3xl pointer-events-none ${
            phase === "dark"
              ? "opacity-0 scale-75"
              : phase === "strike" || phase === "shockwave"
              ? "opacity-90 scale-125 bg-electric-cyan/40"
              : "opacity-40 scale-100 bg-electric-blue/20"
          }`}
        />

        {/* Logo Container */}
        <div
          className={`relative transition-all duration-700 transform flex items-center justify-center ${
            phase === "dark"
              ? "opacity-0 scale-90 translate-y-3"
              : phase === "strike"
              ? "opacity-100 scale-105"
              : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 relative flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Next Broadband"
              width={224}
              height={220}
              priority
              className="object-contain filter drop-shadow-[0_0_20px_rgba(66,223,255,0.35)]"
            />
          </div>
        </div>

        {/* Brand Text Reveal */}
        <div
          className={`mt-6 text-center transition-all duration-700 ${
            phase === "dark" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase">
            NEXT BROADBAND
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.3em] text-electric-cyan font-medium mt-1 uppercase">
            Power Your World
          </p>
        </div>
      </div>

      {/* Skip Button in Bottom Corner */}
      <div className="absolute bottom-6 right-6 z-40">
        <button
          onClick={(e) => {
            e.stopPropagation();
            finish();
          }}
          className="px-3 py-1.5 rounded-full text-xs font-mono text-text-secondary/70 hover:text-white bg-card/60 border border-white/10 hover:border-electric-cyan/40 transition-colors backdrop-blur-md"
        >
          Skip Intro [Esc]
        </button>
      </div>
    </div>
  );
}
