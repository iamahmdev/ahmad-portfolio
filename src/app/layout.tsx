import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import type { Metadata } from "next";
import React from "react";

const f = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f" });

export const metadata: Metadata = {
  title: "Ahmad Iqbal | MERN Stack Developer",
  description:
    "Full-stack MERN developer building fast, animated, production-ready web apps with React, Next.js, Node.js and MongoDB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={f.variable}>{children}</body>
    </html>
  );
}
