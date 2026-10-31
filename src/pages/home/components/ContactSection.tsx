"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Tilt from "@/components/Tilt";
import { me } from "@/config/profile";

interface ContactOption {
  id: string;
  name: string;
  handle: string;
  description: string;
  href: string;
  actionText: string;
  accentColor: string;
  accentBg: string;
  glowColor: string;
  isExternal: boolean;
  hasLiveBadge?: boolean;
  icon: React.ReactNode;
}

export default function ContactSection() {
  const contactOptions: ContactOption[] = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      handle: me.phone,
      description: "Direct real-time chat for freelance contracts, urgent inquiries, and project kickoffs.",
      href: `${me.whatsapp}?text=${encodeURIComponent(
        "Hi Ahmad, I came across your portfolio and would like to discuss an opportunity!"
      )}`,
      actionText: "Chat on WhatsApp",
      accentColor: "#25D366",
      accentBg: "rgba(37, 211, 102, 0.14)",
      glowColor: "rgba(37, 211, 102, 0.35)",
      isExternal: true,
      hasLiveBadge: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.134.301-.35.452-.526.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.678-1.635-.93-2.239-.244-.589-.493-.509-.678-.519-.176-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.512 1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.146 4.55.719.311 1.28.497 1.718.636.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.287A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.635 0-3.15-.472-4.43-1.287l-.317-.2-2.909.763.776-2.836-.207-.33A8.134 8.134 0 013.833 12c0-4.503 3.664-8.167 8.167-8.167 4.503 0 8.167 3.664 8.167 8.167 0 4.503-3.664 8.167-8.167 8.167z" />
        </svg>
      ),
    },
    {
      id: "email",
      name: "Direct Email",
      handle: me.email,
      description: "Send project briefs, official job offers, or detailed scope documents directly to my inbox.",
      href: `mailto:${me.email}?subject=${encodeURIComponent("Project Inquiry / Job Opportunity")}`,
      actionText: "Send an Email",
      accentColor: "#38bdf8",
      accentBg: "rgba(56, 189, 248, 0.14)",
      glowColor: "rgba(56, 189, 248, 0.35)",
      isExternal: false,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "in/iahmadiqbal",
      description: "Explore my professional career, verified recommendations, network connections, and endorsements.",
      href: me.linkedin,
      actionText: "View LinkedIn Profile",
      accentColor: "#38bdf8",
      accentBg: "rgba(10, 102, 194, 0.18)",
      glowColor: "rgba(10, 102, 194, 0.4)",
      isExternal: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      id: "github",
      name: "GitHub",
      handle: "github.com/iamahmdev",
      description: "Review open-source repositories, developer activity, architecture patterns, and technical work.",
      href: me.github,
      actionText: "Follow on GitHub",
      accentColor: "#c084fc",
      accentBg: "rgba(192, 132, 252, 0.16)",
      glowColor: "rgba(192, 132, 252, 0.35)",
      isExternal: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact">
      <div className="wrap">
        <SectionHeader
          t="Let's Connect"
          p="I'm always open to discussing new opportunities, full-time engineering roles, high-impact freelance projects, or tech collaborations. Reach out directly on your preferred channel!"
        />

        <div className="contact-grid">
          {contactOptions.map((opt, i) => (
            <Tilt key={opt.id} delay={(i % 2) * 0.1}>
              <a
                href={opt.href}
                target={opt.isExternal ? "_blank" : undefined}
                rel={opt.isExternal ? "noopener noreferrer" : undefined}
                className="contact-card"
                aria-label={`${opt.actionText}: ${opt.name}`}
                style={
                  {
                    "--card-accent": opt.accentColor,
                    "--card-accent-bg": opt.accentBg,
                    "--card-glow": opt.glowColor,
                  } as React.CSSProperties
                }
              >
                <div className="contact-card-top">
                  <div className="contact-icon-box">{opt.icon}</div>
                  <div className="contact-arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                <div className="contact-card-body">
                  <h3>
                    {opt.name}
                    {opt.hasLiveBadge && <span className="contact-live-dot" title="Online & active" />}
                  </h3>
                  <span className="contact-handle">{opt.handle}</span>
                  <p>{opt.description}</p>
                </div>

                <div className="contact-action-badge">
                  <span>{opt.actionText}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
            </Tilt>
          ))}
        </div>

        <div className="contact-status-bar">
          <span>
            <i className="contact-live-dot" />
            <span>Available for full-time roles & freelance contracts worldwide</span>
          </span>
          <span className="contact-reply-time">⚡ Typical response time: under 24 hours</span>
        </div>
      </div>
    </section>
  );
}
