"use client";
import React from "react";
import { SectionPolygons } from "@/components/AmbientBackground";
import { educationList } from "../data/home.data";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-0 md:min-h-screen py-16 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto w-full relative overflow-hidden"
    >
      <SectionPolygons />

      <div className="relative z-10">
        {/* Section Header without 'Professional Profile & Experience' */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Ahmad Iqbal
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-medium">
            Full Stack Developer (MERN Stack) · Engineering scalable web applications from requirements to production.
          </p>
        </div>

        {/* Narrative & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Summary */}
          <div className="lg:col-span-7 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
              Full Stack Developer with <span className="text-purple-400 font-bold">2+ years of professional experience</span> across the MERN stack and TypeScript, building scalable CRM platforms, admin dashboards, SaaS products and client websites.
            </p>
            <p>
              I have delivered <span className="text-white font-bold">25+ production web apps</span> with strong React.js, Next.js, Node.js, and Express expertise. My focus is on measurable business impact — cutting daily manual tracking time by <span className="text-emerald-400 font-bold">~30%</span> with custom internal CRM platforms, and reducing new-module build time by <span className="text-emerald-400 font-bold">~40%</span> via modular component libraries.
            </p>
            <p>
              As an <span className="text-purple-400 font-bold">AI-assisted development &amp; vibe coding specialist</span> using Claude, Cursor, Antigravity, and GitHub Copilot, I help teams and clients ship production features significantly faster without sacrificing code quality or maintainability.
            </p>
          </div>

          {/* Right: Education & Certifications Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-white/15 bg-zinc-950/80 shadow-xl">
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="text-purple-400">🎓</span> Education &amp; Certifications
            </h3>
            <div className="space-y-4">
              {educationList.map((edu) => (
                <div key={edu.degree} className="pb-3 border-b border-white/10 last:border-b-0 last:pb-0">
                  <p className="text-sm font-bold text-white">{edu.degree}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{edu.institution}</p>
                  <span className="inline-block mt-1 text-[10px] text-purple-400 font-mono bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 font-medium">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span>Languages:</span>
              <span className="text-white font-semibold">Urdu (Native) · English (Professional)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
