import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="f-grid">
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 100, letterSpacing: '-2px', marginBottom: '24px' }}>
              AIA <span style={{ color: 'var(--cyan)' }}>LAB</span>
            </h2>
            <p style={{ fontSize: '14px', opacity: 0.5 }}>
              Le studio créatif qui donne vie à l&apos;excellence digitale au Cameroun et au-delà.
            </p>
          </div>
          <div>
            <h5 style={{ marginBottom: '24px', fontSize: '12px', color: 'var(--cyan)' }}>NAV</h5>
            <ul className="f-links">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/about">À Propos</Link></li>
              <li><Link href="/projects">Portfolio</Link></li>
            </ul>
          </div>
          <div>
            <h5 style={{ marginBottom: '24px', fontSize: '12px', color: 'var(--cyan)' }}>SERVICES</h5>
            <ul className="f-links">
              <li><a>Branding</a></li>
              <li><a>Web Design</a></li>
              <li><a>Marketing</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ marginBottom: '24px', fontSize: '12px', color: 'var(--cyan)' }}>LÉGAL</h5>
            <ul className="f-links">
              <li><a>Confidentialité</a></li>
              <li><a>Cookies</a></li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '100px', paddingTop: '40px', borderTop: 'none', fontSize: '12px', opacity: 0.4 }}>
          &copy; 2025 AIA LAB Studio. Excellence Digitale au Yaoundé.
        </div>
      </div>
    </footer>
  );
}
