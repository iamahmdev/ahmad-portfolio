"use client";
import React, { useEffect, useState } from "react";
import { typingRoles } from "@/config/profile";

export default function Typer() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);

  useEffect(() => {
    const w = typingRoles[i];
    const t = setTimeout(
      () =>
        n < w.length
          ? setN(n + 1)
          : setTimeout(() => {
              setN(0);
              setI((i + 1) % typingRoles.length);
            }, 1400),
      70
    );
    return () => clearTimeout(t);
  }, [n, i]);

  return <div className="type">{typingRoles[i].slice(0, n)}|</div>;
}
