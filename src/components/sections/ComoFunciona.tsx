import { steps } from '@/constants/sections'

export default function ComoFunciona() {
  return (
    <section className="section section-anchor" id="como-funciona">
      <div className="wrap">
        <div className="shead reveal">
          <span className="eyebrow">simples e direto</span>
          <h2 className="h-section">3 passos para sair da dúvida e chegar numa automação validada.</h2>
          <p className="lead">
            Sem curso, sem palestra, sem projeto longo no escuro. Pegamos um processo real,
            validamos com protótipo e só então propomos implantação.
          </p>
        </div>

        <div className="steps reveal">
          {steps.map((step) => (
            <div className="step" key={step.number}>
              <div className="step__n">passo {String(step.number).padStart(2, '0')}</div>
              <h3 className="h-card">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
