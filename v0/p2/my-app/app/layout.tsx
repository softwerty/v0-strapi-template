import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Besst Consulting',
  description: 'Plataforma de gestión para servicios de prevención',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

