import React from "react";
import { me } from "@/config/profile";

export default function WhatsAppButton() {
  return (
    <a
      className="wa"
      href={me.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.6 1 1.3 1.8 2.3 2.3.3.2.5.1.7-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.5.3.1.2.1.8-.1 1.4z" />
      </svg>
    </a>
  );
}
