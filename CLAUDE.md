# Documentation Projet Miséricorde

## Présentation

Site web de l'Association Miséricorde, une association humanitaire basée en région parisienne qui œuvre pour la solidarité et l'entraide envers les plus démunis depuis 2011.

## Stack Technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Icônes** : Lucide React
- **Images** : Next/Image pour l'optimisation

## Structure du Projet

```
misericorde/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Page d'accueil
│   ├── globals.css          # Styles globaux Tailwind
│   └── mentions-legales/
│       └── page.tsx         # Page mentions légales
├── components/
│   ├── Navbar.tsx           # Navigation fixe avec menu mobile
│   ├── Hero.tsx             # Section héro avec citation
│   ├── DonationSection.tsx  # Section don (HelloAsso + RIB)
│   ├── Actions.tsx          # 3 cartes d'actions principales
│   ├── ActionsInternational.tsx  # Section actions internationales
│   ├── Histoire.tsx         # Histoire de l'association
│   ├── Valeurs.tsx          # Valeurs (Solidarité, Universalité, Générosité)
│   ├── Remerciements.tsx    # Section remerciements bénévoles
│   └── Footer.tsx           # Pied de page avec contact
├── public/
│   ├── logo-misericorde.png # Logo de l'association
│   ├── liste_associations_humanitaires.webp  # Image hero
│   ├── distrib.jpg          # Image section don
│   ├── hotel-social.jpeg    # Image action hôtels sociaux
│   ├── la-chapelle-paris.jpg # Image distribution Paris
│   ├── ramadan-action.png   # Image action Ramadan
│   └── principal.jpg        # Image actions internationales
└── CLAUDE.md                # Cette documentation
```

## Composants

### Navbar
- Navigation fixe en haut
- Logo + nom de l'association
- Menu desktop avec liens : Faire un don, Notre Histoire, Nos Actions, Nos Valeurs, Contact
- Menu hamburger pour mobile (breakpoint lg)

### Hero
- Image de fond avec overlay teal (opacity-30)
- Citation en italique
- Sous-titre descriptif
- Bouton CTA "Découvrir nos actions"

### DonationSection
- **Toggle HelloAsso / Virement** pour choisir le mode de paiement
- **Mode HelloAsso** :
  - Toggle Ponctuel / Mensuel
  - Sélection montant (10€, 20€, 50€, Autre)
  - Équivalence du don
  - Bouton vers HelloAsso
- **Mode Virement (RIB)** :
  - IBAN avec bouton copier
  - BIC/SWIFT avec bouton copier
  - Informations titulaire
  - Note SWIFT pour virements internationaux

### Actions
3 cartes présentant les actions principales :
1. Distribution Hôtels Sociaux (450+ repas/semaine)
2. Distribution de Repas à Paris - La Chapelle (300 repas, mercredi soir)
3. Action Spéciale Ramadan (70 à 240 repas/soir)

### ActionsInternational
Section horizontale présentant les actions internationales et aide au cas par cas (Syrie, Birmanie, etc.)

### Histoire
- Titre au-dessus de l'image sur mobile
- Layout 2 colonnes sur desktop
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
- [ ] Remplacer l'image de la section Histoire par une vraie photo
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Configurer le domaine et SSL
