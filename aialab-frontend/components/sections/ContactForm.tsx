"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

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

  return (
    <div className="glass-panel revealed">
      <div className="flex-split">
        <div>
          <h2 className="reveal" dangerouslySetInnerHTML={{ __html: t("form_title") }} />
          <p className="reveal">{t("cta_title").replace(/<[^>]*>?/gm, '')}</p>
        </div>
        <div>
          <form className="reveal" onSubmit={handleSubmit}>
            <div style={{ marginBottom: '32px' }}>
              <label className="contact-label">{t("name")}</label>
              <input type="text" name="name" className="contact-input" placeholder="Yann Darell" required />
            </div>
            <div style={{ marginBottom: '32px' }}>
              <label className="contact-label">{t("email")}</label>
              <input type="email" name="email" className="contact-input" placeholder="hello@aialabcm.com" required />
            </div>
            <div style={{ marginBottom: '32px' }}>
              <label className="contact-label">{t("message")}</label>
              <textarea name="message" className="contact-input" rows={4} placeholder="Votre projet..." required />
            </div>
            <button type="submit" className="btn-master" disabled={status === "sending"}>
              {status === "sending" ? "..." : (status === "success" ? "✓" : t("send"))}
            </button>
            {status === "error" && <p style={{ color: "red", marginTop: "10px" }}>Erreur lors de l&apos;envoi.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
