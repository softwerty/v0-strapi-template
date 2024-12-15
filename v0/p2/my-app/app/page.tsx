import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Empresas Clientes
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h1v7H4z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">
              +2 este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Prevencionistas
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">
              +1 esta semana
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acciones Activas</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              +3 desde la última semana
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Evaluaciones Pendientes
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              -2 desde ayer
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Resumen de Accidentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Total: 23</div>
            <p className="text-xs text-muted-foreground mb-4">En los últimos 30 días</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-16 text-sm">Leves:</div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{width: '70%'}}></div>
                </div>
                <div className="w-16 text-sm text-right">16</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm">Moderados:</div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '22%'}}></div>
                </div>
                <div className="w-16 text-sm text-right">5</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 text-sm">Graves:</div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full" style={{width: '9%'}}></div>
                </div>
                <div className="w-16 text-sm text-right">2</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Próximas Actividades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Capacitación en Trabajo en Alturas</p>
                  <p className="text-xs text-muted-foreground">Construcciones Fuertes Ltda.</p>
                </div>
                <div className="text-sm">01/07</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Evaluación de Riesgos Químicos</p>
                  <p className="text-xs text-muted-foreground">Industrias Químicas del Sur Ltda.</p>
                </div>
                <div className="text-sm">15/07</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Auditoría de Seguridad</p>
                  <p className="text-xs text-muted-foreground">Minera El Cobre SpA</p>
                </div>
                <div className="text-sm">10/07</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

