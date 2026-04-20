"use client";

import { useEffect, useState, useRef } from "react";

export function useReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    let timeoutId: NodeJS.Timeout;
    if (ref.current) {
      timeoutId = setTimeout(() => {
        if (ref.current) observer.observe(ref.current);
      }, 50);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isRevealed };
}
