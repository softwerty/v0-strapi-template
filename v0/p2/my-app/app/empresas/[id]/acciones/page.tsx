"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlusCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

type Actividad = {
  id: number
  nombre: string
  porcentaje: number
  estado: "Pendiente" | "En progreso" | "Completada"
  fechaInicio: string
  fechaFin: string
}

type Prevencionista = {
  id: number;
  nombre: string;
};

type Accion = {
  id: number
  nombre: string
  fechaInicio: string
  fechaFin: string
  estado: "Pendiente" | "En progreso" | "Completada"
  actividades: Actividad[]
  prevencionistas: Prevencionista[];
}

// Datos de ejemplo (en una aplicación real, estos vendrían de una API)
const accionesEjemplo: Accion[] = [
  {
    id: 1,
    nombre: "Implementación de Protocolo de Seguridad",
    fechaInicio: "2023-07-01",
    fechaFin: "2023-09-30",
    estado: "En progreso",
    actividades: [
      { id: 1, nombre: "Análisis de riesgos", porcentaje: 100, estado: "Completada", fechaInicio: "2023-07-01", fechaFin: "2023-07-15" },
      { id: 2, nombre: "Desarrollo de procedimientos", porcentaje: 75, estado: "En progreso", fechaInicio: "2023-07-16", fechaFin: "2023-08-15" },
      { id: 3, nombre: "Capacitación del personal", porcentaje: 0, estado: "Pendiente", fechaInicio: "2023-08-16", fechaFin: "2023-09-15" },
      { id: 4, nombre: "Evaluación y ajustes", porcentaje: 0, estado: "Pendiente", fechaInicio: "2023-09-16", fechaFin: "2023-09-30" },
    ],
    prevencionistas: [
      { id: 1, nombre: "Ana Martínez" },
      { id: 2, nombre: "Carlos Rodríguez" },
    ],
  },
  {
    id: 2,
    nombre: "Actualización de Equipo de Protección Personal",
    fechaInicio: "2023-07-15",
    fechaFin: "2023-08-31",
    estado: "En progreso",
    actividades: [
      { id: 5, nombre: "Inventario de EPP actual", porcentaje: 100, estado: "Completada", fechaInicio: "2023-07-15", fechaFin: "2023-07-22" },
      { id: 6, nombre: "Evaluación de nuevas necesidades", porcentaje: 100, estado: "Completada", fechaInicio: "2023-07-23", fechaFin: "2023-08-05" },
      { id: 7, nombre: "Adquisición de nuevo EPP", porcentaje: 50, estado: "En progreso", fechaInicio: "2023-08-06", fechaFin: "2023-08-20" },
      { id: 8, nombre: "Distribución y capacitación", porcentaje: 0, estado: "Pendiente", fechaInicio: "2023-08-21", fechaFin: "2023-08-31" },
    ],
    prevencionistas: [
      { id: 3, nombre: "Luisa Fernández" },
    ],
  },
]

export default function AccionesEmpresaPage() {
  const params = useParams()
  const [expandedAcciones, setExpandedAcciones] = useState<number[]>([])

  const toggleAccion = (id: number) => {
    setExpandedAcciones(prev =>
      prev.includes(id) ? prev.filter(accionId => accionId !== id) : [...prev, id]
    )
  }

  const getAccionProgress = (actividades: Actividad[]) => {
    const totalActividades = actividades.length
    const completadas = actividades.filter(act => act.estado === "Completada").length
    return Math.round((completadas / totalActividades) * 100)
  }

  const getEstadoBadgeColor = (estado: "Pendiente" | "En progreso" | "Completada") => {
    switch (estado) {
      case "Pendiente": return "bg-yellow-500"
      case "En progreso": return "bg-blue-500"
      case "Completada": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Acciones de la Empresa</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Nueva Acción
        </Button>
      </div>
      <div className="space-y-6">
        {accionesEjemplo.map(accion => (
          <Card key={accion.id} className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">{accion.nombre}</CardTitle>
              <div className="flex items-center space-x-2">
                <Link href={`/acciones/${accion.id}`} passHref>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver detalles
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleAccion(accion.id)}
                >
                  {expandedAcciones.includes(accion.id) ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Badge className={getEstadoBadgeColor(accion.estado)}>{accion.estado}</Badge>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Inicio: {accion.fechaInicio}</span>
                <span>Fin: {accion.fechaFin}</span>
              </div>
              <Progress value={getAccionProgress(accion.actividades)} className="mb-2" />
              <span className="text-sm text-muted-foreground">
                Progreso: {getAccionProgress(accion.actividades)}%
              </span>
              <div className="mt-2">
                <span className="text-sm font-semibold">Prevencionistas:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {accion.prevencionistas.map((prev) => (
                    <Badge key={prev.id} variant="secondary">
                      {prev.nombre}
                    </Badge>
                  ))}
                </div>
              </div>
              {expandedAcciones.includes(accion.id) && (
                <div className="mt-4 space-y-4">
                  <h3 className="text-lg font-semibold">Actividades</h3>
                  {accion.actividades.map(actividad => (
                    <Card key={actividad.id}>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{actividad.nombre}</h4>
                          <Badge className={getEstadoBadgeColor(actividad.estado)}>{actividad.estado}</Badge>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>Inicio: {actividad.fechaInicio}</span>
                          <span>Fin: {actividad.fechaFin}</span>
                        </div>
                        <Progress value={actividad.porcentaje} className="mb-2" />
                        <span className="text-sm text-muted-foreground">
                          Progreso: {actividad.porcentaje}%
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

