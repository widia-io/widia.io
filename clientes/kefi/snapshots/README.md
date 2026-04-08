# Snapshots — KEFI

Cópia congelada dos arquivos da proposta e do preview no momento do fechamento.

Servem como:
1. **Histórico** — referência do que foi vendido / mostrado
2. **Fonte de verdade** — se alguém mexer no repo principal, o escopo original fica preservado aqui
3. **Base pra implementação** — quando começar o projeto real, pode portar o visual do preview direto daqui

## Arquivos

```
snapshots/
├── preview/
│   ├── page.tsx         — landpage institucional (cópia de src/app/preview/tamyres-kefi/page.tsx)
│   └── page.module.css  — estilos (sand, serifas, slow fashion)
└── proposta/
    └── page.tsx         — proposta comercial (cópia de src/app/propostas/tamyres-kefi/page.tsx)
```

## Originais ao vivo

- `src/app/preview/tamyres-kefi/` — acessível em `/preview/tamyres-kefi`
- `src/app/propostas/tamyres-kefi/` — acessível em `/propostas/tamyres-kefi`

> Estes snapshots **não são importados** pelo Next.js. São apenas cópias estáticas no repo de docs do cliente. Se você atualizar os originais e quiser atualizar os snapshots, copie manualmente.
