import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export default function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div className={`s-card reveal ${className || ""}`}>
      {icon && (
        <div className="s-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Simple Dynamic Icon placeholder logic or hardcoded for now */}
            <circle cx="12" cy="12" r="10" />
            <path d={icon} />
          </svg>
        </div>
      )}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
