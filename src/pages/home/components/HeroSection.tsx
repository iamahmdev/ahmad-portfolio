"use client";
import React from "react";
import StarBorder from "@/components/StarBorder";
import { SectionPolygons } from "@/components/AmbientBackground";
import { me } from "@/config/profile";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-0 md:min-h-screen py-16 px-4 sm:px-6 md:px-0 max-w-5xl mx-auto w-full pt-32 md:pt-36 pb-16 relative overflow-hidden flex items-center"
    >
      <SectionPolygons />

      <div className="relative z-10 w-full">
        {/* High-contrast distinctive typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
          Building scalable MERN apps that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            scale businesses.
          </span>
        </h1>

        <p className="mt-6 md:mt-8 text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
          Hi, I&apos;m <span className="text-white font-bold">Ahmad Iqbal</span> — Full Stack MERN Developer with 2+ years of professional experience across React, Next.js, Node.js, TypeScript, and MongoDB. I engineer scalable CRM platforms, admin dashboards, e-commerce stores, and client portals with AI-assisted workflows.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 md:mt-10">
          <StarBorder
            as="a"
            href="#projects"
            color="magenta"
            className="[&_.inner-content]:!bg-white [&_.inner-content]:!text-black [&_.inner-content]:!font-semibold [&_.inner-content]:hover:!bg-zinc-200 [&_.inner-content]:!text-sm [&_.inner-content]:!py-3 [&_.inner-content]:!px-7 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <span>Explore Projects</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </StarBorder>

          {/* Contact Action */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-6 py-3 rounded-2xl bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 hover:border-purple-400/50 text-white transition-all shadow-sm"
          >
            <span>Get in Touch</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href={`${me.whatsapp}?text=${encodeURIComponent("Hi Ahmad, I came across your portfolio and would like to discuss a project!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 transition-all shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>WhatsApp Chat</span>
          </a>
        </div>

        {/* Social Proof Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-12 pt-10 border-t border-white/10 w-full">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl">
            <p className="text-2xl sm:text-3xl font-extrabold text-white">2+ Years</p>
            <p className="text-xs text-zinc-400 mt-1 font-medium">Production Experience</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">25+</p>
            <p className="text-xs text-zinc-400 mt-1 font-medium">Delivered Web Apps</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl">
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-400">~30%</p>
            <p className="text-xs text-zinc-400 mt-1 font-medium">CRM Manual Tracking Cut</p>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl">
            <p className="text-2xl sm:text-3xl font-extrabold text-sky-400">~40%</p>
            <p className="text-xs text-zinc-400 mt-1 font-medium">Faster Component Build</p>
          </div>
        </div>
      </div>
    </section>
  );
}
