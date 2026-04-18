"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/lib/mock-data";

export default function ProjectsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const step = 1;
    const intervalTime = 30;

    const autoScroll = setInterval(() => {
      if (slider) {
        slider.scrollLeft += step;
        
        // Loop back to start if we reach the end
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
    }, intervalTime);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="glass-panel" style={{ padding: '120px 40px', position: 'relative' }}>
      <div className="flex justify-between items-end mb-10">
        <h2 className="reveal" style={{ marginBottom: 0 }}>Dernières <em>masterpieces.</em></h2>
      </div>
      <div className="slider-wrap" id="main-slider" ref={scrollRef}>
        {MOCK_PROJECTS.map((project, i) => (
          <Link key={i} href={`/projects/${project.slug}`} className="p-item" style={{ backgroundColor: project.color }}>
            <div className="p-over" />
            <div className="p-info">
              <span>{project.category}</span>
              <h4>{project.title}</h4>
            </div>
          </Link>
        ))}
        {/* Duplicate items for a smoother loop effect if needed, 
            but for now a reset to 0 is sufficient for basic auto-scroll */}
      </div>


      <div style={{ marginTop: '60px' }}>
        <Link href="/projects" className="btn-master">Voir tout le portfolio</Link>
      </div>
    </section>
  );
}
