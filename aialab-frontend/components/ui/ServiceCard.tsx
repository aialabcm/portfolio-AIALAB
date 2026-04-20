"use client";

import { useReveal } from "@/lib/hooks/useReveal";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export default function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  const { ref, isRevealed } = useReveal();

  return (
    <div ref={ref} className={`glass-card reveal ${isRevealed ? 'is-revealed' : ''} ${className || ""}`}>
      {icon && (
        <div 
          style={{ marginBottom: '24px', width: '48px', height: '48px', color: 'var(--cyan)' }}
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      )}
      <h4 style={{ marginBottom: '15px', fontWeight: 400 }}>{title}</h4>
      <p style={{ fontSize: '14px', opacity: 0.6 }}>{description}</p>
    </div>
  );
}
