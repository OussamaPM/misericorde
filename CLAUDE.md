# Documentation Projet Miséricorde

## Présentation

Site web de l'Association Miséricorde, une association humanitaire basée en région parisienne qui œuvre pour la solidarité et l'entraide envers les plus démunis depuis 2011.

## Stack Technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Icônes** : Lucide React
- **Images** : Next/Image pour l'optimisation automatique (WebP, lazy loading, responsive)

## Structure du Projet

```
misericorde/
├── app/
│   ├── layout.tsx          # Layout principal (avec preconnect Unsplash)
│   ├── page.tsx             # Page d'accueil (avec landmark <main>)
│   ├── globals.css          # Styles globaux Tailwind
│   └── mentions-legales/
│       └── page.tsx         # Page mentions légales
├── components/
│   ├── Navbar.tsx           # Navigation fixe avec menu mobile (aria-label)
│   ├── Hero.tsx             # Section héro avec Next/Image priority
│   ├── DonationSection.tsx  # Section don (HelloAsso + RIB, aria-pressed)
│   ├── Actions.tsx          # 3 cartes d'actions avec Next/Image
│   ├── ActionsInternational.tsx  # Section actions internationales
│   ├── Histoire.tsx         # Histoire avec image Unsplash optimisée
│   ├── Valeurs.tsx          # Valeurs (Solidarité, Universalité, Générosité)
│   ├── Remerciements.tsx    # Section remerciements bénévoles
│   └── Footer.tsx           # Pied de page avec contact
├── public/
│   ├── logo-misericorde.png # Logo de l'association
│   ├── liste_associations_humanitaires.webp  # Image hero (28KB)
│   ├── distrib.jpg          # Image section don (60KB)
│   ├── hotel-social.jpeg    # Image action hôtels sociaux (137KB)
│   ├── la-chapelle-paris.jpg # Image distribution Paris (150KB)
│   ├── ramadan-action.jpg   # Image action Ramadan (106KB)
│   └── principal.jpg        # Image actions internationales (69KB)
├── next.config.ts           # Config Next.js (remotePatterns Unsplash)
└── CLAUDE.md                # Cette documentation
```

## Composants

### Navbar
- Navigation fixe en haut
- Logo + nom de l'association
- Menu desktop avec liens : Faire un don, Notre Histoire, Nos Actions, Nos Valeurs, Contact
- Menu hamburger pour mobile (breakpoint lg)
- **Accessibilité** : aria-label dynamique, aria-expanded sur le bouton menu

### Hero
- Next/Image avec `priority` et `fill` pour le LCP
- Image de fond avec overlay teal (opacity-30)
- Citation en italique
- Sous-titre descriptif
- Bouton CTA "Découvrir nos actions"

### DonationSection
- **Toggle HelloAsso / Virement** pour choisir le mode de paiement
- **Accessibilité** : role="group", aria-label, aria-pressed sur les boutons
- **Mode HelloAsso** :
  - Message d'encouragement don mensuel
  - Sélection montant (10€, 20€, 50€, Autre)
  - Équivalence du don
  - Bouton vers HelloAsso
- **Mode Virement (RIB)** :
  - IBAN avec bouton copier
  - BIC/SWIFT avec bouton copier
  - Informations titulaire
  - Note SWIFT pour virements internationaux

### Actions
3 cartes présentant les actions principales avec Next/Image optimisé :
1. Distribution Hôtels Sociaux (450+ repas/semaine)
2. Distribution de Repas à Paris - La Chapelle (300 repas, mercredi soir)
3. Action Spéciale Ramadan (70 à 240 repas/soir)

### ActionsInternational
Section horizontale présentant les actions internationales et aide au cas par cas (Syrie, Birmanie, etc.)

### Histoire
- Titre au-dessus de l'image sur mobile
- Layout 2 colonnes sur desktop
- Image Unsplash optimisée via Next/Image (avec aspect-ratio)
- Texte décrivant l'origine de l'association (Ramadan 2011)
- Citation en exergue

### Valeurs
3 valeurs avec icônes :
- Solidarité (HeartHandshake)
- Universalité (Users)
- Générosité (Gift)

### Remerciements
Bandeau de remerciement aux bénévoles avec icône cœur

### Footer
- Logo + description
- Lien mentions légales
- Coordonnées (adresse, téléphone, email)
- Bloc CTA "Envie d'aider ?"
- Copyright

## Informations de l'Association

### Coordonnées
- **Adresse** : 25 rue Julian Grimau, 93700 Drancy
- **Téléphone** : 06 12 01 93 96
- **Email** : misericorde.rahma@gmail.com

### Informations légales
- **Nom** : MISÉRICORDE
- **Siège social** : 41, rue Beaufils, 93120 La Courneuve
- **RNA** : W931014586
- **Déclaration** : 11 décembre 2015 (Préfecture Seine-Saint-Denis)
- **J.O.** : n°1887 (Parution n°20150052)

### RIB
- **IBAN** : FR76 1695 8000 0105 0565 6979 975
- **BIC** : QNTOFRP1XXX
- **Titulaire** : MISÉRICORDE
- **Banque** : Qonto (Olinda SAS)
- **SWIFT partenaire** : TRWIBEB3XXX

## Palette de Couleurs

- **Teal** (principal) : teal-700, teal-800, teal-900
- **Amber** (accent/CTA) : amber-400, amber-500, amber-600, amber-700
- **Gris** : gray-50 à gray-900
- **Blanc** : backgrounds des cartes

## Responsive Design

- **Mobile** : < 640px (sm)
- **Tablet** : 640px - 1024px (md)
- **Desktop** : > 1024px (lg)

Breakpoints Tailwind utilisés : sm, md, lg, xl

## Performance & Accessibilité

### Scores PageSpeed (Mobile)
- **Performance** : 82+ (optimisé depuis 65)
- **Accessibilité** : 96 (optimisé depuis 87)
- **Bonnes pratiques** : 100
- **SEO** : 100

### Optimisations appliquées
- **Images** : Toutes les images utilisent Next/Image avec :
  - Conversion automatique WebP
  - Lazy loading intelligent
  - Attribut `sizes` pour le responsive
  - `priority` sur l'image LCP (Hero)
- **Accessibilité** :
  - Landmark `<main>` sur le contenu principal
  - `aria-label` sur les boutons interactifs
  - `aria-expanded` et `aria-pressed` sur les toggles
  - Contrastes de couleurs améliorés (WCAG AA)
  - Hiérarchie des titres correcte (h1 > h2 > h3)
- **Performance** :
  - Preconnect/dns-prefetch pour Unsplash
  - Images redimensionnées aux dimensions affichées
  - Taille totale images : ~550KB (réduit depuis ~6MB)

## Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer en production
npm run start
```

## Déploiement

### Prérequis serveur
- Node.js 18+
- npm ou yarn

### Étapes
1. Clone du repo GitHub
2. `npm install`
3. `npm run build`
4. `npm run start` (ou PM2 pour process manager)
5. Configuration reverse proxy (Nginx) vers port 3000

## À faire

- [ ] Créer campagne HelloAsso et mettre à jour l'URL dans DonationSection.tsx
- [ ] Remplacer l'image de la section Histoire par une vraie photo de l'association
- [ ] Ajouter Google Analytics (optionnel)
