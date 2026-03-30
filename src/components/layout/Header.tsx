'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import { Menu, X } from 'lucide-react'

import { buildWhatsAppLink } from '@/lib/whatsapp'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
  ]

  const whatsAppLink = buildWhatsAppLink('Olá! Quero agendar minha sessão gratuita de 1h.')

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        className={`container px-0 transition-all duration-500 ${
          isScrolled ? 'max-w-5xl' : 'max-w-6xl'
        }`}
      >
        <div
          className={`surface-panel rounded-[30px] transition-all duration-500 ease-out ${
            isScrolled ? 'px-4 py-3' : 'px-4 py-3.5 lg:px-6 lg:py-4'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={`flex-shrink-0 transition-all duration-500 ${
                isScrolled ? 'scale-95' : 'scale-100'
              }`}
            >
              <Logo size={isScrolled ? 'sm' : 'md'} />
            </Link>

            <div className="hidden lg:flex items-center gap-1 rounded-full border border-[var(--ledger-line)] bg-white/50 p-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isScrolled ? 'text-sm' : 'text-[15px]'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`action-primary ${isScrolled ? 'px-5 py-2.5 text-sm' : 'px-6 py-3'}`}
              >
                Sessão Gratuita
              </a>
            </div>

            <button
              className="surface-card rounded-full p-2.5 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 lg:hidden">
            <div className="surface-card-strong rounded-[28px] p-4">
              <div className="space-y-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  navegação
                </p>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="mt-3 block rounded-[20px] border border-transparent px-4 py-3 text-[15px] font-medium text-[var(--graphite-ink)] hover:border-[var(--ledger-line)] hover:bg-white/70"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 border-t border-[var(--ledger-line)] pt-4">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-primary flex w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sessão Gratuita
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
