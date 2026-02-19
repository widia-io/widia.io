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
    { name: 'Serviços', href: '#servicos' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Valores', href: '#valores' },
  ]

  const whatsAppLink = buildWhatsAppLink('Olá, quero saber mais!')

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-500">
      <nav className={`mx-auto transition-all duration-500 ${
        isScrolled 
          ? 'max-w-5xl' 
          : 'max-w-6xl'
      }`}>
        <div className={`
          bg-white/90 backdrop-blur-xl rounded-full shadow-xl border border-gray-200/50
          transition-all duration-500 ease-out
          ${isScrolled 
            ? 'py-2 px-4 scale-95' 
            : 'py-3 px-6'
          }
        `}>
          <div className="flex items-center justify-between">
            <Link href="/" className={`flex-shrink-0 transition-all duration-500 ${
              isScrolled ? 'scale-85' : 'scale-100'
            }`}>
              <Logo size={isScrolled ? "sm" : "md"} />
            </Link>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    text-gray-600 hover:text-black font-medium 
                    transition-all duration-300
                    ${isScrolled ? 'text-sm' : 'text-base'}
                  `}
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
                className={`
                  bg-blue-600 text-white font-medium rounded-full
                  hover:bg-blue-700 transition-all duration-300
                  ${isScrolled 
                    ? 'px-4 py-2 text-sm' 
                    : 'px-6 py-3 text-base'
                  }
                `}
              >
                Entre em contato
              </a>
            </div>

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-2">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-200">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
