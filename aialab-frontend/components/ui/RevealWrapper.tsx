"use client";

import React from "react";
import { useReveal } from "@/lib/hooks/useReveal";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  component?: React.ElementType;
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
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  
  const showReveal = hasMounted && isRevealed;
  const combinedClassName = `${className} ${showReveal ? 'is-revealed revealed' : ''}`.trim();
  const combinedStyle = { ...initialStyle, transitionDelay: delay };

  return (
    <Component ref={ref} className={combinedClassName} style={combinedStyle}>
      {children}
    </Component>
  );
}
