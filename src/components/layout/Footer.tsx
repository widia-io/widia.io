'use client'

import Link from 'next/link'
import Logo from '../Logo'
import { Instagram, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--ledger-line)] pb-8 pt-10">
      <div className="container">
        <div className="surface-panel rounded-[30px] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div className="space-y-5">
              <Logo size="md" />
              <p className="max-w-sm text-sm leading-relaxed text-[var(--ink-soft)]">
                IA prática pro seu negócio
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/widia.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--ledger-line)] bg-white/65 p-3 text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/5541995203400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--ledger-line)] bg-white/65 p-3 text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                Navegação
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="#como-funciona" className="text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]">
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                Termos de uso
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                Contato
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="https://wa.me/5541995203400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@widia.io"
                    className="flex items-center gap-2 text-[var(--ink-soft)] hover:text-[var(--graphite-ink)]"
                  >
                    <Mail size={16} />
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6">
          <p className="text-center text-sm text-[var(--ink-soft)]">
            © 2026 widia.io — IA prática pro seu negócio.
          </p>
        </div>
      </div>
    </footer>
  )
}
