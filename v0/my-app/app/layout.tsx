import { SidebarNav } from "@/components/sidebar-nav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50">
        <div className="flex h-screen">
          <aside className="hidden w-64 lg:block">
            <SidebarNav />
          </aside>
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

