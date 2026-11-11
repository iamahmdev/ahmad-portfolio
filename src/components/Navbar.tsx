"use client";
import React, { useState, useEffect } from "react";

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = "home" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300 no-print">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-xl border border-white/15 shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
            : "bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-lg"
        }`}
      >
        {/* Sleek Monogram Brand without personal picture */}
        <a
          href="#home"
          className="flex items-center gap-3 group text-white transition-transform hover:scale-102"
          aria-label="Ahmad Iqbal, Full Stack Developer"
        >
          {/* Stylized Tech Monogram */}
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-indigo-500/20 border border-white/20 text-white font-mono text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
            <span className="text-purple-400">&lt;</span>
            <span>AI</span>
            <span className="text-purple-400">/&gt;</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white transition-colors">
                Ahmad Iqbal
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 font-mono hidden sm:block">
              BSSE · Full Stack Developer
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black shadow-sm font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Contact CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Contact Jump */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contact</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto absolute top-20 left-4 right-4 bg-zinc-950/95 backdrop-blur-2xl border border-white/15 p-5 rounded-2xl shadow-2xl flex flex-col gap-3 animate-in">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Ahmad_Iqbal_CV.pdf"
            download="Ahmad_Iqbal_CV.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center text-xs font-semibold px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors"
          >
            Download CV (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
