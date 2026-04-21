"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Counter from "@/components/ui/Counter";
import { useTranslations } from "next-intl";
import { useReveal } from "@/lib/hooks/useReveal";
import { Link } from "@/navigation";

export default function AboutStrip() {
  const t = useTranslations("about");
  const { ref, isRevealed } = useReveal();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const showReveal = hasMounted && isRevealed;

  return (
    <section ref={ref} className={`glass-panel ${showReveal ? 'revealed is-revealed' : ''}`} style={{ padding: 'var(--s-4xl) 0', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 className={`reveal ${showReveal ? 'is-revealed' : ''}`}>Nous donnons forme à <em className="text-cyan">vos ambitions.</em></h2>
        <p style={{ margin: '0 auto var(--s-2xl)' }}>
          {t("desc")}
        </p>
        <div style={{ display: 'flex', gap: 'var(--s-3xl)', justifyContent: 'center', marginBottom: 'var(--s-2xl)' }}>
          <div>
            <h4 style={{ fontSize: '56px', fontWeight: 100, color: 'var(--cyan)' }}>
              <Counter value={500} prefix="+" />
            </h4>
            <p className="stat-bar-lbl">Projets livrés</p>
          </div>
          <div>
            <h4 style={{ fontSize: '56px', fontWeight: 100, color: 'var(--cyan)' }}>
              <Counter value={3} suffix="+" />
            </h4>
            <p className="stat-bar-lbl">Ans d&apos;excellence</p>
          </div>
        </div>
        <Link
          href="/about"
          className="link-underlined"
        >
          Découvrir le studio →
        </Link>
      </div>
    </section>
  );
}
