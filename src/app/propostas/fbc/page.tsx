import type { Metadata } from 'next'
import Presentation from './Presentation'

export const metadata: Metadata = {
  title: 'Proposta — FBC Consultoria Jurídica',
  robots: 'noindex, nofollow',
}

export default function FBCPropostaPage() {
  return <Presentation />
}
