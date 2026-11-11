"use client";
import React from "react";
import { SectionPolygons } from "@/components/AmbientBackground";
import { skillsList } from "../data/home.data";

export default function SkillsSection() {
  const categoryMeta: Record<string, { icon: React.ReactNode; color: string; border: string; glow: string }> = {
    Frontend: {
      color: "text-sky-400",
      border: "hover:border-sky-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    "Styling & UI": {
      color: "text-pink-400",
      border: "hover:border-pink-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(244,114,182,0.15)]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    "State & Data": {
      color: "text-indigo-400",
      border: "hover:border-indigo-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(129,140,248,0.15)]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
    "Backend & DB": {
      color: "text-emerald-400",
      border: "hover:border-emerald-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
    Tools: {
      color: "text-amber-400",
      border: "hover:border-amber-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    "AI-Assisted Dev": {
      color: "text-purple-400",
      border: "hover:border-purple-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      ),
    },
  };

  return (
    <section
      id="skills"
      className="min-h-0 md:min-h-screen py-20 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto w-full relative overflow-hidden"
    >
      <SectionPolygons />

      <div className="relative z-10">
        {/* Clean, high-impact header without redundant label pills */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Technical Skills &amp; Stack
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Core technologies, full-stack frameworks, and AI workflows used to deliver scalable production software.
            </p>
          </div>
        </div>

        {/* 6 Category Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {Object.entries(skillsList).map(([category, skills]) => {
            const meta = categoryMeta[category] || {
              color: "text-purple-400",
              border: "hover:border-purple-500/40",
              glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
              icon: null,
            };

            return (
              <div
                key={category}
                className={`group rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 ${meta.border} ${meta.glow} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-white/[0.04] border border-white/10 ${meta.color} group-hover:scale-105 transition-transform`}>
                      {meta.icon}
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-1.5 transition-all duration-200 hover:border-purple-400/50 hover:bg-white/[0.08] hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
