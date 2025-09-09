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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
