# Spécification Architecture Backend (WordPress CPT & ACF)

## 1. Custom Post Types (CPT)

### 1.1 CPT : Projets
- **Post Type Slug:** `projet`
- **Plural Label:** Projets
- **GraphQL Single Name:** `projet`
- **GraphQL Plural Name:** `projets`
- **Supports WordPress natifs requis:** Title, Thumbnail (Image mise en avant pour les vignettes du Frontend)
- **Show in GraphQL:** `True` (Requis pour l'API)

### 1.2 CPT : Services
- **Post Type Slug:** `service`
- **Plural Label:** Services
- **GraphQL Single Name:** `service`
- **GraphQL Plural Name:** `services`
- **Supports WordPress natifs requis:** Title
- **Show in GraphQL:** `True` (Requis pour l'API)

---

## 2. Advanced Custom Fields (ACF) - Version Gratuite

### 2.1 Groupe de champs : Détails Projet
**Field Group Name :** Détails Projet  
**GraphQL Field Name :** `deTailsProjet` *(Nommage strict attendu par l'API existante)*  
*(Assignation : Type de publication est égal à "Projet")*

| Nom du Champ (Label) | Nom (Slug) | Type de champ | Options Spéciales / Logique Conditionnelle |
| :--- | :--- | :--- | :--- |
| Catégorie du Projet | `categorieProjet` | Select / Choix | Choix : Branding, Web Design, Print, Digital |
| Nom du Client | `nomDuClient` | Text (Texte) | |
| Année/Date de Livraison | `dateLivraison` | Text (Texte) | Format libre (ex: "Octobre 2024") |
| Lien du Projet | `lienDuProjet` | URL | **[CONDITION]** Afficher si Catégorie == "Web Design" ou "Digital" |
| Image de Détail 1 | `image1` | Image | Format de retour: **Image Array / Object** |
| Image de Détail 2 | `image2` | Image | Format de retour: **Image Array / Object** |
| Image de Détail 3 | `image3` | Image | Format de retour: **Image Array / Object** |
| Image de Détail 4 | `image4` | Image | Format de retour: **Image Array / Object** |
| Contexte & Mission | `contexteMission` | Textarea | Facultatif. Le récit du projet. |

### 2.2 Groupe de champs : Détails Service
**Field Group Name :** Détails Service  
**GraphQL Field Name :** `deTailsService` *(Nommage strict)*  
*(Assignation : Type de publication est égal à "Service")*

| Nom du Champ (Label) | Nom (Slug) | Type de champ | Options Spéciales / Logique Conditionnelle |
| :--- | :--- | :--- | :--- |
| Icône vectorielle (SVG) | `iconeSvg` | Textarea | Destiné à revoir le code `<svg>...</svg>` brut sans formatage. |
| Description Courte | `descriptionCourte` | Textarea | Sans options "Nouveau paragraphe", texte brut uniquement. |
| Ordre d'affichage | `ordreDaffichage` | Number | Pour trier l'apparition (1, 2, 3...) de l'API vers le front. |

---

## 3. Données de Référence (Issues du Document Cible)
Il n'y aura plus d'images pour les 5 entités Services à renseigner. 
1. Branding & Identité visuelle
2. Design Graphique & Digital
3. Web Design & Développement
4. Solutions Print & Impression
5. Marketing Digital & Communication
