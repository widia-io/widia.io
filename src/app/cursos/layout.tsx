import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA Aplicada para Negócios — Imersão ao Vivo',
  description:
    'Em duas noites, você sai com as ferramentas de IA instaladas, configuradas e funcionando no seu negócio. Sem teoria. Sem código. Sem enrolação.',
  keywords: [
    'curso prático inteligência artificial negócios',
    'como usar IA no meu negócio', 'consultoria IA para pequenas empresas',
    'ferramentas de IA para empresas', 'curso IA para empreendedores',
  ],
  alternates: { canonical: '/cursos/ia-aplicada-negocios' },
  openGraph: {
    title: 'IA Aplicada para Negócios — Imersão ao Vivo',
    description: 'Em duas noites, você sai com as ferramentas de IA instaladas, configuradas e funcionando no seu negócio.',
    url: '/cursos/ia-aplicada-negocios',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA Aplicada para Negócios — Imersão ao Vivo',
    description: 'Em duas noites, você sai com as ferramentas de IA instaladas, configuradas e funcionando no seu negócio.',
  },
}

export default function CursosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
