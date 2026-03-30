import Hero from '@/components/sections/Hero'
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
