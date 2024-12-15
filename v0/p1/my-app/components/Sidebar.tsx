'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Building2, ClipboardList, FileCheck, AlertTriangle, FileText, GraduationCap, Activity, BarChart2, CheckSquare, Settings, Users, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Dashboard', icon: BarChart2 },
    { href: '/empresas', label: 'Empresas', icon: Building2 },
    { href: '/programas', label: 'Programas de Prevención', icon: ClipboardList },
    { href: '/inspecciones', label: 'Inspecciones', icon: FileCheck },
    { href: '/accidentes', label: 'Accidentes', icon: AlertTriangle },
    { href: '/documentos', label: 'Documentos', icon: FileText },
    { href: '/capacitacion', label: 'Capacitación', icon: GraduationCap },
    { href: '/monitoreo', label: 'Monitoreo', icon: Activity },
    { href: '/tareas', label: 'Tareas', icon: CheckSquare },
    { href: '/administracion/mi-equipo', label: 'Mi Equipo', icon: Users },
    { href: '/configuracion', label: 'Configuración', icon: Settings },
  ];

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className={`
        bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 transition duration-200 ease-in-out z-10
      `}>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition duration-200 ${
                  isActive 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

