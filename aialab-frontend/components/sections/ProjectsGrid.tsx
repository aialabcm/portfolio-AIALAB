"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/lib/types";
import { useTranslations } from "next-intl";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const t = useTranslations("projects");
  const [filter, setFilter] = useState("all");

  const categories = ["all", "branding", "web", "digital"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => (p.deTailsProjet?.categorieProjet || "").toLowerCase().includes(filter));

  return (
    <div className="glass-panel revealed">
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {t(`filter_${cat}`)}
          </button>
        ))}
      </div>

      <div className="slider-wrap" style={{ flexWrap: 'wrap', overflow: 'visible' }}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
