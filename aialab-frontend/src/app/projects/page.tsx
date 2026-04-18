"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { MOCK_PROJECTS } from "@/lib/mock-data";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const step = 1;
    const intervalTime = 30;

    const autoScroll = setInterval(() => {
      if (slider) {
        slider.scrollLeft += step;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
    }, intervalTime);

    return () => clearInterval(autoScroll);
  }, [activeFilter]); // Restart scroll if filter changes

  const projects = MOCK_PROJECTS;


  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.cat === activeFilter || p.category?.toLowerCase().includes(activeFilter));


  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '180px 60px 100px' }}>
        <section className="glass-panel" style={{ paddingTop: 0 }}>
          <h2 style={{ marginBottom: '24px' }}>Notre <em>Portfolio de Master.</em></h2>
          <p style={{ marginBottom: '48px' }}>
            Découvrez comment nous transformons les marques à travers le design, la technologie et la stratégie numérique.
          </p>

          {/* FILTER BAR */}
          <div className="filter-bar">
            {[
              { key: 'all', label: 'Tous' },
              { key: 'branding', label: 'Branding' },
              { key: 'web', label: 'Web Design' },
              { key: 'digital', label: 'Digital' },
            ].map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* MASTER SLIDER */}
          <div className="slider-wrap" id="master-portfolio-slider" ref={scrollRef}>
            {filtered.map((project, i) => (
              <Link key={i} href={`/projects/${project.slug}`} className="p-item" style={{ backgroundColor: project.color }}>
                <div className="p-over" />
                <div className="p-info">
                  <span>{project.category}</span>
                  <h4>{project.title}</h4>
                </div>
              </Link>
            ))}
          </div>

        </section>
      </div>
      <Footer />
    </main>
  );
}
