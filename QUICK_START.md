# 🚀 Guide de Démarrage Rapide - DSV Colis

## ✅ Projet Créé avec Succès !

Le site DSV Colis a été créé avec succès dans le dossier `DSV`. Voici tout ce qui a été mis en place :

### 📁 Structure du Projet
```
DSV/
├── app/
│   ├── components/
│   │   ├── Header.tsx          ✅ Navigation responsive
│   │   ├── Hero.tsx            ✅ Section d'accueil
│   │   ├── Services.tsx        ✅ Services de récupération/livraison
│   │   ├── Testimonials.tsx    ✅ Témoignages clients
│   │   ├── Gallery.tsx         ✅ Galerie d'images
│   │   ├── Contact.tsx         ✅ Formulaire d'enregistrement
│   │   ├── FundReception.tsx   ✅ Formulaire de réception de fonds
│   │   └── Footer.tsx          ✅ Pied de page
│   ├── api/
│   │   └── contact/route.ts    ✅ API d'envoi d'emails
│   ├── globals.css             ✅ Styles globaux
│   ├── layout.tsx              ✅ Layout principal
│   └── page.tsx                ✅ Page d'accueil
├── public/
│   ├── favicon.svg             ✅ Favicon personnalisé DSV
│   ├── favicon.ico             ✅ Favicon ICO
│   └── apple-touch-icon.png    ✅ Icône Apple
├── package.json                ✅ Dépendances configurées
├── tailwind.config.js          ✅ Configuration Tailwind
├── next.config.js              ✅ Configuration Next.js
└── README.md                   ✅ Documentation complète
```

## 🎯 Fonctionnalités Implémentées

### ✅ Adaptations pour DSV
- **Nom de l'entreprise** : DSV Colis (au lieu d'Auto DP)
- **Services** : Récupération et livraison de colis (au lieu de garage/remorquage)
- **Formulaires adaptés** : 
  - "Type d'article" au lieu de "Marque véhicule"
  - "Description de l'article" au lieu de "Modèle véhicule"
- **Contenu en français** : Tout le site est en français
- **Design professionnel** : Couleurs et design inspirant la confiance

### ✅ Fonctionnalités Techniques
- **Next.js 14** avec App Router
- **TypeScript** pour la robustesse
- **Tailwind CSS** pour le design responsive
- **Framer Motion** pour les animations
- **React Hook Form** pour les formulaires
- **Nodemailer** pour l'envoi d'emails
- **API configurée** avec les mêmes adresses email qu'AutoDp

## 🚀 Comment Démarrer

### 1. Ouvrir le Terminal
Ouvrez un terminal dans le dossier `DSV` :
```bash
cd DSV
```

### 2. Installer les Dépendances (si pas déjà fait)
```bash
npm install
```

### 3. Configurer les Variables d'Environnement
Copiez le fichier d'exemple :
```bash
copy env.example .env.local
```

Modifiez `.env.local` avec vos paramètres email :
```env
EMAIL_HOST=ssl0.ovh.net
EMAIL_PORT=465
EMAIL_USER=votre-email@dsv.com
EMAIL_PASS=votre-mot-de-passe
EMAIL_RECIPIENTS=registratie@autodp.org,richtingklantautodp.be@gmail.com
```

### 4. Lancer le Serveur de Développement
```bash
npm run dev
```

### 5. Ouvrir le Site
Ouvrez votre navigateur et allez sur : http://localhost:3000

## 🎨 Personnalisation

### Modifier les Couleurs
Éditez `app/globals.css` et `tailwind.config.js` pour changer les couleurs principales.

### Modifier le Contenu
- **Textes** : Modifiez directement dans les composants `app/components/`
- **Images** : Remplacez les URLs Unsplash par vos propres images
- **Logo** : Modifiez le texte "DSV Colis" dans `Header.tsx`

### Ajouter des Images
Placez vos images dans le dossier `public/` et référencez-les avec `/nom-image.jpg`

## 📧 Test des Formulaires

### Formulaire d'Enregistrement
- Accessible via le bouton "Enregistrement" ou l'URL `#contact`
- Champs adaptés pour les colis (type d'article, description)
- Envoi automatique d'email aux destinataires configurés

### Formulaire de Réception de Fonds
- Accessible via le bouton "Réception de Fonds" ou l'URL `#fund-reception`
- Même structure que l'enregistrement
- Email différencié pour identifier le type de demande

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé)
1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre repository GitHub
3. Configurez les variables d'environnement
4. Déployez en un clic !

### Option 2 : Build Local
```bash
npm run build
npm start
```

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Serveur de production
npm start

# Vérification du code
npm run lint
```

## 📱 Responsive Design

Le site est optimisé pour :
- 📱 **Mobile** : 320px et plus
- 📱 **Tablette** : 768px et plus  
- 💻 **Desktop** : 1024px et plus
- 🖥️ **Large screens** : 1280px et plus

## 🎯 Prochaines Étapes

1. **Tester le site** : Naviguez sur toutes les sections
2. **Tester les formulaires** : Remplissez et envoyez les formulaires
3. **Personnaliser** : Ajoutez vos propres images et contenus
4. **Configurer l'email** : Testez l'envoi d'emails
5. **Déployer** : Mettez le site en ligne

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js est installé (`node --version`)
2. Vérifiez que les dépendances sont installées (`npm install`)
3. Consultez les logs d'erreur dans le terminal
4. Vérifiez la configuration des variables d'environnement

---

🎉 **Félicitations !** Votre site DSV Colis est prêt à être utilisé !

Pour plus de détails, consultez le fichier `README.md` complet.
