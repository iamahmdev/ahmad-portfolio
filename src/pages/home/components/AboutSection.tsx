"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Tilt from "@/components/Tilt";
import { me } from "@/config/profile";
import { aboutPillars } from "../data/home.data";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHeader t="About me" p={me.about} />
        <div className="grid">
          {aboutPillars.map((c, i) => (
            <Tilt key={c[0]} delay={(i % 3) * 0.1}>
              <h3>{c[0]}</h3>
              <p>{c[1]}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
