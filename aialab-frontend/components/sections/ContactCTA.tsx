"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { useReveal } from "@/lib/hooks/useReveal";

export default function ContactCTA() {
  const t = useTranslations("contact");
  const { ref, isRevealed } = useReveal();

  return (
    <section ref={ref} className={`glass-panel ${isRevealed ? 'revealed is-revealed' : ''}`} style={{ textAlign: 'center', padding: 'var(--s-4xl) var(--s-2xl)' }}>
      <h2 className={`reveal ${isRevealed ? 'is-revealed' : ''}`} style={{ margin: `0 auto var(--s-xl)`, maxWidth: '1000px' }}>
        {t.rich("cta_title", { em: (chunks) => <em>{chunks}</em> })}
      </h2>
      <p className="reveal" style={{ margin: `0 auto var(--s-2xl)`, maxWidth: '900px' }}>
        Que vous soyez une startup ou une entreprise établie, nous avons l&apos;expertise pour vous faire grandir et rayonner.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }} className="reveal">
        <Link href="/contact" className="pill pill-primary">
          {t("cta_btn")}
        </Link>
      </div>
    </section>
  );
}
