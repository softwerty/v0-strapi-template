import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plataforma para Prevencionistas de Riesgos',
  description: 'Gestión de seguridad laboral y prevención de riesgos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <div className="container mx-auto px-6 py-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

