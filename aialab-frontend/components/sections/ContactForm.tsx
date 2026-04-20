"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useReveal } from "@/lib/hooks/useReveal";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { ref, isRevealed } = useReveal();

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

  return (
    <div className={isRevealed ? 'revealed is-revealed' : ''} style={{ width: '100%' }}>
      <h2 ref={ref} className={`reveal ${isRevealed ? 'is-revealed' : ''}`} style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: 'var(--s-xl)' }}>
        {t.rich("form_title", { em: (chunks) => <em>{chunks}</em> })}
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 'var(--s-xl)' }}>
          <label className="contact-label">PRÉNOM & NOM</label>
          <input 
            type="text" 
            name="name" 
            className="contact-input" 
            required 
          />
        </div>
        <div style={{ marginBottom: 'var(--s-xl)' }}>
          <label className="contact-label">EMAIL PROFESSIONNEL</label>
          <input 
            type="email" 
            name="email" 
            className="contact-input" 
            required 
          />
        </div>
        <div style={{ marginBottom: 'var(--s-3xl)' }}>
          <label className="contact-label">VOTRE PROJET</label>
          <textarea 
            name="message" 
            className="contact-input" 
            style={{ height: '120px', resize: 'none' }} 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="btn-master" 
          style={{ width: '100%' }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "..." : (status === "success" ? "✓ Message Envoyé" : "Lancer ma demande →")}
        </button>
        {status === "error" && <p style={{ color: "var(--cyan)", marginTop: "10px" }}>Erreur lors de l&apos;envoi.</p>}
      </form>
    </div>
  );
}
