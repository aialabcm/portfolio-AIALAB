import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { Project } from "@/types";
import Link from "next/link";

interface ProjectsGridProps {
  projects: Project[];
  title?: string;
  showButton?: boolean;
}

export default function ProjectsGrid({ projects, title = "Dernières masterpieces.", showButton = true }: ProjectsGridProps) {
  return (
    <section className="glass-panel py-[120px] px-[40px] bg-transparent border-none">
      <h2 className="reveal mb-10">{title}</h2>
      
      <div className="slider-wrap" id="main-slider">
        {projects.map((project) => (
          <div key={project.id} className="stagger-item">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      
      {showButton && (
        <div className="mt-[60px] reveal">
          <Link href="/projects" className="btn-master">
            Voir tout le portfolio
          </Link>
        </div>
      )}
    </section>
  );
}

