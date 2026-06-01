import { buildWhatsAppLink } from '@/lib/whatsapp'
import { CTA_MESSAGES } from '@/constants/cta-messages'

export default function Hero() {
  const whatsAppLink = buildWhatsAppLink(CTA_MESSAGES.HERO)

  return (
    <header className="hero" id="top">
      <div className="hero__glow" />
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">diagnóstico ia 48h · para pequenas empresas</span>
          <h1 className="h-hero">
            Descubra onde a IA já <em>economiza dinheiro</em> na sua operação.
          </h1>
          <p className="lead">
            Em 48h a Widia mapeia um processo manual, estima o gargalo e entrega um{' '}
            <strong>protótipo simples de automação com IA</strong>. R$1.500 - abatido se virar implantação.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href={whatsAppLink} target="_blank" rel="noopener noreferrer">
              <span className="wa-dot" />
              Quero meu diagnóstico 48h
            </a>
            <a className="btn btn--ghost" href="#dores">
              Ver onde a IA entra <span className="arr">→</span>
            </a>
          </div>

          <div className="hero__trust">
            <div className="metric">
              <span className="v">R$1.500</span>
              <span className="l">investimento único</span>
            </div>
            <div className="metric">
              <span className="v">48h</span>
              <span className="l">do brief à entrega</span>
            </div>
            <div className="metric">
              <span className="v accent">3 vagas</span>
              <span className="l">abertas em junho</span>
            </div>
          </div>
        </div>

        <div className="proof reveal">
          <div className="proof__win">
            <div className="proof__bar">
              <div className="proof__dots"><i /><i /><i /></div>
              <span className="proof__file">diagnostico-widia.pdf</span>
            </div>
            <div className="proof__body">
              <div className="proof__head">
                <span className="proof__title">Mapa de automação</span>
                <span className="proof__badge">● entregue em 48h</span>
              </div>
              <div className="dl-row"><span className="dl-k">Processo mapeado</span><span className="dl-v">Orçamento manual no Excel</span></div>
              <div className="dl-row"><span className="dl-k">Gargalo identificado</span><span className="dl-v warn">1 dia / semana</span></div>
              <div className="dl-row"><span className="dl-k">Custo invisível / mês</span><span className="dl-v warn">~R$ 3.200</span></div>
              <div className="dl-row"><span className="dl-k">Protótipo incluso</span><span className="dl-v ok">✓ navegável</span></div>
              <div className="ba">
                <div className="cell"><div className="t">hoje</div><div className="n">1 dia</div></div>
                <div className="arrowc">→</div>
                <div className="cell now"><div className="t">com IA</div><div className="n">3 min</div></div>
              </div>
            </div>
          </div>

          <div className="proof__float">
            <span className="big">↓94%</span>
            <span className="sm">tempo no processo<br />após automação</span>
          </div>
        </div>
      </div>
    </header>
  )
}
