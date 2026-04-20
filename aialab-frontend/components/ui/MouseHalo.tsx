"use client";

import React, { useEffect, useRef } from "react";

export default function MouseHalo() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (haloRef.current) {
        haloRef.current.style.left = `${e.clientX}px`;
        haloRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="halo" ref={haloRef} className="mouse-halo"></div>;
}
