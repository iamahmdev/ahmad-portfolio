"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Tilt from "@/components/Tilt";
import { servicesListDetailed, stepsList } from "../data/home.data";
import { me } from "@/config/profile";

function getServiceIcon(icon: string) {
  switch (icon) {
    case "layout":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "shopping-bag":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "layers":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "server":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "code":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "plug":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
    case "gauge":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "search":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
        </svg>
      );
  }
}

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHeader
          t="Services I Offer"
          p="I help businesses turn their ideas into powerful digital experiences through modern web technologies and scalable solutions."
        />

        <div className="services-grid">
          {servicesListDetailed.map((service, i) => (
            <Tilt key={service.id} delay={(i % 2) * 0.08}>
              <div className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">{getServiceIcon(service.icon)}</div>
                </div>

                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p className="service-desc">{service.description}</p>

                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span className="service-check">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="service-cta-link">
                    <span>Discuss Service</span>
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
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="service-banner">
          <div className="service-banner-content">
            <h3>Have a project in mind?</h3>
            <p>
              I help startups, enterprises, and ambitious founders turn concepts into high-performing production software. Let&apos;s build together!
            </p>
          </div>
          <div className="service-banner-actions">
            <a href="#contact" className="btn c">
              Let&apos;s Work Together
            </a>
            <a
              href={`${me.whatsapp}?text=${encodeURIComponent(
                "Hi Ahmad, I came across your services and would like to discuss a project!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Workflow Steps Section */}
        <h2 style={{ marginTop: 85 }}>How I work</h2>
        <p className="lead">
          The same four steps on every project, so you always know what happens next.
        </p>
        <div className="grid">
          {stepsList.map((c, i) => (
            <Tilt key={c[0]} delay={(i % 3) * 0.1}>
              <div className="n">{i + 1}</div>
              <h3>{c[0]}</h3>
              <p>{c[1]}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
