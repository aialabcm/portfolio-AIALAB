"use client";

import React from "react";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function Footer() {
  const t = useTranslations("nav");
  const f = useTranslations("footer");

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="f-grid">
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
              <img src="/images/logo.png" alt="AIA LAB Logo" style={{ height: '60px', width: 'auto' }} />
            </Link>
            <p style={{ fontSize: '14px', opacity: 0.5 }}>
              Le studio créatif qui donne vie à l&apos;excellence digitale au Cameroun et au-delà.
            </p>
          </div>
          <div>
            <h5 style={{ marginBottom: '24px', fontSize: '12px', color: 'var(--cyan)' }}>NAV</h5>
            <ul className="f-links">
              <li><Link href="/">{t("home")}</Link></li>
              <li><Link href="/about">{t("about")}</Link></li>
              <li><Link href="/projects">{t("projects")}</Link></li>
              <li><Link href="/contact">{t("contact")}</Link></li>
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
            <h5 style={{ marginBottom: '24px', fontSize: '12px', color: 'var(--cyan)', letterSpacing: '0.1em' }}>SOCIAL</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--cyan)' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                </svg>
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', opacity: 0.6, textTransform: 'uppercase' }}>LinkedIn</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--cyan)' }}>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', opacity: 0.6, textTransform: 'uppercase' }}>Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--cyan)' }}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', opacity: 0.6, textTransform: 'uppercase' }}>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '100px', paddingTop: '40px', borderTop: '1px solid var(--glass-border)', fontSize: '12px', opacity: 0.4 }}>
          {f("copyright")}
        </div>
      </div>
    </footer>
  );
}
