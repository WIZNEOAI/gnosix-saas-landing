import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gnosix - Infraestructura Inteligente',
  description: 'Soluciones SaaS y sistemas IA personalizados - Construimos la infraestructura inteligente que tu negocio necesita para dominar su industria',
  generator: 'Gnosix',
  icons: {
    icon: '/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}