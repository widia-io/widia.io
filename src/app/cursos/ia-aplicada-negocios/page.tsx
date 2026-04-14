'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import s from './page.module.css'

const HOTMART_URL = 'https://pay.hotmart.com/M105204781F'
const SPOTS_TOTAL = 30
const SPOTS_REMAINING = 11

const TESTIMONIALS = [
  {
    name: 'Ana Cristina',
    role: 'Dona de clínica estética',
    initials: 'AC',
    quote: 'Em 2 semanas, meu orçamento foi de 40min pra 5min. Uso todo dia.',
    context: 'Aplicou o Folder Process pra padronizar orçamentos e follow-up de pacientes.',
  },
  {
    name: 'Julio Cesar',
    role: 'Consultor de PMEs',
    initials: 'JC',
    quote: 'Parei de abrir o ChatGPT só pra dar uma olhadinha. Agora uso com direção.',
    context: 'Proposta comercial que levava 3h hoje sai em 10min — no padrão da empresa.',
  },
  {
    name: 'Gabi Santos',
    role: 'Arquiteta autônoma',
    initials: 'GS',
    quote: 'Atendimento 4x mais rápido. O cliente nem percebe que tem IA.',
    context: 'Prospecção e briefings automatizados — sem programar uma linha.',
  },
] as const

const BONUSES = [
  {
    title: 'Gravação completa das 2 noites',
    desc: 'Acesso vitalício. Reveja quando quiser, no seu ritmo.',
    value: 97,
  },
  {
    title: 'PDF de Prompts por Tarefa',
    desc: '200+ prompts prontos: vendas, financeiro, conteúdo, atendimento e gestão. Copia, cola e usa.',
    value: 47,
  },
  {
    title: 'Kit da Pasta Perfeita',
    desc: 'Templates prontos: Validação, Prospecção, Conteúdo, Financeiro. Cada pasta com README e prompt inicial.',
    value: 67,
  },
  {
    title: 'Comunidade Exclusiva de Empresários',
    desc: 'Grupo fechado só com donos de pequenos e médios negócios. Troque experiências e soluções reais.',
    value: 197,
    highlight: true,
  },
] as const

const BONUS_TOTAL = BONUSES.reduce((sum, b) => sum + b.value, 0)

const FAQ_ITEMS = [
  {
    q: 'Tem garantia se eu não gostar?',
    a: 'Sim. 7 dias de garantia incondicional. Entrou no primeiro encontro, achou que não é pra você, pede reembolso e pronto. Sem perguntas, sem fricção, sem constrangimento.',
  },
  {
    q: 'Já comprei curso de IA antes e não apliquei. Por que esse vai ser diferente?',
    a: 'Porque ele é AO VIVO. Você abre o computador, eu mostro na tela, você faz junto. Sai da aula com tudo instalado e funcionando. Não tem "vou assistir depois" — é fazer agora ou perder. A agenda fixa te obriga a começar.',
  },
  {
    q: 'Eu não sei nada de IA. Vou conseguir acompanhar?',
    a: 'Sim. O programa é feito pra empreendedor não-técnico. Começa do zero, explica do jeito mais simples possível, e a gente instala tudo junto. Se travou, pergunta ali mesmo. Quem já usou ChatGPT uma vez na vida, consegue.',
  },
  {
    q: 'Quanto tempo até eu ver resultado?',
    a: 'Na própria imersão. Você sai da Noite 2 com pelo menos 1 automação rodando no seu negócio. Nas semanas seguintes, aplicando o Folder Process, o retorno começa a aparecer: horas economizadas, propostas mais rápidas, processos que antes levavam dias virando minutos.',
  },
  {
    q: 'Como vou pagar? Tem PIX?',
    a: 'Sim. PIX à vista ou cartão em até 12x via Hotmart. Pagamento 100% seguro, confirmação imediata.',
  },
  {
    q: 'E se eu não puder participar ao vivo?',
    a: 'Você recebe a gravação completa das duas noites com acesso vitalício. Mas a experiência ao vivo — tirando dúvidas na hora, fazendo o setup junto — é outra coisa. Recomendo fortemente que participe.',
  },
  {
    q: 'Preciso saber programar?',
    a: 'Não. O programa é feito pra empreendedores que não são técnicos. Tudo é mostrado passo a passo, ao vivo, na tela.',
  },
  {
    q: 'Funciona pra qualquer tipo de negócio?',
    a: 'Sim. Os exemplos se aplicam a serviços, comércio, freelancers e consultores. Se você tem tarefas repetitivas, funciona pra você.',
  },
  {
    q: 'As ferramentas são gratuitas?',
    a: 'Algumas sim (Gemini), outras têm planos pagos (Claude Max). O programa explica todas as opções e custos pra você decidir o que faz sentido pro seu bolso.',
  },
  {
    q: 'Preciso de Mac?',
    a: 'Não. Todas as ferramentas — Claude Cowork, Claude Code, Codex — funcionam tanto no Mac quanto no Windows.',
  },
  {
    q: 'Vai ter outras turmas?',
    a: 'A Turma 1 esgotou. Esta é a Turma 2 — mesma estrutura, mesmas condições. Se rolar novas turmas, o formato e o preço podem mudar.',
  },
]

const LOTE1_DEADLINE = new Date('2026-04-24T23:59:59-03:00').getTime()

function CountdownTimer() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  if (now === null) {
    return <span>LOTE 1 — VAGAS LIMITADAS</span>
  }

  const diff = LOTE1_DEADLINE - now
  if (diff <= 0) {
    return (
      <span>
        LOTE 1 ENCERRADO — PREÇO ATUAL: <span className={s.countdownHighlight}>R$197</span>
      </span>
    )
  }

  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const sec = Math.floor((diff % 60000) / 1000)

  return (
    <span>
      LOTE 1 ENCERRA EM:{' '}
      <span className={s.countdownDigits}>
        {d}<span className={s.countdownUnit}>d</span>{' '}
        {String(h).padStart(2, '0')}<span className={s.countdownUnit}>h</span>{' '}
        {String(m).padStart(2, '0')}<span className={s.countdownUnit}>m</span>{' '}
        {String(sec).padStart(2, '0')}<span className={s.countdownUnit}>s</span>
      </span>
      {' '}· Garanta por R$97
    </span>
  )
}

function FaqItem({
  q,
  a,
  defaultOpen,
}: Readonly<{
  q: string
  a: string
  defaultOpen?: boolean
}>) {
  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div className={`${s.faqItem} ${open ? s.faqOpen : ''}`}>
      <button className={s.faqQuestion} onClick={() => setOpen(!open)}>
        {q}
        <span className={`${s.faqIcon} ${s.mono}`}>{open ? '\u2212' : '+'}</span>
      </button>
      <div className={s.faqAnswer}>
        <p>{a}</p>
      </div>
    </div>
  )
}

function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`${s.floatingCta} ${visible ? s.floatingCtaVisible : ''}`}>
      <span className={`${s.floatingCtaPrice} ${s.mono}`}>R$97 · Lote 1</span>
      <a href={HOTMART_URL} className={`${s.btn} ${s.btnGold}`}>
        QUERO MINHA VAGA →
      </a>
    </div>
  )
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'IA Aplicada para Negócios — Imersão ao Vivo',
  description: 'Em duas noites, você sai com as ferramentas de IA instaladas, configuradas e funcionando no seu negócio. Sem teoria. Sem código. Sem enrolação.',
  provider: { '@type': 'Organization', name: 'widia.io', url: 'https://widia.io' },
  instructor: { '@type': 'Person', name: 'Bruno Gonzaga' },
  offers: {
    '@type': 'Offer',
    price: '97',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/LimitedAvailability',
    url: HOTMART_URL,
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Online',
    startDate: '2026-04-28',
    endDate: '2026-04-30',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function IAaplicadaNegocios() {
  useEffect(() => {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq
    if (typeof fbq === 'function') {
      fbq('track', 'ViewContent', {
        content_name: 'IA Aplicada para Negócios',
        content_ids: ['curso-ia-aplicada-negocios'],
        content_type: 'product',
        value: 97,
        currency: 'BRL',
      })
    }
  }, [])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap"
        rel="stylesheet"
      />
    <div className={s.page}>
      {/* URGENCY BAR */}
      <div className={`${s.urgencyBar} ${s.mono}`}>
        <CountdownTimer />
      </div>

      {/* HERO */}
      <section className={`${s.hero} ${s.sectionCream}`}>
        <div className={s.container}>
          <span className={`${s.heroLabel} ${s.mono}`}>@obrunogonzaga</span>
          <h1 style={{ fontFamily: 'var(--font-display)' }}>
            Em 2 noites, a IA roda no <span className={s.underlineHand}>seu negócio</span> de verdade.
          </h1>
          <div className={`${s.liveBadge} ${s.mono}`}>
            <span className={s.liveDot} /> Imersão ao vivo — Turma 2 <span style={{ background: 'var(--gold)', color: 'var(--navy)', padding: '2px 8px', borderRadius: 4, fontSize: '0.75rem', fontWeight: 700, marginLeft: 8 }}>Turma 1 esgotada</span>
          </div>
          <p className={s.heroSub}>
            Você sai com as ferramentas de IA instaladas, configuradas e
            funcionando. Sem teoria. Sem código. Sem enrolação.
          </p>

          <div className={s.heroPriceBlock}>
            <div className={`${s.heroPriceLine} ${s.mono}`}>
              <span className={s.heroPriceLot}>LOTE 1</span>
              <span className={s.heroPriceValue} style={{ fontFamily: 'var(--font-display)' }}>
                R$ <strong>97</strong>
              </span>
              <span className={s.heroPriceMeta}>Pagamento único</span>
            </div>
            <a href={HOTMART_URL} className={`${s.btn} ${s.btnNavy}`}>
              QUERO MINHA VAGA NA TURMA 2 →
            </a>
            <p className={`${s.heroTrust} ${s.mono}`}>
              🔒 Pagamento seguro Hotmart · PIX, boleto ou cartão 12x · Garantia 7 dias
            </p>
          </div>

          <div className={s.dateGrid}>
            <div className={s.dateCard}>
              <span className={`${s.dayLabel} ${s.mono}`}>Noite 1</span>
              <div style={{ fontFamily: 'var(--font-display)' }} className={s.dayDate}>
                Terça, 28/Abr
              </div>
              <div className={`${s.dayTime} ${s.mono}`}>20h → 22h (Brasília)</div>
              <p className={s.dayTopics}>Ferramentas + Setup + Folder Process</p>
            </div>
            <div className={s.dateCard}>
              <span className={`${s.dayLabel} ${s.mono}`}>Noite 2</span>
              <div style={{ fontFamily: 'var(--font-display)' }} className={s.dayDate}>
                Quinta, 30/Abr
              </div>
              <div className={`${s.dayTime} ${s.mono}`}>20h → 22h (Brasília)</div>
              <p className={s.dayTopics}>Validação + Leads + Skills + Plugins</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOR / IDENTIFICAÇÃO */}
      <section className={`${s.section} ${s.sectionNavy}`}>
        <div className={s.container}>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Você se identifica com <span className={s.gold}>algum desses?</span>
          </h2>
          <ul className={s.checkList}>
            {[
              'Faz tudo no negócio — vende, atende, cobra, posta, planeja.',
              'Já testou ChatGPT mas não saiu do "faz um textinho pra mim".',
              'Quer resultado real no negócio, não mais um curso pra deixar na fila.',
            ].map((text) => (
              <li
                key={text}
                style={{
                  color: 'var(--cream)',
                  borderBottomColor: 'rgba(237,231,221,0.1)',
                }}
              >
                {text}
              </li>
            ))}
          </ul>
          <p
            style={{
              marginTop: 24,
              fontSize: '1.1rem',
              color: 'var(--cream)',
              fontWeight: 600,
            }}
          >
            Tempo é o recurso mais escasso de quem empreende. Você não precisa
            de mais ferramentas — precisa das{' '}
            <span className={s.gold}>ferramentas certas</span>, configuradas do
            jeito certo.
          </p>
        </div>
      </section>

      {/* PARA QUEM É / NÃO É */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <div className={s.filterGrid}>
            <div className={`${s.filterCard} ${s.filterCardYes}`}>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>
                <span className={s.gold}>É</span> para você se...
              </h3>
              <ul className={`${s.filterList} ${s.filterListYes}`}>
                <li>Tem um negócio e faz tudo na mão</li>
                <li>Quer resultado rápido, não diploma</li>
                <li>Está disposto a dedicar 4 horas e aplicar</li>
                <li>Não é técnico e não quer ser</li>
              </ul>
            </div>
            <div className={`${s.filterCard} ${s.filterCardNo}`}>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>
                <span className={s.red}>NÃO</span> é para você se...
              </h3>
              <ul className={`${s.filterList} ${s.filterListNo}`}>
                <li>Quer virar programador de IA</li>
                <li>Procura teoria profunda ou certificação</li>
                <li>Espera que alguém implemente por você</li>
                <li>Não pode dedicar 2 noites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE AO VIVO */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Por que <span className={s.underlineHand}>ao vivo?</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--navy)',
              fontWeight: 600,
              marginBottom: 32,
            }}
          >
            Porque curso gravado você assiste amanhã. Amanhã vira semana que vem.
            Semana que vem vira nunca.
          </p>
          <div className={s.twoCol}>
            <div className={`${s.card} ${s.cardRedBorder}`}>
              <span className={`${s.cardBadge} ${s.cardBadgeRed} ${s.mono}`}>
                Ao vivo
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>
                Você faz junto, na hora
              </h3>
              <p>
                Eu mostro, você instala. Travou? Pergunta ali mesmo. Sai da aula
                com tudo rodando.
              </p>
            </div>
            <div className={s.card}>
              <span className={`${s.cardBadge} ${s.mono}`}>Turma</span>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>
                30 vagas, não 3.000
              </h3>
              <p>
                Grupo pequeno. Eu vejo suas dúvidas, respondo pelo nome, ajudo
                no seu caso específico.
              </p>
            </div>
            <div className={s.card}>
              <span className={`${s.cardBadge} ${s.mono}`}>Compromisso</span>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>
                Tem data. Tem hora.
              </h3>
              <p>
                Duas noites. 4 horas no total. Agenda marcada te obriga a
                começar. Isso é o que separa quem fala de quem faz.
              </p>
            </div>
            <div className={s.card}>
              <span className={`${s.cardBadge} ${s.mono}`}>Replay</span>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>
                Gravação inclusa
              </h3>
              <p>
                Não pode na data? Tudo bem. Você recebe a gravação completa. Mas
                a experiência ao vivo é outra coisa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANTES vs DEPOIS */}
      <section className={`${s.section} ${s.sectionCreamLight}`}>
        <div className={s.container}>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Antes <span className={s.gold}>→</span> Depois
          </h2>
          <div className={s.baGrid}>
            {[
              {
                before: '3 horas montando proposta comercial',
                after: '10 minutos. Proposta formatada no padrão da empresa.',
              },
              {
                before: '1 dia inteiro pesquisando leads na internet',
                after: '30 minutos. A IA pesquisa, coleta e organiza numa planilha.',
              },
              {
                before: 'Semanas validando se uma ideia faz sentido',
                after: '1 conversa com o "CEO" — a IA analisa, questiona e sugere plano.',
              },
            ].map((item) => (
              <div className={s.baItem} key={item.before}>
                <div className={s.baBefore}>{item.before}</div>
                <div className={s.baArrow}>→</div>
                <div className={s.baAfter}>{item.after}</div>
              </div>
            ))}
          </div>
          <div className={s.roiBox}>
            <p className={s.roiLine}>
              <span className={`${s.mono} ${s.gold}`}>5 horas/semana</span> × 4 semanas =
              <span className={`${s.mono} ${s.gold}`}> 20 horas/mês</span>
            </p>
            <p className={s.roiLine}>
              Se sua hora vale <span className={`${s.mono} ${s.gold}`}>R$ 100</span>, você economiza
              <span className={`${s.mono} ${s.gold}`}> R$ 2.000/mês</span>
            </p>
            <p className={s.roiLineBig}>
              O curso custa <span className={s.mono}>R$ 97</span>.
              <br />
              <span className={s.gold}>ROI de 20x</span> no primeiro mês.
            </p>
          </div>
        </div>
      </section>

      {/* CASOS DE USO POR PERFIL */}
      <section className={`${s.section} ${s.sectionNavy}`}>
        <div className={s.container}>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Se enxergue <span className={s.gold}>aqui.</span>
          </h2>
          <div className={s.profileGrid}>
            {[
              {
                title: 'Consultor',
                items: ['Proposta comercial em minutos', 'Diagnóstico automatizado', 'Follow-up estruturado'],
              },
              {
                title: 'Clínica / Serviço',
                items: ['Respostas rápidas para pacientes', 'Organização de agenda e processos', 'Conteúdo para redes sociais'],
              },
              {
                title: 'Pequena empresa',
                items: ['Prospecção de clientes com IA', 'Rotina comercial automatizada', 'Análise financeira simplificada'],
              },
              {
                title: 'Autônomo / Freelancer',
                items: ['Criação de oferta e posicionamento', 'Conteúdo e pesquisa de mercado', 'Atendimento e orçamento rápido'],
              },
            ].map((profile) => (
              <div className={s.profileCard} key={profile.title}>
                <div className={`${s.profileTitle} ${s.mono}`}>{profile.title}</div>
                <ul className={s.profileList}>
                  {profile.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMAÇÃO */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <div className={s.divider} />
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            O que você vai aprender — e{' '}
            <span className={s.underlineHand}>aplicar</span> — em cada noite.
          </h2>

          <div className={`${s.dayHeader} ${s.mono}`}>
            <span className={s.liveDot} /> Noite 1 — Terça, 28/Abr · 20h–22h
          </div>

          {[
            {
              badge: 'Bloco 1',
              title: 'IA como funcionário, não como brinquedo',
              desc: 'O que muda quando você para de fazer tudo na mão. Como pensar em IA do jeito certo pra quem empreende.',
            },
            {
              badge: 'Bloco 2',
              title: 'As Ferramentas Certas',
              desc: 'As melhores IAs do mercado para trabalho real. O que cada uma faz, quando usar qual. Sem firula.',
            },
            {
              badge: 'Bloco 3',
              title: 'Setup ao vivo — você faz junto',
              desc: 'Instala, configura e testa cada ferramenta. Eu na tela, você acompanhando. Sai da aula com tudo funcionando.',
            },
            {
              badge: 'Bloco 4 — A virada de chave',
              title: 'O Folder Process',
              desc: 'Cria uma pasta, joga seus arquivos, conversa com a IA. A ferramenta se molda ao seu problema — não o contrário. O conceito que mudou tudo.',
              red: true,
            },
          ].map((block) => (
            <div
              className={`${s.card} ${block.red ? s.cardRedBorder : ''}`}
              key={block.badge}
            >
              <span
                className={`${s.cardBadge} ${s.mono} ${block.red ? s.cardBadgeRed : ''}`}
              >
                {block.badge}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>{block.title}</h3>
              <p>{block.desc}</p>
            </div>
          ))}

          <div style={{ margin: '40px 0' }} />

          <div className={`${s.dayHeader} ${s.mono}`}>
            <span className={s.liveDot} /> Noite 2 — Quinta, 30/Abr · 20h–22h
          </div>

          {[
            {
              badge: 'Bloco 5',
              title: 'IA como sócio estratégico',
              desc: 'Use a IA pra validar ideias de produto, analisar mercado e criar plano de ação. Seu sócio estratégico que te diz a verdade.',
            },
            {
              badge: 'Bloco 6',
              title: 'Caçando Clientes',
              desc: 'Prospecção automatizada. A IA pesquisa empresas, coleta dados e monta lista de leads qualificados.',
            },
            {
              badge: 'Bloco 7',
              title: 'Automações prontas para tarefas repetitivas',
              desc: 'Crie rotinas que repetem tarefas perfeitamente. Proposta em segundos, resumo de vendas automático.',
            },
            {
              badge: 'Bloco 8',
              title: 'Integrações úteis no dia a dia',
              desc: 'Conecte a IA ao que você já usa: Google Drive, busca na web, geração de documentos e mais.',
            },
          ].map((block) => (
            <div className={s.card} key={block.badge}>
              <span className={`${s.cardBadge} ${s.mono}`}>{block.badge}</span>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>{block.title}</h3>
              <p>{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE VOCÊ SAI COM */}
      <section className={`${s.section} ${s.sectionCreamLight}`}>
        <div className={s.container}>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Ao final da imersão, você{' '}
            <span className={s.underlineHand}>sai com:</span>
          </h2>
          <ul className={s.deliverablesList}>
            {[
              'Uma pasta pronta para validação de ideias',
              'Um fluxo de prospecção com IA configurado',
              'Uma estrutura para propostas comerciais',
              'Uma biblioteca de prompts úteis por tarefa',
              'Uma rotina prática para usar IA todo dia — sem depender de ninguém',
            ].map((item, i) => (
              <li className={s.deliverableItem} key={item}>
                <span className={`${s.deliverableNumber} ${s.mono}`}>{i + 1}</span>
                <span className={s.deliverableText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BÔNUS */}
      <section className={`${s.section} ${s.sectionNavy}`}>
        <div className={s.container}>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Quem entra na Turma 2 leva{' '}
            <span className={s.gold}>4 bônus.</span>
          </h2>

          {BONUSES.map((bonus) => (
            <div
              key={bonus.title}
              className={`${s.bonusCard} ${'highlight' in bonus && bonus.highlight ? s.bonusCardHighlight : ''}`}
            >
              <div className={s.bonusHeader}>
                <h3 style={{ fontFamily: 'var(--font-display)' }}>
                  {bonus.title}
                </h3>
                <span className={`${s.bonusValue} ${s.mono}`}>
                  R$ {bonus.value}
                </span>
              </div>
              <p>{bonus.desc}</p>
            </div>
          ))}

          <div className={s.bonusStack}>
            <div className={`${s.bonusStackRow} ${s.mono}`}>
              <span>Valor total dos bônus</span>
              <span className={s.bonusStackStrike}>R$ {BONUS_TOTAL}</span>
            </div>
            <div className={`${s.bonusStackRow} ${s.mono}`}>
              <span>Valor do curso</span>
              <span>R$ 97</span>
            </div>
            <div className={s.bonusStackDivider} />
            <div className={`${s.bonusStackTotal} ${s.mono}`}>
              <span>Seu investimento hoje</span>
              <span className={s.gold} style={{ fontFamily: 'var(--font-display)' }}>
                R$ 97
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL — DEPOIMENTOS TURMA 1 */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <span className={`${s.sectionLabel} ${s.mono}`}>TURMA 1 — APROVADOS</span>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Quem fez, <span className={s.underlineHand}>tá aplicando.</span>
          </h2>
          <div className={s.proofGrid}>
            {TESTIMONIALS.map((t) => (
              <div className={s.proofCard} key={t.name}>
                <p className={s.proofQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={s.proofAuthor}>
                  <div
                    className={s.proofAvatar}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className={s.proofName}>{t.name}</div>
                    <div className={`${s.proofRole} ${s.mono}`}>{t.role}</div>
                  </div>
                </div>
                <p className={s.proofContext}>{t.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUTOR */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <div className={s.instructorSection}>
            <div className={s.instructorPhoto}>
              <Image
                src="/images/instructor/bruno-gonzaga.png"
                alt="Bruno Gonzaga — fundador da widia.io"
                width={280}
                height={280}
                priority={false}
                className={s.instructorPhotoImg}
              />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)' }}>Bruno Gonzaga</h3>
              <p
                style={{
                  color: 'var(--gold)',
                  fontWeight: 600,
                  marginBottom: 12,
                  fontSize: '0.9rem',
                }}
              >
                @obrunogonzaga · Fundador da widia.io
              </p>
              <p>
                20+ anos em tecnologia aplicando sistemas e automação para
                resolver problemas reais de negócio. Uso IA diariamente:
                operação, conteúdo, prospecção, análise e produtividade.
              </p>
              <p>
                Não ensino teoria de laboratório — ensino o que funciona porque
                eu uso. Empreendedor que fez de tudo: vendeu, atendeu, cobrou,
                postou, planejou. Igual a você.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong style={{ color: 'var(--navy)' }}>
                  Por isso sei exatamente onde a IA faz a maior diferença.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <div className={s.guaranteeBox}>
            <div
              className={s.guaranteeSeal}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className={s.guaranteeSealBig}>7</span>
              <span className={`${s.guaranteeSealSmall} ${s.mono}`}>DIAS</span>
            </div>
            <div className={s.guaranteeContent}>
              <h2
                style={{ fontFamily: 'var(--font-display)' }}
                className={s.guaranteeTitle}
              >
                Garantia incondicional de <span className={s.gold}>7 dias</span>
              </h2>
              <p className={s.guaranteeText}>
                Entra na Noite 1, se não enxergar como usar no seu negócio,
                pede reembolso.{' '}
                <strong>
                  Sem pergunta, sem fricção, sem formulário de 12 páginas.
                </strong>{' '}
                Você arrisca zero.
              </p>
              <p className={`${s.guaranteeMeta} ${s.mono}`}>
                Reembolso 100% via Hotmart em até 48h úteis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className={`${s.section} ${s.sectionCreamLight}`} id="oferta">
        <div className={s.container}>
          <div className={s.offerBox}>
            <div
              className={`${s.liveBadge} ${s.mono}`}
              style={{ justifyContent: 'center', marginBottom: 16 }}
            >
              <span className={s.liveDot} /> Turma 2 — Vagas limitadas
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                marginBottom: 16,
              }}
            >
              Tudo isso por
            </h2>
            <span className={`${s.loteLabel} ${s.mono}`}>LOTE 1</span>
            <div
              className={s.priceTag}
              style={{
                fontFamily: 'var(--font-display)',
                marginBottom: 8,
              }}
            >
              <span className={s.currency}>R$</span>97
            </div>
            <p className={`${s.loteDeadline} ${s.mono}`}>
              Preço sobe para R$197 em 24/Abr
            </p>
            <p
              style={{
                color: 'var(--navy)',
                fontWeight: 600,
                marginBottom: 32,
              }}
            >
              Pagamento único. Acesso à imersão ao vivo + gravação + bônus.
            </p>
            <ul className={s.checkList}>
              <li>2 noites ao vivo (4h de conteúdo direto ao ponto)</li>
              <li>Tira-dúvidas em tempo real durante a aula</li>
              <li>Gravação completa com acesso vitalício</li>
              <li>Bônus: PDF de Prompts por Tarefa</li>
              <li>Bônus: Kit da Pasta Perfeita</li>
              <li>Bônus: Comunidade exclusiva de empresários</li>
              <li>7 dias de garantia incondicional</li>
            </ul>
            <a
              href={HOTMART_URL}
              className={`${s.btn} ${s.btnNavy}`}
              style={{ width: '100%', maxWidth: 420, textAlign: 'center' }}
            >
              QUERO MINHA VAGA NA TURMA 2 →
            </a>
            <p className={`${s.trustLine} ${s.mono}`}>
              🔒 Pagamento seguro Hotmart · PIX, boleto ou cartão 12x
            </p>
            <p
              style={{
                marginTop: 8,
                fontSize: '0.85rem',
                color: 'var(--warm-gray)',
              }}
            >
              Garantia de 7 dias. Não gostou, pede reembolso e pronto.
            </p>
          </div>

          <div className={s.spotsBar}>
            <div className={s.spotsTop}>
              <div
                className={s.spotsNumber}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {SPOTS_REMAINING}
              </div>
              <div className={`${s.spotsText} ${s.mono}`}>
                vagas restantes de {SPOTS_TOTAL}.
                <br />
                Quando acabar, acabou.
              </div>
            </div>
            <div className={s.spotsProgress}>
              <div
                className={s.spotsProgressFill}
                style={{ width: `${((SPOTS_TOTAL - SPOTS_REMAINING) / SPOTS_TOTAL) * 100}%` }}
              />
            </div>
            <p className={`${s.spotsWarning} ${s.mono}`}>
              {SPOTS_REMAINING} vagas restantes de {SPOTS_TOTAL}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Perguntas frequentes
          </h2>
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className={`${s.section} ${s.sectionNavy}`}
        style={{ textAlign: 'center' }}
      >
        <div className={s.container}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              color: 'var(--cream)',
              lineHeight: 1.4,
              marginBottom: 32,
              fontStyle: 'italic',
            }}
          >
            &ldquo;O que diferencia quem fala de IA de quem usa IA é uma coisa
            só: começar.&rdquo;
          </p>
          <p
            style={{
              color: 'var(--gold)',
              fontWeight: 700,
              fontSize: '1.2rem',
              marginBottom: 12,
            }}
          >
            28 e 30 de abril. Duas noites. Tudo muda.
          </p>
          <p style={{ color: '#b0a99e', marginBottom: 40 }}>
            30 vagas. Depois dessa turma, só gravado.
          </p>
          <a href={HOTMART_URL} className={`${s.btn} ${s.btnGold}`}>
            QUERO MINHA VAGA — R$ 97 →
          </a>
          <p
            className={`${s.trustLine} ${s.mono}`}
            style={{ color: 'rgba(237,231,221,0.7)' }}
          >
            🔒 Pagamento seguro Hotmart · PIX, boleto ou cartão 12x · 7 dias de garantia
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={s.footer}>
        <p>
          <strong style={{ color: 'var(--navy)' }}>Bruno Gonzaga</strong>{' '}
          · @obrunogonzaga
        </p>
        <div className={`${s.stamp} ${s.mono}`}>
          Sem teoria. Sem código. Sem enrolação.
        </div>
      </footer>
      <FloatingCta />
    </div>
    </>
  )
}
