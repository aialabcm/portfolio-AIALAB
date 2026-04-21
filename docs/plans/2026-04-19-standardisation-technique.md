# Plan d'Implémentation : Standardisation Technique & Structurelle

**Objectif :** Assainir la base de code, organiser la documentation et aligner le projet sur les meilleures pratiques Next.js (Optimisation des polices et sécurité API).

**Architecture :** Restructuration en "Pro-Grade" avec séparation claire entre le code applicatif (`aialab-frontend`), la documentation (`docs/specs`) et les archives de conception.

**Technologies clés :** Next.js 15+, next/font, GraphQL, .env.

---

### Tâche 1 : Mise en place de l'arborescence documentaire
**Fichiers ciblés :**
- Créer : `docs/archives/`
- Créer : `docs/plans/`

- [ ] **Étape 1 : Création des répertoires**
  (Utiliser `mkdir` pour créer les dossiers nécessaires à la racine du projet).

- [ ] **Étape 2 : Vérification**
  Exécuter : `ls -R docs`
  Attente : Présence de `archives`, `plans` et `specs`.

---

### Tâche 2 : Archivage et Nettoyage de la Racine
**Fichiers ciblés :**
- Déplacer : `maquette du desgin.html` → `docs/archives/`
- Déplacer : `aialab_arborescence.html` → `docs/archives/`
- Déplacer : `ninhoArtboard 2.jpeg` → `docs/archives/`
- Supprimer : `aialab-frontend/.temp_design.html`
- Supprimer (si vide) : `aialab-frontend/api/`

- [ ] **Étape 1 : Déplacement des ressources statiques**
  Exécuter les commandes de déplacement.

- [ ] **Étape 2 : Suppression des fichiers inutiles**
  Exécuter `rm` sur les fichiers temporaires et orphelins.

- [ ] **Étape 3 : Vérification**
  Vérifier que la racine du projet est propre.

---

### Tâche 3 : Sécurisation de l'API GraphQL
**Fichiers ciblés :**
- Modifier : `aialab-frontend/lib/api.ts`

- [ ] **Étape 1 : Retrait du fallback en dur**
  Remplacer :
  ```typescript
  const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || 'https://cms.aialabcmr.com/graphql';
  ```
  Par :
  ```typescript
  const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;
  if (!WP_GRAPHQL_URL) {
    throw new Error('NEXT_PUBLIC_WP_GRAPHQL_URL is not defined in environment variables');
  }
  ```

- [ ] **Étape 2 : Vérification**
  S'assurer que `.env.local` contient bien la variable pour éviter une erreur au runtime.

---

### Tâche 4 : Optimisation de la Police Roboto (next/font)
**Fichiers ciblés :**
- Modifier : `aialab-frontend/app/[locale]/layout.tsx`
- Modifier : `aialab-frontend/globals.css`

- [ ] **Étape 1 : Configuration de next/font**
  Importer `Roboto` depuis `next/font/google` dans le layout et l'appliquer au `<body>`.
  
- [ ] **Étape 2 : Nettoyage CSS**
  Supprimer l'import `@import url(...)` et la déclaration `font-family` manuelle dans `globals.css`.

- [ ] **Étape 3 : Vérification visuelle**
  Vérifier que le site utilise toujours Roboto sans appel réseau sortant vers Google Fonts (observé dans l'onglet Network).

---

## 🚫 Note sur le renommage du dossier racine
Le renommage du dossier `projet frontent aialabportfolio` est recommandé pour corriger la faute de frappe, mais devra être effectué manuellement par l'utilisateur à la fin de l'exécution pour éviter toute déconnexion de la session de travail actuelle.
