import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Criado pelo melhor programador de todos os tempos :)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://kit.fontawesome.com/cd773e3565.js" crossOrigin="anonymous"></script>
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}




















