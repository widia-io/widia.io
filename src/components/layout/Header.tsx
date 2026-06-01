'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'

import { buildWhatsAppLink } from '@/lib/whatsapp'

const navigation = [
  { name: 'Onde dói', href: '/#dores' },
  { name: 'Como funciona', href: '/#como-funciona' },
  { name: 'Casos', href: '/#casos' },
  { name: 'Planos', href: '/#planos' },
  { name: 'Sobre', href: '/#sobre' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    const currentTheme = document.documentElement.getAttribute('data-theme')

    setTheme(currentTheme === 'light' ? 'light' : 'dark')
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', nextTheme)
    setTheme(nextTheme)

    try {
      localStorage.setItem('widia-theme', nextTheme)
    } catch {}
  }

  const whatsAppLink = buildWhatsAppLink('Olá! Quero fazer o Diagnóstico IA 48h da Widia.')

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav__in">
        <Link href="/#top" className="logo" aria-label="widia.io">
          <span className="dot" />
          widia.io
        </Link>

        <div className="nav__links">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="nav__right">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
            title="Alternar tema"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="btn btn--primary btn--sm" href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            Diagnóstico 48h
          </a>
        </div>
      </div>
    </nav>
  )
}
