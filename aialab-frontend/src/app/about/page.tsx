import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '180px 60px 100px' }}>

        {/* CINEMATIC HEADER */}
        <section style={{ textAlign: 'center', marginBottom: '120px' }}>
          <h2 className="reveal" style={{ fontSize: '72px', lineHeight: 1.1, maxWidth: '1000px', margin: '0 auto' }}>
            Votre partenaire stratégique pour le <em>succès business.</em>
          </h2>
        </section>

        {/* STATS STRIPE */}
        <div style={{ marginBottom: '120px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { val: '+100', lbl: 'Clients' },
              { val: '50+', lbl: 'Projets livrés' },
              { val: '+03', lbl: "Ans d'expérience" },
              { val: '2', lbl: 'Agences' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '36px', fontWeight: 300, color: 'var(--cyan)', marginBottom: '5px' }}>{s.val}</h4>
                <p style={{ fontSize: '10px', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 300 }}>{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DOMAIN GRID */}
        <div className="domain-grid">
          {[
            { tag: 'BRANDING & DESIGN' },
            { tag: 'STRATÉGIE & CONSEIL' },
            { tag: 'TECH & DÉVELOPPEMENT' },
          ].map((d, i) => (
            <div key={i} className="domain-col">
              <img src="/images/hero-bg.jpg" alt={d.tag} style={{ borderRadius: '20px' }} />
              <div className="domain-overlay" />
              <div className="domain-tag">{d.tag}</div>
            </div>
          ))}
        </div>

        {/* CORE PHILOSOPHY & STATS */}
        <section className="glass-panel">
          <div className="flex-split">
            <div>
              <h3>Nous façonnons l&apos;avenir des <em>marques influentes.</em></h3>
              <p>Avec plus d&apos;expertise cumulée à travers diverses industries, notre équipe dédiée s&apos;engage à propulser votre croissance grâce à une excellence opérationnelle et créative sans compromis.</p>
            </div>
            <div>
              <p style={{ opacity: 0.6, lineHeight: 1.8 }}>Nous nous spécialisons dans la livraison de solutions sur mesure qui génèrent des résultats tangibles. Que ce soit pour la finance, la technologie ou le luxe, nous transformons vos défis en opportunités de marché dominantes.</p>
            </div>
          </div>
          <div className="stat-bar-row">
            {[
              { val: '98%', lbl: 'Satisfaction Client' },
              { val: '100+', lbl: 'Projets Livrés avec Succès' },
              { val: '+03', lbl: "Années d'Expertise" },
              { val: '2', lbl: 'Agences Stratégiques' },
            ].map((s, i) => (
              <div key={i} className="stat-bar-item">
                <div className="stat-bar-val">{s.val}</div>
                <div className="stat-bar-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="glass-panel" style={{ textAlign: 'center' }}>
          <h3 style={{ fontWeight: 300 }}>Notre Processus <em>Rigoureux</em></h3>
          <div className="service-grid" style={{ marginTop: '80px' }}>
            {[
              { num: '01.', title: 'Immersion', desc: "Audit complet de vos enjeux business, étude de vos concurrents et de vos aspirations profondes." },
              { num: '02.', title: 'Stratégie', desc: "Définition d'un angle d'attaque créatif et technologique unique pour différencier votre projet." },
              { num: '03.', title: 'Création', desc: "Développement du design haute-fidélité et de la technologie jusqu'à l'excellence visuelle." },
              { num: '04.', title: 'Lancement', desc: "Expansion et suivi de performance pour s'assurer que vos objectifs business sont atteints." },
            ].map((step, i) => (
              <div key={i} className="glass-card">
                <div style={{ color: 'var(--cyan)', fontSize: '36px', fontWeight: i === 0 ? 300 : 900, marginBottom: '24px' }}>{step.num}</div>
                <h4>{step.title}</h4>
                <p style={{ fontSize: '14px', opacity: 0.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="glass-panel" style={{ textAlign: 'center' }}>
          <h2>Des talents <em>passionnés.</em></h2>
          <div className="service-grid" style={{ marginTop: '60px' }}>
            {[
              { title: 'Directeur Créatif', role: 'Vision & Brand Strategy' },
              { title: 'Lead Developer', role: 'Architecture & Code' },
              { title: 'Brand Designer', role: 'Identité & Graphisme' },
              { title: 'Project Manager', role: 'Coordination & Succès' },
            ].map((member, i) => (
              <div key={i} className="glass-card">
                <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', margin: '0 auto 32px', border: 'none' }} />
                <h4 style={{ fontWeight: 400 }}>{member.title}</h4>
                <p style={{ fontSize: '13px', opacity: 0.5 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
