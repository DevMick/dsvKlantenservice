# DSV Colis - Service de Récupération et Livraison

Site web professionnel pour DSV, un service de récupération et livraison de colis en France.

## 🚀 Fonctionnalités

- **Service 24/7** : Récupération et livraison de colis disponible à tout moment
- **Formulaires d'enregistrement** : Interface utilisateur pour l'enregistrement et la réception de fonds
- **Design responsive** : Compatible avec tous les appareils (mobile, tablette, desktop)
- **Animations fluides** : Interface moderne avec Framer Motion
- **Envoi d'emails automatique** : Notification par email des nouvelles demandes

## 🛠️ Technologies utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique pour une meilleure robustesse
- **Tailwind CSS** : Framework CSS utilitaire pour le design
- **Framer Motion** : Animations et transitions fluides
- **React Hook Form** : Gestion des formulaires
- **Nodemailer** : Envoi d'emails via SMTP
- **Lucide React** : Icônes modernes

## 📦 Installation

1. Clonez le repository :
```bash
git clone <repository-url>
cd dsv-colis
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
```bash
cp env.example .env.local
```

4. Modifiez le fichier `.env.local` avec vos paramètres SMTP :
```env
EMAIL_HOST=ssl0.ovh.net
EMAIL_PORT=465
EMAIL_USER=votre-email@dsv.com
EMAIL_PASS=votre-mot-de-passe
EMAIL_RECIPIENTS=registratie@autodp.org,richtingklantautodp.be@gmail.com
```

5. Lancez le serveur de développement :
```bash
npm run dev
```

6. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du projet

```
dsv-colis/
├── app/
│   ├── components/          # Composants React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── FundReception.tsx
│   │   └── Footer.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # API pour l'envoi d'emails
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil
├── public/                  # Assets statiques
├── package.json
└── README.md
```

## 📧 Configuration Email

Le site utilise Nodemailer pour envoyer les emails. Configurez vos paramètres SMTP dans le fichier `.env.local`.

### Exemple de configuration OVH :
```env
EMAIL_HOST=ssl0.ovh.net
EMAIL_PORT=465
EMAIL_USER=contact@votre-domaine.com
EMAIL_PASS=votre-mot-de-passe
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` et `globals.css`. Modifiez les variables CSS pour changer le thème :

```css
:root {
  --primary-600: #2563eb;
  --primary-500: #3b82f6;
  /* ... */
}
```

### Contenu
Modifiez le contenu dans les composants React situés dans `app/components/`.

## 🚀 Déploiement

### Vercel (recommandé)
1. Connectez votre repository à Vercel
2. Configurez les variables d'environnement dans le dashboard Vercel
3. Déployez automatiquement

### Autres plateformes
```bash
npm run build
npm start
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🔧 Scripts disponibles

- `npm run dev` : Serveur de développement
- `npm run build` : Build de production
- `npm run start` : Serveur de production
- `npm run lint` : Vérification du code

## 📞 Support

Pour toute question ou support technique, contactez l'équipe de développement.

---

© 2024 DSV Colis. Tous droits réservés.
