'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Building2, Users, FileCheck, AlertTriangle } from 'lucide-react'

// Datos de ejemplo para las métricas
const metrics = [
  { title: "Total Empresas", value: 25, icon: Building2, color: "text-blue-600" },
  { title: "Empleados Capacitados", value: "78%", icon: Users, color: "text-green-600" },
  { title: "Inspecciones Realizadas", value: 142, icon: FileCheck, color: "text-yellow-600" },
  { title: "Incidentes Reportados", value: 7, icon: AlertTriangle, color: "text-red-600" },
]

// Datos de ejemplo para las alertas
const alerts = [
  { date: new Date(2024, 2, 15), title: "Vencimiento de certificación", type: "warning" },
  { date: new Date(2024, 2, 18), title: "Inspección programada", type: "info" },
  { date: new Date(2024, 2, 20), title: "Capacitación obligatoria", type: "info" },
  { date: new Date(2024, 2, 25), title: "Actualización de política de seguridad", type: "warning" },
  { date: new Date(2024, 2, 28), title: "Simulacro de emergencia", type: "info" },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      
      {/* Métricas generales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sección de alertas y calendario */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendario de Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={new Date()}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alertas y Próximos Vencimientos</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-medium">{alert.title}</p>
                    <p className="text-sm text-gray-500">
                      {alert.date.toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant={alert.type === "warning" ? "destructive" : "secondary"}>
                    {alert.type === "warning" ? "Urgente" : "Informativo"}
                  </Badge>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

