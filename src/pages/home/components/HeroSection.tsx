"use client";
import React, { useRef } from "react";
import Typer from "./Typer";
import { me } from "@/config/profile";
import { proofStats } from "../data/home.data";

export default function HeroSection() {
  const hv = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hv.current) return;
    const r = hv.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    hv.current.style.transform = `rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg)`;
  };

  return (
    <section className="hero">
      <div className="wrap hg">
        <div>
          <div className="pill">
            <i></i>Available for new projects
          </div>
          <h1>
            I build websites and apps
            <br />
            <span className="grad">that win customers.</span>
          </h1>
          <p className="s">
            Hi, I’m Ahmad Iqbal, a MERN stack developer in Lahore. Fast Next.js websites, full-stack apps and dashboards, delivered on schedule.
          </p>
          <Typer />
          <div className="cta">
            <a className="btn c" href="#contact">
              Get a free quote
            </a>
            <a
              className="btn w"
              href={me.whatsapp + "?text=Hi%20Ahmad%2C%20I%20have%20a%20project%20idea."}
              target="_blank"
              rel="noopener"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="proof">
            {proofStats.map((p) => (
              <div key={p[1]}>
                <b className="grad">{p[0]}</b>
                <span>{p[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="hv"
          ref={hv}
          onMouseMove={move}
          onMouseLeave={() => {
            if (hv.current) hv.current.style.transform = "";
          }}
        >
          <div className="disc"></div>
          <img className="cut" src="/ahmad-cutout.webp" alt="Ahmad Iqbal, MERN stack developer" />
          <div className="gc" style={{ left: "-4%", top: "20%" }}>
            <b className="grad">30%</b>faster project setup
            <br />
            with AI tools
          </div>
          <div className="gc" style={{ right: "-5%", top: "42%", animationDelay: "-2s" }}>
            <b className="grad">20+</b>Figma screens
            <br />
            turned into code
          </div>
          <div className="plate">
            <b>Ahmad Iqbal</b>
            <span>MERN Stack Developer · Lahore</span>
            <em>
              <i></i>Replies within a day
            </em>
          </div>
        </div>
      </div>
    </section>
  );
}
