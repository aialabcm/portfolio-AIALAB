"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { motion } from "framer-motion";

interface ProjectDetailViewProps {
  project: any;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const imageUrl = project.featuredImage?.node?.sourceUrl || "/images/hero-bg.jpg";
  const details = project.deTailsProjet || {};
  const category = details.categorieProjet || "Projet";
  const date = details.dateLivraison || "2024";
  const client = details.nomDuClient || "Confidentiel";
  const context = details.contexteMission;
  
  const galleryImages = [
    details.image1?.node?.sourceUrl,
    details.image2?.node?.sourceUrl,
    details.image3?.node?.sourceUrl,
    details.image4?.node?.sourceUrl,
  ].filter(Boolean) as string[];

  return (
    <motion.div 
      className="kb-detail-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="kb-detail-title">{project.title}</h1>
      <p className="kb-detail-subtitle">{category}</p>

      <div className="kb-detail-hero" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
        <Image 
          src={imageUrl} 
          alt={project.title} 
          width={800} 
          height={500} 
          priority
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '24px' }}
        />
      </div>

      <div className="kb-detail-divider" />

      <div className="kb-detail-content">
        <div className="kb-detail-desc">
          {context ? (
            <p>{context}</p>
          ) : (
            <p>Une réalisation AIA LAB alliant design d&apos;exception et expertise technique pour un résultat à la hauteur de vos ambitions.</p>
          )}
        </div>

        <div className="kb-detail-meta">
          <div className="kb-meta-item">
            <label>Date</label>
            <span>{date}</span>
          </div>
          <div className="kb-meta-item">
            <label>Categorie</label>
            <span>{category}</span>
          </div>
          <div className="kb-meta-item">
            <label>Client</label>
            <span>{client}</span>
          </div>
          {details.lienDuProjet && (
            <div className="kb-meta-item">
              <label>Site web</label>
              <a href={details.lienDuProjet} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)' }}>
                Visiter le site
              </a>
            </div>
          )}
        </div>
      </div>

      {galleryImages.length > 0 && (
        <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {galleryImages.map((src, i) => (
            <div key={i} style={{ borderRadius: '24px', overflow: 'hidden', maxWidth: '800px', margin: '0 auto' }}>
               <Image src={src} alt={`${project.title} gallery ${i}`} width={800} height={530} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '100px' }}>
        <Link href="/projects" className="kb-btn-back">
          ✖ Retour au Portfolio
        </Link>
      </div>
    </motion.div>
  );
}
