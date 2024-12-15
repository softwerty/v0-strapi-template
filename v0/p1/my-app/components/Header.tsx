'use client'

import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  // Función para obtener el título basado en la ruta actual
  const getPageTitle = () => {
    switch (pathname) {
      case '/':
        return 'Dashboard'
      case '/empresas':
        return 'Empresas'
      case '/programas':
        return 'Programas de Prevención'
      case '/inspecciones':
        return 'Inspecciones'
      case '/accidentes':
        return 'Accidentes'
      case '/documentos':
        return 'Documentos'
      case '/capacitacion':
        return 'Capacitación'
      case '/monitoreo':
        return 'Monitoreo'
      case '/tareas':
        return 'Tareas'
      case '/administracion/mi-equipo':
        return 'Mi Equipo'
      case '/configuracion':
        return 'Configuración'
      default:
        if (pathname.startsWith('/empresas/')) return 'Detalles de Empresa'
        if (pathname.startsWith('/programas/')) return 'Detalles de Programa'
        if (pathname.startsWith('/inspecciones/')) return 'Detalles de Inspección'
        if (pathname.startsWith('/accidentes/')) return 'Detalles de Accidente'
        return 'Plataforma para Prevencionistas de Riesgos'
    }
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:ml-0 ml-16"> {/* Agregamos margen izquierdo en móvil */}
          <h1 className="text-3xl font-bold text-gray-900">
            {getPageTitle()}
          </h1>
        </div>
      </div>
    </header>
  )
}

