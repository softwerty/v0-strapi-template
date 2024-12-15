"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import Image from "next/image"
import Link from "next/link"

type Prevencionista = {
  id: number;
  nombre: string;
};

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
}

type Accion = {
  id: number
  nombre: string
  empresa: string
  fechaInicio: string
  fechaFin: string
  estado: "Pendiente" | "En progreso" | "Completada"
  actividades: Actividad[]
  cliente: {
    nombre: string
    contacto: string
    telefono: string
    email: string
  }
  prevencionistas: Prevencionista[]
}

// Datos de ejemplo (en una aplicación real, estos datos vendrían de una API)
const accionEjemplo: Accion = {
  id: 1,
  nombre: "Implementación de Protocolo de Seguridad",
  empresa: "Acero Seguro S.A.",
  fechaInicio: "2023-07-01",
  fechaFin: "2023-09-30",
  estado: "En progreso",
  actividades: [
    {
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
      ]
    },
    {
      id: 2,
      nombre: "Desarrollo de procedimientos",
      porcentaje: 75,
      estado: "En progreso",
      fechaInicio: "2023-07-16",
      fechaFin: "2023-08-15",
      prevencionista: { id: 2, nombre: "Carlos Rodríguez" },
      comentario: "Se están elaborando los procedimientos de acuerdo a las normativas vigentes.",
      trabajadores: [
        { id: 1, nombre: "Juan Pérez", cargo: "Analista de Seguridad", asistencia: true, confirmacion: true, metodoConfirmacion: "correo" },
        { id: 3, nombre: "Carlos Rodríguez", cargo: "Supervisor de Seguridad", asistencia: false, confirmacion: true, metodoConfirmacion: "documento_firmado", documentoFirmado: "/placeholder.svg?height=300&width=300" },
        { id: 5, nombre: "Ana López", cargo: "Coordinadora de Seguridad", asistencia: true, confirmacion: true, metodoConfirmacion: "correo" },
      ]
    },
  ],
  cliente: {
    nombre: "Acero Seguro S.A.",
    contacto: "Ana Martínez",
    telefono: "+56 9 1234 5678",
    email: "ana.martinez@aceroseguro.cl"
  },
  prevencionistas: [
    { id: 1, nombre: "Ana Martínez" },
    { id: 2, nombre: "Carlos Rodríguez" },
  ]
}

// Lista de todos los prevencionistas disponibles (en una aplicación real, esto vendría de una API)
const todosLosPrevencionistas: Prevencionista[] = [
  { id: 1, nombre: "Ana Martínez" },
  { id: 2, nombre: "Carlos Rodríguez" },
  { id: 3, nombre: "Luisa Fernández" },
  { id: 4, nombre: "Pedro Sánchez" },
  { id: 5, nombre: "María González" },
]

export default function AccionDetallePage() {
  const params = useParams()
  const [accion, setAccion] = useState<Accion>(accionEjemplo)
  const [editMode, setEditMode] = useState(false)

  const getEstadoBadgeColor = (estado: "Pendiente" | "En progreso" | "Completada") => {
    switch (estado) {
      case "Pendiente": return "bg-yellow-500"
      case "En progreso": return "bg-blue-500"
      case "Completada": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAccion(prev => ({ ...prev, [name]: value }))
  }

  const handleAddPrevencionista = (prevId: string) => {
    const newPrevencionista = todosLosPrevencionistas.find(p => p.id.toString() === prevId)
    if (newPrevencionista && !accion.prevencionistas.some(p => p.id === newPrevencionista.id)) {
      setAccion(prev => ({
        ...prev,
        prevencionistas: [...prev.prevencionistas, newPrevencionista]
      }))
    }
  }

  const handleRemovePrevencionista = (prevId: number) => {
    setAccion(prev => ({
      ...prev,
      prevencionistas: prev.prevencionistas.filter(p => p.id !== prevId)
    }))
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Detalles de la Acción</h1>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="actividades">Actividades</TabsTrigger>
          <TabsTrigger value="cliente">Cliente</TabsTrigger>
          <TabsTrigger value="prevencionistas">Prevencionistas</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Información General</span>
                <Button onClick={() => setEditMode(!editMode)}>
                  {editMode ? "Guardar" : "Editar"}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">Nombre de la Acción</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={accion.nombre}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={accion.empresa}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div>
                    <Label htmlFor="fechaInicio">Fecha de Inicio</Label>
                    <Input
                      id="fechaInicio"
                      name="fechaInicio"
                      type="date"
                      value={accion.fechaInicio}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div>
                    <Label htmlFor="fechaFin">Fecha de Fin</Label>
                    <Input
                      id="fechaFin"
                      name="fechaFin"
                      type="date"
                      value={accion.fechaFin}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>
                <div>
                  <Label>Estado</Label>
                  <Badge className={getEstadoBadgeColor(accion.estado)}>{accion.estado}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="actividades">
          <div className="space-y-6">
            {accion.actividades.map((actividad) => (
              <Card key={actividad.id}>
                <CardHeader>
                  <Link href={`/actividades/${actividad.id}`} className="hover:underline">
                    <CardTitle>{actividad.nombre}</CardTitle>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label>Estado</Label>
                      <Badge className={getEstadoBadgeColor(actividad.estado)}>{actividad.estado}</Badge>
                    </div>
                    <div>
                      <Label>Progreso</Label>
                      <Progress value={actividad.porcentaje} />
                      <span className="text-sm text-muted-foreground">{actividad.porcentaje}%</span>
                    </div>
                    <div>
                      <Label>Fecha de Inicio</Label>
                      <Input value={actividad.fechaInicio} disabled />
                    </div>
                    <div>
                      <Label>Fecha de Fin</Label>
                      <Input value={actividad.fechaFin} disabled />
                    </div>
                    <div>
                      <Label>Prevencionista a cargo</Label>
                      <Input value={actividad.prevencionista.nombre} disabled />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="cliente">
          <Card>
            <CardHeader>
              <CardTitle>Información del Cliente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <Label>Nombre de la Empresa</Label>
                  <Input value={accion.cliente.nombre} disabled />
                </div>
                <div>
                  <Label>Contacto</Label>
                  <Input value={accion.cliente.contacto} disabled />
                </div>
                <div>
                  <Label>Teléfono</Label>
                  <Input value={accion.cliente.telefono} disabled />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input value={accion.cliente.email} disabled />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="prevencionistas">
          <Card>
            <CardHeader>
              <CardTitle>Prevencionistas Asignados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {accion.prevencionistas.map((prev) => (
                    <Badge key={prev.id} variant="secondary" className="text-sm py-1 px-2">
                      {prev.nombre}
                      <button
                        onClick={() => handleRemovePrevencionista(prev.id)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Select onValueChange={handleAddPrevencionista}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Agregar prevencionista" />
                    </SelectTrigger>
                    <SelectContent>
                      {todosLosPrevencionistas
                        .filter(p => !accion.prevencionistas.some(ap => ap.id === p.id))
                        .map((prev) => (
                          <SelectItem key={prev.id} value={prev.id.toString()}>
                            {prev.nombre}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={() => handleAddPrevencionista}>Agregar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

