"use client";

import React, { useEffect, useState } from "react";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";
import { useReveal } from "@/lib/hooks/useReveal";

export default function Hero() {
  const t = useTranslations("hero");
  const { ref, isRevealed } = useReveal();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section ref={ref} className={`hero-master ${isLoaded ? 'loaded' : ''}`} style={{ marginBottom: 'var(--s-2xl)' }}>
      <div className="hero-panel" style={{ padding: 'var(--s-4xl) var(--s-3xl) 0' }}>
        <h1 className={`reveal ${isRevealed ? 'is-revealed' : ''}`}>{t("title1")} <em>{t("title2")}</em></h1>
        <p className={`reveal ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '0.2s', marginBottom: 'var(--s-3xl)' }}>
          {t("desc")}
        </p>
        <div className={`hero-links reveal ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '0.4s', gap: 'var(--s-xl)' }}>
          <Link href="/projects" className="link-underlined">{t("btn_projects")}</Link>
          <Link href="/contact" className="link-underlined">{t("btn_start")}</Link>
        </div>
      </div>
    </section>
  );
}
