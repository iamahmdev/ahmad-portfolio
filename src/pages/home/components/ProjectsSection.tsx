"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Tilt from "@/components/Tilt";
import { projectsList } from "../data/home.data";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHeader t="Projects" p="Selected work. Move your cursor over a card." />
        <div className="grid">
          {projectsList.map((p, i) => (
            <Tilt key={p[0]} delay={(i % 2) * 0.1}>
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
              <div>
                {p[2].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
