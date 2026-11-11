"use client";
import React from "react";
import StarBorder from "@/components/StarBorder";
import { SectionPolygons } from "@/components/AmbientBackground";
import TechVisual3D from "@/components/TechVisual3D";
import { me } from "@/config/profile";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-0 md:min-h-screen py-12 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto w-full pt-28 md:pt-24 pb-12 relative overflow-hidden flex items-center"
    >
      <SectionPolygons />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-h-[auto] md:min-h-[80vh]">
        {/* Left Column: Heading, Bio, CTAs, Proof badges (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left w-full z-10">
          {/* Sleek status bar without bulky borders */}
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs sm:text-sm font-mono text-zinc-400">
              <span className="text-white font-medium">Ahmad Iqbal</span>
              <span className="text-zinc-600 mx-2">·</span>
              <span className="text-purple-300 font-medium">BS Software Engineering (BSSE)</span>
              <span className="text-zinc-600 mx-2">·</span>
              <span className="text-emerald-400 font-medium">Available</span>
            </span>
          </div>

          {/* High-contrast distinctive typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight">
            Building scalable MERN apps that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              scale businesses.
            </span>
          </h1>

          <p className="mt-5 md:mt-6 text-zinc-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
            Full Stack MERN Developer with 2+ years of production experience. I engineer scalable CRM platforms, admin dashboards, e-commerce stores, and client portals with TypeScript and AI-assisted workflows.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
            <StarBorder
              as="a"
              href="#projects"
              color="magenta"
              className="[&_.inner-content]:!bg-white [&_.inner-content]:!text-black [&_.inner-content]:!font-semibold [&_.inner-content]:hover:!bg-zinc-200 [&_.inner-content]:!text-sm [&_.inner-content]:!py-2.5 [&_.inner-content]:!px-6 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              <span>Explore Projects</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </StarBorder>

            {/* Contact Action */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 hover:border-purple-400/50 text-white transition-all shadow-sm"
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
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 transition-all shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Social proof counters from CV */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-white/10 max-w-lg">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">25+</p>
              <p className="text-xs text-zinc-400 mt-0.5 font-medium">Delivered Apps</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">~30%</p>
              <p className="text-xs text-zinc-400 mt-0.5 font-medium">Time Saved with CRM</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-purple-400">~40%</p>
              <p className="text-xs text-zinc-400 mt-0.5 font-medium">Faster Component Build</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive WebGL Visual (NO photo) (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-8 lg:mt-0">
          <TechVisual3D />
        </div>
      </div>
    </section>
  );
}
