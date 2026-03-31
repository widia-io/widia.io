'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function AppShell({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideChrome = pathname === '/preview/alane-michele'

  return (
    <>
      {!hideChrome && <Header />}
      <main className={hideChrome ? '' : 'relative overflow-hidden pt-20 lg:pt-24'}>
        {children}
      </main>
      {!hideChrome && <Footer />}
    </>
  )
}
