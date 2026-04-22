"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/navigation";

interface ProjectDetailViewProps {
  project: any;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const imageUrl = project.featuredImage?.node?.sourceUrl || "/images/hero-bg.jpg";
  const details = project.deTailsProjet || {};
  const category = details.categorieProjet || "Projet";
  const dateLivraison = details.dateLivraison || "";
  const client = details.nomDuClient || "Confidentiel";
  const context = details.contexteMission || "Une réalisation AIA LAB alliant design d'exception et expertise technique.";

  const galleryImages = [
    details.image1?.node?.sourceUrl,
    details.image2?.node?.sourceUrl,
    details.image3?.node?.sourceUrl,
    details.image4?.node?.sourceUrl,
  ].filter(Boolean) as string[];

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container" style={{ paddingTop: 'clamp(100px, 10vh, 140px)', paddingBottom: 'var(--s-4xl)' }}>
      
      {/* ═══ PREMIUM HEADER ═══ */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ marginBottom: 'var(--s-3xl)', position: 'relative' }}
      >
        <Link href="/projects" className="pill pill-glass" style={{ 
          fontSize: '11px', 
          marginBottom: 'var(--s-md)', 
          padding: '8px 16px',
          minHeight: 'auto',
          display: 'inline-flex',
          gap: '8px'
        }}>
          <span style={{ opacity: 0.5 }}>←</span> PORTFOLIO
        </Link>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--s-md)' }}>
          <h1 className="text-gradient-aia" style={{ 
            fontSize: 'clamp(40px, 6vw, 88px)', 
            fontWeight: '300', 
            letterSpacing: '-0.04em', 
            maxWidth: '800px',
            lineHeight: '0.9'
          }}>
            {project.title}
          </h1>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="contact-label" 
            style={{ 
              marginBottom: '12px',
              padding: '4px 12px',
              border: '1px solid var(--cyan)',
              borderRadius: '100px',
              fontSize: '10px'
            }}
          >
            {category}
          </motion.span>
        </div>
      </motion.div>

      {/* ═══ MAIN VISUAL (Floating Glass) ═══ */}
      <motion.div 
        {...fadeIn}
        style={{ marginBottom: 'var(--s-4xl)' }}
      >
        <div className="glass-card" style={{ 
          padding: '12px', 
          borderRadius: '32px',
          overflow: 'hidden',
          aspectRatio: '16/9',
          position: 'relative',
          border: 'none' // We'll use the pseudo-element border from glass-card
        }}>
          <div className="p-grain" />
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '24px', overflow: 'hidden' }}
          >
            <Image 
              src={imageUrl} 
              alt={project.title} 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ═══ PROJECT CONTENT GRID ═══ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--s-3xl)', alignItems: 'start' }}>
        
        {/* Brief Section (Left 7 Cols) */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          style={{ gridColumn: 'span 7' }}
        >
          <motion.section variants={fadeIn} style={{ marginBottom: 'var(--s-3xl)' }}>
            <h3 style={{ fontSize: '24px', marginBottom: 'var(--s-lg)', color: 'var(--white)' }}>
              L'essence du <em style={{ color: 'var(--cyan)', fontStyle: 'normal' }}>Projet.</em>
            </h3>
            <p style={{ 
              fontSize: '20px', 
              lineHeight: '1.8', 
              color: 'rgba(255,255,255,0.7)', 
              fontWeight: '300',
              letterSpacing: '0.01em'
            }}>
              {context}
            </p>
          </motion.section>

          {/* Gallery staggered reveal */}
          {galleryImages.length > 0 && (
            <motion.div 
              variants={staggerContainer}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--s-xl)' }}
            >
              {galleryImages.map((src, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className="glass-card"
                  style={{ 
                    height: idx % 3 === 0 ? '500px' : '400px',
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    padding: '8px'
                  }}
                >
                  <div className="p-grain" />
                  <div style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '18px', overflow: 'hidden' }}>
                    <Image 
                      src={src} 
                      alt={`Detail ${idx + 1}`} 
                      fill 
                      style={{ objectFit: 'cover', transition: '0.5s ease' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Sticky Meta Info (Right 5 Cols) */}
        <div style={{ gridColumn: 'span 5', position: 'sticky', top: '120px' }}>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: 'var(--s-2xl)' }}
          >
            <h4 style={{ marginBottom: 'var(--s-xl)', fontSize: '18px', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.9 }}>
              Spécifications
            </h4>
            
            <div style={{ display: 'grid', gap: 'var(--s-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 'var(--s-md)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.1em' }}>Client</span>
                <span style={{ fontSize: '15px', fontWeight: '400', color: 'var(--white)' }}>{client}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 'var(--s-md)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.1em' }}>Année</span>
                <span style={{ fontSize: '15px', fontWeight: '400', color: 'var(--white)' }}>{dateLivraison}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 'var(--s-md)' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.1em' }}>Secteur</span>
                <span style={{ fontSize: '15px', fontWeight: '400', color: 'var(--cyan)' }}>{category}</span>
              </div>

              {details.lienDuProjet && (
                 <motion.div 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   style={{ marginTop: 'var(--s-xl)' }}
                 >
                   <a href={details.lienDuProjet} target="_blank" rel="noopener noreferrer" className="btn-master" style={{ 
                     width: '100%', 
                     minHeight: '60px', 
                     fontSize: '14px', 
                     background: 'var(--white)', 
                     color: 'var(--dark)',
                     borderRadius: '12px',
                     fontWeight: '600',
                     boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                   }}>
                     Explorer le Site Live
                   </a>
                 </motion.div>
              )}
            </div>
          </motion.div>

          <div style={{ marginTop: 'var(--s-xl)', padding: '0 var(--s-md)', opacity: 0.3, fontSize: '12px', textAlign: 'center' }}>
            <p style={{ maxWidth: '100%' }}>© AIA LAB STUDIO — TOUS DROITS RÉSERVÉS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
