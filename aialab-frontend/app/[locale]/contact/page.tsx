"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: 'clamp(140px, 15vh, 200px) var(--s-md) 100px' }}>
        
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 'var(--s-xl)', alignItems: 'stretch' }}>
          
          {/* CARD 1: FORM */}
          <RevealWrapper className="glass-card" style={{ padding: 'var(--s-2xl)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ContactForm />
          </RevealWrapper>

          {/* CARD 2: INFO */}
          <RevealWrapper className="glass-card" style={{ padding: 'var(--s-2xl)', height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--s-xl)' }}>
            <div>
               <h5 style={{ color: 'var(--cyan)', marginBottom: '15px', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Nos Bureaux</h5>
               <p style={{ fontSize: 'clamp(18px, 4vw, 22px)', lineHeight: 1.4 }}>Vallée Nlongkak, Yaoundé<br />Derrière Express Union Tsinga</p>
            </div>

            <div style={{ padding: 'var(--s-xl) 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
               <h5 style={{ color: 'var(--cyan)', marginBottom: '15px', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Contact Direct</h5>
               <p style={{ fontSize: 'clamp(20px, 5vw, 28px)', color: 'var(--cyan)', fontWeight: 500, wordBreak: 'break-all' }}>contact@aialab.com</p>
               <p style={{ opacity: 0.6, fontSize: '18px', marginTop: '10px' }}>+237 678 653 119</p>
            </div>

            <div style={{ marginTop: 'auto' }}>
               <p style={{ fontSize: '14px', opacity: 0.4, lineHeight: 1.6 }}>
                 Notre équipe est à votre disposition du Lundi au Vendredi, de 08h00 à 18h00. <br />
                 Pour les urgences techniques, nos clients sous contrat bénéficient d&apos;un support 24/7.
               </p>
            </div>
          </RevealWrapper>

        </div>
      </div>
      <Footer />
    </main>
  );
}
