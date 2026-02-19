import { categoryColors } from '@/constants/marketplace'
import type { Agent } from '@/types/marketplace'

const fallbackColor = 'bg-gray-100 text-gray-800'

export const getCategoryColor = (category: Agent['category']) =>
  categoryColors[category] ?? fallbackColor
