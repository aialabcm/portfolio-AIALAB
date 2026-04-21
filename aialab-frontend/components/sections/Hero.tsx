"use client";

import React, { useEffect, useState } from "react";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";
import { useReveal } from "@/lib/hooks/useReveal";

export default function Hero() {
  const t = useTranslations("hero");
  const { ref, isRevealed } = useReveal();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Ensure reveal classes only apply after mounting to prevent hydration mismatch
  const showReveal = hasMounted && isRevealed;

  return (
    <section ref={ref} className={`hero-master ${hasMounted ? 'loaded' : ''}`}>
      <div className="hero-panel">
        <h1 className={`reveal ${showReveal ? 'is-revealed' : ''}`}>
          {t("title1")} <br />
          <em>{t("title2")}</em>
        </h1>
        <p className={`reveal ${showReveal ? 'is-revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {t("desc")}
        </p>
        <div className={`hero-links reveal ${showReveal ? 'is-revealed' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <Link href="/projects" className="link-underlined">{t("btn_projects")}</Link>
          <Link href="/contact" className="link-underlined">{t("btn_start")}</Link>
        </div>
      </div>
    </section>
  );
}
