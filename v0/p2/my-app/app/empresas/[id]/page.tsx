"use client"

import { useState, useMemo } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Briefcase, Users, Building2, CalendarIcon, Edit } from 'lucide-react'

import "react-big-calendar/lib/css/react-big-calendar.css"

// Configuración del localizador para react-big-calendar
const locales = {
  'en-US': enUS,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// Datos de ejemplo (en una aplicación real, estos vendrían de una API)
const empresaEjemplo = {
  id: 1,
  nombre: "Acero Seguro S.A.",
  rut: "76.123.456-7",
  direccion: "Av. Industrial 1234, Santiago",
  telefono: "+56 2 2345 6789",
  email: "contacto@aceroseguro.cl",
  empleados: 150,
  ultimaEvaluacion: "2023-05-15",
  descripcion: "Empresa líder en la fabricación de estructuras de acero para la construcción.",
  documentos: 15,
  acciones: 8,
}

// Eventos de ejemplo para el calendario
const eventosEjemplo = [
  {
    id: 1,
    title: 'Capacitación de Seguridad',
    start: new Date(2023, 6, 10, 10, 0), // 10 de julio de 2023, 10:00 AM
    end: new Date(2023, 6, 10, 12, 0),   // 10 de julio de 2023, 12:00 PM
  },
  {
    id: 2,
    title: 'Inspección de Equipos',
    start: new Date(2023, 6, 15, 9, 0),  // 15 de julio de 2023, 9:00 AM
    end: new Date(2023, 6, 15, 17, 0),   // 15 de julio de 2023, 5:00 PM
  },
  {
    id: 3,
    title: 'Reunión de Seguridad',
    start: new Date(2023, 6, 20, 14, 0), // 20 de julio de 2023, 2:00 PM
    end: new Date(2023, 6, 20, 15, 30),  // 20 de julio de 2023, 3:30 PM
  },
]

export default function EmpresaDetallePage() {
  const params = useParams()
  const [empresa, setEmpresa] = useState(empresaEjemplo)
  const [editMode, setEditMode] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmpresa(prev => ({ ...prev, [name]: value }))
  }

  // Configuración de los eventos del calendario
  const events = useMemo(() => eventosEjemplo, [])

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col space-y-6 md:flex-row md:justify-between md:items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{empresa.nombre}</h1>
          <p className="text-muted-foreground">{empresa.rut}</p>
        </div>
        <Button onClick={() => setEditMode(!editMode)} variant="default">
          <Edit className="mr-2 h-4 w-4" />
          {editMode ? "Guardar Cambios" : "Editar Información"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Link href={`/empresas/${empresa.id}/documentos`}>
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Documentos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{empresa.documentos}</p>
              <p className="text-muted-foreground">Documentos registrados</p>
            </CardContent>
          </Card>
        </Link>

        <Link href={`/empresas/${empresa.id}/acciones`}>
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Acciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{empresa.acciones}</p>
              <p className="text-muted-foreground">Acciones en curso</p>
            </CardContent>
          </Card>
        </Link>

        <Link href={`/empresas/${empresa.id}/trabajadores`}>
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Trabajadores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{empresa.empleados}</p>
              <p className="text-muted-foreground">Trabajadores registrados</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="mr-2 h-5 w-5" />
              Información General
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="direccion">Dirección</Label>
                <Input
                  id="direccion"
                  name="direccion"
                  value={empresa.direccion}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </div>
              <div>
                <Label htmlFor="telefono">Teléfono</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  value={empresa.telefono}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={empresa.email}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
              </div>
              <div>
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea
                  id="descripcion"
                  name="descripcion"
                  value={empresa.descripcion}
                  onChange={handleInputChange}
                  disabled={!editMode}
                  className="h-32"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Calendario de Actividades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ height: '400px' }}>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

