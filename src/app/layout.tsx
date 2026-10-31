import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import type { Metadata } from "next";
import React from "react";

const f = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmad-portfolio-woad.vercel.app"),
  title: "Ahmad Iqbal | Full Stack MERN Developer & Next.js Specialist",
  description:
    "Ahmad Iqbal is a Full Stack MERN Developer & Next.js Specialist engineering high-performance web applications, enterprise dashboards, and scalable SaaS platforms for clients worldwide.",
  keywords: [
    "Ahmad Iqbal",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer Portfolio",
    "Remote Web Developer",
  ],
  authors: [{ name: "Ahmad Iqbal", url: "https://github.com/iamahmdev" }],
  creator: "Ahmad Iqbal",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmad-portfolio-woad.vercel.app",
    title: "Ahmad Iqbal | Full Stack MERN Developer & Next.js Specialist",
    description:
      "Engineering modern, high-performance web applications and scalable SaaS solutions. Available for remote projects worldwide.",
    siteName: "Ahmad Iqbal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Iqbal | Full Stack MERN Developer & Next.js Specialist",
    description:
      "Full-stack MERN & Next.js developer building fast, scalable, production web applications.",
  },
  alternates: {
    canonical: "https://ahmad-portfolio-woad.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmad Iqbal",
  jobTitle: "Full Stack MERN Developer",
  url: "https://ahmad-portfolio-woad.vercel.app",
  sameAs: [
    "https://github.com/iamahmdev",
    "https://linkedin.com/in/iahmadiqbal",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Web Performance Optimization",
  ],
  description:
    "Full Stack MERN & Next.js Developer building high-performance web applications and SaaS products for clients worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={f.variable}>{children}</body>
    </html>
  );
}
