"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      style={{ width: '100%' }}
    >
      <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: 'var(--s-xl)', fontWeight: 300 }}>
        {t.rich("form_title", { 
          em: (chunks) => <em style={{ fontStyle: 'normal', fontWeight: 400, color: 'var(--cyan)' }}>{chunks}</em> 
        })}
      </motion.h2>
      
      <form onSubmit={handleSubmit}>
        <motion.div variants={itemVariants} style={{ marginBottom: 'var(--s-xl)' }}>
          <label className="contact-label">PRÉNOM & NOM</label>
          <input 
            type="text" 
            name="name" 
            className="contact-input" 
            placeholder="Jean Dupont"
            required 
          />
        </motion.div>
        
        <motion.div variants={itemVariants} style={{ marginBottom: 'var(--s-xl)' }}>
          <label className="contact-label">EMAIL PROFESSIONNEL</label>
          <input 
            type="email" 
            name="email" 
            className="contact-input" 
            placeholder="jean@entreprise.com"
            required 
          />
        </motion.div>
        
        <motion.div variants={itemVariants} style={{ marginBottom: 'var(--s-3xl)' }}>
          <label className="contact-label">VOTRE PROJET</label>
          <textarea 
            name="message" 
            className="contact-input" 
            placeholder="Décrivez votre vision..."
            style={{ height: '120px', resize: 'none' }} 
            required 
          />
        </motion.div>
        
        <motion.button 
          variants={itemVariants}
          type="submit" 
          className="btn-master" 
          style={{ width: '100%', position: 'relative', overflow: 'hidden' }}
          disabled={status === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>
            {status === "sending" ? "Transmission en cours..." : (status === "success" ? "✓ Message Envoyé" : "Lancer ma demande →")}
          </span>
        </motion.button>
        
        {status === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: "var(--cyan)", marginTop: "15px", fontSize: '14px' }}>
            Erreur lors de l&apos;envoi. Veuillez réessayer.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
