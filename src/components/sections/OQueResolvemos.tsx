'use client'

import { useState } from 'react'

import { buildWhatsAppLink } from '@/lib/whatsapp'
import { problemCards } from '@/constants/sections'

export default function OQueResolvemos() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section pains" id="dores">
      <div className="wrap">
        <div className="shead reveal">
          <span className="eyebrow">você se reconhece?</span>
          <h2 className="h-section">Escolha o gargalo que mais te custa. Em 48h a gente valida se vale automatizar.</h2>
          <p className="lead">
            Cada hora gasta em tarefa manual é caixa jogado fora. O diagnóstico pega{' '}
            <em className="accent not-italic">um</em> destes e prova, com protótipo, se a IA resolve.
          </p>
        </div>

        <div className="tabs reveal">
          <div className="tabs__nav" role="tablist" aria-label="Gargalos">
            {problemCards.map((card, index) => (
              <button
                key={card.tag}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={`tab-btn ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="ix">{String(index + 1).padStart(2, '0')}</span>
                {card.tag === 'Perdido' ? 'Não sei por onde' : card.tag}
              </button>
            ))}
          </div>

          <div className="tabs__panels">
            {problemCards.map((card, index) => (
              <div
                key={card.problem}
                className={`tab-panel ${activeIndex === index ? 'active anim' : ''}`}
                role="tabpanel"
              >
                <p className="quote">{card.problem}</p>
                <p className="sol">{card.solution}</p>
                <div className="tab-result">
                  <div>
                    <div className="lab">resultado esperado</div>
                    <div className="txt">{card.outcome}</div>
                  </div>
                </div>
                <a
                  className="btn btn--ghost btn--sm"
                  href={buildWhatsAppLink(card.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Validar isso em 48h <span className="arr">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
