"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function AboutPage() {
  const t = useTranslations("about");
  const processRef = useRef<HTMLDivElement>(null);
  const domainRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic factory
  const useAutoScroll = (ref: React.RefObject<HTMLDivElement | null>, distance = 280) => {
    useEffect(() => {
      const slider = ref.current;
      if (!slider || typeof window === 'undefined' || window.innerWidth > 1100) return;

      let intervalId: NodeJS.Timeout;

      const startAutoScroll = () => {
        intervalId = setInterval(() => {
          if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            slider.scrollBy({ left: distance, behavior: 'smooth' });
          }
        }, 3500);
      };

      const stopAutoScroll = () => clearInterval(intervalId);

      startAutoScroll();
      slider.addEventListener('touchstart', stopAutoScroll, { passive: true });

      return () => stopAutoScroll();
    }, [ref, distance]);
  };

  useAutoScroll(processRef, 280);
  useAutoScroll(domainRef, 320);
  useAutoScroll(statsRef, 280);

  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: 'clamp(120px, 15vh, 200px) var(--s-md) 100px' }}>

        {/* CINEMATIC HEADER */}
        <section style={{ textAlign: 'center', marginBottom: 'clamp(60px, 10vh, 120px)' }}>
          <RevealWrapper component="h1" className="reveal" style={{ fontSize: 'clamp(40px, 8vw, 72px)', lineHeight: 1.1, maxWidth: '1000px', margin: '0 auto' }}>
            Votre partenaire stratégique pour le <em style={{ fontStyle: 'normal', fontWeight: 400, color: 'var(--cyan)' }}>succès business.</em>
          </RevealWrapper>
        </section>

        {/* STATS STRIPE */}
        <div style={{ marginBottom: 'clamp(60px, 10vh, 120px)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(30px, 5vw, 100px)', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { val: '+100', lbl: 'Clients' },
              { val: '+100', lbl: 'Projets livrés' },
              { val: '+03', lbl: "Ans d'expérience" },
              { val: '2', lbl: 'Agences' },
            ].map((s, i) => (
              <RevealWrapper key={i} className="reveal" style={{ textAlign: 'center', minWidth: '140px' }}>
                <h4 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 300, color: 'var(--cyan)', marginBottom: '5px' }}>{s.val}</h4>
                <p style={{ fontSize: '10px', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 300, margin: 0 }}>{s.lbl}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>

        {/* DOMAIN GRID */}
        <div className="domain-grid" style={{ margin: 'clamp(40px, 8vh, 80px) 0' }} ref={domainRef}>
          {[
            { tag: 'BRANDING & DESIGN', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
            { tag: 'STRATÉGIE & CONSEIL', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
            { tag: 'TECH & DÉVELOPPEMENT', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
          ].map((d, i) => (
            <RevealWrapper key={i} className="domain-col reveal">
              <img src={d.img} alt={d.tag} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '20px' }} />
              <div className="domain-overlay" style={{ borderRadius: '20px' }} />
              <div className="domain-tag">{d.tag}</div>
            </RevealWrapper>
          ))}
        </div>

        {/* CORE PHILOSOPHY & STATS BARS */}
        <RevealWrapper component="section" className="glass-panel">
          <div className="flex-split">
            <div>
              <h3 className="stagger-item">Nous façonnons l&apos;avenir des <em style={{ fontStyle: 'normal', fontWeight: 400, color: 'var(--cyan)' }}>marques influentes.</em></h3>
              <p className="stagger-item">
                Avec plus d&apos;expertise cumulée à travers diverses industries, notre équipe dédiée s&apos;engage à propulser votre croissance grâce à une excellence opérationnelle et créative sans compromis.
              </p>
            </div>
            <div>
              <p className="stagger-item" style={{ opacity: 0.6, lineHeight: 1.8 }}>
                Nous nous spécialisons dans la livraison de solutions sur mesure qui génèrent des résultats tangibles.
                Que ce soit pour la finance, la technologie ou le luxe, nous transformons vos défis en opportunités de marché dominantes.
              </p>
            </div>
          </div>

          <div className="stat-bar-row" ref={statsRef}>
            {[
              { val: '98%', lbl: 'Satisfaction Client' },
              { val: '100+', lbl: 'Projets Livrés avec Succès' },
              { val: '+03', lbl: "Années d'Expertise" },
              { val: '2', lbl: 'Agences Stratégiques' },
            ].map((s, i) => (
              <div key={i} className="stat-bar-item stagger-item">
                <div className="stat-bar-val">{s.val}</div>
                <div className="stat-bar-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* PROCESS */}
        <RevealWrapper component="section" className="glass-panel" style={{ textAlign: 'center' }}>
          <h3 style={{ fontWeight: 300 }} className="stagger-item">Notre Processus <em style={{ fontStyle: 'normal', fontWeight: 400, color: 'var(--cyan)' }}>Rigoureux</em></h3>
          <div className="service-grid" style={{ marginTop: 'clamp(40px, 8vh, 80px)' }} ref={processRef}>
            {[
              { num: '01.', title: 'Immersion', desc: "Audit complet de vos enjeux business, étude de vos concurrents et de vos aspirations profondes.", fw: 300 },
              { num: '02.', title: 'Stratégie', desc: "Définition d'un angle d'attaque créatif et technologique unique pour différencier votre projet.", fw: 900 },
              { num: '03.', title: 'Création', desc: "Développement du design haute-fidélité et de la technologie jusqu'à l'excellence visuelle.", fw: 900 },
              { num: '04.', title: 'Lancement', desc: "Expansion et suivi de performance pour s'assurer que vos objectifs business sont atteints.", fw: 900 },
            ].map((step, i) => (
              <RevealWrapper key={i} className="glass-card reveal">
                <div style={{ color: 'var(--cyan)', fontSize: '36px', fontWeight: step.fw, marginBottom: '24px' }}>{step.num}</div>
                <h4>{step.title}</h4>
                <p style={{ fontSize: '14px', opacity: 0.6 }}>{step.desc}</p>
              </RevealWrapper>
            ))}
          </div>
        </RevealWrapper>
      </div>
      <Footer />
    </main>
  );
}
