"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Projets", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="nav-header">
      <div className="nav-pill">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`nav-link ${pathname === link.href ? "active" : ""}`}
          >
            {link.name}
          </Link>
        ))}
        <div className="nav-lang">
          <span className="active">FR</span>
          <span>EN</span>
        </div>
      </div>
    </header>
  );
}
