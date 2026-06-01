import { buildWhatsAppLink } from '@/lib/whatsapp'
import { serviceItems } from '@/constants/sections'

const planBenefits: Record<string, string[]> = {
  'Diagnóstico IA 48h': [
    'Mapa de automação do processo',
    'Protótipo simples navegável',
    'Plano de implantação',
    'Valor abate se virar projeto',
  ],
  'Projeto Pontual': [
    'Solução pronta para uso',
    'Testada e ajustada ao seu contexto',
    'Sem código, sem complicação',
  ],
  Acompanhamento: [
    'Operação que melhora todo mês',
    'Mais automação, menos gargalo',
    'Escala sem voltar ao improviso',
  ],
}

export default function Services() {
  return (
    <section className="section section-anchor" id="planos">
      <div className="wrap">
        <div className="shead reveal">
          <span className="eyebrow">comece pequeno, valide rápido</span>
          <h2 className="h-section">Entrada enxuta. Você só escala depois de ver funcionando.</h2>
          <p className="lead">
            O Diagnóstico IA 48h custa R$1.500 e entrega mapa, protótipo e plano.
            Se avançar para implantação, esse valor abate do projeto.
          </p>
        </div>

        <div className="plans reveal">
          {serviceItems.map((item, index) => (
            <article className={`card plan ${item.highlight ? 'plan--feat' : ''}`} key={item.name}>
              <div className="plan__ix">{String(index + 1).padStart(2, '0')}</div>
              <div className="plan__price">{item.format}</div>
              <h3>{item.name}</h3>
              <p className="plan__desc">{item.description}</p>
              <ul className="plan__list">
                {(planBenefits[item.name] ?? []).map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <a
                className={`btn ${item.highlight ? 'btn--primary' : 'btn--ghost'}`}
                href={buildWhatsAppLink(item.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.highlight ? 'Agendar agora' : 'Saiba mais'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
