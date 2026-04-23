"use client";

import React from "react";
import Counter from "@/components/ui/Counter";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function AboutStrip() {
  const t = useTranslations("about");

  return (
    <RevealWrapper component="section" className="glass-panel">
      <div className="flex-split">
        <div style={{ textAlign: 'left' }}>
          <h2 className="stagger-item">
            Nous donnons forme à <em className="text-cyan">vos ambitions.</em>
          </h2>
          <p className="stagger-item">
            {t("desc")}
          </p>
          
          <div className="stat-bar-row stagger-item">
            <div className="stat-bar-item">
              <div className="stat-bar-val">
                <Counter value={500} prefix="+" />
              </div>
              <div className="stat-bar-lbl">Projets livrés</div>
            </div>
            <div className="stat-bar-item">
              <div className="stat-bar-val">
                <Counter value={3} suffix="+" />
              </div>
              <div className="stat-bar-lbl">Ans d'excellence</div>
            </div>
          </div>

          <Link
            href="/about"
            className="link-underlined stagger-item"
          >
            Découvrir le studio →
          </Link>
        </div>

        <div className="stagger-item" style={{ transitionDelay: '0.4s' }}>
          <div className="glass-card" style={{ 
            padding: 0, 
            overflow: 'hidden', 
            aspectRatio: '16/10', 
            borderRadius: 'var(--radius-md)', 
            position: 'relative',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,10,24,0.6), transparent)' }} />
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}
