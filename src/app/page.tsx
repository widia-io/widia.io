import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'

export const metadata: Metadata = {
  keywords: [
    'consultoria IA para pequenas empresas', 'como usar IA no meu negócio',
    'inteligência artificial para empresas', 'automação com IA',
    'IA prática para negócios', 'ferramentas de IA para empresas',
  ],
}
import ComoFunciona from '@/components/sections/ComoFunciona'
import OQueResolvemos from '@/components/sections/OQueResolvemos'
import ProvaSocial from '@/components/sections/ProvaSocial'
import Services from '@/components/sections/Services'
import Sobre from '@/components/sections/Sobre'
import FAQ from '@/components/sections/FAQ'
import CTAFinal from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <OQueResolvemos />
      <ComoFunciona />
      <ProvaSocial />
      <Services />
      <Sobre />
      <FAQ />
      <CTAFinal />
    </>
  )
}
