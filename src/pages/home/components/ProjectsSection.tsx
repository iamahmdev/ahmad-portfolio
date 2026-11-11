"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projectsList } from "../data/home.data";
import { SectionPolygons } from "@/components/AmbientBackground";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsList.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="min-h-0 md:min-h-screen py-16 px-4 sm:px-6 md:px-0 max-w-6xl mx-auto w-full relative"
    >
      <SectionPolygons />

      <div className="relative z-10">
        {/* Sticky Section Header & Category Filters Bar */}
        <div className="sticky top-16 md:top-20 z-20 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 py-4 mb-8 md:mb-10 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Featured Case Studies
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xl font-normal leading-relaxed">
                Production web applications, client portals, and bespoke SaaS platforms engineered for real businesses.
              </p>
            </div>

            {/* Category Filters Pill Bar */}
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-white text-black border-white font-bold shadow-md"
                      : "bg-white/[0.04] text-zinc-400 border-white/10 hover:border-purple-400/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl border border-white/15 dark:border-white/15 light:border-black/10 bg-zinc-950/75 dark:bg-zinc-950/75 light:bg-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-purple-400/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full cursor-pointer"
                    aria-label={`Open live site for ${project.title}`}
                  >
                    <Image
                      alt={`${project.title} platform screenshot`}
                      src={project.image}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </a>
                ) : (
                  <Image
                    alt={`${project.title} platform screenshot`}
                    src={project.image}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

                <div className="absolute right-3 top-3 flex items-center gap-2 z-10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black/80 border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-md backdrop-blur-md"
                      aria-label={`Visit ${project.title} site`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="absolute left-3 bottom-3 z-10">
                  <span className="text-[11px] font-bold text-purple-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-purple-500/30">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-lg font-bold leading-snug group-hover:text-purple-400 transition-colors">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-purple-400 transition-colors"
                      >
                        <span>{project.title}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-60 group-hover:opacity-100 transition-opacity">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors shrink-0"
                    >
                      <span>Live Demo</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
