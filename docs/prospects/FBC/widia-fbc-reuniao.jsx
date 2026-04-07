import { useState, useEffect } from "react";

const SLIDES = [
  {
    type: "cover",
    tag: "REUNIÃO · ABRIL 2026",
    title: "IA prática\npro seu escritório",
    subtitle: "Widia.io × FBC Consultoria Jurídica",
  },
  {
    type: "statement",
    tag: "PONTO DE PARTIDA",
    title: "Você pesquisa IA\nno direito autoral.",
    highlight: "Nós fazemos IA funcionar\nno operacional.",
    note: "O que a inteligência artificial já pode resolver no dia a dia da FBC — sem promessas, com resultados.",
  },
  {
    type: "problems",
    tag: "DIAGNÓSTICO",
    title: "Onde o tempo\nse perde",
    items: [
      {
        icon: "💬",
        label: "Triagem manual",
        desc: "Leads chegam pelo WhatsApp perguntando sobre registro de marca, patente, consulta. Alguém responde um a um.",
      },
      {
        icon: "📝",
        label: "Conteúdo parado",
        desc: "Três sócios em audiências e processos. Quem cria posts, Reels, artigos pro Instagram e blog?",
      },
      {
        icon: "📄",
        label: "Documentos repetitivos",
        desc: "Contratos de licenciamento, pareceres de viabilidade, notificações — sempre o mesmo padrão, preenchido do zero.",
      },
      {
        icon: "👁",
        label: "Monitoramento manual",
        desc: "Clientes precisam saber quando uma marca está sendo violada. Hoje isso depende de vigilância humana constante.",
      },
    ],
  },
  {
    type: "solution",
    tag: "SOLUÇÃO IMEDIATA",
    title: "WhatsApp\ninteligente",
    metric: "70%",
    metricLabel: "das perguntas iniciais podem ser respondidas automaticamente",
    details: [
      "Triagem automática: registro de marca, patente, direitos autorais, consulta geral",
      "Respostas qualificadas com linguagem do escritório",
      "Encaminhamento direto para o sócio certo",
      "Agendamento automático de reunião",
    ],
    timeline: "2 semanas para o piloto",
  },
  {
    type: "solution",
    tag: "SOLUÇÃO COMPLEMENTAR",
    title: "Conteúdo com\nassistência de IA",
    metric: "4×",
    metricLabel: "mais conteúdo com o mesmo tempo de produção",
    details: [
      "Scripts de Reels a partir das palestras e artigos do Gustavo",
      "Calendário editorial mensal com 4 pilares temáticos",
      "Adaptação de textos técnicos para linguagem acessível",
      "Posts otimizados para Instagram, LinkedIn e blog",
    ],
    timeline: "Calendário pronto em 1 semana",
  },
  {
    type: "solution",
    tag: "SOLUÇÃO AVANÇADA",
    title: "Documentos\nautomatizados",
    metric: "80%",
    metricLabel: "menos tempo em documentos padronizados",
    details: [
      "Templates inteligentes para contratos de licenciamento",
      "Pareceres pré-preenchidos com dados do cliente",
      "Notificações extrajudiciais montadas em minutos",
      "Revisão humana como etapa final, não inicial",
    ],
    timeline: "Implementação em 4 semanas",
  },
  {
    type: "process",
    tag: "COMO FUNCIONA",
    title: "Do diagnóstico\nao resultado",
    steps: [
      { num: "01", label: "Sessão gratuita", desc: "1 hora para mapear onde está o gargalo real" },
      { num: "02", label: "Solução sob medida", desc: "Proposta específica pro contexto da FBC" },
      { num: "03", label: "Implementação", desc: "A Widia constrói e configura tudo" },
      { num: "04", label: "Acompanhamento", desc: "Suporte até funcionar de verdade" },
    ],
  },
  {
    type: "closing",
    tag: "PRÓXIMO PASSO",
    title: "Qual dessas dores\né a mais urgente?",
    subtitle: "A gente começa por ela.",
    contact: "Bruno Gonzaga · widia.io\nWhatsApp 41 99520-3400\ncontato@widia.io",
  },
];

function SlideIndicator({ total, current, onNavigate }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          style={{
            width: i === current ? 28 : 8,
            height: 8,
            borderRadius: 100,
            border: "none",
            background: i === current ? "#17191E" : "#17191E22",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            padding: 0,
          }}
        />
      ))}
    </div>
  );
}

function FadeIn({ children, delay = 0, show }) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(16px)",
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CoverSlide({ slide, show }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", padding: "48px 48px 40px" }}>
      <FadeIn show={show} delay={0}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "#646C77" }}>
          {slide.tag}
        </span>
      </FadeIn>
      <div>
        <FadeIn show={show} delay={150}>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 7vw, 64px)", fontWeight: 400, letterSpacing: "-0.045em", lineHeight: 1.05, color: "#17191E", margin: 0, whiteSpace: "pre-line" }}>
            {slide.title}
          </h1>
        </FadeIn>
        <FadeIn show={show} delay={300}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 18, color: "#646C77", marginTop: 20, fontWeight: 400 }}>
            {slide.subtitle}
          </p>
        </FadeIn>
      </div>
      <FadeIn show={show} delay={400}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#17191E", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#FFFDF8", fontSize: 14, fontWeight: 700 }}>W</span>
          </div>
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#17191E", fontWeight: 500 }}>widia.io</span>
        </div>
      </FadeIn>
    </div>
  );
}

function StatementSlide({ slide, show }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", padding: "48px 48px 40px" }}>
      <FadeIn show={show} delay={0}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "#2F61F5", marginBottom: 32, display: "block" }}>
          {slide.tag}
        </span>
      </FadeIn>
      <FadeIn show={show} delay={150}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 400, letterSpacing: "-0.045em", lineHeight: 1.15, color: "#646C77", margin: 0, whiteSpace: "pre-line" }}>
          {slide.title}
        </h2>
      </FadeIn>
      <FadeIn show={show} delay={300}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 400, letterSpacing: "-0.045em", lineHeight: 1.15, color: "#17191E", margin: "8px 0 0", whiteSpace: "pre-line" }}>
          {slide.highlight}
        </h2>
      </FadeIn>
      <FadeIn show={show} delay={450}>
        <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, color: "#646C77", marginTop: 32, maxWidth: 480, lineHeight: 1.6 }}>
          {slide.note}
        </p>
      </FadeIn>
    </div>
  );
}

function ProblemsSlide({ slide, show }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "48px 48px 40px" }}>
      <FadeIn show={show} delay={0}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "#AB6F2C" }}>
          {slide.tag}
        </span>
      </FadeIn>
      <FadeIn show={show} delay={100}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4.5vw, 36px)", fontWeight: 400, letterSpacing: "-0.045em", lineHeight: 1.1, color: "#17191E", margin: "20px 0 24px", whiteSpace: "pre-line" }}>
          {slide.title}
        </h2>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>
        {slide.items.map((item, i) => (
          <FadeIn key={i} show={show} delay={200 + i * 100}>
            <div style={{ background: "#FFFDF8", borderRadius: 16, padding: "20px 20px 18px", height: "100%", boxSizing: "border-box" }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 500, color: "#17191E", margin: "10px 0 6px", letterSpacing: "-0.02em" }}>
                {item.label}
              </h3>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#646C77", margin: 0, lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function SolutionSlide({ slide, show }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "48px 48px 40px" }}>
      <FadeIn show={show} delay={0}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "#218363" }}>
          {slide.tag}
        </span>
      </FadeIn>
      <div style={{ display: "flex", gap: 32, flex: 1, marginTop: 20, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <FadeIn show={show} delay={100}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4.5vw, 36px)", fontWeight: 400, letterSpacing: "-0.045em", lineHeight: 1.1, color: "#17191E", margin: "0 0 24px", whiteSpace: "pre-line" }}>
              {slide.title}
            </h2>
          </FadeIn>
          <FadeIn show={show} delay={200}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 48, fontWeight: 400, color: "#218363", letterSpacing: "-0.04em", lineHeight: 1 }}>
                {slide.metric}
              </span>
            </div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#646C77", margin: "0 0 24px", maxWidth: 260 }}>
              {slide.metricLabel}
            </p>
          </FadeIn>
          <FadeIn show={show} delay={350}>
            <div style={{ background: "#17191E", borderRadius: 100, padding: "10px 20px", display: "inline-block" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFDF8" }}>
                {slide.timeline}
              </span>
            </div>
          </FadeIn>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, paddingTop: 4 }}>
          {slide.details.map((d, i) => (
            <FadeIn key={i} show={show} delay={250 + i * 80}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#218363", marginTop: 7, flexShrink: 0 }} />
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#17191E", margin: 0, lineHeight: 1.55 }}>
                  {d}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessSlide({ slide, show }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "48px 48px 40px" }}>
      <FadeIn show={show} delay={0}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "#2F61F5" }}>
          {slide.tag}
        </span>
      </FadeIn>
      <FadeIn show={show} delay={100}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4.5vw, 36px)", fontWeight: 400, letterSpacing: "-0.045em", lineHeight: 1.1, color: "#17191E", margin: "20px 0 32px", whiteSpace: "pre-line" }}>
          {slide.title}
        </h2>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>
        {slide.steps.map((step, i) => (
          <FadeIn key={i} show={show} delay={200 + i * 120}>
            <div style={{ background: "#FFFDF8", borderRadius: 16, padding: "24px 24px 20px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.24em", color: "#2F61F5" }}>
                {step.num}
              </span>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 400, color: "#17191E", margin: "12px 0 8px", letterSpacing: "-0.03em" }}>
                {step.label}
              </h3>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#646C77", margin: 0, lineHeight: 1.5 }}>
                {step.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function ClosingSlide({ slide, show }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", padding: "48px 48px 40px", textAlign: "center" }}>
      <FadeIn show={show} delay={0}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "#2F61F5", marginBottom: 24, display: "block" }}>
          {slide.tag}
        </span>
      </FadeIn>
      <FadeIn show={show} delay={150}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 5.5vw, 48px)", fontWeight: 400, letterSpacing: "-0.045em", lineHeight: 1.1, color: "#17191E", margin: 0, whiteSpace: "pre-line" }}>
          {slide.title}
        </h2>
      </FadeIn>
      <FadeIn show={show} delay={300}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, color: "#646C77", marginTop: 12, letterSpacing: "-0.03em" }}>
          {slide.subtitle}
        </p>
      </FadeIn>
      <FadeIn show={show} delay={450}>
        <div style={{ marginTop: 48, background: "#17191E", borderRadius: 20, padding: "24px 36px" }}>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#FFFDF8", margin: 0, lineHeight: 1.8, whiteSpace: "pre-line", opacity: 0.85 }}>
            {slide.contact}
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

const RENDERERS = {
  cover: CoverSlide,
  statement: StatementSlide,
  problems: ProblemsSlide,
  solution: SolutionSlide,
  process: ProcessSlide,
  closing: ClosingSlide,
};

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);

  const goTo = (idx) => {
    if (idx === current || idx < 0 || idx >= SLIDES.length) return;
    setShow(false);
    setTimeout(() => {
      setCurrent(idx);
      setShow(true);
    }, 250);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goTo(current + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const slide = SLIDES[current];
  const Renderer = RENDERERS[slide.type];

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#EFE8DC", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Manrope', sans-serif", padding: 16, boxSizing: "border-box" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Manrope:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{ width: "100%", maxWidth: 800, position: "relative" }}>
        {/* Slide Card */}
        <div
          style={{
            background: "#F7F2E9",
            borderRadius: 24,
            aspectRatio: "16/10",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)",
          }}
        >
          <Renderer slide={slide} show={show} />
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, padding: "0 4px" }}>
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              background: "none",
              border: "none",
              color: current === 0 ? "#17191E33" : "#17191E",
              cursor: current === 0 ? "default" : "pointer",
              padding: "8px 0",
              transition: "color 0.2s",
            }}
          >
            ← Anterior
          </button>

          <SlideIndicator total={SLIDES.length} current={current} onNavigate={goTo} />

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === SLIDES.length - 1}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              background: "none",
              border: "none",
              color: current === SLIDES.length - 1 ? "#17191E33" : "#17191E",
              cursor: current === SLIDES.length - 1 ? "default" : "pointer",
              padding: "8px 0",
              transition: "color 0.2s",
            }}
          >
            Próximo →
          </button>
        </div>

        {/* Slide count */}
        <div style={{ textAlign: "center", marginTop: 8 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", color: "#646C77" }}>
            {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
