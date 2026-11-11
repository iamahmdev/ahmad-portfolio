"use client";
import React, { useState } from "react";
import { SectionPolygons } from "@/components/AmbientBackground";

interface SkillItem {
  name: string;
  level: "Daily Production" | "Proficient" | "Workflow";
  badge?: string;
}

interface SkillCategory {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  color: string;
  borderGlow: string;
  tagColor: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories: SkillCategory[] = [
    {
      id: "core",
      tabLabel: "Core Stack",
      title: "Core Full-Stack Engine",
      subtitle: "Primary daily production stack for client platforms & SaaS",
      color: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderGlow: "hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)]",
      tagColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      skills: [
        { name: "React.js 18", level: "Daily Production", badge: "Primary" },
        { name: "Next.js 14", level: "Daily Production", badge: "SSR / App Router" },
        { name: "TypeScript", level: "Daily Production", badge: "Strict Type Safety" },
        { name: "Node.js", level: "Daily Production", badge: "Backend Runtime" },
        { name: "Express.js", level: "Daily Production", badge: "REST Framework" },
        { name: "MongoDB", level: "Daily Production", badge: "NoSQL DB" },
      ],
    },
    {
      id: "frontend",
      tabLabel: "Frontend",
      title: "Modern UI & Frontend Engineering",
      subtitle: "Pixel-perfect, accessible, and responsive user interfaces",
      color: "from-sky-500/20 via-blue-500/10 to-transparent",
      borderGlow: "hover:border-sky-400/50 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)]",
      tagColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      skills: [
        { name: "Tailwind CSS", level: "Daily Production", badge: "Utility-First" },
        { name: "Framer Motion", level: "Proficient", badge: "Fluid Micro-Interactions" },
        { name: "Material UI (MUI)", level: "Proficient" },
        { name: "Responsive Mobile-First", level: "Daily Production" },
        { name: "HTML5 & Modern CSS3", level: "Daily Production" },
        { name: "JavaScript (ES6+)", level: "Daily Production" },
      ],
    },
    {
      id: "backend",
      tabLabel: "Backend",
      title: "Backend, APIs & Database",
      subtitle: "Secure schema design, authentication, and RESTful endpoints",
      color: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderGlow: "hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]",
      tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      skills: [
        { name: "RESTful API Architecture", level: "Daily Production", badge: "Endpoints" },
        { name: "JWT & RBAC Auth", level: "Daily Production", badge: "Security" },
        { name: "Mongoose ODM", level: "Daily Production", badge: "Data Models" },
        { name: "CRUD & Aggregations", level: "Daily Production" },
        { name: "API Rate Limiting", level: "Proficient" },
        { name: "CORS & Middleware", level: "Daily Production" },
      ],
    },
    {
      id: "state",
      tabLabel: "State & Data",
      title: "State & Asynchronous Data Caching",
      subtitle: "Optimistic updates, real-time client state, and sync",
      color: "from-indigo-500/20 via-purple-500/10 to-transparent",
      borderGlow: "hover:border-indigo-400/50 hover:shadow-[0_0_35px_rgba(129,140,248,0.2)]",
      tagColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      skills: [
        { name: "Redux Toolkit (RTK)", level: "Daily Production", badge: "Global State" },
        { name: "TanStack Query", level: "Daily Production", badge: "Server Cache" },
        { name: "Zustand", level: "Proficient", badge: "Lightweight" },
        { name: "React Context API", level: "Daily Production" },
        { name: "Axios Client", level: "Daily Production", badge: "Interceptors" },
        { name: "Local & Session Storage", level: "Daily Production" },
      ],
    },
    {
      id: "tools",
      tabLabel: "Tools",
      title: "Developer Tools & Testing",
      subtitle: "Version control, API validation, and production workflows",
      color: "from-amber-500/20 via-orange-500/10 to-transparent",
      borderGlow: "hover:border-amber-400/50 hover:shadow-[0_0_35px_rgba(251,191,36,0.2)]",
      tagColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      skills: [
        { name: "Git & GitHub", level: "Daily Production", badge: "Branching & PRs" },
        { name: "Vercel Cloud", level: "Daily Production", badge: "Deployments" },
        { name: "Postman", level: "Daily Production", badge: "API Testing" },
        { name: "Figma to React", level: "Daily Production", badge: "Pixel-Perfect" },
        { name: "Jest", level: "Proficient", badge: "Testing" },
        { name: "npm / pnpm / yarn", level: "Daily Production" },
      ],
    },
    {
      id: "ai",
      tabLabel: "AI Workflow",
      title: "AI-Assisted Vibe Coding",
      subtitle: "Accelerated engineering workflows shipping features ~40% faster",
      color: "from-pink-500/20 via-purple-500/10 to-transparent",
      borderGlow: "hover:border-pink-400/50 hover:shadow-[0_0_35px_rgba(244,114,182,0.2)]",
      tagColor: "bg-pink-500/10 text-pink-300 border-pink-500/20",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      ),
      skills: [
        { name: "Cursor AI IDE", level: "Daily Production", badge: "High Velocity" },
        { name: "Claude 3.7 / 3.5", level: "Daily Production", badge: "Architecture & Code" },
        { name: "GitHub Copilot", level: "Daily Production", badge: "Inline Assist" },
        { name: "Antigravity", level: "Daily Production", badge: "Agentic Workflows" },
        { name: "Rapid Prototyping", level: "Daily Production", badge: "MVP in Days" },
        { name: "Codex & Automation", level: "Workflow" },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "all" ? categories : categories.filter((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="min-h-0 md:min-h-screen py-20 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto w-full relative overflow-hidden"
    >
      <SectionPolygons />

      <div className="relative z-10">
        {/* Recruiter-Centric Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Engineering Capabilities &amp; Stack
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              Production-verified technologies, frameworks, and AI-accelerated workflows used to ship 25+ production client applications.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/10 w-fit">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                activeTab === "all"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Capabilities
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveTab(c.id)}
                className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all ${
                  activeTab === c.id
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {c.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className={`group relative rounded-3xl border border-white/10 bg-gradient-to-b ${cat.color} bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${cat.borderGlow}`}
            >
              <div>
                {/* Header with Icon and Subtitle */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400">
                    {cat.skills.length} Technologies
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                  {cat.subtitle}
                </p>

                {/* Skill Chips with Depth Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/25 transition-all text-xs"
                    >
                      <span className="font-semibold text-zinc-200 group-hover/chip:text-white transition-colors">
                        {skill.name}
                      </span>
                      {skill.badge && (
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${cat.tagColor}`}>
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Proof Note */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Production Verified</span>
                </span>
                <span className="text-zinc-400 group-hover:text-purple-300 transition-colors">
                  2+ Years
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
