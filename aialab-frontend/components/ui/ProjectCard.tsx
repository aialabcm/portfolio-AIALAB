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

    // Update CSS variables for the light sheen
    cardRef.current.style.setProperty('--mouse-x', `${(mouseXPos / width) * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${(mouseYPos / height) * 100}%`);
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link 
        ref={cardRef} 
        href={`/projects/${project.slug}`} 
        className={`p-item ${isRevealed ? 'is-revealed' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Layer 0: The Image with Parallax */}
        <motion.div 
          style={{ 
            rotateX, rotateY,
            scale: 1.1,
            position: 'absolute',
            inset: 0,
            zIndex: 1
          }}
        >
          <Image 
            src={imageUrl} 
            alt={project.title} 
            fill 
            style={{ 
              objectFit: 'cover',
              filter: 'contrast(1.1) brightness(0.8)'
            }}
            sizes="(max-width: 768px) 100vw, 550px"
          />
        </motion.div>
        
        {/* Layer 1: Grain Texture Overlay */}
        <div className="p-grain" style={{ zIndex: 2 }} />
        
        {/* Layer 2: Gradient Overlay for text readability */}
        <div className="p-over" style={{ zIndex: 3 }} />
        
        {/* Layer 3: Dynamic Light Sheen */}
        <motion.div 
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.12) 0%, transparent 50%)`,
            zIndex: 4,
            pointerEvents: 'none'
          }}
        />

        {/* Layer 4: Content */}
        <div className="p-info" style={{ zIndex: 10 }}>
          <span>{category} {year && `— ${year}`}</span>
          <h4>{project.title}</h4>
        </div>
      </Link>
    </motion.div>
  );
}
