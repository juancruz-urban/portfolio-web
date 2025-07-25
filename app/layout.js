import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Juan Cruz Urban',
  description: 'Desarrollador Web Fullstack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <link rel="icon" type="image/svg+xml" href="/code.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
