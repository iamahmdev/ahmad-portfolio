"use client";
import React, { useRef, useState, useEffect } from "react";

export default function TechVisual3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx ahmad-iqbal");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[500px] select-none transition-transform duration-200 ease-out"
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
      }}
    >
      {/* Background ambient radial glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-emerald-500/15 blur-2xl -z-10" />

      {/* Modern Developer Terminal Window */}
      <div className="rounded-2xl border border-white/15 bg-zinc-950/90 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden font-mono">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs text-zinc-400 ml-2 font-mono">ahmad@engineer: ~</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyCommand}
              className="text-[11px] text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 transition-colors"
              title="Copy terminal command"
            >
              {copied ? "Copied! ✓" : "$ npx ahmad"}
            </button>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
        </div>

        {/* Terminal Content Body */}
        <div className="p-5 text-xs sm:text-[13px] leading-relaxed space-y-3">
          {/* Prompt 1 */}
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-purple-400 font-bold">➜</span>
            <span className="text-sky-300">~</span>
            <span className="text-zinc-100 font-semibold">whoami</span>
          </div>

          {/* Profile Card Output */}
          <div className="pl-4 border-l-2 border-purple-500/40 space-y-1 text-zinc-300">
            <div className="text-white font-bold text-sm">
              Ahmad Iqbal <span className="text-purple-400 font-normal text-xs">(Full Stack MERN)</span>
            </div>
            <div className="text-zinc-400 text-[11px]">
              🎓 BS Software Engineering (BSSE) · Abasyn University
            </div>
            <div className="text-zinc-400 text-[11px]">
              📍 Lahore, Pakistan · Available Worldwide (Remote)
            </div>
          </div>

          {/* Prompt 2 */}
          <div className="flex items-center gap-2 text-zinc-400 pt-1">
            <span className="text-purple-400 font-bold">➜</span>
            <span className="text-sky-300">~</span>
            <span className="text-zinc-100 font-semibold">cat skills.json</span>
          </div>

          {/* Core Stack Badges */}
          <div className="pl-4 border-l-2 border-indigo-500/40 flex flex-wrap gap-1.5 pt-0.5">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "TypeScript",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "Tailwind CSS",
              "AI Vibe Coding",
            ].map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-[10px] sm:text-[11px] text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Prompt 3 */}
          <div className="flex items-center gap-2 text-zinc-400 pt-1">
            <span className="text-purple-400 font-bold">➜</span>
            <span className="text-sky-300">~</span>
            <span className="text-zinc-100 font-semibold">git log --stats -1</span>
          </div>

          {/* Metrics Output */}
          <div className="pl-4 border-l-2 border-emerald-500/40 text-[11px] space-y-1 text-zinc-400">
            <div>
              <span className="text-emerald-400 font-semibold">✔ 25+ Production Apps</span> delivered on-time
            </div>
            <div>
              <span className="text-purple-400 font-semibold">✔ ~30% Time Cut</span> with internal CRM platform
            </div>
            <div>
              <span className="text-sky-400 font-semibold">✔ ~40% Faster Build</span> via modular component libraries
            </div>
          </div>

          {/* Live Prompt Status */}
          <div className="flex items-center gap-2 text-zinc-400 pt-2 border-t border-white/10 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300 font-medium">Status:</span>
            <span className="text-emerald-400 font-semibold">Open for Full-Time &amp; Client Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
