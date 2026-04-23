"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.featuredImage?.node?.sourceUrl || "/images/hero-bg.jpg";
  const category = project.deTailsProjet?.categorieProjet || "Projet";

  return (
    <Link href={`/projects/${project.slug}`} className="kb-card">
      <div className="kb-card-img-wrap">
        <Image 
          src={imageUrl} 
          alt={project.title} 
          fill 
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <h3>{project.title}</h3>
      <p>{category}</p>
    </Link>
  );
}
