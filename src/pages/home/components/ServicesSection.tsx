"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Tilt from "@/components/Tilt";
import { servicesList, stepsList } from "../data/home.data";

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHeader
          t="Services"
          p="What I can build for you, from a single landing page to a full-stack platform."
        />
        <div className="grid">
          {servicesList.map((c, i) => (
            <Tilt key={c[0]} delay={(i % 3) * 0.1}>
              <h3>{c[0]}</h3>
              <p>{c[1]}</p>
            </Tilt>
          ))}
        </div>

        <h2 style={{ marginTop: 80 }}>How I work</h2>
        <p className="lead">
          The same four steps on every project, so you always know what happens next.
        </p>
        <div className="grid">
          {stepsList.map((c, i) => (
            <Tilt key={c[0]} delay={(i % 3) * 0.1}>
              <div className="n">{i + 1}</div>
              <h3>{c[0]}</h3>
              <p>{c[1]}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
