"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Tilt from "@/components/Tilt";
import { faqList } from "../data/home.data";
import { me } from "@/config/profile";

export default function WorriesSection() {
  return (
    <section id="worries">
      <div className="wrap">
        <SectionHeader
          t="Questions every client asks"
          p="Before hiring a developer, most people worry about the same things. Here are my straight answers."
        />
        <div className="grid">
          {faqList.map((c, i) => (
            <Tilt key={c[0]} delay={(i % 3) * 0.1}>
              <h3>{c[0]}</h3>
              <p>{c[1]}</p>
            </Tilt>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <a className="btn c" href="#contact">
            Get a free quote
          </a>
          <a className="btn w" href={me.whatsapp} target="_blank" rel="noopener">
            Ask me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
