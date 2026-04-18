import React from "react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imgSrc = project.imageUrl || project.image;
  
  return (
    <div className="reveal p-item group min-w-[550px] h-[380px] rounded-[32px] bg-white/5 overflow-hidden relative cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
      {imgSrc && (
        <img 
          src={imgSrc} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        />
      )}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent p-over" 
      />
      <div className="absolute bottom-12 left-12 z-10 p-info">
        <span className="text-[11px] font-normal text-white/50 uppercase tracking-[0.2em] block mb-2">
          {project.category} / {project.year}
        </span>
        <h4 className="text-[28px] font-normal text-white group-hover:text-cyan transition-colors duration-300">
          {project.title}
        </h4>
      </div>
    </div>
  );
}
