"use client";
import React, { useState } from "react";
import { navItems } from "@/config/profile";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [open, setOpen] = useState(false);

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
            >
              {n}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn c" href="#contact">
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
            onClick={() => setOpen(false)}
          >
            {n}
          </a>
        ))}
      </nav>
    </header>
  );
}
