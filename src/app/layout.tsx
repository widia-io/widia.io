import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'widia.io | Modelo AI-First para Empresas',
  description: 'A nova era digital começa com o modelo AI-First: implemente com segurança e transforme sua operação em escala.',
  keywords: 'IA, Inteligência Artificial, Automação, Agentes Inteligentes, AI-First, Transformação Digital',
  authors: [{ name: 'widia.io' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'widia.io | Modelo AI-First para Empresas',
    description: 'A nova era digital começa com o modelo AI-First: implemente com segurança e transforme sua operação em escala.',
    url: 'https://widia.io',
    siteName: 'widia.io',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'widia.io | Modelo AI-First para Empresas',
    description: 'A nova era digital começa com o modelo AI-First: implemente com segurança e transforme sua operação em escala.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}