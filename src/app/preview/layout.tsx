export const metadata = {
  title: 'Preview | widia.io',
  description: 'Preview de site para apresentação comercial da Widia.io',
  robots: 'noindex, nofollow',
}

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
