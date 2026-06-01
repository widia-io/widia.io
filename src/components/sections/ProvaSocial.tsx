import Image from 'next/image'

import { caseStudies, testimonials } from '@/constants/sections'

const caseStats: Record<string, Array<{ value: string; label: string }>> = {
  meuflip: [
    { value: '+24%', label: 'roi médio' },
    { value: '4h/sem', label: 'poupadas' },
    { value: '30s', label: 'análise completa' },
  ],
  MeuFoco: [
    { value: '4 módulos', label: 'integrados' },
    { value: 'Life Score', label: 'semanal' },
    { value: '0 → live', label: 'lançado' },
  ],
}

export default function ProvaSocial() {
  return (
    <section className="section section--alt" id="casos">
      <div className="wrap">
        <div className="shead reveal">
          <span className="eyebrow">resultados reais</span>
          <h2 className="h-section">Não é promessa. São produtos no ar e horas economizadas toda semana.</h2>
        </div>

        <div className="cases-grid reveal">
          {caseStudies.map((caseStudy) => (
            <article className="card case" key={caseStudy.name}>
              <div className="ph case__shot">
                <Image
                  src={caseStudy.image}
                  alt={`Screenshot do ${caseStudy.name}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="case__image"
                />
                <span className="ph__tag">screenshot · {caseStudy.url.replace('https://', '')}</span>
              </div>
              <div className="case__body">
                <div className="case__meta">
                  <span className="case__name"><span className="dot" />{caseStudy.name}</span>
                  <span className="case__url">{caseStudy.url.replace('https://', '')}</span>
                </div>
                <h3>{caseStudy.headline}</h3>
                <p>{caseStudy.description}</p>
                <div className="case__stats">
                  {(caseStats[caseStudy.name] ?? []).map((stat) => (
                    <div className="metric" key={`${caseStudy.name}-${stat.label}`}>
                      <span className="v">{stat.value}</span>
                      <span className="l">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <a className="case__link" href={caseStudy.url} target="_blank" rel="noopener noreferrer">
                  ver site →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="tw-grid reveal">
          {testimonials.map((testimonial) => (
            <article className="card tw" key={testimonial.quote}>
              <div className="tw__tag">- {testimonial.impact}</div>
              <p className="tw__q">&quot;{testimonial.quote}&quot;</p>
              <div className="tw__who">
                <div className="ph tw__av"><span className="ph__tag">foto</span></div>
                <div>
                  <div className="tw__nm">{testimonial.name}</div>
                  <div className="tw__rl">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
