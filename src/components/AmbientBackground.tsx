import React from "react";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Top Left Purple Glow */}
      <div className="absolute top-[5%] left-[5%] w-80 h-80 rounded-full bg-purple-600/10 dark:bg-purple-600/12 light:bg-purple-300/20 blur-[100px] animate-pulse-glow" />

      {/* Center Right Indigo Glow */}
      <div className="absolute top-[45%] right-[8%] w-96 h-96 rounded-full bg-indigo-600/10 dark:bg-indigo-600/10 light:bg-indigo-300/15 blur-[100px]" />

      {/* Bottom Left Sky/Cyan subtle light */}
      <div className="absolute bottom-[15%] left-[15%] w-72 h-72 rounded-full bg-sky-500/8 dark:bg-sky-500/8 light:bg-sky-300/15 blur-[90px]" />

      {/* Subtle center ambient ring */}
      <div className="absolute top-[25%] right-[35%] w-60 h-60 rounded-full bg-pink-600/8 dark:bg-pink-600/8 light:bg-pink-300/15 blur-[80px]" />
    </div>
  );
}

export function SectionPolygons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute top-[8%] right-[10%] w-14 h-18 opacity-15 dark:opacity-20 light:opacity-5"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          background: "#6366f1",
        }}
      />
      <div
        className="absolute bottom-[20%] left-[6%] w-10 h-14 opacity-15 dark:opacity-20 light:opacity-5"
        style={{
          clipPath: "polygon(50% 0%, 100% 40%, 100% 100%, 0% 100%, 0% 40%)",
          background: "#a855f7",
        }}
      />
      <div
        className="absolute bottom-[8%] right-[18%] w-12 h-16 opacity-15 dark:opacity-20 light:opacity-5"
        style={{
          clipPath: "polygon(50% 0%, 100% 35%, 80% 100%, 20% 100%, 0% 35%)",
          background: "#ec4899",
        }}
      />
    </div>
  );
}
