"use client";

import { useEffect, useRef, useState } from "react";

export default function SlideWrapper({
  isActive,
  children,
  className = "",
  variant = "white",
}: {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "soft";
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isActive]);

  const bgClass = variant === "soft" ? "slide-bg-soft" : "slide-bg-white";

  return (
    <div className={`slide bg-grid ${bgClass} ${className}`}>
      <div
        ref={ref}
        className={`slide-content w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 ${
          visible ? "visible" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
