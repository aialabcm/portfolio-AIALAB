"use client";

import React, { useRef, useEffect } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/lib/types";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { useReveal } from "@/lib/hooks/useReveal";

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const t = useTranslations("projects");
  const { ref, isRevealed } = useReveal();
  const sliderRef = useRef<HTMLDivElement>(null);

  if (!projects || projects.length === 0) return null;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }, 4000);
    };

    const stopAutoScroll = () => clearInterval(intervalId);

    startAutoScroll();
    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);
    slider.addEventListener('touchstart', stopAutoScroll);

    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <section ref={ref} className={`glass-panel ${isRevealed ? 'revealed is-revealed' : ''}`} style={{ padding: 'var(--s-4xl) var(--s-2xl)' }}>
      <h2 className={`reveal ${isRevealed ? 'is-revealed' : ''}`} style={{ marginBottom: 'var(--s-2xl)' }}>
        {t.rich("slider_title", { em: (chunks) => <em>{chunks}</em> })}
      </h2>
      <div className="slider-wrap" id="main-slider" ref={sliderRef}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div style={{ marginTop: 'var(--s-3xl)', display: 'flex', justifyContent: 'center' }}>
        <Link href="/projects" className="pill pill-glass">
          {t("btn_all")}
        </Link>
      </div>
    </section>
  );
}
