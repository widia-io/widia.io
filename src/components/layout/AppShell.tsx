'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RevealRuntime from '@/components/RevealRuntime'

export default function AppShell({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideChrome = pathname.startsWith('/preview') || pathname.startsWith('/propostas')
  const mainClassName = hideChrome
    ? ''
    : pathname === '/'
      ? 'relative overflow-hidden'
      : 'relative overflow-hidden pt-20 lg:pt-24'

  return (
    <>
      <RevealRuntime />
      {!hideChrome && <Header />}
      <main className={mainClassName}>{children}</main>
      {!hideChrome && <Footer />}
    </>
  )
}
