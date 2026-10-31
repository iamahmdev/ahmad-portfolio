"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { skillsList } from "../data/home.data";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHeader
          t="Technical Skills & Expertise"
          p="Modern full-stack technologies and industry-standard tooling engineered for performance, security, and scalability."
        />
        {Object.entries(skillsList).map(([k, v]) => (
          <div key={k}>
            <div className="skh">{k}</div>
            <div className="chips">
              {v.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
