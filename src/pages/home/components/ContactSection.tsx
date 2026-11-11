"use client";
import React, { useState } from "react";
import StarBorder from "@/components/StarBorder";
import { SectionPolygons } from "@/components/AmbientBackground";
import { me } from "@/config/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(me.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactMethods = [
    {
      title: "WhatsApp Chat",
      value: me.phone,
      action: "Send Message",
      href: `${me.whatsapp}?text=${encodeURIComponent(
        "Hi Ahmad, I'd like to discuss a project."
      )}`,
      badge: "Instant Reply",
      color: "text-emerald-400",
      border: "hover:border-emerald-500/50",
      glow: "hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
      isPrimary: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.134.301-.35.452-.526.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.678-1.635-.93-2.239-.244-.589-.493-.509-.678-.519-.176-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.512 1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.146 4.55.719.311 1.28.497 1.718.636.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.287A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.635 0-3.15-.472-4.43-1.287l-.317-.2-2.909.763.776-2.836-.207-.33A8.134 8.134 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
        </svg>
      ),
    },
    {
      title: "Direct Email",
      value: me.email,
      action: "Send Email",
      href: `mailto:${me.email}?subject=${encodeURIComponent("Project Inquiry / Job Opportunity")}`,
      badge: "Inquiries & Offers",
      color: "text-sky-400",
      border: "hover:border-sky-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
      isPrimary: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      title: "LinkedIn Profile",
      value: "linkedin.com/in/iahmadiqbal",
      action: "Connect",
      href: me.linkedin,
      badge: "Professional Network",
      color: "text-blue-400",
      border: "hover:border-blue-500/40",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      isPrimary: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      title: "GitHub Repositories",
      value: "github.com/iamahmdev",
      action: "Explore Code",
      href: me.github,
      badge: "Open Source",
      color: "text-zinc-300",
      border: "hover:border-zinc-400/40",
      glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
      isPrimary: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-0 md:min-h-screen py-16 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto w-full relative overflow-hidden"
    >
      <SectionPolygons />

      <div className="relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Exceptional.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Direct communication, clear milestone scoping, and production delivery. Connect directly with Ahmad below.
            </p>
          </div>
        </div>

        {/* Central CV Download Card */}
        <div className="relative rounded-3xl border border-white/15 bg-zinc-950/85 p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden mb-8 md:mb-10">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                Download Official Resume
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Get a verified one-page summary of my full-stack engineering background, production case studies, tech stack, and measurable business impact.
              </p>
            </div>

            {/* Direct Instant Download Resume Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <StarBorder
                as="a"
                href="/Ahmad_Iqbal_CV.pdf"
                download="Ahmad_Iqbal_Resume.pdf"
                color="magenta"
                speed="4s"
                className="[&_.inner-content]:!py-3.5 [&_.inner-content]:!px-8 [&_.inner-content]:!text-base [&_.inner-content]:!font-bold [&_.inner-content]:!bg-white [&_.inner-content]:!text-black [&_.inner-content]:hover:!bg-zinc-200 shadow-md cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Resume (PDF)</span>
              </StarBorder>

              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-sm text-zinc-300 hover:text-white transition-all cursor-pointer font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>{copied ? "Email Copied! ✓" : "Copy Email"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Interactive Contact Channels with Top WhatsApp Priority */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                method.isPrimary
                  ? "bg-emerald-950/30 border-emerald-500/40 shadow-sm"
                  : "bg-zinc-950/75 border-white/10"
              } ${method.border} ${method.glow}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl bg-white/[0.05] border border-white/10 ${method.color} group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                  method.isPrimary
                    ? "text-emerald-400 bg-emerald-500/20 border border-emerald-500/30"
                    : "text-zinc-400 bg-white/[0.03] border border-white/5"
                }`}>
                  {method.badge}
                </span>
              </div>

              <h4 className="text-white font-bold text-base mb-1 group-hover:text-purple-400 transition-colors">
                {method.title}
              </h4>
              <p className="text-xs text-zinc-400 font-mono truncate mb-4">
                {method.value}
              </p>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 group-hover:text-purple-400 transition-colors">
                <span>{method.action}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
