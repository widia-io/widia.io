'use client'

import { ArrowRight } from 'lucide-react'
import { Barlow, Dancing_Script, Playfair_Display } from 'next/font/google'
import styles from './page.module.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-alane-body',
  display: 'swap',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-alane-script',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-alane-serif',
  display: 'swap',
})

type Plan = {
  name: string
  price: string
  cta: string
  href: string
  badge?: string
  featured?: boolean
  features: { text: string; enabled: boolean }[]
}

const plans: Plan[] = [
  {
    name: 'Essencial',
    price: '197',
    cta: 'Começar agora',
    href: 'https://wa.me/5599991253064?text=Oi%20Alane!%20Quero%20o%20plano%20Essencial.',
    features: [
      { text: '1 análise de look por semana', enabled: true },
      { text: 'Guia de cores personalizado', enabled: true },
      { text: 'Suporte via WhatsApp', enabled: true },
      { text: 'Consultoria de compras mensal', enabled: false },
      { text: 'Revisão de guarda-roupa', enabled: false },
    ],
  },
  {
    name: 'Presença',
    price: '397',
    cta: 'Quero esse',
    href: 'https://wa.me/5599991253064?text=Oi%20Alane!%20Quero%20o%20plano%20Presen%C3%A7a.',
    badge: 'Mais popular',
    featured: true,
    features: [
      { text: 'Análise de looks ilimitada', enabled: true },
      { text: 'Guia de cores personalizado', enabled: true },
      { text: 'Suporte via WhatsApp', enabled: true },
      { text: 'Consultoria de compras mensal', enabled: true },
      { text: 'Revisão de guarda-roupa trimestral', enabled: true },
      { text: 'Planejamento de looks por ocasião', enabled: true },
    ],
  },
  {
    name: 'Imagem Total',
    price: '697',
    cta: 'Falar com Alane',
    href: 'https://wa.me/5599991253064?text=Oi%20Alane!%20Quero%20o%20plano%20Imagem%20Total.',
    features: [
      { text: 'Tudo do plano Presença', enabled: true },
      { text: 'Consultoria presencial completa', enabled: true },
      { text: 'Personal shopping acompanhado', enabled: true },
      { text: 'Análise de imagem profissional', enabled: true },
      { text: 'Prioridade nos agendamentos', enabled: true },
    ],
  },
]

const benefits = [
  {
    number: '01',
    title: 'Análise de looks',
    description: 'Foto antes de sair, feedback rápido e técnico. Sem achismo, sem chute.',
  },
  {
    number: '02',
    title: 'Cartela de cores',
    description: 'As cores que valorizam sua pele, cabelo e olhos. Pare de comprar errado.',
  },
  {
    number: '03',
    title: 'Consultoria de compras',
    description: 'Compre menos e melhor. Guarda-roupa funcional que combina entre si.',
  },
  {
    number: '04',
    title: 'Suporte contínuo',
    description: 'Dúvidas surgem na hora de se vestir, não em horário de consulta.',
  },
  {
    number: '05',
    title: 'Ocasiões especiais',
    description: 'Casamento, entrevista, evento. Sua imagem planejada pra cada momento.',
  },
  {
    number: '06',
    title: 'Evolução constante',
    description: 'Seu estilo evolui junto com você. Revisamos e ajustamos mês a mês.',
  },
]

export default function AlaneMichelePreview() {
  return (
    <div className={`${styles.page} ${barlow.variable} ${dancingScript.variable} ${playfair.variable}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          ALANE <span>Michele</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#clube">O Clube</a>
          <a href="#planos">Planos</a>
          <a href="#beneficios">Benefícios</a>
        </div>
        <a href="https://wa.me/5599991253064" target="_blank" rel="noopener noreferrer" className={styles.navBtn}>
          Quero entrar
        </a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>Consultora de Imagem &amp; Estilo</div>
          <h1>
            SE VISTA
            <br />
            COM
            <span className={styles.script}> intenção.</span>
          </h1>
          <p className={styles.heroDesc}>
            Acompanhamento mensal para você parar de depender do acaso na hora de se vestir.
            <br />
            <strong>Sua roupa falando por você — todos os dias.</strong>
          </p>
          <div className={styles.heroCtas}>
            <a href="#planos" className={styles.btnPrimary}>
              Ver planos
              <ArrowRight size={16} />
            </a>
            <a href="#clube" className={styles.btnOutline}>
              Como funciona
            </a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.num}>77K+</div>
              <div className={styles.lbl}>Seguidores</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.num}>290+</div>
              <div className={styles.lbl}>Conteúdos</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.num}>100%</div>
              <div className={styles.lbl}>Personalizado</div>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroPattern} />
          <div className={styles.heroCard}>
            <div className={styles.heroCardLabel}>Autenticidade e intenção</div>
            <div className={styles.heroCardText}>Te ajudo a fazer sua roupa falar por você.</div>
            <div className={styles.heroCardSub}>
              Especialista em imagem pessoal com 77 mil pessoas acompanhando sua metodologia.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.problema} id="clube">
        <div>
          <div className={styles.sectionTag}>O problema</div>
          <div className={styles.sectionTitle}>
            ARMÁRIO
            <br />
            CHEIO,
            <br />
            <span className={styles.script}>nada pra usar.</span>
          </div>
        </div>

        <div className={styles.problemaText}>
          <p>
            Todo dia a mesma cena: você abre o armário, olha um monte de roupa, e não sabe o que usar. Não é falta de
            peça — é falta de <strong>direção</strong>.
          </p>
          <p>
            Uma consultoria avulsa resolve o dia. <strong>O Clube Alane Michele resolve o permanente.</strong>{' '}
            Acompanhamento mês a mês para sua imagem evoluir junto com você.
          </p>
          <p>
            Sem fórmula genérica. Sem regras engessadas. Tudo baseado em <strong>quem você é e onde quer chegar</strong>{' '}
            — com autenticidade e intenção.
          </p>
          <a href="#planos" className={`${styles.btnPrimary} ${styles.inlineBtn}`}>
            Conhecer os planos
          </a>
        </div>
      </section>

      <section className={styles.planos} id="planos">
        <div className={styles.planosHeader}>
          <div className={styles.sectionTag}>Assinatura mensal</div>
          <div className={styles.sectionTitle}>
            O CLUBE <span className={styles.script}>Alane Michele</span>
          </div>
          <p>Escolha o plano certo para o seu momento e comece agora.</p>
        </div>

        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <div key={plan.name} className={`${styles.plan} ${plan.featured ? styles.featured : ''}`}>
              {plan.badge ? <div className={styles.planBadge}>{plan.badge}</div> : null}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.planPrice}>
                <sup>R$</sup>
                {plan.price}
              </div>
              <div className={styles.planCycle}>por mês · cancele quando quiser</div>
              <div className={styles.planDivider} />
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature.text} className={feature.enabled ? styles.on : ''}>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <a href={plan.href} target="_blank" rel="noopener noreferrer" className={styles.planCta}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.beneficios} id="beneficios">
        <div className={styles.beneficiosHeader}>
          <div className={styles.sectionTag}>O que você recebe</div>
          <div className={styles.sectionTitle}>
            TUDO QUE SUA IMAGEM <span className={styles.script}>precisa.</span>
          </div>
        </div>
        <div className={styles.featuresGrid}>
          {benefits.map((benefit) => (
            <div key={benefit.number} className={styles.feature}>
              <div className={styles.featureNum}>{benefit.number}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.depoimento}>
        <blockquote>
          &ldquo;Pela primeira vez entrei num evento sabendo exatamente o que estava comunicando. Essa segurança não
          tem preço.&rdquo;
        </blockquote>
        <div className={styles.author}>— Cliente do plano Presença</div>
      </section>

      <section className={styles.ctaFinal}>
        <div className={styles.sectionTag}>Pronta pra começar?</div>
        <h2>
          SE VISTA COM <span className={styles.script}>intenção.</span>
        </h2>
        <p>Cancele quando quiser. Sem fidelidade, sem burocracia. Só resultado.</p>
        <div className={styles.ctaBtns}>
          <a href="#planos" className={styles.btnWhite}>
            Escolher meu plano
            <ArrowRight size={16} />
          </a>
          <a
            href="https://wa.me/5599991253064?text=Oi%20Alane!%20Quero%20saber%20mais%20sobre%20o%20clube."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhiteGhost}
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.logo}>
          ALANE <span>Michele</span>
        </div>
        <p>© 2026 · Especialista em imagem pessoal</p>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/alanemichele.estilo/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://wa.me/5599991253064" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  )
}
