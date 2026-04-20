"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // ── 1. IntersectionObserver : révèle les glass-panel, h1/h2/h3, p-item ──
    const panelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            panelObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            elementObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements with a tiny delay to allow Next.js client navigation DOM to mount completely
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.glass-panel').forEach((el) => {
        panelObserver.observe(el);
      });

      document.querySelectorAll('h1, h2, h3, .p-item, .badge').forEach((el) => {
        elementObserver.observe(el);
      });
    }, 150);

    // The 'loaded' class for Hero is now natively managed by Hero.tsx via React state

    // ── 3. Parallax scroll ──
    let rafId: number;
    function handleScroll() {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const winH = window.innerHeight;

        const bg = document.getElementById('master-bg');
        if (bg) bg.style.transform = `translateY(${scrolled * 0.15}px) scale(1.1)`;

        const heroEl = document.querySelector('.hero-master') as HTMLElement;
        if (heroEl) {
          heroEl.style.backgroundPositionY = `${scrolled * 0.4}px`;
        }

        document.querySelectorAll('.glass-panel.revealed').forEach((panel) => {
          const rect = panel.getBoundingClientRect();
          const centerOffset = (rect.top + rect.height / 2) - (winH / 2);
          (panel as HTMLElement).style.transform = `translateY(${centerOffset * -0.08}px)`;
        });

        document.querySelectorAll('.p-item.is-revealed').forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < winH && rect.bottom > 0) {
            (item as HTMLElement).style.transform = `translateY(${(rect.top - winH) * 0.05}px)`;
          }
        });
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      panelObserver.disconnect();
      elementObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
