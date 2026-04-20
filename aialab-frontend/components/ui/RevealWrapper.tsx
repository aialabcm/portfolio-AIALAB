"use client";

import React from "react";
import { useReveal } from "@/lib/hooks/useReveal";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  component?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export default function RevealWrapper({ 
  children, 
  className = "", 
  delay, 
  component: Component = "div",
  style: initialStyle
}: RevealWrapperProps) {
  const { ref, isRevealed } = useReveal();
  
  const combinedClassName = `${className} ${isRevealed ? 'is-revealed revealed' : ''}`.trim();
  const combinedStyle = { ...initialStyle, transitionDelay: delay };

  return (
    // @ts-ignore
    <Component ref={ref} className={combinedClassName} style={combinedStyle}>
      {children}
    </Component>
  );
}
