'use client'

import { useState } from 'react'

import { CTA_MESSAGES } from '@/constants/cta-messages'
import { faqItems } from '@/constants/sections'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const whatsAppLink = buildWhatsAppLink(CTA_MESSAGES.DIAGNOSTICO)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section">
      <div className="wrap faq-wrap">
        <div className="reveal">
          <span className="eyebrow">tira-dúvidas</span>
          <h2 className="h-section mt-[18px]">Ainda tem dúvida? A gente responde.</h2>
          <p className="lead mt-5">
            Se sua pergunta não estiver aqui, fala no WhatsApp. Em poucos minutos
            confirmamos se seu processo cabe no Diagnóstico 48h.
          </p>
          <a className="btn btn--ghost btn--sm mt-[26px]" href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            <span className="wa-dot" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="faq-list reveal">
          {faqItems.map((item, index) => (
            <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={item.question}>
              <button className="faq-q" type="button" onClick={() => toggle(index)}>
                {item.question}
                <span className="ic" />
              </button>
              {openIndex === index && (
                <div className="faq-a">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
