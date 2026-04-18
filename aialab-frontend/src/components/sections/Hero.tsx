import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-master">
      <div className="hero-panel">
        <h1 className="reveal">Design &amp; <em>Performance.</em></h1>
        <p className="reveal" style={{ transitionDelay: '0.2s' }}>
          Nous créons des expériences digitales mémorables pour les marques ambitieuses
          qui redéfinissent leur futur avec force et clarté.
        </p>
        <div className="hero-links">
          <Link href="/projects">Explorer les réalisations</Link>
          <Link href="/contact">Lancer un projet</Link>
        </div>
      </div>
    </section>
  );
}
