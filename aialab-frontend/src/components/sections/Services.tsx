import React from "react";

export default function Services() {
  return (
    <section className="glass-panel" style={{ padding: '120px 40px' }}>
      <h2 className="reveal" style={{ marginBottom: '24px' }}>Une vision <em>multidisciplinaire.</em></h2>
      <p style={{ marginBottom: '60px' }}>
        De la charte graphique au développement web, nous construisons votre présence sous tous ses angles avec une rigueur absolue.
      </p>
      <div className="service-grid">
        <div className="glass-card">
          <svg width="48" height="48" stroke="var(--cyan)" strokeWidth="1.2" fill="none" style={{ marginBottom: '32px' }}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <h4 style={{ marginBottom: '15px', fontWeight: 400 }}>Branding &amp; Stratégie</h4>
          <p style={{ fontSize: '14px', opacity: 0.6 }}>Création d&apos;univers visuels uniques et mémorables pour positionner votre marque avec force sur le marché.</p>
        </div>
        <div className="glass-card">
          <svg width="48" height="48" stroke="var(--cyan)" strokeWidth="1.2" fill="none" style={{ marginBottom: '32px' }}>
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          <h4 style={{ marginBottom: '15px', fontWeight: 400 }}>UI/UX &amp; Web Dev</h4>
          <p style={{ fontSize: '14px', opacity: 0.6 }}>Conception de sites performants et d&apos;interfaces intuitives centrées sur l&apos;expérience de vos utilisateurs.</p>
        </div>
        <div className="glass-card">
          <svg width="48" height="48" stroke="var(--cyan)" strokeWidth="1.2" fill="none" style={{ marginBottom: '32px' }}>
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
          </svg>
          <h4 style={{ marginBottom: '15px', fontWeight: 400 }}>Design Graphique</h4>
          <p style={{ fontSize: '14px', opacity: 0.6 }}>Supports print et digitaux d&apos;une qualité exceptionnelle pour votre communication haut de gamme quotidienne.</p>
        </div>
        <div className="glass-card">
          <svg width="48" height="48" stroke="var(--cyan)" strokeWidth="1.2" fill="none" style={{ marginBottom: '32px' }}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <h4 style={{ marginBottom: '15px', fontWeight: 400 }}>Digital Marketing</h4>
          <p style={{ fontSize: '14px', opacity: 0.6 }}>Campagnes stratégiques basées sur la donnée pour accroître votre visibilité et engager votre audience cible.</p>
        </div>
      </div>
    </section>
  );
}
