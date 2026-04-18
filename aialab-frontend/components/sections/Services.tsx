import React from "react";
import {getTranslations} from "next-intl/server";
import {getServices} from "@/lib/api";
import ServiceCard from "@/components/ui/ServiceCard";

export default async function Services() {
  const t = await getTranslations("services");
  const services = await getServices();
  
  // Sort by ordreAffichage if it exists
  const sortedServices = [...services].sort((a, b) => 
    (a.deTailsService?.ordreAffichage || 0) - (b.deTailsService?.ordreAffichage || 0)
  );

  return (
    <section className="glass-panel" style={{ padding: '120px 40px' }}>
      <h2 className="reveal" style={{ marginBottom: '24px' }}>{t.rich("title", { em: (chunks) => <em>{chunks}</em> })}</h2>
      <p style={{ marginBottom: '60px' }}>
        De la charte graphique au développement web, nous construisons votre présence sous tous ses angles avec une rigueur absolue.
      </p>
      <div className="service-grid">
        {sortedServices.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.deTailsService?.descriptionCourte || ""} 
            icon={service.deTailsService?.iconeSvg} 
          />
        ))}
      </div>
    </section>
  );
}

