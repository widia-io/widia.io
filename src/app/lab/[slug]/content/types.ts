export type TimelinePhase = {
  range: string
  title: string
  desc: string
  bullets?: string[]
}

export type Prompt = {
  label: string
  context: string
  body: string
}

export type Gotcha = {
  title: string
  desc: string
}

export type StackItem = {
  name: string
  role: string
}

export type Metric = {
  label: string
  value: string
}

export type LabCase = {
  slug: string
  tag: string
  publishedAt: string
  hero: {
    title: string
    subtitle: string
    tldr: string
  }
  metrics: Metric[]
  stack: StackItem[]
  timeline: TimelinePhase[]
  prompts: Prompt[]
  gotchas: Gotcha[]
  context: string
  modelNote?: string
  nextStep: {
    label: string
    href: string
    kicker: string
  }
}
