import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import AppShell from '@/components/layout/AppShell'
import MetaPixel from '@/components/MetaPixel'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://widia.io'),
  title: {
    default: 'widia.io | Diagnóstico IA 48h',
    template: '%s | widia.io',
  },
  description: 'Diagnóstico IA 48h para pequenas empresas: mapa de automação, protótipo simples e plano de implantação com IA.',
  keywords: [
    'diagnóstico IA', 'IA', 'inteligência artificial', 'automação', 'consultoria IA',
    'pequenas empresas', 'empreendedores', 'consultoria IA para pequenas empresas',
    'como usar IA no meu negócio', 'inteligência artificial para empresas',
  ],
  authors: [{ name: 'widia.io' }],
  robots: 'index, follow',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'widia.io | Diagnóstico IA 48h',
    description: 'Mapa de automação, protótipo simples e plano de implantação com IA para pequenas empresas.',
    url: 'https://widia.io',
    siteName: 'widia.io',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'widia.io | Diagnóstico IA 48h',
    description: 'Mapa de automação, protótipo simples e plano de implantação com IA para pequenas empresas.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'widia.io',
              url: 'https://widia.io',
              description: 'Diagnóstico IA 48h para pequenas empresas.',
              founder: { '@type': 'Person', name: 'Bruno Gonzaga' },
            }),
          }}
        />
        <MetaPixel />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
