"use client";

import React from "react";
import {Link, usePathname} from "@/navigation";
import {useTranslations, useLocale} from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header className="nav-header">
      <div className="nav-pill">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`nav-link ${pathname === link.href ? "active" : ""}`}
            locale={locale as "fr" | "en"}
          >
            {link.name}
          </Link>
        ))}
        <div className="nav-lang">
          <Link href={pathname} locale="fr" className={locale === 'fr' ? 'active' : ''}>FR</Link>
          <Link href={pathname} locale="en" className={locale === 'en' ? 'active' : ''}>EN</Link>
        </div>
      </div>
    </header>
  );
}
