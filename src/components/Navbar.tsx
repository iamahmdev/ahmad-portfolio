"use client";
import React, { useState } from "react";
import { navItems } from "@/config/profile";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "#contact");
  };

  return (
    <header className="hd">
      <div className="in">
        <a className="logo" href="#top" aria-label="Ahmad, home">
          <img src="/logo.jpg" alt="Ahmad Iqbal" />
          Ahmad
        </a>
        <nav className="links" aria-label="Main">
          {navItems.map((n) => (
            <a
              key={n}
              href={"#" + n.toLowerCase()}
              className={activeSection === n.toLowerCase() ? "on" : ""}
              onClick={n.toLowerCase() === "contact" ? scrollToContact : undefined}
            >
              {n}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn c" href="#contact" onClick={scrollToContact}>
            Hire me
          </a>
          <button
            className="bg"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>
      <nav className={"menu" + (open ? " o" : "")} aria-label="Mobile">
        {navItems.map((n) => (
          <a
            key={n}
            href={"#" + n.toLowerCase()}
            onClick={(e) => {
              setOpen(false);
              if (n.toLowerCase() === "contact") {
                scrollToContact(e);
              }
            }}
          >
            {n}
          </a>
        ))}
      </nav>
    </header>
  );
}
