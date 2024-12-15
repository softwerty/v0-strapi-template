import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const informes = [
  { id: 1, titulo: "Resumen Mensual de Actividades", descripcion: "Informe detallado de todas las actividades realizadas en el último mes.", fecha: "2023-06-30" },
  { id: 2, titulo: "Análisis de Tendencias de Accidentes", descripcion: "Estudio de las tendencias de accidentes laborales en los últimos 6 meses.", fecha: "2023-06-15" },
  { id: 3, titulo: "Evaluación de Cumplimiento Normativo", descripcion: "Informe sobre el nivel de cumplimiento de las normativas de seguridad y salud.", fecha: "2023-05-31" },
  { id: 4, titulo: "Efectividad de Capacitaciones", descripcion: "Análisis del impacto de las capacitaciones realizadas en la reducción de incidentes.", fecha: "2023-06-20" },
]

export default function InformesPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Informes</h1>
        <Button>Generar Nuevo Informe</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {informes.map((informe) => (
          <Card key={informe.id}>
            <CardHeader>
              <CardTitle>{informe.titulo}</CardTitle>
              <CardDescription>{informe.fecha}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{informe.descripcion}</p>
              <Button className="mt-4" variant="outline">Ver Informe</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

