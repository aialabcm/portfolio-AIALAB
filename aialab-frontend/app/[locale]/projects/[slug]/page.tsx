import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/api";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Link } from "@/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const imageUrl = project.featuredImage?.node?.sourceUrl || "/images/hero-bg.jpg";
  const details = project.deTailsProjet || {};
  const category = details.categorieProjet || "Projet";
  const dateLivraison = details.dateLivraison || "";
  const client = details.nomDuClient || "Confidentiel";

  const images = [
    details.image1?.node?.sourceUrl
  ].filter(Boolean) as string[];

  return (
    <main>
      <Navbar />
      
      {/* Immersive Header */}
      <section className="hero-master loaded" style={{ height: '70vh', minHeight: 'auto', background: 'var(--bg)' }}>
        <div style={{ position: 'absolute', top: 'var(--s-4xl)', left: 'var(--s-xl)', zIndex: 100 }}>
           <Link href="/projects" className="link-underlined" style={{ color: 'var(--white)', opacity: 0.8 }}>
             ← Retour aux projets
           </Link>
        </div>
        <Image 
          src={imageUrl} 
          alt={project.title} 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="p-over" style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)', opacity: 0.8 }} />
        <div className="hero-panel" style={{ position: 'relative', zIndex: 10 }}>
          <span className="reveal is-revealed" style={{ color: 'var(--cyan)', letterSpacing: '0.2em', fontSize: '12px', textTransform: 'uppercase' }}>
            {category} {dateLivraison && `— ${dateLivraison}`}
          </span>
          <h1 className="reveal is-revealed" style={{ marginTop: 'var(--s-md)' }}>{project.title}</h1>
        </div>
      </section>

      <div className="container">
        {/* Content Section */}
        <div className="glass-panel revealed">
          <div className="flex-split">
            <div>
              <h3>Le <em>Challenge.</em></h3>
              <p>Ce projet s&apos;inscrit dans notre volonté de livrer des interfaces d&apos;exception et une expérience de pointe.</p>
            </div>
            <div className="glass-card">
              <h4 style={{ marginBottom: '20px' }}>Détails du projet</h4>
              <div style={{ opacity: 0.6, fontSize: '14px' }}>
                <p><strong>Client:</strong> {client}</p>
                <p><strong>Catégorie:</strong> {category}</p>
                <p><strong>Date:</strong> {dateLivraison}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {images.length > 0 && (
          <div className="glass-panel revealed" style={{ marginTop: '40px' }}>
            <h3 style={{ marginBottom: '30px' }}>Galerie <em>Visuelle.</em></h3>
            <div className="service-grid">
              {images.map((src, idx) => (
                <div key={idx} className="s-card" style={{ padding: 0, overflow: 'hidden', height: '300px', display: 'flex' }}>
                   <Image 
                     src={src} 
                     alt={`Gallery image ${idx + 1}`} 
                     width={800} 
                     height={600} 
                     style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                   />
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div style={{ marginTop: 'var(--s-4xl)' }}>
           <RevealWrapper component="section" className="glass-panel">
              <ContactForm />
           </RevealWrapper>
        </div>
      </div>

      <Footer />
    </main>
  );
}
