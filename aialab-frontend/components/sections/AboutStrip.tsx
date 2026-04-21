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
    <section ref={ref} className={`glass-panel ${showReveal ? 'revealed is-revealed' : ''}`} style={{ padding: 'var(--s-4xl) 0' }}>
      <div className="container">
        <div className="flex-split" style={{ alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 className={`reveal ${showReveal ? 'is-revealed' : ''}`} style={{ marginBottom: 'var(--s-xl)' }}>
              Nous donnons forme à <em className="text-cyan">vos ambitions.</em>
            </h2>
            <p style={{ marginBottom: 'var(--s-2xl)', maxWidth: '600px' }}>
              {t("desc")}
            </p>
            
            <div style={{ display: 'flex', gap: 'var(--s-3xl)', marginBottom: 'var(--s-3xl)' }}>
              <div>
                <h4 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 100, color: 'var(--cyan)' }}>
                  <Counter value={500} prefix="+" />
                </h4>
                <p className="stat-bar-lbl" style={{ opacity: 0.5, fontSize: '12px' }}>Projets livrés</p>
              </div>
              <div>
                <h4 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 100, color: 'var(--cyan)' }}>
                  <Counter value={3} suffix="+" />
                </h4>
                <p className="stat-bar-lbl" style={{ opacity: 0.5, fontSize: '12px' }}>Ans d&apos;excellence</p>
              </div>
            </div>

            <Link
              href="/about"
              className="link-underlined"
            >
              Découvrir le studio →
            </Link>
          </div>

          <div className={`reveal ${showReveal ? 'is-revealed' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="glass-card" style={{ padding: 0, overflow: 'hidden', aspectRatio: '4/5', borderRadius: '40px', position: 'relative' }}>
              <Image 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                alt="AIA LAB Studio"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,10,24,0.4), transparent)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
