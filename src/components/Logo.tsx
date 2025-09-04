'use client'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'compact'
  className?: string
}

export default function Logo({ size = 'md', variant = 'full', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  }

  if (variant === 'compact') {
    return (
      <svg 
        className={`${sizeClasses[size]} w-auto ${className}`}
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="black"/>
        <path 
          d="M10 12L14 28L20 16L26 28L30 12" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        className={sizeClasses[size]} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="black"/>
        <path 
          d="M10 12L14 28L20 16L26 28L30 12" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className={`font-bold text-black ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'}`}>
        widia.io
      </span>
    </div>
  )
}