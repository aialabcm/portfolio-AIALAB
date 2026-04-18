"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          if (entry.target.classList.contains('glass-panel')) {
            entry.target.classList.add('revealed');
          }
        }
      });
    }, { threshold: 0.1 });

    function checkReveals() {
      document.querySelectorAll('.reveal, .glass-panel, .service-grid > div, .p-item, .domain-col, h1, h2, h3').forEach(el => {
        revealObserver.observe(el);
      });
    }

    // Load hero
    const hero = document.querySelector('.hero-master');
    if (hero) hero.classList.add('loaded');

    // Check reveals on mount and after a small delay for dynamic content
    checkReveals();
    const timer = setTimeout(checkReveals, 200);

    // Parallax scroll
    function handleScroll() {
      const scrolled = window.pageYOffset;
      const winH = window.innerHeight;

      const bg = document.getElementById('master-bg');
      if (bg) bg.style.transform = `translateY(${scrolled * 0.15}px) scale(1.1)`;

      const heroEl = document.querySelector('.hero-master') as HTMLElement;
      if (heroEl) heroEl.style.backgroundPositionY = `${scrolled * 0.4}px`;

      document.querySelectorAll('.glass-panel.revealed').forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        const centerOffset = (rect.top + rect.height / 2) - (winH / 2);
        (panel as HTMLElement).style.transform = `translateY(${centerOffset * -0.08}px)`;
      });

      document.querySelectorAll('.p-item').forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < winH && rect.bottom > 0) {
          (item as HTMLElement).style.transform = `translateY(${(rect.top - winH) * 0.05}px)`;
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      revealObserver.disconnect();
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
}
