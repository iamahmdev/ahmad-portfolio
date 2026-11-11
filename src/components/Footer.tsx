import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 dark:border-white/10 light:border-black/10 bg-black/60 dark:bg-black/60 light:bg-white/80 backdrop-blur-md py-8 px-4 sm:px-6 no-print">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded font-mono font-bold w-6 h-5 text-xs bg-white text-black">
            &gt;_
          </span>
          <span className="font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
            © {new Date().getFullYear()} Ahmad Iqbal. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <a
            href="https://github.com/iamahmdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/iahmadiqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/923359348844"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="#home"
            className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
