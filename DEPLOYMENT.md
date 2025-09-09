# Guide de Déploiement - DSV Colis

Ce guide vous explique comment déployer le site DSV Colis sur différentes plateformes.

## 🚀 Déploiement sur Vercel (Recommandé)

Vercel est la plateforme recommandée pour déployer des applications Next.js.

### Étapes de déploiement :

1. **Préparer le repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connecter à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub
   - Cliquez sur "New Project"
   - Sélectionnez votre repository DSV

3. **Configuration des variables d'environnement**
   Dans le dashboard Vercel, ajoutez ces variables :
   ```
   EMAIL_HOST=ssl0.ovh.net
   EMAIL_PORT=465
   EMAIL_USER=votre-email@dsv.com
   EMAIL_PASS=votre-mot-de-passe
   EMAIL_RECIPIENTS=registratie@autodp.org,richtingklantautodp.be@gmail.com
   ```

4. **Déployer**
   - Cliquez sur "Deploy"
   - Attendez la fin du build
   - Votre site est en ligne !

### Domaine personnalisé
1. Dans le dashboard Vercel, allez dans "Settings" > "Domains"
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS selon les instructions

## 🐳 Déploiement avec Docker

### Dockerfile
Créez un `Dockerfile` à la racine :

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose
Créez un `docker-compose.yml` :

```yaml
version: '3.8'
services:
  dsv-colis:
    build: .
    ports:
      - "3000:3000"
    environment:
      - EMAIL_HOST=ssl0.ovh.net
      - EMAIL_PORT=465
      - EMAIL_USER=votre-email@dsv.com
      - EMAIL_PASS=votre-mot-de-passe
      - EMAIL_RECIPIENTS=registratie@autodp.org,richtingklantautodp.be@gmail.com
    restart: unless-stopped
```

### Commandes Docker
```bash
# Build et run
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

## 🌐 Déploiement sur Netlify

1. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Configuration Next.js**
   Ajoutez dans `next.config.js` :
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

3. **Variables d'environnement**
   Dans Netlify, ajoutez les mêmes variables que pour Vercel.

## 🖥️ Déploiement sur VPS/Serveur dédié

### Avec PM2 (Process Manager)

1. **Installation sur le serveur**
   ```bash
   # Installer Node.js et npm
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Installer PM2
   sudo npm install -g pm2
   ```

2. **Déployer le code**
   ```bash
   # Cloner le repository
   git clone <votre-repository>
   cd dsv-colis
   
   # Installer les dépendances
   npm install
   
   # Build de production
   npm run build
   ```

3. **Configuration PM2**
   Créez `ecosystem.config.js` :
   ```javascript
   module.exports = {
     apps: [{
       name: 'dsv-colis',
       script: 'npm',
       args: 'start',
       env: {
         NODE_ENV: 'production',
         PORT: 3000,
         EMAIL_HOST: 'ssl0.ovh.net',
         EMAIL_PORT: '465',
         EMAIL_USER: 'votre-email@dsv.com',
         EMAIL_PASS: 'votre-mot-de-passe',
         EMAIL_RECIPIENTS: 'registratie@autodp.org,richtingklantautodp.be@gmail.com'
       }
     }]
   }
   ```

4. **Lancer avec PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

### Configuration Nginx (optionnel)
```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📧 Configuration Email en Production

### Variables d'environnement requises :
- `EMAIL_HOST` : Serveur SMTP (ex: ssl0.ovh.net)
- `EMAIL_PORT` : Port SMTP (ex: 465)
- `EMAIL_USER` : Adresse email d'envoi
- `EMAIL_PASS` : Mot de passe email
- `EMAIL_RECIPIENTS` : Destinataires (séparés par des virgules)

### Test de configuration email :
```bash
# Créer un fichier test-email.js
node -e "
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
transporter.verify().then(console.log).catch(console.error);
"
```

## 🔒 Sécurité

### Recommandations :
1. **HTTPS** : Toujours utiliser HTTPS en production
2. **Variables d'environnement** : Ne jamais commiter les mots de passe
3. **Firewall** : Configurer un firewall sur votre serveur
4. **Mises à jour** : Maintenir les dépendances à jour

### Headers de sécurité (next.config.js) :
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

## 📊 Monitoring

### Outils recommandés :
- **Vercel Analytics** (si déployé sur Vercel)
- **Google Analytics**
- **Sentry** pour le monitoring d'erreurs
- **Uptime Robot** pour surveiller la disponibilité

---

Pour toute question sur le déploiement, consultez la documentation officielle de votre plateforme ou contactez le support technique.
