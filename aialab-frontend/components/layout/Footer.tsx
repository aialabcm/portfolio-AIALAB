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
            <h5 style={{ marginBottom: '24px', fontSize: '12px', color: 'var(--cyan)' }}>LÉGAL</h5>
            <ul className="f-links">
              <li><a>Confidentialité</a></li>
              <li><a>Cookies</a></li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '100px', paddingTop: '40px', borderTop: 'none', fontSize: '12px', opacity: 0.4 }}>
          {f("copyright")}
        </div>
      </div>
    </footer>
  );
}
