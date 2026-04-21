"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { Project } from "@/lib/types";
import { useReveal } from "@/lib/hooks/useReveal";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { ref, isRevealed } = useReveal();
  const cardRef = useRef<HTMLAnchorElement>(null);
  
  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for "Doux" (soft) movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    // Normalize position (-0.5 to 0.5)
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const imageUrl = project.featuredImage?.node?.sourceUrl || "/images/hero-bg.jpg";
  const category = project.deTailsProjet?.categorieProjet || "Projet";
  const year = project.deTailsProjet?.dateLivraison || "";

  return (
    <motion.div
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 20 }}
      animate={isRevealed ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
    >
      <Link 
        ref={cardRef} 
        href={`/projects/${project.slug}`} 
        className={`p-item reveal ${isRevealed ? 'is-revealed' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <motion.div 
          style={{ 
            rotateX, rotateY, 
            width: '100%', height: '100%', 
            position: 'relative' 
          }}
        >
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
        </motion.div>
      </Link>
    </motion.div>
  );
}
