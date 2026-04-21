"use client";

import React, { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import ServiceCard from "@/components/ui/ServiceCard";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { Service } from "@/lib/types";

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const t = useTranslations("services");
  const sliderRef = useRef<HTMLDivElement>(null);

  // Sort services by priority or ordreDaffichage
  const sortedServices = [...services].sort((a, b) => 
    (a.deTailsService?.ordreDaffichage || 0) - (b.deTailsService?.ordreDaffichage || 0)
  );

  if (sortedServices.length === 0) return null;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || window.innerWidth > 1100) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }, 3500);
    };

    const stopAutoScroll = () => clearInterval(intervalId);

    startAutoScroll();
    slider.addEventListener('touchstart', stopAutoScroll);

    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <RevealWrapper component="section" className="glass-panel" style={{ padding: 'var(--s-4xl) var(--s-2xl)' }}>
      <h2 style={{ marginBottom: 'var(--s-lg)' }}>
        {t.rich("title", { em: (chunks) => <em>{chunks}</em> })}
      </h2>
      <p style={{ marginBottom: 'var(--s-3xl)' }}>
        De la charte graphique au développement web, nous construisons votre présence sous tous ses angles avec une rigueur absolue.
      </p>
      <div className="service-grid" ref={sliderRef}>
        {sortedServices.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.deTailsService?.descriptionCourte || ""} 
            icon={service.deTailsService?.iconeSvg} 
          />
        ))}
      </div>
    </RevealWrapper>
  );
}
