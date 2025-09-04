# widia.io

Uma versão completa e monocromática do site The Outsider Hub, adaptada para widia.io com design minimalista em preto e branco.

## 🎨 Design

- **Paleta de cores**: Apenas preto (#000000), branco (#FFFFFF) e tons de cinza
- **Logo**: Design geométrico minimalista com tipografia "widia.io"
- **Estilo**: Versão monocromática do design original com foco na elegância e simplicidade

## 🚀 Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Gráficos**: Chart.js + React Chart.js 2
- **Ícones**: Lucide React
- **Animações**: CSS Animations + Framer Motion
- **Fontes**: Inter (Google Fonts)

## 📂 Estrutura do Projeto

```
widia.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Estilos globais
│   │   └── marketplace/
│   │       └── page.tsx        # Página do marketplace
│   └── components/
│       ├── Logo.tsx            # Logo widia.io
│       ├── layout/
│       │   ├── Header.tsx      # Cabeçalho
│       │   └── Footer.tsx      # Rodapé
│       └── sections/
│           ├── Hero.tsx        # Seção hero com typewriter
│           ├── Dashboard.tsx   # Dashboard analytics
│           ├── Services.tsx    # Tabs de serviços
│           └── Pricing.tsx     # Planos e preços
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🔧 Instalação e Execução

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em modo desenvolvimento**:
```bash
npm run dev
```

3. **Build para produção**:
```bash
npm run build
npm start
```

## ✨ Funcionalidades

### Homepage
- **Hero Section**: Animação typewriter com textos rotativos
- **Dashboard Analytics**: Gráficos interativos monocromáticos
- **Services Tabs**: Sistema de abas com informações dos serviços
- **Pricing Section**: Cards de planos com destaque para popular

### Marketplace
- **Filtros por categoria**: Vendas, Suporte, Atendimento, Produtividade, Financeiro
- **Cards de agentes**: Informações detalhadas de cada agente IA
- **Formas de pagamento**: PIX/Transferência e Cartão de crédito

### Componentes Globais
- **Header responsivo**: Menu sticky com efeito blur
- **Footer completo**: Links organizados e informações de contato
- **Logo customizado**: SVG geométrico com texto "widia.io"

## 🎯 Características Especiais

1. **Design Monocromático**: Conversão completa para preto, branco e cinzas
2. **Responsividade Total**: Mobile-first approach
3. **Animações Suaves**: Transições e efeitos hover elegantes
4. **Performance**: Otimizado com Next.js 14 e Tailwind CSS
5. **SEO Optimized**: Meta tags e estrutura semântica
6. **Acessibilidade**: Contraste adequado e navegação por teclado

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔗 Links Importantes

- **WhatsApp**: Integração completa para contatos
- **Redes Sociais**: Instagram, Email
- **Navegação**: Smooth scroll entre seções

## 🚀 Deploy

O projeto está pronto para deploy em:
- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify
- Qualquer hosting que suporte Node.js

## 📝 Licença

© 2025 widia.io — Transformando empresas com modelo AI-First e agentes sob medida.

---

**Desenvolvido com base na análise completa do The Outsider Hub, mantendo toda a estrutura e funcionalidades originais em um design monocromático elegante e moderno.**