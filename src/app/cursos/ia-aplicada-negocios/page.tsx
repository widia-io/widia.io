'use client'

import { useState, useEffect } from 'react'
import s from './page.module.css'

const HOTMART_URL = 'https://pay.hotmart.com/M105204781F'
const SPOTS_TOTAL = 30
const SPOTS_REMAINING = 12

const FAQ_ITEMS = [
  {
    q: 'Preciso saber programar?',
    a: 'Não. O programa é feito pra empreendedores que não são técnicos. Tudo é mostrado passo a passo, ao vivo, na tela.',
  },
  {
    q: 'E se eu não puder participar ao vivo?',
    a: 'Você recebe a gravação completa das duas noites com acesso vitalício. Mas a experiência ao vivo — tirando dúvidas na hora, fazendo o setup junto — é outra coisa. Recomendo fortemente que participe.',
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
    q: 'Tem garantia?',
    a: 'Sim. 7 dias de garantia incondicional. Se não gostar, pede reembolso e pronto.',
  },
  {
    q: 'Vai ter outras turmas?',
    a: 'A Turma 1 é a única confirmada por agora. Se rolar novas turmas, o formato e o preço podem mudar. Essa é a melhor condição que vai existir.',
  },
]

const LOTE1_DEADLINE = new Date('2026-04-10T23:59:59-03:00').getTime()

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

export default function IAaplicadaNegocios() {
  return (
    <>
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
            IA Aplicada para <span className={s.underlineHand}>Negócios</span>
          </h1>
          <div className={`${s.liveBadge} ${s.mono}`}>
            <span className={s.liveDot} /> Imersão ao vivo — Turma 1
          </div>
          <p className={s.heroSub}>
            Em duas noites, você sai com as ferramentas de IA instaladas,
            configuradas e funcionando no seu negócio. Sem teoria. Sem código.
            Sem enrolação.
          </p>

          <div className={s.dateGrid}>
            <div className={s.dateCard}>
              <span className={`${s.dayLabel} ${s.mono}`}>Noite 1</span>
              <div style={{ fontFamily: 'var(--font-display)' }} className={s.dayDate}>
                Terça, 14/Abr
              </div>
              <div className={`${s.dayTime} ${s.mono}`}>20h → 22h (Brasília)</div>
              <p className={s.dayTopics}>Ferramentas + Setup + Folder Process</p>
            </div>
            <div className={s.dateCard}>
              <span className={`${s.dayLabel} ${s.mono}`}>Noite 2</span>
              <div style={{ fontFamily: 'var(--font-display)' }} className={s.dayDate}>
                Quinta, 16/Abr
              </div>
              <div className={`${s.dayTime} ${s.mono}`}>20h → 22h (Brasília)</div>
              <p className={s.dayTopics}>Validação + Leads + Skills + Plugins</p>
            </div>
          </div>

          <a href={HOTMART_URL} className={`${s.btn} ${s.btnNavy}`}>
            QUERO MINHA VAGA NA TURMA 1 →
          </a>
          <p style={{ marginTop: 16, fontSize: '0.85rem', color: 'var(--warm-gray)' }}>
            R$ 97 · Lote 1 · Pagamento único · Garantia de 7 dias
          </p>
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
              'Faz tudo no negócio: vende, atende, cobra, posta, planeja.',
              'Sabe que IA pode ajudar, mas não sabe por onde começar.',
              'Já testou o ChatGPT, mas não saiu do "faz um textinho pra mim".',
              'Não é técnico e não quer virar programador.',
              'Quer resultado real, não mais um curso teórico.',
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
          <p
            style={{
              marginTop: 32,
              fontSize: '1.1rem',
              color: 'var(--navy)',
              fontWeight: 600,
            }}
          >
            Se você economiza <span className={s.gold}>5 horas por semana</span>,
            em 1 mês já recupera o investimento várias vezes. Uma proposta a mais
            fechada <span className={s.gold}>paga o curso</span>.
          </p>
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
            <span className={s.liveDot} /> Noite 1 — Terça, 14/Abr · 20h–22h
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
            <span className={s.liveDot} /> Noite 2 — Quinta, 16/Abr · 20h–22h
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
            Quem entra na Turma 1 leva{' '}
            <span className={s.gold}>4 bônus.</span>
          </h2>

          <div className={s.bonusCard}>
            <h3 style={{ fontFamily: 'var(--font-display)' }}>
              Gravação completa das 2 noites
            </h3>
            <p>Acesso vitalício à gravação. Reveja quando quiser, no seu ritmo.</p>
          </div>

          <div className={s.bonusCard}>
            <h3 style={{ fontFamily: 'var(--font-display)' }}>
              PDF de Prompts por Tarefa
            </h3>
            <p>
              Prompts prontos organizados por categoria: vendas, financeiro,
              conteúdo, atendimento e gestão. Copia, cola e usa.
            </p>
          </div>

          <div className={s.bonusCard}>
            <h3 style={{ fontFamily: 'var(--font-display)' }}>
              Kit da Pasta Perfeita
            </h3>
            <p>
              Templates de pastas prontas: Validação de Produto, Prospecção de
              Clientes, Conteúdo Mensal, Análise Financeira. Cada pasta com
              README e prompt inicial.
            </p>
          </div>

          <div className={`${s.bonusCard} ${s.bonusCardHighlight}`}>
            <h3 style={{ fontFamily: 'var(--font-display)' }}>
              Comunidade Exclusiva de Empresários
            </h3>
            <p>
              Grupo fechado só com empresários e donos de pequenos e médios
              negócios. Troque experiências, tire dúvidas e discuta soluções
              de IA aplicadas ao dia a dia da sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* PROVA DE EXPERIÊNCIA */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Isso não é teoria.{' '}
            <span className={s.underlineHand}>É o que eu uso todo dia.</span>
          </h2>
          <div className={s.proofGrid}>
            <div className={s.proofCard}>
              <p className={s.proofQuote}>
                &ldquo;De 3 horas para 10 minutos.&rdquo;
              </p>
              <p className={s.proofContext}>
                Montei um processo de propostas com IA que reduziu de 3h pra
                10min. Mesmo processo que ensino na imersão.
              </p>
            </div>
            <div className={s.proofCard}>
              <p className={s.proofQuote}>
                &ldquo;Validação de oferta em 1 conversa.&rdquo;
              </p>
              <p className={s.proofContext}>
                Usei o método &ldquo;sócio estratégico&rdquo; pra validar um
                produto antes de investir. Economizei semanas de pesquisa.
              </p>
            </div>
            <div className={s.proofCard}>
              <p className={s.proofQuote}>
                &ldquo;Prospecção que roda sozinha.&rdquo;
              </p>
              <p className={s.proofContext}>
                A IA pesquisa, filtra e organiza leads. O que levava 1 dia
                inteiro agora leva 30 minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUTOR */}
      <section className={`${s.section} ${s.sectionCream}`}>
        <div className={s.container}>
          <div className={s.instructorSection}>
            <div
              className={s.instructorPhoto}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              B
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

      {/* OFERTA */}
      <section className={`${s.section} ${s.sectionCreamLight}`} id="oferta">
        <div className={s.container}>
          <div className={s.offerBox}>
            <div
              className={`${s.liveBadge} ${s.mono}`}
              style={{ justifyContent: 'center', marginBottom: 16 }}
            >
              <span className={s.liveDot} /> Turma 1 — Vagas limitadas
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
              Preço sobe para R$197 em 10/Abr
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
              QUERO MINHA VAGA NA TURMA 1 →
            </a>
            <p
              style={{
                marginTop: 16,
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
            14 e 16 de abril. Duas noites. Tudo muda.
          </p>
          <p style={{ color: '#b0a99e', marginBottom: 40 }}>
            30 vagas. Depois dessa turma, só gravado.
          </p>
          <a href={HOTMART_URL} className={`${s.btn} ${s.btnGold}`}>
            QUERO MINHA VAGA — R$ 97 →
          </a>
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
