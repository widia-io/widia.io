interface WidiaLogoProps {
  width?: number
  height?: number
  className?: string
}

export default function WidiaLogo({
  width = 180,
  height = 60,
  className = ''
}: WidiaLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Widia.io logo"
      className={className}
    >
      <g id="icon">
        <rect x="10" y="15" width="30" height="30" rx="6" fill="black"/>
        <path
          d="M15 22 L18 35 L25 26 L32 35 L35 22"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      <g id="text" fill="black">
        <text
          x="50"
          y="36"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="24"
        >
          <tspan fontWeight="700">widia</tspan>
          <tspan fontWeight="400">.io</tspan>
        </text>
      </g>
    </svg>
  )
}
