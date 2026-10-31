"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { jobsList } from "../data/home.data";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHeader
          t="Experience"
          p="Three years of shipping real products for real clients."
        />
        <div className="tl">
          {jobsList.map((j, i) => (
            <div key={j[0] + i} className="job rv">
              <small>{j[2]}</small>
              <h3>{j[0]}</h3>
              <small>{j[1]}</small>
              <p>{j[3]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
