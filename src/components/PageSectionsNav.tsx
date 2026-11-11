"use client";
import React from "react";

interface PageSectionsNavProps {
  activeSection: string;
}

const sections = [
  { id: "home", num: "00", label: "Home" },
  { id: "experience", num: "01", label: "Experience" },
  { id: "projects", num: "02", label: "Projects" },
  { id: "skills", num: "03", label: "Skills" },
  { id: "contact", num: "04", label: "Contact" },
];

export default function PageSectionsNav({ activeSection }: PageSectionsNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      className="fixed right-6 top-28 bottom-28 z-30 hidden xl:flex flex-col items-end h-[calc(100vh-14rem)]"
      aria-label="Section navigation"
    >
      <div className="relative flex flex-col items-end justify-between flex-1 w-full pr-2 min-h-0">
        <div className="absolute right-[7px] top-0 bottom-0 w-px bg-white/15" />
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollTo(sec.id)}
              className="relative flex items-center gap-3 group shrink-0 cursor-pointer bg-transparent border-none p-0 outline-none"
              aria-label={`Go to ${sec.label}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`text-[11px] font-mono tabular-nums transition-colors duration-200 ${
                  isActive ? "text-white font-bold" : "text-zinc-500 group-hover:text-zinc-300"
                }`}
              >
                {sec.num}
              </span>
              <span
                className={`block transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-1.5 h-8 bg-gradient-to-b from-purple-400 to-indigo-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                    : "w-0.5 h-3 bg-white/20 group-hover:bg-white/50"
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
}
