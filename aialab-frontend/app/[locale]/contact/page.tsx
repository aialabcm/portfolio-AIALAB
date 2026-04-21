"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { motion } from "framer-motion";

export default function ContactPage() {
  const bentoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main>
      <Navbar />
      
      {/* ATMOSPHERIC BACKGROUND BLOB */}
      <div className="bg-blob" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.1, width: '80vw', height: '80vw' }} />

      <div className="container" style={{ paddingTop: 'clamp(120px, 15vh, 180px)', paddingBottom: '100px', position: 'relative' }}>
        
        {/* HERO SECTION */}
        <section style={{ textAlign: 'center', marginBottom: 'clamp(60px, 10vh, 100px)' }}>
          <RevealWrapper>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 88px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '24px' }}>
              Parlons de votre <em style={{ fontStyle: 'normal', fontWeight: 400, color: 'var(--cyan)' }}>prochain projet.</em>
            </h1>
            <p style={{ margin: '0 auto', opacity: 0.6 }}>
              Que vous ayez une idée précise ou un concept encore flou, notre équipe est là pour transformer vos ambitions en réalité digitale.
            </p>
          </RevealWrapper>
        </section>

        {/* BENTO GRID */}
        <div className="bento-grid">
          
          {/* FORM CARD (Large) */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
            className="glass-card col-span-2 row-span-2" 
            style={{ padding: 'clamp(24px, 5vw, 60px)' }}
          >
            <ContactForm />
          </motion.div>

          {/* OFFICE CARD */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
            className="glass-card bento-card"
          >
            <div>
              <h5 className="contact-label">Nos Bureaux</h5>
              <p style={{ fontSize: '20px', lineHeight: 1.4, fontWeight: 300 }}>
                Vallée Nlongkak, Yaoundé<br />
                Tsinga, Cameroun
              </p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="link-underlined">
              Itinéraire →
            </a>
          </motion.div>

          {/* EMAIL CARD */}
          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
            className="glass-card bento-card"
          >
            <div>
              <h5 className="contact-label">Contact Direct</h5>
              <p style={{ fontSize: '22px', color: 'var(--cyan)', fontWeight: 400, wordBreak: 'break-all' }}>
                contact@aialab.com
              </p>
            </div>
            <p style={{ opacity: 0.5, fontSize: '14px' }}>Nous répondons généralement en moins de 24h.</p>
          </motion.div>

          {/* SOCIAL/TELEPHONE CARD */}
          <motion.div 
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bentoVariants}
            className="glass-card bento-card"
            style={{ flexDirection: 'row', alignItems: 'center', gap: '20px' }}
          >
            <div style={{ flex: 1 }}>
              <h5 className="contact-label">Téléphone</h5>
              <p style={{ fontSize: '18px', fontWeight: 300 }}>+237 678 653 119</p>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>IN</div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>BE</div>
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </main>
  );
}

