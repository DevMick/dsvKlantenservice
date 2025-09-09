import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSV Klantenservice - Service de Récupération et Livraison de Colis',
  description: 'DSV Klantenservice - Service professionnel de récupération et livraison de colis. Rapide, fiable et sécurisé. Nous récupérons vos colis et les livrons chez vous.',
  keywords: 'DSV, Klantenservice, colis, livraison, récupération, transport, logistique, service client',
  authors: [{ name: 'DSV Klantenservice' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/Logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/Logo.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: { url: '/Logo.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/Logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/Logo.png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="shortcut icon" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
