"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Tilt from "@/components/Tilt";
import { projectsList } from "../data/home.data";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHeader
          t="Featured Projects"
          p="Real-world production applications, enterprise platforms, and client systems. Move your cursor over a card to experience 3D depth."
        />
        <div className="proj-grid">
          {projectsList.map((p, i) => (
            <Tilt key={p.id} delay={(i % 2) * 0.1}>
              <div className="proj-card">
                <div className="proj-media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="proj-cat-badge">{p.category}</span>
                  {p.liveUrl && (
                    <span className="proj-live-badge">
                      <i></i>Live Site
                    </span>
                  )}
                </div>

                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="proj-actions">
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-proj btn-live"
                        aria-label={`Live preview of ${p.title}`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Preview
                      </a>
                    ) : (
                      <span className="btn-proj btn-private">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Client Project · Proprietary
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
