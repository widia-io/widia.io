'use client'

import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  {
    type: 'cover' as const,
    tag: 'REUNIÃO · ABRIL 2026',
    title: 'IA prática\npro seu escritório',
    subtitle: 'Widia.io × FBC Consultoria Jurídica',
  },
  {
    type: 'statement' as const,
    tag: 'PONTO DE PARTIDA',
    title: 'Você pesquisa IA\nno direito autoral.',
    highlight: 'Nós fazemos IA funcionar\nno operacional.',
    note: 'O que a inteligência artificial já pode resolver no dia a dia da FBC — sem promessas, com resultados.',
  },
  {
    type: 'problems' as const,
    tag: 'DIAGNÓSTICO',
    title: 'Onde o tempo\nse perde',
    items: [
      {
        icon: '💬',
        label: 'Triagem manual',
        desc: 'Leads chegam pelo WhatsApp perguntando sobre registro de marca, patente, consulta. Alguém responde um a um.',
      },
      {
        icon: '📝',
        label: 'Conteúdo parado',
        desc: 'Três sócios em audiências e processos. Quem cria posts, Reels, artigos pro Instagram e blog?',
      },
      {
        icon: '📄',
        label: 'Documentos repetitivos',
        desc: 'Contratos de licenciamento, pareceres de viabilidade, notificações — sempre o mesmo padrão, preenchido do zero.',
      },
      {
        icon: '👁',
        label: 'Monitoramento manual',
        desc: 'Clientes precisam saber quando uma marca está sendo violada. Hoje isso depende de vigilância humana constante.',
      },
    ],
  },
  {
    type: 'solution' as const,
    tag: 'SOLUÇÃO IMEDIATA',
    title: 'WhatsApp\ninteligente',
    metric: '70%',
    metricLabel: 'das perguntas iniciais podem ser respondidas automaticamente',
    details: [
      'Triagem automática: registro de marca, patente, direitos autorais, consulta geral',
      'Respostas qualificadas com linguagem do escritório',
      'Encaminhamento direto para o sócio certo',
      'Agendamento automático de reunião',
    ],
    timeline: '2 semanas para o piloto',
  },
  {
    type: 'solution' as const,
    tag: 'SOLUÇÃO COMPLEMENTAR',
    title: 'Conteúdo com\nassistência de IA',
    metric: '4×',
    metricLabel: 'mais conteúdo com o mesmo tempo de produção',
    details: [
      'Scripts de Reels a partir das palestras e artigos do Gustavo',
      'Calendário editorial mensal com 4 pilares temáticos',
      'Adaptação de textos técnicos para linguagem acessível',
      'Posts otimizados para Instagram, LinkedIn e blog',
    ],
    timeline: 'Calendário pronto em 1 semana',
  },
  {
    type: 'solution' as const,
    tag: 'SOLUÇÃO AVANÇADA',
    title: 'Documentos\nautomatizados',
    metric: '80%',
    metricLabel: 'menos tempo em documentos padronizados',
    details: [
      'Templates inteligentes para contratos de licenciamento',
      'Pareceres pré-preenchidos com dados do cliente',
      'Notificações extrajudiciais montadas em minutos',
      'Revisão humana como etapa final, não inicial',
    ],
    timeline: 'Implementação em 4 semanas',
  },
  {
    type: 'process' as const,
    tag: 'COMO FUNCIONA',
    title: 'Do diagnóstico\nao resultado',
    steps: [
      { num: '01', label: 'Sessão gratuita', desc: '1 hora para mapear onde está o gargalo real' },
      { num: '02', label: 'Solução sob medida', desc: 'Proposta específica pro contexto da FBC' },
      { num: '03', label: 'Implementação', desc: 'A Widia constrói e configura tudo' },
      { num: '04', label: 'Acompanhamento', desc: 'Suporte até funcionar de verdade' },
    ],
  },
  {
    type: 'closing' as const,
    tag: 'PRÓXIMO PASSO',
    title: 'Qual dessas dores\né a mais urgente?',
    subtitle: 'A gente começa por ela.',
    contact: 'Bruno Gonzaga · widia.io\nWhatsApp 41 99520-3400\ncontato@widia.io',
  },
]

type Slide = (typeof SLIDES)[number]

function SlideIndicator({ total, current, onNavigate }: { total: number; current: number; onNavigate: (i: number) => void }) {
  return (
    <div className="flex gap-1.5 items-center">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="border-none p-0 cursor-pointer rounded-full transition-all duration-400"
          style={{
            width: i === current ? 28 : 8,
            height: 8,
            background: i === current ? 'var(--graphite-ink)' : 'var(--ledger-line)',
          }}
        />
      ))}
    </div>
  )
}

function FadeIn({ children, delay = 0, show }: { children: React.ReactNode; delay?: number; show: boolean }) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function Tag({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="font-mono text-[11px] font-medium tracking-[0.24em] uppercase"
      style={{ color: color || 'var(--ink-soft)' }}
    >
      {children}
    </span>
  )
}

function CoverSlide({ slide, show }: { slide: Slide; show: boolean }) {
  return (
    <div className="flex flex-col justify-between h-full p-8 sm:p-12 pb-10">
      <FadeIn show={show} delay={0}>
        <Tag>{slide.tag}</Tag>
      </FadeIn>
      <div>
        <FadeIn show={show} delay={150}>
          <h1 className="font-display text-[clamp(40px,7vw,64px)] font-normal tracking-[-0.045em] leading-[1.05] text-[var(--graphite-ink)] m-0 whitespace-pre-line">
            {slide.title}
          </h1>
        </FadeIn>
        <FadeIn show={show} delay={300}>
          <p className="font-body text-lg text-[var(--ink-soft)] mt-5 font-normal">
            {'subtitle' in slide ? slide.subtitle : ''}
          </p>
        </FadeIn>
      </div>
      <FadeIn show={show} delay={400}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[var(--graphite-ink)] flex items-center justify-center">
            <span className="text-[var(--paper-bright)] text-sm font-bold">W</span>
          </div>
          <span className="font-body text-sm text-[var(--graphite-ink)] font-medium">widia.io</span>
        </div>
      </FadeIn>
    </div>
  )
}

function StatementSlide({ slide, show }: { slide: Slide; show: boolean }) {
  return (
    <div className="flex flex-col justify-center h-full p-8 sm:p-12 pb-10">
      <FadeIn show={show} delay={0}>
        <Tag color="var(--signal-blue)">{slide.tag}</Tag>
      </FadeIn>
      <FadeIn show={show} delay={150}>
        <h2 className="font-display text-[clamp(28px,5vw,40px)] font-normal tracking-[-0.045em] leading-[1.15] text-[var(--ink-soft)] mt-8 whitespace-pre-line">
          {slide.title}
        </h2>
      </FadeIn>
      <FadeIn show={show} delay={300}>
        <h2 className="font-display text-[clamp(28px,5vw,40px)] font-normal tracking-[-0.045em] leading-[1.15] text-[var(--graphite-ink)] mt-2 whitespace-pre-line">
          {'highlight' in slide ? slide.highlight : ''}
        </h2>
      </FadeIn>
      <FadeIn show={show} delay={450}>
        <p className="font-body text-base text-[var(--ink-soft)] mt-8 max-w-[480px] leading-relaxed">
          {'note' in slide ? slide.note : ''}
        </p>
      </FadeIn>
    </div>
  )
}

function ProblemsSlide({ slide, show }: { slide: Slide; show: boolean }) {
  const items = 'items' in slide ? slide.items ?? [] : []
  return (
    <div className="flex flex-col h-full p-6 sm:p-8">
      <FadeIn show={show} delay={0}>
        <Tag color="var(--amber-note)">{slide.tag}</Tag>
      </FadeIn>
      <FadeIn show={show} delay={100}>
        <h2 className="font-display text-[clamp(22px,4vw,30px)] font-normal tracking-[-0.045em] leading-[1.1] text-[var(--graphite-ink)] mt-3 mb-3 whitespace-pre-line">
          {slide.title}
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
        {items.map((item, i) => (
          <FadeIn key={i} show={show} delay={200 + i * 100}>
            <div className="bg-[var(--paper-bright)] rounded-xl p-4 h-full overflow-hidden">
              <span className="text-lg">{item.icon}</span>
              <h3 className="font-display text-sm font-medium text-[var(--graphite-ink)] mt-1.5 mb-1 tracking-[-0.02em]">
                {item.label}
              </h3>
              <p className="font-body text-xs text-[var(--ink-soft)] m-0 leading-snug">
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

function SolutionSlide({ slide, show }: { slide: Slide; show: boolean }) {
  const details = 'details' in slide ? slide.details ?? [] : []
  const metric = 'metric' in slide ? slide.metric ?? '' : ''
  const metricLabel = 'metricLabel' in slide ? slide.metricLabel ?? '' : ''
  const timeline = 'timeline' in slide ? slide.timeline ?? '' : ''

  return (
    <div className="flex flex-col h-full p-8 sm:p-12 pb-10">
      <FadeIn show={show} delay={0}>
        <Tag color="var(--proof-green)">{slide.tag}</Tag>
      </FadeIn>
      <div className="flex flex-col sm:flex-row gap-8 flex-1 mt-5 items-start">
        <div className="flex-1">
          <FadeIn show={show} delay={100}>
            <h2 className="font-display text-[clamp(28px,4.5vw,36px)] font-normal tracking-[-0.045em] leading-[1.1] text-[var(--graphite-ink)] mb-6 whitespace-pre-line">
              {slide.title}
            </h2>
          </FadeIn>
          <FadeIn show={show} delay={200}>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-display text-5xl font-normal text-[var(--proof-green)] tracking-[-0.04em] leading-none">
                {metric}
              </span>
            </div>
            <p className="font-body text-sm text-[var(--ink-soft)] mb-6 max-w-[260px]">
              {metricLabel}
            </p>
          </FadeIn>
          <FadeIn show={show} delay={350}>
            <div className="bg-[var(--graphite-ink)] rounded-full py-2.5 px-5 inline-block">
              <span className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[var(--paper-bright)]">
                {timeline}
              </span>
            </div>
          </FadeIn>
        </div>
        <div className="flex-1 flex flex-col gap-2.5 pt-1">
          {details.map((d, i) => (
            <FadeIn key={i} show={show} delay={250 + i * 80}>
              <div className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--proof-green)] mt-[7px] shrink-0" />
                <p className="font-body text-sm text-[var(--graphite-ink)] m-0 leading-relaxed">
                  {d}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProcessSlide({ slide, show }: { slide: Slide; show: boolean }) {
  const steps = 'steps' in slide ? slide.steps ?? [] : []
  return (
    <div className="flex flex-col h-full p-8 sm:p-12 pb-10">
      <FadeIn show={show} delay={0}>
        <Tag color="var(--signal-blue)">{slide.tag}</Tag>
      </FadeIn>
      <FadeIn show={show} delay={100}>
        <h2 className="font-display text-[clamp(28px,4.5vw,36px)] font-normal tracking-[-0.045em] leading-[1.1] text-[var(--graphite-ink)] my-5 mb-8 whitespace-pre-line">
          {slide.title}
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {steps.map((step, i) => (
          <FadeIn key={i} show={show} delay={200 + i * 120}>
            <div className="bg-[var(--paper-bright)] rounded-2xl p-6 h-full flex flex-col">
              <span className="font-mono text-[11px] font-medium tracking-[0.24em] text-[var(--color-accent,#2F61F5)]">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-normal text-[var(--graphite-ink)] mt-3 mb-2 tracking-[-0.03em]">
                {step.label}
              </h3>
              <p className="font-body text-sm text-[var(--ink-soft)] m-0 leading-snug">
                {step.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

function ClosingSlide({ slide, show }: { slide: Slide; show: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center h-full p-8 sm:p-12 pb-10 text-center">
      <FadeIn show={show} delay={0}>
        <Tag color="var(--signal-blue)">{slide.tag}</Tag>
      </FadeIn>
      <FadeIn show={show} delay={150}>
        <h2 className="font-display text-[clamp(32px,5.5vw,48px)] font-normal tracking-[-0.045em] leading-[1.1] text-[var(--graphite-ink)] mt-6 whitespace-pre-line">
          {slide.title}
        </h2>
      </FadeIn>
      <FadeIn show={show} delay={300}>
        <p className="font-display text-[22px] text-[var(--ink-soft)] mt-3 tracking-[-0.03em]">
          {'subtitle' in slide ? slide.subtitle : ''}
        </p>
      </FadeIn>
      <FadeIn show={show} delay={450}>
        <div className="mt-12 bg-[var(--graphite-ink)] rounded-2xl py-6 px-9">
          <p className="font-body text-sm text-[var(--paper-bright)] m-0 leading-[1.8] whitespace-pre-line opacity-85">
            {'contact' in slide ? slide.contact : ''}
          </p>
        </div>
      </FadeIn>
    </div>
  )
}

const RENDERERS: Record<string, React.ComponentType<{ slide: Slide; show: boolean }>> = {
  cover: CoverSlide,
  statement: StatementSlide,
  problems: ProblemsSlide,
  solution: SolutionSlide,
  process: ProcessSlide,
  closing: ClosingSlide,
}

export default function Presentation() {
  const [current, setCurrent] = useState(0)
  const [show, setShow] = useState(true)

  const goTo = useCallback(
    (idx: number) => {
      if (idx === current || idx < 0 || idx >= SLIDES.length) return
      setShow(false)
      setTimeout(() => {
        setCurrent(idx)
        setShow(true)
      }, 250)
    },
    [current],
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goTo(current + 1)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(current - 1)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current, goTo])

  const slide = SLIDES[current]
  const Renderer = RENDERERS[slide.type]

  return (
    <div className="w-full min-h-screen bg-[var(--canvas-ash)] flex items-center justify-center font-body p-4">
      <div className="w-full max-w-[800px] relative">
        <div className="bg-[var(--paper-ivory)] rounded-3xl overflow-hidden relative shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] aspect-[16/10]">
          <Renderer slide={slide} show={show} />
        </div>

        <div className="flex justify-between items-center mt-5 px-1">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="font-body text-sm font-medium bg-transparent border-none cursor-pointer py-2 px-0 transition-colors disabled:cursor-default"
            style={{ color: current === 0 ? 'var(--ledger-line)' : 'var(--graphite-ink)' }}
          >
            &larr; Anterior
          </button>

          <SlideIndicator total={SLIDES.length} current={current} onNavigate={goTo} />

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === SLIDES.length - 1}
            className="font-body text-sm font-medium bg-transparent border-none cursor-pointer py-2 px-0 transition-colors disabled:cursor-default"
            style={{
              color: current === SLIDES.length - 1 ? 'var(--ledger-line)' : 'var(--graphite-ink)',
            }}
          >
            Próximo &rarr;
          </button>
        </div>

        <div className="text-center mt-2">
          <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-[var(--ink-soft)]">
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}
