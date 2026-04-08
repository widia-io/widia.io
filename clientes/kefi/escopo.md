# Escopo contratado — KEFI

**Valor:** R$ 1.000 · pagamento único · 100% na entrega
**Prazo:** 7 a 10 dias úteis
**Hospedagem:** 1 ano incluso (domínio `.com.br` + infra)

## Três entregas em um pacote

### 1. Site institucional

Landing page responsiva na identidade KEFI (sand, serifas, tom slow fashion).

- História, valores e pilares da marca
- Seção de coleção em destaque (puxa produtos cadastrados no painel)
- Botão "Comprar no WhatsApp" em todas as seções (deeplink pré-preenchido)
- Depoimentos de clientes
- SEO básico + integração Google Analytics
- 2 rodadas de ajuste de design inclusas

### 2. Painel administrativo (autonomia total)

Área privada onde a Tamyres gerencia tudo sozinha, sem depender de dev.

- Login seguro exclusivo
- CRUD de produtos: foto, nome, descrição, preço
- Upload de múltiplas fotos por produto (drag and drop)
- Flags: destaque, esgotado
- Organização por categoria (tops, leggings, conjuntos, etc.)
- Edição direta sem mexer em código

### 3. Promoções, cupons e banner

- CRUD de promoções: título, descrição, desconto
- Criação de vouchers/cupons com código personalizado
- Banner automático no topo do site quando há promoção ativa
- Agendamento: data de início e fim
- Ativar/desativar com um clique

**Na prática:** ao ativar uma promoção no painel, o banner aparece automaticamente no topo do site com o código do cupom. Ao fim da data programada, some sozinho (query server-side filtra por `active = true AND now() BETWEEN start_at AND end_at`).

## Fora de escopo (não incluso)

- Carrinho / checkout próprio
- Processamento de pagamento (Stripe/Mercado Pago)
- Cálculo de frete automático
- Emissão de etiquetas
- Integração com Instagram Shopping
- Automação de WhatsApp
- Geração de conteúdo com IA

Tudo acima pode virar proposta futura separada.

## Termos

| Termo | Valor |
|---|---|
| Pagamento | R$ 1.000 integral na entrega |
| Domínio + hospedagem (1º ano) | Por conta da Widia |
| Domínio (2º ano em diante) | Cliente assume (~R$ 40/ano) ou contrata manutenção |
| Manutenção opcional | R$ 150/mês |
| Suporte pós-entrega | 30 dias de ajustes pequenos inclusos |
| Código-fonte | Pertence à KEFI, pode migrar quando quiser |
| Dados | Pertencem exclusivamente à cliente |
