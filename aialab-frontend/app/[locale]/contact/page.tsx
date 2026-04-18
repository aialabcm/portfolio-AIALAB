import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '180px 60px 100px' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '24px' }}>
          
          <ContactForm />

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <section className="glass-panel revealed" style={{ padding: '50px', marginBottom: 0, borderRadius: '32px' }}>
              <h5 style={{ color: 'var(--cyan)', marginBottom: '15px', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase' }}>Nos Bureaux</h5>
              <p style={{ fontSize: '20px' }}>Vallée Nlongkak, Yaoundé<br />Cameroun</p>
            </section>
            <section className="glass-panel revealed" style={{ padding: '50px', marginBottom: 0, borderRadius: '32px' }}>
              <h5 style={{ color: 'var(--cyan)', marginBottom: '15px', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase' }}>Contact Direct</h5>
              <p style={{ fontSize: '24px', color: 'var(--cyan)', fontWeight: 500 }}>hello@aialabcm.com</p>
              <p style={{ opacity: 0.4 }}>+237 678 653 119</p>
            </section>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
