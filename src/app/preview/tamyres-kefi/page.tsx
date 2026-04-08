'use client'

import { ArrowRight, Leaf, Heart, Feather } from 'lucide-react'
import styles from './page.module.css'

const WHATSAPP = 'https://wa.me/5511992751778'

const pilares = [
  {
    icon: Heart,
    name: 'Conforto',
    desc: 'Peças que acompanham seu corpo e seu ritmo, sem apertar, sem limitar.',
  },
  {
    icon: Leaf,
    name: 'Consciência',
    desc: 'Slow fashion de verdade: design pensado, produção responsável.',
  },
  {
    icon: Feather,
    name: 'Qualidade',
    desc: 'Tecidos de alta compressão e toque macio que duram treino após treino.',
  },
]

type Produto = {
  categoria: string
  nome: string
  preco: string
  href: string
}

const produtos: Produto[] = [
  {
    categoria: 'Essenciais',
    nome: 'Legging Alta Compressão',
    preco: 'a partir de R$ 189',
    href: `${WHATSAPP}?text=Oi%20KEFI!%20Quero%20saber%20mais%20sobre%20a%20Legging%20Alta%20Compress%C3%A3o.`,
  },
  {
    categoria: 'Top Fitness',
    nome: 'Top Propósito',
    preco: 'a partir de R$ 129',
    href: `${WHATSAPP}?text=Oi%20KEFI!%20Quero%20saber%20mais%20sobre%20o%20Top%20Prop%C3%B3sito.`,
  },
  {
    categoria: 'Conjuntos',
    nome: 'Conjunto Movimento',
    preco: 'a partir de R$ 289',
    href: `${WHATSAPP}?text=Oi%20KEFI!%20Quero%20saber%20mais%20sobre%20o%20Conjunto%20Movimento.`,
  },
]

const depoimentos = [
  {
    text: 'Finalmente uma legging que não escorrega e não marca. Uso do pilates ao corrido do dia.',
    author: 'Cliente KEFI',
  },
  {
    text: 'O tecido é outro nível. Toque macio, compressão que sustenta — vale cada centavo.',
    author: 'Cliente KEFI',
  },
]

export default function KefiPreview() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        :root {
          --font-kefi-body: 'Inter', sans-serif;
          --font-kefi-serif: 'Cormorant Garamond', serif;
        }
      `}</style>
      <div className={styles.page}>
        <nav className={styles.nav}>
          <div className={styles.logo}>KEFI</div>
          <div className={styles.navLinks}>
            <a href="#sobre">Sobre</a>
            <a href="#colecao">Coleção</a>
            <a href="#manifesto">Propósito</a>
            <a href="#depoimentos">Clientes</a>
          </div>
          <a
            href={`${WHATSAPP}?text=Oi%20KEFI!%20Cheguei%20pelo%20site.`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navBtn}
          >
            WhatsApp
          </a>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.heroEyebrow}>Slow fashion · Marca própria</div>
            <h1>
              Movimento
              <br />
              com <span className={styles.italic}>propósito.</span>
            </h1>
            <p className={styles.heroDesc}>
              Peças feitas para acompanhar sua rotina real — do treino à vida.
              <br />
              <strong>Conforto que dura. Design que respeita.</strong>
            </p>
            <div className={styles.heroCtas}>
              <a href="#colecao" className={styles.btnPrimary}>
                Ver coleção
                <ArrowRight size={16} />
              </a>
              <a href="#manifesto" className={styles.btnOutline}>
                Nosso propósito
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.num}>Slow</div>
                <div className={styles.lbl}>Fashion</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.num}>Brasil</div>
                <div className={styles.lbl}>Envio nacional</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.num}>Própria</div>
                <div className={styles.lbl}>Marca autoral</div>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardLabel}>Autocuidado em movimento</div>
              <div className={styles.heroCardText}>
                Treinar é um ato de amor-próprio.
              </div>
              <div className={styles.heroCardSub}>
                Sem pressa. Sem pressão. Peças que entendem o seu ritmo e acompanham cada escolha pelo seu bem-estar.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sobre} id="sobre">
          <div>
            <div className={styles.sectionTag}>A KEFI</div>
            <div className={styles.sectionTitle}>
              Movimento é
              <span className={styles.italic}>autocuidado.</span>
            </div>
          </div>

          <div className={styles.sobreText}>
            <p>
              KEFI nasceu da crença de que treinar vai <strong>muito além da estética</strong>. É sobre energia, equilíbrio, clareza. É sobre se escolher todo dia.
            </p>
            <p>
              Cada peça é desenhada para <strong>acompanhar sua rotina real</strong> — não a rotina perfeita do Instagram. Do pilates ao corrido do escritório, do yoga ao café com a amiga.
            </p>

            <div className={styles.pilares}>
              {pilares.map((p) => (
                <div key={p.name} className={styles.pilar}>
                  <p.icon size={22} className={styles.pilarIcon} strokeWidth={1.5} />
                  <div className={styles.pilarName}>{p.name}</div>
                  <div className={styles.pilarDesc}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.colecao} id="colecao">
          <div className={styles.colecaoHeader}>
            <div className={styles.sectionTag}>Coleção em destaque</div>
            <div className={styles.sectionTitle}>
              Conforto que <span className={styles.italic}>acompanha seu ritmo.</span>
            </div>
            <p>
              Alta compressão, toque macio e liberdade total nos movimentos. Peças pensadas pra quem treina de verdade.
            </p>
          </div>

          <div className={styles.produtos}>
            {produtos.map((produto) => (
              <div key={produto.nome} className={styles.produto}>
                <div className={styles.produtoImg} />
                <div className={styles.produtoInfo}>
                  <div className={styles.produtoCategoria}>{produto.categoria}</div>
                  <div className={styles.produtoNome}>{produto.nome}</div>
                  <div className={styles.produtoPreco}>{produto.preco}</div>
                  <a
                    href={produto.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.productCta}
                  >
                    Comprar no WhatsApp
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.manifesto} id="manifesto">
          <blockquote>
            Peças feitas para acompanhar sua rotina real — com conforto, qualidade e consciência.
          </blockquote>
          <div className={styles.manifestoAuthor}>— KEFI · Movimento com propósito</div>
        </section>

        <section className={styles.depoimentos} id="depoimentos">
          <div className={styles.depoimentosHeader}>
            <div className={styles.sectionTag}>Clientes</div>
            <div className={styles.sectionTitle}>
              Quem veste, <span className={styles.italic}>sente a diferença.</span>
            </div>
          </div>

          <div className={styles.depoimentosGrid}>
            {depoimentos.map((d) => (
              <div key={d.author + d.text} className={styles.depoimento}>
                <p>&ldquo;{d.text}&rdquo;</p>
                <div className={styles.depoimentoAuthor}>— {d.author}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaFinal}>
          <div className={styles.sectionTag}>Pronta pra se mover?</div>
          <h2>
            Movimento
            <span className={styles.italic}>com propósito.</span>
          </h2>
          <p>Envio pra todo Brasil. Atendimento direto com a marca, no seu tempo.</p>
          <div className={styles.ctaBtns}>
            <a
              href={`${WHATSAPP}?text=Oi%20KEFI!%20Quero%20conhecer%20a%20cole%C3%A7%C3%A3o.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhite}
            >
              Comprar no WhatsApp
              <ArrowRight size={16} />
            </a>
            <a
              href="https://www.instagram.com/kf_kefi/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              Ver no Instagram
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.logo}>KEFI</div>
          <p>© 2026 KEFI · Slow fashion · Sorocaba — envio nacional</p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/kf_kefi/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
