import React from "react";

interface SectionHeaderProps {
  t: string;
  p: string;
}

export default function SectionHeader({ t, p }: SectionHeaderProps) {
  return (
    <>
      <h2>{t}</h2>
      <p className="lead">{p}</p>
    </>
  );
}
