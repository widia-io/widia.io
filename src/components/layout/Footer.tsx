import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <Link href="/#top" className="logo">
              <span className="dot" />
              widia.io
            </Link>
            <p className="footer__tag">IA prática pro seu negócio. Sem enrolação, sem código, sem complicação.</p>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              <li><Link href="/#como-funciona">Como funciona</Link></li>
              <li><Link href="/#casos">Casos</Link></li>
              <li><Link href="/#planos">Planos</Link></li>
              <li><Link href="/#sobre">Sobre</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="https://wa.me/5541995203400" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:contato@widia.io">contato@widia.io</a></li>
              <li><a href="https://www.instagram.com/widia.digital" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacidade">Privacidade</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 widia.io - IA prática pro seu negócio.</span>
          <span>Curitiba, PR · Brasil</span>
        </div>
      </div>
    </footer>
  )
}
