import type { Proposal } from './types'
import { vitoriaAver } from './vitoria-aver'

export const proposals: Record<string, Proposal> = {
  [vitoriaAver.slug]: vitoriaAver,
}

export function getProposal(slug: string): Proposal | null {
  return proposals[slug] ?? null
}

export function getProposalSlugs(): string[] {
  return Object.keys(proposals)
}
