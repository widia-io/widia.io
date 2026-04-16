'use client'

import { useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export function BlurredPrice({ children, className = '' }: Props) {
  const [revealed, setRevealed] = useState(false)

  if (revealed) {
    return <span className={`inline-flex ${className}`}>{children}</span>
  }

  return (
    <button
      type="button"
      onClick={() => setRevealed(true)}
      aria-label="Clique para revelar o valor"
      className={`inline-flex cursor-pointer select-none rounded-md [filter:blur(7px)] transition duration-300 hover:[filter:blur(5px)] ${className}`}
    >
      {children}
    </button>
  )
}
