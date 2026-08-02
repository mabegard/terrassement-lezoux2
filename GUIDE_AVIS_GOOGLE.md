# Guide : Intégrer les avis Google sur votre site

Ce guide vous explique comment connecter automatiquement vos 30+ avis Google à votre site web.

## 🎯 Méthode 1 : API Google Places (Recommandée)

Cette méthode récupère automatiquement vos avis Google en temps réel.

### Étape 1 : Obtenir votre Place ID Google

1. Allez sur [Google Maps](https://www.google.com/maps)
2. Recherchez "Bland Terrassement Lezoux" ou votre adresse complète
3. Cliquez sur votre établissement
4. Dans l'URL, vous verrez quelque chose comme :
   ```
   https://www.google.com/maps/place/Bland+Terrassement/@.../data=!3m1!4b1!4m6!3m5!1s0xxxxxxxxxxxxxxxx:0xxxxxxxxxxxx!8m2!3d...!4d...!16s...
   ```
   Le `Place ID` est dans la partie `data=!3m1!4b1!4m6!3m5!1s0xxxxxxxxxxxxxxxx`

5. **OU** utilisez l'outil officiel : https://developers.google.com/maps/documentation/places/web-service/place-id
   - Entrez votre adresse : "82 Rue Felix Duchasseint, 63190 LEZOUX"
   - Copiez le Place ID fourni

### Étape 2 : Créer une clé API Google

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet (ou utilisez un existant)
3. Activez l'**API Places** :
   - Allez dans "APIs & Services" > "Library"
   - Recherchez "Places API"
   - Cliquez sur "Enable"
4. Créez une clé API :
   - Allez dans "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "API Key"
   - Copiez la clé générée
5. **Important** : Restreignez votre clé API (recommandé) :
   - Cliquez sur la clé créée
   - Dans "API restrictions", sélectionnez "Restrict key"
   - Choisissez "Places API"
   - Dans "Application restrictions", ajoutez votre domaine (ex: `terrassement-lezoux.fr`)

### Étape 3 : Configurer le fichier .env.local

1. Dans le dossier de votre projet, créez un fichier `.env.local`
2. Ajoutez vos informations :

```env
GOOGLE_PLACE_ID=VOTRE_PLACE_ID_ICI
GOOGLE_PLACES_API_KEY=VOTRE_CLE_API_ICI
```
3. **Important** : Le fichier `.env.local` est déjà dans `.gitignore`, vos clés ne seront pas partagées publiquement.

### Étape 4 : Redémarrer le serveur

```bash
# Arrêtez le serveur (Ctrl+C) puis relancez :
pnpm dev
```

### Étape 5 : Vérifier

Allez sur `http://localhost:3000/avis` et vous devriez voir vos vrais avis Google s'afficher automatiquement !

---

## 🎯 Méthode 2 : Widget Embed (Alternative simple)

Si vous préférez une solution plus simple sans API, vous pouvez utiliser un widget tiers.

### Option A : Elfsight (Widget gratuit/payant)

1. Créez un compte sur [Elfsight](https://elfsight.com/)
2. Sélectionnez le widget "Google Reviews"
3. Configurez avec votre établissement Google
4. Copiez le code d'intégration
5. Ajoutez-le dans `app/avis/page.tsx` :

```tsx
<div dangerouslySetInnerHTML={{ __html: 'VOTRE_CODE_WIDGET_ICI' }} />
```

### Option B : Widget Google officiel (Limité)

Google offre un widget limité. Vous pouvez l'ajouter dans la page avis.

---

## 🎯 Méthode 3 : Ajout manuel (Simple mais moins dynamique)

Si vous préférez ajouter manuellement les avis :

1. Allez sur votre page Google My Business
2. Copiez les avis un par un
3. Modifiez le fichier `app/avis/page.tsx`
4. Ajoutez-les dans le tableau `avisDemo`

---

## ❓ Dépannage

### Les avis ne s'affichent pas

1. Vérifiez que `.env.local` existe et contient les bonnes valeurs
2. Vérifiez que le serveur a été redémarré après l'ajout de `.env.local`
3. Vérifiez la console du navigateur (F12) pour voir les erreurs
4. Vérifiez que votre clé API est valide et active

### Erreur "API key not valid"

- Vérifiez que votre clé API est correctement copiée
- Vérifiez que l'API Places est activée dans Google Cloud Console
- Vérifiez que votre clé API n'a pas de restrictions trop strictes

### Erreur "Place ID not found"

- Vérifiez que le Place ID est correct
- Essayez de trouver votre Place ID avec l'outil officiel Google

---

## 💰 Coûts (rester à 0 €)

Google Maps Platform offre ~**200 $ de crédit / mois**.  
L'API du site est **mise en cache 24 h** (`/api/google-reviews`) :

- ~1 appel Google par jour max (pas à chaque visite)
- ~30 appels / mois → largement couvert par le crédit gratuit

**Limite Google** : Place Details renvoie au maximum **5 avis** (plus la note et le total).  
Pour voir tous les avis, le bouton « Voir tous les avis sur Google » reste disponible.

Sur Vercel, ajoutez aussi les variables `GOOGLE_PLACE_ID` et `GOOGLE_PLACES_API_KEY` dans
**Project → Settings → Environment Variables**, puis redéployez.

---

## ✅ Avantages de chaque méthode

| Méthode | Avantages | Inconvénients |
|---------|-----------|---------------|
| **API Google Places** | ✅ Automatique<br>✅ Toujours à jour<br>✅ Gratuit jusqu'à 1000 req/jour | ⚠️ Nécessite configuration |
| **Widget Elfsight** | ✅ Simple<br>✅ Pas de code | ⚠️ Peut être payant<br>⚠️ Dépendance externe |
| **Manuel** | ✅ Simple<br>✅ Gratuit | ⚠️ Pas automatique<br>⚠️ Nécessite maintenance |

---

## 📞 Besoin d'aide ?

Si vous avez des questions ou des problèmes, consultez :
- [Documentation Google Places API](https://developers.google.com/maps/documentation/places/web-service)
- [Documentation Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

