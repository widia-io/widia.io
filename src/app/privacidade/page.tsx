import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  robots: 'noindex, nofollow',
}

export default function Privacidade() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-[var(--graphite-ink)] sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">
          Última atualização: 5 de abril de 2026
        </p>

        <div className="mt-10 space-y-8 text-[var(--ink-soft)] [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[var(--graphite-ink)] [&_p]:mt-2 [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:leading-relaxed">
          <div>
            <h2>1. Introdução</h2>
            <p>
              A <strong>widia.io</strong> (&ldquo;nós&rdquo;) valoriza a privacidade dos
              visitantes do nosso site. Esta política explica quais dados coletamos, como
              os utilizamos e quais são os seus direitos, em conformidade com a Lei Geral
              de Proteção de Dados (LGPD &mdash; Lei nº 13.709/2018).
            </p>
          </div>

          <div>
            <h2>2. Dados que coletamos</h2>
            <p>
              Nosso site não possui formulários de cadastro, área de login ou sistema de
              pagamento. Os únicos dados pessoais que podemos receber são aqueles que você
              nos envia voluntariamente ao entrar em contato:
            </p>
            <ul>
              <li>Nome e número de telefone (via WhatsApp)</li>
              <li>Nome e endereço de e-mail (via contato@widia.io)</li>
            </ul>
          </div>

          <div>
            <h2>3. Como utilizamos seus dados</h2>
            <p>Utilizamos os dados fornecidos exclusivamente para:</p>
            <ul>
              <li>Responder às suas mensagens e solicitações</li>
              <li>Agendar e conduzir sessões de diagnóstico</li>
              <li>Enviar propostas comerciais quando solicitadas</li>
            </ul>
            <p>
              Não utilizamos seus dados para marketing não solicitado, nem os vendemos a
              terceiros.
            </p>
          </div>

          <div>
            <h2>4. Compartilhamento com terceiros</h2>
            <p>
              Não compartilhamos seus dados pessoais com terceiros, exceto quando
              estritamente necessário para a prestação dos nossos serviços (por exemplo,
              ferramentas de comunicação como WhatsApp e e-mail) ou quando exigido por lei.
            </p>
          </div>

          <div>
            <h2>5. Cookies e rastreamento</h2>
            <p>
              Atualmente, nosso site não utiliza cookies de rastreamento, ferramentas de
              analytics ou pixels de terceiros. Caso isso mude no futuro, esta política
              será atualizada.
            </p>
          </div>

          <div>
            <h2>6. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra
              acesso não autorizado, perda ou alteração. No entanto, nenhuma transmissão
              pela internet é 100% segura.
            </p>
          </div>

          <div>
            <h2>7. Seus direitos (LGPD)</h2>
            <p>Você tem direito a:</p>
            <ul>
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar, corrigir ou excluir seus dados pessoais</li>
              <li>Revogar consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade dos seus dados</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail
              abaixo.
            </p>
          </div>

          <div>
            <h2>8. Contato</h2>
            <p>
              Para dúvidas sobre esta política ou sobre seus dados pessoais:
            </p>
            <p>
              <strong>E-mail:</strong>{' '}
              <a
                href="mailto:contato@widia.io"
                className="text-[var(--graphite-ink)] underline underline-offset-2 hover:no-underline"
              >
                contato@widia.io
              </a>
            </p>
          </div>

          <div>
            <h2>9. Alterações nesta política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Recomendamos que você a
              consulte regularmente. A data da última atualização está indicada no topo
              desta página.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
