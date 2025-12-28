# Configuration de Resend pour l'envoi d'emails

## Configuration du domaine terrassement-lezoux.fr

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

### 3. Vérifier le domaine terrassement-lezoux.fr (IMPORTANT)

**Cette étape est essentielle pour pouvoir envoyer des emails depuis contact@terrassement-lezoux.fr**

1. Allez sur [resend.com/domains](https://resend.com/domains)
2. Cliquez sur **Add Domain**
3. Entrez : `terrassement-lezoux.fr`
4. Resend va vous donner des enregistrements DNS à ajouter :
   - **Enregistrement TXT** pour la vérification du domaine
   - **Enregistrement MX** (optionnel, pour recevoir des emails)
   
5. Connectez-vous à votre gestionnaire de domaine (là où vous avez acheté terrassement-lezoux.fr)
6. Ajoutez les enregistrements DNS demandés par Resend
7. Attendez la vérification (peut prendre quelques minutes à quelques heures)
8. Une fois le domaine vérifié ✅, vous pourrez utiliser `contact@terrassement-lezoux.fr`

### 4. Configurer la variable d'environnement

**Localement** (fichier `.env.local`) :
```
RESEND_API_KEY=re_votre_cle_api_ici
```

**Sur Vercel** :
1. Allez dans les paramètres de votre projet Vercel
2. Allez dans **Environment Variables**
3. Ajoutez : `RESEND_API_KEY` avec votre clé API
4. Cochez : Production, Preview, Development
5. Cliquez sur **Save**

### 5. Redéployer

Après avoir configuré la clé API et vérifié le domaine :
- Sur Vercel : le redéploiement se fait automatiquement après le push
- Localement : redémarrez le serveur (`pnpm dev`)

## Configuration actuelle

- **Adresse d'envoi (from)** : `contact@terrassement-lezoux.fr`
- **Adresse de réception (to)** : `bland.terrassement@gmail.com`

## Test

Une fois configuré, testez le formulaire de contact sur votre site. Les emails seront envoyés depuis `contact@terrassement-lezoux.fr` vers `bland.terrassement@gmail.com`.

## Limites du plan gratuit

- 100 emails/jour
- 3000 emails/mois
- Parfait pour un site professionnel avec un trafic normal

## Dépannage

### Erreur "Domain not verified"
- Vérifiez que le domaine `terrassement-lezoux.fr` est bien vérifié sur Resend
- Vérifiez que les enregistrements DNS sont correctement configurés

### Erreur "Cannot send to this email"
- En mode test, Resend n'envoie qu'à l'adresse du compte
- Une fois le domaine vérifié, vous pouvez envoyer à n'importe quelle adresse
