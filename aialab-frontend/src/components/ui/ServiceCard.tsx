import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="glass-card p-[48px] rounded-[32px] bg-white/5 border border-white/10 hover:border-cyan hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-500">
      <div className="text-cyan mb-8">
        {icon}
      </div>
      <h4 className="text-xl font-normal text-white mb-4">{title}</h4>
      <p className="text-sm text-white/60 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
