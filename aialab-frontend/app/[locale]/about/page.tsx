import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <main>
      <Navbar />
      <div className="container" style={{ padding: '180px 60px 100px' }}>

        {/* CINEMATIC HEADER */}
        <section style={{ textAlign: 'center', marginBottom: '120px' }}>
          <h2 className="reveal" style={{ fontSize: '72px', lineHeight: 1.1, maxWidth: '1000px', margin: '0 auto' }}>
            {t.rich("title", { em: (chunks) => <em>{chunks}</em> })}
          </h2>
        </section>

        {/* DOMAIN GRID */}
        <div className="domain-grid">
          {[
            { tag: 'BRANDING & DESIGN', img: '/images/hero-bg.jpg' },
            { tag: 'STRATÉGIE & CONSEIL', img: '/images/hero-bg.jpg' },
            { tag: 'TECH & DÉVELOPPEMENT', img: '/images/hero-bg.jpg' },
          ].map((d, i) => (
            <div key={i} className="domain-col reveal">
              <Image src={d.img} alt={d.tag} fill style={{ objectFit: 'cover' }} />
              <div className="domain-overlay" />
              <div className="domain-tag">{d.tag}</div>
            </div>
          ))}
        </div>

        {/* CORE PHILOSOPHY */}
        <section className="glass-panel revealed">
          <div className="flex-split">
            <div>
              <h3 className="stagger-item">Nous façonnons l&apos;avenir des <em>marques influentes.</em></h3>
              <p className="stagger-item">{t("desc")}</p>
            </div>
            <div>
              <p className="stagger-item" style={{ opacity: 0.6, lineHeight: 1.8 }}>
                Nous nous spécialisons dans la livraison de solutions sur mesure qui génèrent des résultats tangibles. 
                Que ce soit pour la finance, la technologie ou le luxe, nous transformons vos défis en opportunités de marché dominantes.
              </p>
            </div>
          </div>
        </section>

        {/* STATS STRIPE */}
        <div style={{ margin: '120px 0' }}>
          <div className="stat-bar-row">
            {[
              { val: '+100', lbl: 'Clients' },
              { val: '50+', lbl: 'Projets livrés' },
              { val: '+03', lbl: "Ans d'expérience" },
              { val: '100%', lbl: 'Dévouement' },
            ].map((s, i) => (
              <div key={i} className="stat-bar-item reveal">
                <div className="stat-bar-val">{s.val}</div>
                <div className="stat-bar-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS */}
        <section className="glass-panel revealed" style={{ textAlign: 'center' }}>
          <h3 style={{ fontWeight: 300 }} className="stagger-item">Notre Processus <em>Rigoureux</em></h3>
          <div className="service-grid" style={{ marginTop: '80px' }}>
            {[
              { num: '01.', title: 'Immersion', desc: "Audit complet de vos enjeux business, étude de vos concurrents et de vos aspirations profondes." },
              { num: '02.', title: 'Stratégie', desc: "Définition d'un angle d'attaque créatif et technologique unique pour différencier votre projet." },
              { num: '03.', title: 'Création', desc: "Développement du design haute-fidélité et de la technologie jusqu'à l'excellence visuelle." },
              { num: '04.', title: 'Lancement', desc: "Expansion et suivi de performance pour s'assurer que vos objectifs business sont atteints." },
            ].map((step, i) => (
              <div key={i} className="glass-card reveal">
                <div style={{ color: 'var(--cyan)', fontSize: '36px', fontWeight: 300, marginBottom: '24px' }}>{step.num}</div>
                <h4>{step.title}</h4>
                <p style={{ fontSize: '14px', opacity: 0.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
