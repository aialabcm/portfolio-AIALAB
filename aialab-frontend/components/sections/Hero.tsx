import React from "react";
import {Link} from "@/navigation";
import {useTranslations} from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero-master">
      <div className="hero-panel">
        <h1 className="reveal">{t("title1")} <em>{t("title2")}</em></h1>
        <p className="reveal" style={{ transitionDelay: '0.2s' }}>
          {t("desc")}
        </p>
        <div className="hero-links">
          <Link href="/projects" className="btn-master">{t("btn_projects")}</Link>
          <Link href="/contact">{t("btn_start")}</Link>
        </div>
      </div>
    </section>
  );
}
