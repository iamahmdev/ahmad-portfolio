"use client";
import React from "react";
import { SectionPolygons } from "@/components/AmbientBackground";
import { jobsList, educationList } from "../data/home.data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-0 md:min-h-screen py-20 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto w-full relative overflow-hidden"
    >
      <SectionPolygons />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Work Experience &amp; Career
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
              2+ years of production experience delivering scalable SaaS platforms, enterprise CRMs, and client web apps.
            </p>
          </div>
        </div>

        {/* 2-Column Layout: Left Experience Timeline (7 cols) + Right Education & Credentials (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-6">
            {jobsList.map((job) => {
              const [role, company, period, description] = job;
              // Split description into bullet points if combined
              const bullets = description
                .split(". ")
                .map((b) => b.trim())
                .filter((b) => b.length > 0)
                .map((b) => (b.endsWith(".") ? b : b + "."));

              return (
                <div
                  key={role + company}
                  className="group rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 hover:border-purple-400/40 hover:bg-zinc-950/90 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {role}
                      </h3>
                      <p className="text-sm font-medium text-purple-400 mt-0.5">
                        {company}
                      </p>
                    </div>

                    <span className="inline-flex items-center text-xs font-mono font-medium text-zinc-300 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full w-fit">
                      {period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-purple-400 mt-1 shrink-0 font-bold">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Education & Certifications Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span>🎓</span>
                <span>Education &amp; Credentials</span>
              </h3>

              <div className="space-y-6">
                {educationList.map((edu) => (
                  <div key={edu.degree} className="pb-5 border-b border-white/10 last:border-b-0 last:pb-0">
                    <span className="inline-block text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded mb-2">
                      {edu.period}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Languages:</span>
                  <span className="text-zinc-200 font-semibold">Urdu (Native) · English (Professional)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Location:</span>
                  <span className="text-zinc-200 font-semibold">Lahore, Pakistan (Remote Worldwide)</span>
                </div>
              </div>
            </div>

            {/* Recruiter Quick Fact Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-xl p-5 text-xs text-zinc-300 leading-relaxed">
              <p className="font-bold text-emerald-400 text-sm mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Recruiter Summary</span>
              </p>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Available for full-time engineering roles and high-impact client contracts across all timezones. Direct 1-on-1 communication via WhatsApp &amp; Google Meet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
