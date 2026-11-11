"use client";
import React from "react";

interface StarBorderProps {
  as?: "button" | "a" | "span" | "div";
  href?: string;
  download?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  contentClassName?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export default function StarBorder({
  as: Component = "button",
  href,
  download,
  type = "button",
  className = "",
  contentClassName = "",
  color = "magenta",
  speed = "5s",
  children,
  onClick,
  target,
  rel,
  disabled,
}: StarBorderProps) {
  const commonProps = {
    className: `star-border-container ${className}`,
    style: { padding: "1px 0" },
    onClick,
  };

  const gradients = (
    <>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className={`inner-content ${contentClassName}`}>{children}</div>
    </>
  );

  if (Component === "a") {
    return (
      <a href={href} download={download} target={target} rel={rel} {...commonProps}>
        {gradients}
      </a>
    );
  }

  if (Component === "span") {
    return (
      <span {...commonProps} style={{ padding: "0px 0" }}>
        {gradients}
      </span>
    );
  }

  if (Component === "div") {
    return <div {...commonProps}>{gradients}</div>;
  }

  return (
    <button type={type} disabled={disabled} {...commonProps}>
      {gradients}
    </button>
  );
}

