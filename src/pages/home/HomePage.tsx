"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Agent from "@/components/Agent";
import HeroSection from "./components/HeroSection";
import WorriesSection from "./components/WorriesSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { navItems } from "@/config/profile";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function HomePage() {
  const [on, setOn] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setOn(e.target.id)),
      { threshold: 0.35 }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.toLowerCase());
      if (el) io.observe(el);
    });

    const rv = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) => e.isIntersecting && (e.target.classList.add("v"), rv.unobserve(e.target))
        ),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".rv").forEach((el) => rv.observe(el));

    return () => {
      io.disconnect();
      rv.disconnect();
    };
  }, []);

  return (
    <>
      <Scene />
      <Navbar activeSection={on} />
      <main id="top">
        <HeroSection />
        <WorriesSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Agent />
    </>
  );
}
