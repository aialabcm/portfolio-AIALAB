"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Masquer le loader après un délai ou quand tout est prêt
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
      document.body.classList.remove('loading');
    }, 2500);

    document.body.classList.add('loading');

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050a18]"
        >
          {/* Noise Overlay restricted to Loader for extra texture */}
          <div className="noise-overlay" style={{ opacity: 0.05 }} />

          <div className="relative flex flex-col items-center">
            {/* Stylized AIA SVG Animation */}
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M10 35L30 5L50 35"
                stroke="var(--cyan)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M20 25H40"
                stroke="var(--cyan)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.path
                d="M70 35L90 5L110 35"
                stroke="var(--white)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 flex flex-col items-center"
            >
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-light">
                Artificial Intelligence & Art
              </span>
              <div className="mt-4 h-[1px] w-12 bg-cyan-500/30 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="h-full w-full bg-cyan-400"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
