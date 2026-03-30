import { LucideIcon } from 'lucide-react'

export type Step = {
  number: number
  title: string
  description: string
  icon: LucideIcon
}

export type ProblemCard = {
  icon: LucideIcon
  tag: string
  problem: string
  solution: string
  outcome: string
  ctaMessage: string
}

export type Testimonial = {
  name: string
  role: string
  focus: string
  impact: string
  quote: string
}

export type CaseStudy = {
  name: string
  url: string
  category: string
  status: string
  headline: string
  description: string
  evidence: string[]
}

export type ServiceItem = {
  name: string
  description: string
  format: string
  bestFor: string
  outcome: string
  ctaMessage: string
  highlight?: boolean
}

export type FAQItem = {
  question: string
  answer: string
}

export type AboutHighlight = {
  label: string
  value: string
}
