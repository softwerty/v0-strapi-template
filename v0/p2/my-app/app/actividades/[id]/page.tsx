"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, Search, Calendar, User, Clock, FileText, Users } from 'lucide-react'
import Image from "next/image"

type MetodoConfirmacion = "correo" | "documento_firmado";

type Trabajador = {
  id: number
  nombre: string
  cargo: string
  asistencia: boolean
  confirmacion: boolean
  metodoConfirmacion?: MetodoConfirmacion
  documentoFirmado?: string
}

type Prevencionista = {
  id: number;
  nombre: string;
};

type Actividad = {
  id: number
  nombre: string
  porcentaje: number
  estado: "Pendiente" | "En progreso" | "Completada"
  fechaInicio: string
  fechaFin: string
  prevencionista: Prevencionista
  comentario?: string
  trabajadores: Trabajador[]
  accionId: number
  empresa: string; // Added empresa field
}

// Datos de ejemplo (en una aplicación real, estos datos vendrían de una API)
const actividadEjemplo: Actividad = {
  id: 1,
  nombre: "Análisis de riesgos",
  porcentaje: 100,
  estado: "Completada",
  fechaInicio: "2023-07-01",
  fechaFin: "2023-07-15",
  prevencionista: { id: 1, nombre: "Ana Martínez" },
  comentario: "Se identificaron varios puntos críticos que requieren atención inmediata.",
  trabajadores: [
    { id: 1, nombre: "Juan Pérez", cargo: "Analista de Seguridad", asistencia: true, confirmacion: true, metodoConfirmacion: "correo" },
    { id: 2, nombre: "María Gómez", cargo: "Ingeniera de Procesos", asistencia: true, confirmacion: true, metodoConfirmacion: "documento_firmado", documentoFirmado: "/placeholder.svg?height=300&width=300" },
    { id: 3, nombre: "Carlos Rodríguez", cargo: "Supervisor de Seguridad", asistencia: false, confirmacion: true, metodoConfirmacion: "correo" },
    { id: 4, nombre: "Laura Sánchez", cargo: "Técnica en Prevención de Riesgos", asistencia: true, confirmacion: false },
    { id: 5, nombre: "Pedro Martínez", cargo: "Operario", asistencia: true, confirmacion: true, metodoConfirmacion: "documento_firmado", documentoFirmado: "/placeholder.svg?height=300&width=300" },
    { id: 6, nombre: "Ana López", cargo: "Coordinadora de Seguridad", asistencia: true, confirmacion: true, metodoConfirmacion: "correo" },
  ],
  accionId: 1,
  empresa: "Ejemplo S.A." // Added empresa value
}

export default function ActividadDetallePage() {
  const params = useParams()
  const router = useRouter()
  const [actividad, setActividad] = useState<Actividad>(actividadEjemplo)
  const [searchTerm, setSearchTerm] = useState("")
  const [asistenciaFilter, setAsistenciaFilter] = useState<string>("all")
  const [confirmacionFilter, setConfirmacionFilter] = useState<string>("all")

  useEffect(() => {
    // Aquí iría la lógica para cargar los datos reales de la actividad
    console.log("ID de la actividad:", params.id)
  }, [params.id])

  const getEstadoBadgeColor = (estado: "Pendiente" | "En progreso" | "Completada") => {
    switch (estado) {
      case "Pendiente": return "bg-yellow-500"
      case "En progreso": return "bg-blue-500"
      case "Completada": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  const filteredTrabajadores = actividad.trabajadores.filter(trabajador => {
    const matchesSearch = trabajador.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          trabajador.cargo.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAsistencia = asistenciaFilter === "all" || trabajador.asistencia.toString() === asistenciaFilter
    const matchesConfirmacion = confirmacionFilter === "all" || trabajador.confirmacion.toString() === confirmacionFilter
    return matchesSearch && matchesAsistencia && matchesConfirmacion
  })

  return (
    <div className="container mx-auto p-6">
      <Link href={`/acciones/${actividad.accionId}`} className="flex items-center text-blue-500 hover:text-blue-700 mb-6">
        <ChevronLeft className="mr-1" /> Volver a la Acción
      </Link>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{actividad.nombre}</h1>
          <p className="text-lg text-muted-foreground mt-1">{actividad.empresa}</p>
        </div>
        <Badge className={`${getEstadoBadgeColor(actividad.estado)} text-lg py-1 px-3`}>{actividad.estado}</Badge>
      </div>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label className="text-lg font-semibold mb-2 block">Progreso</Label>
                <Progress value={actividad.porcentaje} className="h-4" />
                <span className="text-sm text-muted-foreground mt-1 block">{actividad.porcentaje}% completado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-semibold">Fecha de Inicio</Label>
                  <p>{actividad.fechaInicio}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-semibold">Fecha de Fin</Label>
                  <p>{actividad.fechaFin}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="font-semibold">Prevencionista a cargo</Label>
                  <p>{actividad.prevencionista.nombre}</p>
                </div>
              </div>
            </div>
            <div>
              <Label className="text-lg font-semibold mb-2 block">Comentario</Label>
              <Textarea value={actividad.comentario} disabled className="h-[calc(100%-2rem)] resize-none" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Trabajadores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search" className="mb-2 block">Buscar trabajador</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Buscar por nombre o cargo..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="asistencia-filter" className="mb-2 block">Filtrar por asistencia</Label>
                <Select value={asistenciaFilter} onValueChange={(value) => setAsistenciaFilter(value)}>
                  <SelectTrigger id="asistencia-filter">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="true">Asistió</SelectItem>
                    <SelectItem value="false">No asistió</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="confirmacion-filter" className="mb-2 block">Filtrar por confirmación</Label>
                <Select value={confirmacionFilter} onValueChange={(value) => setConfirmacionFilter(value)}>
                  <SelectTrigger id="confirmacion-filter">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="true">Confirmado</SelectItem>
                    <SelectItem value="false">No confirmado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Cargo</TableHead>
                  <TableHead>Asistencia</TableHead>
                  <TableHead>Confirmación</TableHead>
                  <TableHead>Método</TableHead>
                  <TableHead>Documento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTrabajadores.map((trabajador) => (
                  <TableRow key={trabajador.id}>
                    <TableCell className="font-medium">{trabajador.nombre}</TableCell>
                    <TableCell>{trabajador.cargo}</TableCell>
                    <TableCell>
                      <Badge variant={trabajador.asistencia ? "default" : "secondary"}>
                        {trabajador.asistencia ? "Sí" : "No"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={trabajador.confirmacion ? "default" : "secondary"}>
                        {trabajador.confirmacion ? "Sí" : "No"}
                      </Badge>
                    </TableCell>
                    <TableCell>{trabajador.metodoConfirmacion || "N/A"}</TableCell>
                    <TableCell>
                      {trabajador.documentoFirmado && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <FileText className="mr-2 h-4 w-4" />
                              Ver
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <Image
                              src={trabajador.documentoFirmado}
                              alt="Documento firmado"
                              width={600}
                              height={800}
                              className="w-full h-auto"
                            />
                          </DialogContent>
                        </Dialog>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

