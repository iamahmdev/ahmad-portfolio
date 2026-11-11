"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageSectionsNav from "@/components/PageSectionsNav";
import { AmbientBackground } from "@/components/AmbientBackground";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const sectionIds = ["home", "skills", "projects", "contact"];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans relative text-zinc-100 selection:bg-purple-500/30 selection:text-white">
      {/* Dual atmospheric ambient lighting */}
      <AmbientBackground />

      {/* Top Header Navigation with Direct CV Download and Section Links */}
      <Navbar activeSection={activeSection} />

      {/* Right Vertical Page Section Indicator */}
      <PageSectionsNav activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <div className="pt-14 md:pt-20">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
