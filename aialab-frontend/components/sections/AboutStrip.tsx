"use client";

import React from "react";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function AboutStrip() {
  const t = useTranslations("about");

  return (
    <section className="glass-panel" style={{ padding: '120px 0' }}>
      <div className="flex-split">
        <div>
          <h2 className="reveal">Nous donnons forme à <em>vos ambitions.</em></h2>
          <p style={{ marginBottom: '40px' }}>
            {t("desc")}
          </p>
          <div style={{ display: 'flex', gap: '80px' }}>
            <div>
              <h4 style={{ fontSize: '56px', fontWeight: 100, color: 'var(--cyan)' }}>50+</h4>
              <p style={{ fontSize: '11px', opacity: 0.5, textTransform: 'uppercase' }}>Projets livrés</p>
            </div>
            <div>
              <h4 style={{ fontSize: '56px', fontWeight: 100, color: 'var(--cyan)' }}>03+</h4>
              <p style={{ fontSize: '11px', opacity: 0.5, textTransform: 'uppercase' }}>Ans d&apos;excellence</p>
            </div>
          </div>
          <Link
            href="/about"
            style={{ marginTop: '48px', display: 'inline-block', cursor: 'pointer', fontWeight: 400, borderBottom: '1px solid var(--cyan)' }}
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
