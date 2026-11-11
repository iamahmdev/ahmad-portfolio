"use client";
import React from "react";
import { SectionPolygons } from "@/components/AmbientBackground";
import { educationList } from "../data/home.data";

interface CareerRole {
  role: string;
  company: string;
  period: string;
  location: string;
  focus: string;
  technologies: string[];
}

const careerRoles: CareerRole[] = [
  {
    role: "MERN Stack Developer",
    company: "Khyber Coded",
    period: "2024 – Present",
    location: "Peshawar · Full-Time",
    focus: "Engineered scalable internal CRM platforms, modular React component systems, and production RESTful API architectures.",
    technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Front-End Developer",
    company: "Webix Solutions",
    period: "2022 – 2023",
    location: "Remote · Contract",
    focus: "Architected responsive SaaS web application interfaces, conducted client technical discovery, and delivered rapid production demos.",
    technologies: ["React.js", "Next.js", "REST APIs", "Tailwind CSS", "Vercel"],
  },
  {
    role: "Junior Front-End Developer",
    company: "Hikenseek",
    period: "2021 – 2022",
    location: "Islamabad · On-Site",
    focus: "Developed administrative dashboards, translated complex Figma design systems into reusable components, and optimized client-side caching.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Material UI"],
  },
];

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
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              2+ years of production experience delivering scalable SaaS platforms, enterprise CRMs, and client web apps.
            </p>
          </div>
        </div>

        {/* 2-Column Layout: Left Modern Experience Cards (7 cols) + Right Education & Credentials (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Work Experience Stream */}
          <div className="lg:col-span-8 space-y-5">
            {careerRoles.map((item) => (
              <div
                key={item.role + item.company}
                className="group relative rounded-3xl border border-white/10 bg-zinc-950/75 backdrop-blur-2xl p-6 sm:p-7 transition-all duration-300 hover:border-purple-400/40 hover:-translate-y-1 shadow-[0_10px_35px_rgba(0,0,0,0.25)]"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-xs">
                      <span className="font-semibold text-purple-400">{item.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 font-mono">{item.location}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-zinc-300 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 w-fit shrink-0">
                    {item.period}
                  </span>
                </div>

                {/* Modern One-Line Executive Scope (No raw CV bullets) */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-3 mb-5 font-normal">
                  {item.focus}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 group-hover:border-purple-400/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Credentials Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-950/75 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.25)]">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-base">
                  🎓
                </span>
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
                  <span className="text-zinc-400">Availability:</span>
                  <span className="text-emerald-400 font-semibold">Immediate / Full-Time</span>
                </div>
              </div>
            </div>

            {/* Recruiter Summary Card */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-2xl p-6 text-xs text-zinc-300 leading-relaxed shadow-lg">
              <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Recruiter Summary</span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Available for full-time engineering positions and high-impact client contracts worldwide. Direct 1-on-1 communication via WhatsApp &amp; Google Meet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
