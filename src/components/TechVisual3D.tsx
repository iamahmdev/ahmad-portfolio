"use client";
import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Interactive 3D Sphere & Floating Holograms Canvas
function Interactive3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techBadges = [
    { label: "React & Next.js", color: "from-sky-500/20 to-blue-600/30", border: "border-sky-400/40", pos: "top-4 left-0" },
    { label: "Node & Express", color: "from-emerald-500/20 to-teal-600/30", border: "border-emerald-400/40", pos: "top-12 -right-4" },
    { label: "TypeScript", color: "from-blue-500/20 to-indigo-600/30", border: "border-blue-400/40", pos: "bottom-16 -left-6" },
    { label: "MongoDB & APIs", color: "from-green-500/20 to-emerald-600/30", border: "border-green-400/40", pos: "bottom-8 right-2" },
    { label: "AI Vibe Coding", color: "from-purple-500/25 to-pink-600/30", border: "border-purple-400/50", pos: "-top-3 right-1/4" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] aspect-square flex items-center justify-center select-none"
    >
      {/* Background radial glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-indigo-600/30 blur-3xl" />

      {/* Outer 3D Gyroscope Ring 1 */}
      <div
        className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full border border-purple-500/30 border-dashed animate-spin"
        style={{ animationDuration: "25s" }}
      />

      {/* Outer 3D Gyroscope Ring 2 */}
      <div
        className="absolute w-60 h-60 sm:w-76 sm:h-76 rounded-full border border-indigo-400/25 border-dotted animate-spin"
        style={{ animationDuration: "18s", animationDirection: "reverse" }}
      />

      {/* Interactive 3D Holographic Core */}
      <div
        className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-purple-950/60 to-zinc-950/95 border border-white/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.35)] flex flex-col items-center justify-center p-6 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
        }}
      >
        {/* Animated Inner Neon Core */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 p-0.5 shadow-[0_0_35px_rgba(168,85,247,0.5)] flex items-center justify-center group">
          <div className="w-full h-full bg-zinc-950 rounded-[14px] flex flex-col items-center justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300">
              &lt;AI /&gt;
            </span>
            <span className="text-[9px] font-mono text-purple-300 font-bold mt-1 tracking-wider uppercase">
              Full Stack
            </span>
          </div>
        </div>

        {/* Live HUD telemetry */}
        <div className="mt-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono font-semibold text-emerald-300 tracking-wider">
            SOFTWARE ENGINEER CORE
          </span>
        </div>

        <div className="mt-1 flex items-center gap-2 text-[10px] font-mono text-zinc-400">
          <span className="text-purple-300">BSSE GRADUATE</span>
          <span>•</span>
          <span>PRODUCTION READY</span>
        </div>
      </div>

      {/* Floating 3D Skill Badges */}
      {techBadges.map((badge, idx) => (
        <div
          key={badge.label}
          className={`absolute ${badge.pos} px-3 py-1.5 rounded-xl bg-zinc-950/90 border ${badge.border} bg-gradient-to-r ${badge.color} backdrop-blur-xl shadow-lg flex items-center gap-2 animate-float`}
          style={{
            animationDelay: `${idx * -1.2}s`,
            transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span className="text-xs font-semibold text-white tracking-wide">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Interactive3DScene), { ssr: false });

