export type InvestmentRow = {
  item: string
  value: string
}

export type Layer = {
  number: string
  title: string
  desc: string
}

export type TimelinePhase = {
  label: string
  desc: string
  bullets?: string[]
}

export type Proposal = {
  slug: string
  clientLabel: string
  version: string
  kicker: string
  hero: {
    title: string
    subtitle: string
  }
  context: string
  solution: {
    intro: string
    bullets: string[]
  }
  howItWorks: {
    intro: string
    layers: Layer[]
    note?: string
  }
  included: string[]
  timeline: TimelinePhase[]
  investment: {
    setup: InvestmentRow[]
    recurring: InvestmentRow[]
    note?: string
  }
  nextSteps: string[]
  whatsappMessage: string
}
