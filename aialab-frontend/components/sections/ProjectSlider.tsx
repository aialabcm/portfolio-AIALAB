"use client";

import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/lib/types";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const t = useTranslations("projects");



  if (!projects || projects.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container">
        <h2 style={{ marginBottom: 'var(--s-2xl)', textAlign: 'left' }}>
          {t.rich("slider_title", { em: (chunks) => <em>{chunks}</em> })}
        </h2>
        <div className="kb-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div style={{ marginTop: 'var(--s-3xl)', display: 'flex', justifyContent: 'center' }}>
          <Link href="/projects" className="kb-btn-back">
            {t("btn_all")}
          </Link>
        </div>
      </div>
    </section>
  );
}
