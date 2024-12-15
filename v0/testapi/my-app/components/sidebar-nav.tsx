"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Database, FileText, LayoutGrid, Settings, Table, User, Calculator, Settings2 } from 'lucide-react'

const collectionTypes = [
  {
    title: "Campaña",
    href: "/campaigns",
    icon: FileText
  },
  {
    title: "Columna",
    href: "/columns",
    icon: Table
  },
  {
    title: "Eval",
    href: "/eval",
    icon: Calculator
  },
  {
    title: "Operator",
    href: "/operators",
    icon: Settings2
  },
  {
    title: "Tipo",
    href: "/types",
    icon: LayoutGrid
  },
  {
    title: "User",
    href: "/users",
    icon: User
  }
]

const singleTypes = [
  {
    title: "Config Customer",
    href: "/config-customer",
    icon: Settings
  },
  {
    title: "Config Reward",
    href: "/config-reward",
    icon: Database
  }
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col bg-slate-900 text-slate-100">
      <div className="p-6">
        <h2 className="text-lg font-semibold">Content Manager</h2>
      </div>
      <div className="flex-1 space-y-6 px-3">
        <div className="space-y-2">
          <h3 className="px-4 text-sm font-medium text-slate-500 uppercase tracking-wider">
            Collection Types
            <span className="ml-2 rounded-full bg-slate-800 px-2 py-0.5 text-xs">
              {collectionTypes.length}
            </span>
          </h3>
          <nav className="space-y-1">
            {collectionTypes.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href 
                      ? "bg-slate-800 text-slate-100" 
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="space-y-2">
          <h3 className="px-4 text-sm font-medium text-slate-500 uppercase tracking-wider">
            Single Types
            <span className="ml-2 rounded-full bg-slate-800 px-2 py-0.5 text-xs">
              {singleTypes.length}
            </span>
          </h3>
          <nav className="space-y-1">
            {singleTypes.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href 
                      ? "bg-slate-800 text-slate-100" 
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

