import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '180px 60px 100px' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '24px' }}>
          
          {/* FORM */}
          <section className="glass-panel" style={{ marginBottom: 0, padding: '100px' }}>
            <h2 style={{ fontSize: '64px', marginBottom: '60px' }}>
              Commençons quelque chose de <em>grand.</em>
            </h2>
            <div style={{ marginBottom: '40px' }}>
              <label className="contact-label">PRÉNOM &amp; NOM</label>
              <input type="text" placeholder="Ex: Jean Dupont" className="contact-input" />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <label className="contact-label">EMAIL PROFESSIONNEL</label>
              <input type="email" placeholder="votre@entreprise.com" className="contact-input" />
            </div>
            <div style={{ marginBottom: '60px' }}>
              <label className="contact-label">VOTRE PROJET</label>
              <textarea
                placeholder="Expliquez-nous vos besoins..."
                className="contact-input"
                style={{ height: '120px', resize: 'none', display: 'block' }}
              />
            </div>
            <button className="btn-master" style={{ width: '100%' }}>
              Lancer ma demande →
            </button>
          </section>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <section className="glass-panel" style={{ padding: '50px', marginBottom: 0, borderRadius: '32px' }}>
              <h5 style={{ color: 'var(--cyan)', marginBottom: '15px', fontWeight: 700, fontSize: '11px' }}>NOS BUREAUX</h5>
              <p style={{ fontSize: '20px' }}>Vallée Nlongkak, Yaoundé<br />Derrière Express Union Tsinga</p>
            </section>
            <section className="glass-panel" style={{ padding: '50px', marginBottom: 0, borderRadius: '32px' }}>
              <h5 style={{ color: 'var(--cyan)', marginBottom: '15px', fontWeight: 700, fontSize: '11px' }}>CONTACT DIRECT</h5>
              <p style={{ fontSize: '24px', color: 'var(--cyan)', fontWeight: 500 }}>contact@aialab.com</p>
              <p style={{ opacity: 0.4 }}>+237 678 653 119</p>
            </section>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
