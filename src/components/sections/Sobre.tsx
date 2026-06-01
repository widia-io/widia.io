import Image from 'next/image'

import { aboutBio, aboutHighlights } from '@/constants/sections'

export default function Sobre() {
  return (
    <section className="section section--alt section-anchor" id="sobre">
      <div className="wrap founder reveal">
        <div className="ph founder__photo founder__portrait">
          <Image
            src="/images/bruno-hero.jpg"
            alt="Retrato de Bruno Gonzaga"
            fill
            sizes="(max-width: 820px) 100vw, 38vw"
            className="founder__image"
          />
          <span className="ph__tag">Bruno Gonzaga</span>
        </div>
        <div>
          <span className="eyebrow">quem está por trás</span>
          <h2 className="h-section">20 anos de engenharia pesada. Agora trabalhando pra você.</h2>
          <p className="lead">{aboutBio}</p>
          <div className="founder__facts">
            {aboutHighlights.map((item) => (
              <div className="fact" key={item.label}>
                <div className="l">{item.label.toLowerCase()}</div>
                <div className="v">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
