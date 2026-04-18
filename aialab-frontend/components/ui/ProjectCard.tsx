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
  const year = project.deTailsProjet?.dateLivraison || "";

  return (
    <Link href={`/projects/${project.slug}`} className="p-item reveal">
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
