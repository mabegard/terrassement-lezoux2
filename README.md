# Bland Terrassement - Site Web Professionnel

Site web professionnel pour **Bland Terrassement**, artisan terrassier à Lezoux depuis 13 ans.

## 🚀 Technologies utilisées

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **React 19**

## 📁 Structure du projet

```
app/
├── page.tsx          # Page d'accueil
├── layout.tsx        # Layout principal avec Header et Footer
├── prestations/      # Page des prestations
├── galerie/          # Galerie de réalisations
├── avis/             # Avis clients
└── contact/          # Formulaire de contact

components/
├── Header.tsx        # En-tête avec navigation
└── Footer.tsx        # Pied de page
```

## 🛠️ Démarrage

### Installation des dépendances

```bash
pnpm install
```

### Lancer le serveur de développement

```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Créer une version de production

```bash
pnpm build
pnpm start
```

## 📝 Personnalisation

### Modifier les informations de contact

Éditez les fichiers suivants :
- `components/Header.tsx` - Logo et navigation
- `components/Footer.tsx` - Coordonnées dans le footer
- `app/contact/page.tsx` - Informations de contact

### Ajouter des photos dans la galerie

1. Placez vos images dans le dossier `public/`
2. Modifiez `app/galerie/page.tsx` pour référencer vos images

### Intégrer les avis Google

La page avis affiche actuellement les statistiques réelles (30+ avis, 5/5 étoiles).

**Option 1 : Ajouter manuellement les avis**
1. Allez sur votre page Google My Business
2. Copiez les avis (nom, date, note, commentaire)
3. Ajoutez-les dans `app/avis/page.tsx` dans le tableau `avisGoogle`

**Option 2 : Utiliser un widget automatique (recommandé)**
Plusieurs services permettent d'intégrer automatiquement les avis Google :
- **Elfsight** : https://elfsight.com/fr/google-reviews-widget/
- **Trustindex** : https://www.trustindex.io/
- **Reviews On Website** : https://www.reviewsonmywebsite.com/

Pour intégrer un widget :
1. Créez un compte sur le service de votre choix
2. Connectez votre Google My Business
3. Personnalisez l'apparence du widget
4. Copiez le code d'intégration
5. Ajoutez-le dans `components/GoogleReviews.tsx` ou directement dans `app/avis/page.tsx`

**Option 3 : Utiliser l'API Google Places**
Pour une intégration personnalisée, vous pouvez utiliser l'API Google Places :
1. Créez une clé API sur Google Cloud Console
2. Activez l'API Google Places
3. Utilisez le composant `GoogleReviews.tsx` pour faire les appels API

### Personnaliser les couleurs

Les couleurs principales sont définies avec Tailwind CSS :
- Orange principal : `orange-600` / `orange-700`
- Modifiez les classes dans les composants pour changer les couleurs

## 🌐 Déploiement

### Sur Vercel (recommandé)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre projet depuis GitHub
3. Vercel détectera automatiquement Next.js et déploiera

### Autres plateformes

Le site peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS
- Google Cloud
- Votre propre serveur

## 📞 Informations de contact

- **Téléphone** : 06 74 46 95 81
- **Email** : bland.terrassement@gmail.com
- **Adresse** : 82 Rue Felix Duchasseint, 63190 LEZOUX

## 📄 Licence

Tous droits réservés - Bland Terrassement © 2024
