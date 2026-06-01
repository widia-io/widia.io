import { buildWhatsAppLink } from '@/lib/whatsapp'
import { CTA_MESSAGES } from '@/constants/cta-messages'

const takeaways = [
  'Mapa do processo que mais custa tempo e dinheiro.',
  'Protótipo simples para validar a automação com IA.',
  'Plano de implantação com valor abatido se avançar.',
]

export default function CTAFinal() {
  const whatsAppLink = buildWhatsAppLink(CTA_MESSAGES.CTA_FINAL)

  return (
    <section className="section final">
      <div className="wrap">
        <div className="final__card reveal">
          <div className="hglow" />
          <span className="eyebrow relative">r$1.500 · entrega em 48h</span>
          <h2 className="h-section">Pare de discutir IA no abstrato. Escolha um processo e valide em 48h.</h2>
          <p className="lead">
            A Widia entra em um gargalo real, monta o mapa, entrega um protótipo simples
            e mostra o próximo passo. Se virar implantação, o diagnóstico abate do projeto.
          </p>
          <a className="btn btn--primary relative" href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            <span className="wa-dot" />
            Quero meu diagnóstico 48h
          </a>
          <div className="final__takeaway">
            {takeaways.map((item, index) => (
              <div className="take" key={item}>
                <div className="n">{String(index + 1).padStart(2, '0')}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
