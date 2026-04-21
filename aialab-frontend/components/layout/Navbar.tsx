"use client";

import React, { useState, useEffect, useRef } from "react";
import {Link, usePathname} from "@/navigation";
import {useTranslations, useLocale} from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();
  
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Ne pas masquer si le menu est ouvert
      if (isMenuOpen) return;

      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <>
      <header className={`nav-header ${isHidden ? "hidden" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="nav-pill">
          {/* Desktop Links */}
          <div className="nav-links-desktop">
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
          </div>

          {/* Language Switcher (Desktop) */}
          <div className="nav-lang desktop-only">
            <Link href={pathname} locale="fr" className={locale === 'fr' ? 'active' : ''}>FR</Link>
            <Link href={pathname} locale="en" className={locale === 'en' ? 'active' : ''}>EN</Link>
          </div>

          {/* Mobile Logo Placeholder or just center */}
          <div className="mobile-only logo-small">
             <Link href="/" onClick={() => setIsMenuOpen(false)}>
               <span className="text-gradient-aia">AIA</span> LAB
             </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className={`menu-trigger ${isMenuOpen ? "active" : ""}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <div className={`nav-overlay ${isMenuOpen ? "open" : ""}`}>
        <nav className="overlay-content">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={`overlay-link ${pathname === link.href ? "active" : ""}`}
              locale={locale as "fr" | "en"}
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="overlay-lang">
            <Link href={pathname} locale="fr" className={locale === 'fr' ? 'active' : ''}>FRANÇAIS</Link>
            <Link href={pathname} locale="en" className={locale === 'en' ? 'active' : ''}>ENGLISH</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
