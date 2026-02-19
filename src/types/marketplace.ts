export type Category = 'Vendas' | 'Suporte' | 'Atendimento' | 'Produtividade' | 'Financeiro'

export type FilterCategory = Category | 'Todos'

export type Agent = {
  category: Category
  price: string
  name: string
  description: string
  features: string[]
  additional?: string
}
