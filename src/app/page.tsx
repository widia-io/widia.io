import Hero from '@/components/sections/Hero'
import Dashboard from '@/components/sections/Dashboard'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'

export default function Home() {
  return (
    <>
      <div className="pt-20">
        <Hero />
      </div>
      <Dashboard />
      <Services />
      <Pricing />
    </>
  )
}