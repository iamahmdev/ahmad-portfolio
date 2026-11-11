"use client";
import React from "react";
import { me } from "@/config/profile";
import { jobsList, educationList, skillsList, projectsList } from "@/pages/home/data/home.data";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-zinc-950 border border-white/20 shadow-2xl overflow-hidden text-zinc-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/90 no-print">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 font-mono text-xs font-bold border border-purple-500/40">
              PDF
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-none">
                Ahmad_Iqbal_CV.pdf
              </h3>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Full Stack Developer (MERN Stack) · Official Curriculum Vitae
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-colors cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Print / Save PDF</span>
            </button>

            <a
              href={me.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-medium text-white transition-colors"
            >
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close CV preview"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-zinc-950 font-sans text-xs sm:text-sm leading-relaxed space-y-6">
          {/* Header */}
          <div className="border-b border-white/15 pb-5 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ahmad Iqbal
            </h1>
            <p className="text-sm sm:text-base font-semibold text-purple-400 mt-1">
              Full Stack Developer (MERN Stack)
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-zinc-400 mt-2 font-mono">
              <span>Lahore, Pakistan</span>
              <span>•</span>
              <a href={`tel:${me.phone}`} className="hover:text-white">{me.phone}</a>
              <span>•</span>
              <a href={`mailto:${me.email}`} className="hover:text-white">{me.email}</a>
              <span>•</span>
              <a href={me.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">GitHub</a>
              <span>•</span>
              <a href={me.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">LinkedIn</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 border-b border-purple-500/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Full Stack Developer with 2+ years of professional experience in the MERN stack and TypeScript, building scalable CRM platforms, admin dashboards, SaaS products and client websites from requirements to production. Delivered 25+ web apps with strong React.js, Next.js, Node.js and Express expertise. Proven impact: cut manual tracking time by ~30% with an internal CRM and new-module build time by ~40% with reusable React components. AI-assisted development and vibe coding specialist using Claude, Cursor, Antigravity and GitHub Copilot to ship faster.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2.5 border-b border-purple-500/20 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-zinc-300">
              <p><strong className="text-white">Frontend:</strong> TypeScript, JavaScript (ES6+), React.js, Next.js, HTML5, CSS3</p>
              <p><strong className="text-white">Styling &amp; UI:</strong> Tailwind CSS, Material UI (MUI), Responsive Design</p>
              <p><strong className="text-white">State &amp; Data:</strong> Redux Toolkit, Zustand, Context API, TanStack Query</p>
              <p><strong className="text-white">Backend &amp; DB:</strong> Node.js, Express.js, RESTful APIs, Authentication, MongoDB</p>
              <p><strong className="text-white">Tools:</strong> Git, GitHub, Postman, Figma, Vercel, Jest</p>
              <p><strong className="text-white">AI-Assisted Dev:</strong> Vibe Coding, Claude, Cursor, Antigravity, GitHub Copilot, Codex</p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 border-b border-purple-500/20 pb-1">
              Work Experience
            </h2>
            <div className="space-y-4">
              {jobsList.map((job) => (
                <div key={job[0] + job[1]} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-sm">
                      {job[0]} — <span className="text-purple-300 font-normal">{job[1]}</span>
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">{job[2]}</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm pl-2 border-l border-white/10">
                    {job[3]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2.5 border-b border-purple-500/20 pb-1">
              Education &amp; Certification
            </h2>
            <div className="space-y-2">
              {educationList.map((edu) => (
                <div key={edu.degree} className="flex justify-between items-center text-zinc-300">
                  <div>
                    <strong className="text-white">{edu.degree}</strong>
                    <span className="text-zinc-400 text-xs block sm:inline sm:ml-2">({edu.institution})</span>
                  </div>
                  <span className="text-xs text-purple-300 font-mono">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects from CV */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 border-b border-purple-500/20 pb-1">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projectsList.slice(0, 4).map((p) => (
                <div key={p.id} className="pl-2 border-l border-purple-500/30">
                  <span className="font-bold text-white text-sm">{p.title}</span>
                  <span className="text-xs text-zinc-400 font-mono ml-2">({p.tags.join(", ")})</span>
                  <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mr-2">Languages:</span>
            <span className="text-white">Urdu, English</span>
          </div>
        </div>
      </div>
    </div>
  );
}

