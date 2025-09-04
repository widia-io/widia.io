'use client'

import Link from 'next/link'
import Logo from '../Logo'
import { Instagram, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Logo size="md" className="mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Transformando negócios com Inteligência Artificial
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="https://instagram.com/widia.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/5527996112436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors duration-200"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-black transition-colors duration-200">
                    Modelos Figma
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-600 hover:text-black transition-colors duration-200">
                    FlutterFlow Apps
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-4">Termos de Uso</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black transition-colors duration-200">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-black mb-4">Contatos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://wa.me/5527996112436"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@widia.io"
                    className="text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2"
                  >
                    <Mail size={16} />
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <p className="text-sm text-gray-500 text-center">
            © 2025 widia.io — levamos empresas ao modelo AI-First com agentes sob medida.
          </p>
        </div>
      </div>
    </footer>
  )
}