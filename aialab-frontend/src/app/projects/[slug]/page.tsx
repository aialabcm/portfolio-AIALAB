"use client";

import React, { use } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const project = MOCK_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '180px 60px 100px' }}>
        
        {/* CINEMATIC HEADER */}
        <section style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal" style={{ 
            fontSize: '11px', 
            fontWeight: 400, 
            color: 'var(--cyan)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.3em',
            display: 'block',
            marginBottom: '20px'
          }}>
            {project.category}
          </span>
          <h1 className="reveal" style={{ fontSize: '88px', lineHeight: 1, margin: '0 auto' }}>
            {project.title.split(' ')[0]} <em>{project.title.split(' ').slice(1).join(' ')}</em>
          </h1>
        </section>

        {/* PROJECT COVER */}
        <section className="reveal" style={{ 
          marginBottom: '60px',
          height: '600px',
          borderRadius: '40px',
          backgroundColor: project.color || 'var(--glass-bg)',
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.3)'
        }}>
          <div className="p-over" style={{ opacity: 0.4 }} />
        </section>

        {/* DETAILS GRID */}
        <section className="glass-panel" style={{ marginBottom: '60px' }}>
          <div className="flex-split">
            <div>
              <h3 style={{ marginBottom: '32px' }}>L&apos;essence du <em>Projet.</em></h3>
              <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'white', marginBottom: '40px' }}>
                {project.excerpt}
              </p>
              <p style={{ opacity: 0.6 }}>
                Chaque détail de {project.title} a été conçu pour allier une esthétique haut de gamme à une performance technique irréprochable. Notre approche s&apos;est concentrée sur la création d&apos;une expérience utilisateur fluide et mémorable, reflétant les valeurs de modernité et d&apos;excellence.
              </p>
            </div>
            
            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.02)', padding: '60px' }}>
              <div style={{ marginBottom: '40px' }}>
                <h5 style={{ color: 'var(--cyan)', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '15px' }}>DÉTAILS</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="flex justify-between border-b border-white/5 pb-4">
                    <span style={{ opacity: 0.4 }}>Année</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-4">
                    <span style={{ opacity: 0.4 }}>Catégorie</span>
                    <span>{project.category?.split(' / ')[0]}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-4">
                    <span style={{ opacity: 0.4 }}>Github</span>
                    <a href={project.github_link} className="hover:text-cyan transition-colors">Voir le code ↗</a>
                  </div>
                </div>
              </div>

              <div>
                <h5 style={{ color: 'var(--cyan)', fontSize: '11px', letterSpacing: '0.2em', marginBottom: '15px' }}>TECHNOLOGIES</h5>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{ 
                      padding: '8px 20px', 
                      borderRadius: '50px', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: '12px',
                      opacity: 0.7
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '60px' }}>
                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="btn-master" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  Visiter le site live
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT GALLERY */}
        {project.gallery && project.gallery.length > 0 && (
          <section style={{ marginBottom: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
              {project.gallery.map((img, i) => (
                <div key={i} className="reveal" style={{ 
                  borderRadius: '40px', 
                  overflow: 'hidden', 
                  height: '800px',
                  background: 'rgba(255,255,255,0.02)'
                }}>
                  <img src={img} alt={`${project.title} gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TECHNICAL STRUCTURE (ARBORESCENCE) */}
        {project.structure && project.structure.length > 0 && (
          <section className="glass-panel" style={{ padding: '80px' }}>
            <h3 style={{ marginBottom: '60px' }}>Architecture de <em>Success.</em></h3>
            <div style={{ 
              fontFamily: 'monospace', 
              fontSize: '14px', 
              lineHeight: '1.8',
              background: 'rgba(0,0,0,0.2)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              {project.structure.map((folder, i) => (
                <div key={i} style={{ marginBottom: '15px' }}>
                  <div style={{ color: 'var(--cyan)', fontWeight: 600 }}>├─ {folder.name}/</div>
                  {folder.files.map((file, j) => (
                    <div key={j} style={{ opacity: 0.6, paddingLeft: '24px' }}>
                      {j === folder.files.length - 1 ? '└─' : '├─'} {file}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NAVIGATION */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <Link href="/projects" style={{ opacity: 0.5, hover: { opacity: 1 }, transition: '0.3s' }} className="hover:text-cyan">
            ← Retour aux projets
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
