import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const evaluaciones = [
  { id: 1, empresa: "Acero Seguro S.A.", tipo: "Evaluación de Riesgos", fecha: "2023-05-15", estado: "Completada", puntuacion: 85 },
  { id: 2, empresa: "Construcciones Fuertes Ltda.", tipo: "Auditoría de Seguridad", fecha: "2023-06-02", estado: "En revisión", puntuacion: 78 },
  { id: 3, empresa: "Minera El Cobre SpA", tipo: "Evaluación de Cumplimiento Legal", fecha: "2023-04-20", estado: "Completada", puntuacion: 92 },
  { id: 4, empresa: "Transportes Rápidos S.A.", tipo: "Evaluación Ergonómica", fecha: "2023-05-30", estado: "Pendiente", puntuacion: null },
  { id: 5, empresa: "Industrias Químicas del Sur Ltda.", tipo: "Evaluación de Riesgos Químicos", fecha: "2023-06-10", estado: "En progreso", puntuacion: null },
]

export default function EvaluacionesPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Evaluaciones</h1>
        <Button>Nueva Evaluación</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Empresa</TableHead>
            <TableHead>Tipo de Evaluación</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Puntuación</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {evaluaciones.map((evaluacion) => (
            <TableRow key={evaluacion.id}>
              <TableCell className="font-medium">{evaluacion.empresa}</TableCell>
              <TableCell>{evaluacion.tipo}</TableCell>
              <TableCell>{evaluacion.fecha}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    evaluacion.estado === "Completada" ? "default" : 
                    evaluacion.estado === "En progreso" ? "secondary" : 
                    evaluacion.estado === "En revisión" ? "warning" : "outline"
                  }
                >
                  {evaluacion.estado}
                </Badge>
              </TableCell>
              <TableCell>{evaluacion.puntuacion ? `${evaluacion.puntuacion}%` : "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

