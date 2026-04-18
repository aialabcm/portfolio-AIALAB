import { Project } from "../types";

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "TechCam Solutions",
    slug: "techcam-solutions",
    excerpt: "Branding et identité visuelle pour une startup de solutions technologiques au Cameroun.",
    image: "/images/hero-bg.jpg",
    technologies: ["Branding", "2024"],
    category: "Branding / 2024",
    year: "2024",
    github_link: "#",
    live_link: "#",
    color: '#fcebd2',
    gallery: ["/images/hero-bg.jpg", "/images/hero-bg.jpg", "/images/hero-bg.jpg"],
    structure: [
      { name: "src/components", files: ["Header.tsx", "Hero.tsx", "ProjectCard.tsx"] },
      { name: "src/app", files: ["layout.tsx", "page.tsx", "globals.css"] }
    ]
  },
  {
    id: 2,
    title: "Ngondo Foods",
    slug: "ngondo-foods",
    excerpt: "Plateforme e-commerce moderne pour la distribution de produits alimentaires locaux.",
    image: "/images/hero-bg.jpg",
    technologies: ["Web Design", "2024"],
    category: "Web Design / 2024",
    year: "2024",
    github_link: "#",
    live_link: "#",
    color: '#d2e4fc',
    gallery: ["/images/hero-bg.jpg", "/images/hero-bg.jpg"],
    structure: [
      { name: "src/store", files: ["cart.ts", "user.ts"] },
      { name: "src/api", files: ["products.ts", "orders.ts"] }
    ]
  },
  {
    id: 3,
    title: "EcoBank Promo",
    slug: "ecobank-promo",
    excerpt: "Campagne de marketing digital et supports visuels pour les offres promotionnelles d'EcoBank.",
    image: "/images/hero-bg.jpg",
    technologies: ["Digital", "Marketing"],
    category: "Digital / Marketing",
    year: "2024",
    github_link: "#",
    live_link: "#",
    color: '#d2fce4',
    gallery: ["/images/hero-bg.jpg", "/images/hero-bg.jpg"],
    structure: [
      { name: "assets/marketing", files: ["banners/", "videos/", "social-media/"] },
      { name: "src/campaigns", files: ["promo-june.ts", "stats-helper.ts"] }
    ]
  },
  {
    id: 4,
    title: "Scent of Douala",
    slug: "scent-of-douala",
    excerpt: "Expérience digitale luxueuse pour une marque de parfums haut de gamme.",
    image: "/images/hero-bg.jpg",
    technologies: ["Branding", "Luxury"],
    category: "Branding / Luxury",
    year: "2024",
    github_link: "#",
    live_link: "#",
    color: '#fcd2d2',
    gallery: ["/images/hero-bg.jpg", "/images/hero-bg.jpg", "/images/hero-bg.jpg"],
    structure: [
      { name: "src/design-system", files: ["colors.ts", "typography.ts"] },
      { name: "src/scenes", files: ["Landing.tsx", "ProductDetail.tsx"] }
    ]
  }
];



