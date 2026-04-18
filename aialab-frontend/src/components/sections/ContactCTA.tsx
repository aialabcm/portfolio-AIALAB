import React from "react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="glass-panel" style={{ textAlign: 'center', padding: '140px 40px' }}>
      <h2 className="reveal" style={{ margin: '0 auto 32px', maxWidth: '1000px' }}>
        Prêt à donner vie à votre <em>prochain projet ?</em>
      </h2>
      <p style={{ margin: '0 auto 48px', maxWidth: '900px' }}>
        Que vous soyez une startup ou une entreprise établie, nous avons l&apos;expertise pour vous faire grandir et rayonner.
      </p>
      <Link href="/contact" className="btn-master" style={{ padding: '24px 80px' }}>
        Lancer la conversation
      </Link>
    </section>
  );
}
