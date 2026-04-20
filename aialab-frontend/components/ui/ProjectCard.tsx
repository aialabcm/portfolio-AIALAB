"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { Project } from "@/lib/types";
import { useReveal } from "@/lib/hooks/useReveal";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { ref, isRevealed } = useReveal();
  const imageUrl = project.featuredImage?.node?.sourceUrl || "/images/hero-bg.jpg";
  const category = project.deTailsProjet?.categorieProjet || "Projet";
  const year = project.deTailsProjet?.dateLivraison || "";

  return (
    <Link ref={ref} href={`/projects/${project.slug}`} className={`p-item reveal ${isRevealed ? 'is-revealed' : ''}`}>
      <Image 
        src={imageUrl} 
        alt={project.title} 
        fill 
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, 550px"
      />
      <div className="p-over" />
      <div className="p-info">
        <span>{category} {year && `— ${year}`}</span>
        <h4>{project.title}</h4>
      </div>
    </Link>
  );
}
