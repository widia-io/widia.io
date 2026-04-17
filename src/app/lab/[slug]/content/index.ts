import type { LabCase } from './types'
import { ecommerce1h } from './ecommerce-1h'

export const labCases: Record<string, LabCase> = {
  [ecommerce1h.slug]: ecommerce1h,
}

export function getLabCase(slug: string): LabCase | null {
  return labCases[slug] ?? null
}

export function getLabCaseSlugs(): string[] {
  return Object.keys(labCases)
}

export function getAllLabCases(): LabCase[] {
  return Object.values(labCases).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}
