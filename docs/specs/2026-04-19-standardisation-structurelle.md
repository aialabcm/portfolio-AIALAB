# Spécification : Standardisation Structurelle & Next.js Best Practices

**Statut** : 🟢 En attente de validation
**Date** : 19 Avril 2026
**Sujet** : Nettoyage, organisation documentaire et mise en conformité technique.

---

## 1. Objectifs
L'objectif est de transformer le projet actuel en une structure "Pro-Grade", facile à maintenir, sécurisée et alignée sur les derniers standards de Next.js (App Router).

## 2. Changements Structurels (Standardisation)

### 2.1 Renommage & Organisation Racine
- **Action** : Renommer le dossier parent de `projet frontent aialabportfolio` vers `aialab-portfolio-studio`. 
  > *Note : Corrige la faute de frappe "frontent" et donne un nom plus professionnel.*
- **Action** : Créer une arborescence documentaire à la racine :
  - `docs/archives/` : Pour stocker les anciennes maquettes HTML et ressources de design statiques.
  - `docs/specs/` : Pour centraliser les spécifications validées.
  - `docs/plans/` : Pour stocker les plans d'implémentation techniques.

### 2.2 Nettoyage du Frontend (`aialab-frontend/`)
- **Action** : Supprimer le dossier `api/` à la racine de l'application (la logique est déjà dans `lib/api.ts`).
- **Action** : Supprimer le fichier résiduel `.temp_design.html`.
- **Action** : Déplacer `maquette du desgin.html` et `aialab_arborescence.html` vers `docs/archives/`.

---

## 3. Conformité Next.js Best Practices

### 3.1 Gestion des Données & API (`lib/api.ts`)
- **Sécurité** : Suppression de l'URL de repli (fallback) en dur pour `WP_GRAPHQL_URL`. Si la variable d'environnement manque, une erreur explicite doit être levée.
- **Fetching** : Validation que les appels GraphQL utilisent bien les options de cache de Next.js (`{ next: { revalidate: 60 } }`).

### 3.2 Optimisation UI & Performance
- **Font Optimization** : Migration de l'import `@import url(...)` dans `globals.css` vers `next/font/google` dans `app/[locale]/layout.tsx` pour éliminer le décalage de mise en page (CLS).
- **Server Components** : Vérifier que les composants de `components/sections/` ne portent pas la directive `'use client'` inutilement.

### 3.3 Localisation (i18n)
- **Action** : Audit des fichiers `messages/*.json` pour s'assurer qu'aucune chaîne de caractères "en dur" ne subsiste dans `Navbar.tsx` ou `Hero.tsx`.

---

## 4. Critères de Succès
1. Le projet ne contient plus de fichiers de "bruit" (.html à la racine, dossier api vide).
2. L'URL Backend est uniquement gérée via `.env`.
3. La police Roboto est chargée via `next/font`.
4. La structure `docs/` est en place et contient cette spécification.

---

## 5. Auto-Révision
- [x] Pas de TODO ou TBD.
- [x] Pas d'ambiguïté sur les chemins de dossiers.
- [x] Cohérence avec les préférences de l'utilisateur pour l'option 2.
