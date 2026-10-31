"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { jobsList } from "../data/home.data";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeader
          t="Professional Experience"
          p="A proven track record of engineering and scaling production applications for international clients, high-growth startups, and agencies."
        />
        <div className="tl">
          {jobsList.map((j, i) => (
            <div key={j[0] + i} className="job rv">
              <span className="job-date">{j[2]}</span>
              <h3 className="job-title">{j[0]}</h3>
              <div className="job-company">{j[1]}</div>
              <p className="job-desc">{j[3]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
