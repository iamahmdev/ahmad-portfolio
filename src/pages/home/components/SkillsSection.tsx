"use client";
import React from "react";
import StarBorder from "@/components/StarBorder";
import { SectionPolygons } from "@/components/AmbientBackground";
import { skillsList } from "../data/home.data";

export default function SkillsSection() {
  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    "Styling & UI": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    "State & Data": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    "Backend & DB": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    Tools: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    "AI-Assisted Dev": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  };

  const highlights = [
    "2+ Years MERN Stack Experience",
    "25+ Delivered Web Applications",
    "~40% Faster Delivery via Reusable Components",
    "AI-Assisted Vibe Coding Specialist",
    "Figma-to-Code Pixel Perfect",
    "100% On-Time Milestone Delivery",
  ];

  return (
    <section
      id="skills"
      className="min-h-0 md:min-h-screen py-16 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto w-full relative overflow-hidden"
    >
      <SectionPolygons />

      <div className="relative z-10">
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 dark:text-purple-300 light:text-purple-700 text-xs font-semibold mb-3">
            <span>CV Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white light:text-zinc-950 tracking-tight">
            Technical Skills &amp; Stack
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl font-medium">
            Core technologies, libraries, and AI-assisted engineering tools proven across 25+ production client deployments.
          </p>
        </div>

        {/* 6 Category Grid matching CV */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {Object.entries(skillsList).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/15 dark:border-white/15 light:border-black/10 bg-zinc-950/75 dark:bg-zinc-950/75 light:bg-white p-5 sm:p-6 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] light:bg-black/[0.05] border border-white/10 dark:border-white/10 light:border-black/10">
                  {categoryIcons[category]}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white dark:text-white light:text-zinc-900">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700 bg-white/[0.05] dark:bg-white/[0.04] light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-zinc-200 rounded-lg px-2.5 py-1 transition-colors hover:border-purple-400/50 hover:text-white dark:hover:text-white light:hover:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proven Strengths Pills */}
        <div className="mt-12 p-6 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-white/[0.02] dark:bg-white/[0.02] light:bg-white">
          <p className="text-white dark:text-white light:text-zinc-900 font-bold text-sm mb-4">
            Proven Performance &amp; Engineering Strengths
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {highlights.map((item) => (
              <StarBorder
                key={item}
                as="span"
                color="magenta"
                speed="6s"
                className="[&_.inner-content]:!py-1.5 [&_.inner-content]:!px-3.5 [&_.inner-content]:!text-xs sm:[&_.inner-content]:!text-sm [&_.inner-content]:!bg-zinc-900/90 dark:[&_.inner-content]:!bg-zinc-900/90 light:[&_.inner-content]:!bg-zinc-100 [&_.inner-content]:!border-white/20 dark:[&_.inner-content]:!border-white/20 light:[&_.inner-content]:!border-black/15 [&_.inner-content]:!text-zinc-200 dark:[&_.inner-content]:!text-zinc-200 light:[&_.inner-content]:!text-zinc-900"
              >
                {item}
              </StarBorder>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
