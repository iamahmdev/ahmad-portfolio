"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { skillsList } from "../data/home.data";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHeader t="Skills" p="The tools I use every day." />
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
