"use client";

import React from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { useReveal } from "@/lib/hooks/useReveal";

export default function AboutStrip() {
  const t = useTranslations("about");
  const { ref, isRevealed } = useReveal();

  return (
    <section ref={ref} className={`glass-panel ${isRevealed ? 'revealed is-revealed' : ''}`} style={{ padding: 'var(--s-4xl) 0' }}>
      <div className="flex-split">
        <div>
          <h2 className={`reveal ${isRevealed ? 'is-revealed' : ''}`}>Nous donnons forme à <em className="text-cyan">vos ambitions.</em></h2>
          <p style={{ marginBottom: 'var(--s-2xl)' }}>
            {t("desc")}
          </p>
          <div style={{ display: 'flex', gap: 'var(--s-3xl)' }}>
            <div>
              <h4 style={{ fontSize: '56px', fontWeight: 100, color: 'var(--cyan)' }}>+100</h4>
              <p className="stat-bar-lbl">Projets livrés</p>
            </div>
            <div>
              <h4 style={{ fontSize: '56px', fontWeight: 100, color: 'var(--cyan)' }}>03+</h4>
              <p className="stat-bar-lbl">Ans d&apos;excellence</p>
            </div>
          </div>
          <Link
            href="/about"
            className="link-underlined"
            style={{ marginTop: 'var(--s-2xl)' }}
          >
            Découvrir le studio →
          </Link>
        </div>
        <div className="glass-card" style={{ aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '120px', fontWeight: 300, opacity: 0.05, letterSpacing: '-5px', color: 'var(--cyan)' }}>AIA</span>
        </div>
      </div>
    </section>
  );
}
