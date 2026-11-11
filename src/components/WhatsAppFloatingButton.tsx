"use client";
import React, { useState } from "react";
import { me } from "@/config/profile";

export default function WhatsAppFloatingButton() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const prefilledUrl = `${me.whatsapp}?text=${encodeURIComponent(
    "Hi Ahmad, I'd like to discuss a project."
  )}`;

  return (
    <aside
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 no-print"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      aria-label="Direct WhatsApp contact"
    >
      {/* Tooltip speech bubble */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-950/95 border border-white/15 text-xs text-white shadow-2xl transition-all duration-300 ${
          tooltipVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-medium">Chat with Ahmad on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={prefilledUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ahmad Iqbal on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing Outer Ping */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 pointer-events-none" />

        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.134.301-.35.452-.526.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.678-1.635-.93-2.239-.244-.589-.493-.509-.678-.519-.176-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.512 1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.146 4.55.719.311 1.28.497 1.718.636.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.287A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.635 0-3.15-.472-4.43-1.287l-.317-.2-2.909.763.776-2.836-.207-.33A8.134 8.134 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
        </svg>
      </a>
    </aside>
  );
}

