# Configuration de Resend pour l'envoi d'emails

## Étapes de configuration

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à votre compte Resend
2. Allez dans **API Keys** (ou [https://resend.com/api-keys](https://resend.com/api-keys))
3. Cliquez sur **Create API Key**
4. Donnez un nom à votre clé (ex: "Terrassement Lezoux")
5. Copiez la clé générée (elle commence par `re_`)

### 3. Configurer la variable d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```
RESEND_API_KEY=re_votre_cle_api_ici
```

Remplacez `re_votre_cle_api_ici` par votre vraie clé API.

### 4. Vérifier votre domaine (optionnel mais recommandé)

Pour utiliser votre propre adresse email comme expéditeur (au lieu de `onboarding@resend.dev`) :

1. Allez dans **Domains** sur Resend
2. Ajoutez votre domaine
3. Suivez les instructions pour vérifier votre domaine via DNS
4. Une fois vérifié, modifiez `app/api/contact/route.ts` ligne 15 :
   ```typescript
   from: "Contact Site Web <contact@votre-domaine.com>",
   ```

### 5. Pour Vercel (déploiement)

1. Allez dans les paramètres de votre projet Vercel
2. Allez dans **Environment Variables**
3. Ajoutez : `RESEND_API_KEY` avec votre clé API
4. Redéployez votre site

## Test

Une fois configuré, testez le formulaire de contact sur votre site. Les emails seront envoyés à `bland.terrassement@gmail.com`.

## Limites du plan gratuit

- 100 emails/jour
- 3000 emails/mois
- Parfait pour un site professionnel avec un trafic normal

