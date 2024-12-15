"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Building2, ClipboardList, FileSpreadsheet, FileBarChart, AlertTriangle, Users } from 'lucide-react'
import Image from "next/image"

import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "General",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Gestión",
    items: [
      {
        title: "Empresas",
        href: "/empresas",
        icon: Building2,
      },
      {
        title: "Acciones",
        href: "/acciones",
        icon: ClipboardList,
      },
    ],
  },
  {
    title: "Equipo",
    items: [
      {
        title: "Prevencionistas",
        href: "/prevencionistas",
        icon: Users,
      },
    ],
  },
  {
    title: "Reportes",
    items: [
      {
        title: "Informes",
        href: "/informes",
        icon: FileBarChart,
      },
      {
        title: "Accidentes",
        href: "/accidentes",
        icon: AlertTriangle,
      },
    ],
  },
  {
    title: "Operaciones",
    items: [
      {
        title: "Evaluaciones",
        href: "/evaluaciones",
        icon: FileSpreadsheet,
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="pb-12 w-64 bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-fg))]">
      <div className="p-4 bg-white border border-[#2B3543] flex justify-center items-center">
        <Image
          src="/images/logo_best.png"
          alt="BESST Consulting"
          width={150}
          height={50}
          className="h-auto"
          priority
        />
      </div>
      <nav className="space-y-4 py-4">
        {sidebarItems.map((section) => (
          <div key={section.title} className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {section.title}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center w-full py-2 px-4 rounded-md transition-colors duration-150 ease-in-out",
                      isActive(item.href)
                        ? "bg-[hsl(215,60%,18%)] text-[hsl(var(--sidebar-highlight))] font-medium"
                        : "text-[hsl(var(--sidebar-fg))/0.8] hover:bg-[hsl(215,60%,18%)] hover:text-[hsl(var(--sidebar-fg))]"
                    )}
                  >
                    <item.icon className={cn(
                      "mr-2 h-4 w-4",
                      isActive(item.href) && "text-[hsl(var(--sidebar-highlight))]"
                    )} />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

