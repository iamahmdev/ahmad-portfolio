"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap">
        <SectionHeader
          t="Tell me about your project"
          p="Share your idea and I’ll reply with a free quote, usually within a day."
        />
        <ContactForm />
      </div>
    </section>
  );
}
