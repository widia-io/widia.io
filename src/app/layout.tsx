import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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
  title: 'widia.io | IA prática pro seu negócio',
  description: 'Ajudamos empreendedores e pequenas empresas a usar inteligência artificial no dia a dia. Sem código, sem complicação, com resultado no primeiro mês.',
  keywords: 'IA, inteligência artificial, automação, consultoria IA, pequenas empresas, empreendedores, sessão gratuita',
  authors: [{ name: 'widia.io' }],
  robots: 'index, follow',
  openGraph: {
    title: 'widia.io | IA prática pro seu negócio',
    description: 'Ajudamos empreendedores e pequenas empresas a usar inteligência artificial no dia a dia. Sem código, sem complicação.',
    url: 'https://widia.io',
    siteName: 'widia.io',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'widia.io | IA prática pro seu negócio',
    description: 'Ajudamos empreendedores e pequenas empresas a usar inteligência artificial no dia a dia. Sem código, sem complicação.',
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
        <Header />
        <main className="relative overflow-hidden pt-20 lg:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
