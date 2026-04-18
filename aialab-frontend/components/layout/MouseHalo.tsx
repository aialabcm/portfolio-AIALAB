"use client";

import { useEffect, useRef } from "react";

export default function MouseHalo() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (haloRef.current) {
        haloRef.current.style.left = e.clientX + 'px';
        haloRef.current.style.top = e.clientY + 'px';
      }
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={haloRef} className="mouse-halo" />;
}
