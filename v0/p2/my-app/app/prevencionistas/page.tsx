"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Search, Building2, ClipboardList } from 'lucide-react'

const prevencionistas = [
  { id: 1, nombre: "Ana Martínez", especialidad: "Seguridad Industrial", empresasAsignadas: ["Acero Seguro S.A.", "Construcciones Fuertes Ltda.", "Minera El Cobre SpA"], actividadesRealizadas: 15, actividadesPendientes: 3, estado: "Activo" },
  { id: 2, nombre: "Carlos Rodríguez", especialidad: "Salud Ocupacional", empresasAsignadas: ["Transportes Rápidos S.A.", "Industrias Químicas del Sur Ltda."], actividadesRealizadas: 10, actividadesPendientes: 2, estado: "Activo" },
  { id: 3, nombre: "Luisa Fernández", especialidad: "Ergonomía", empresasAsignadas: ["Oficinas Modernas S.A.", "TechSoft Innovations", "Retail Mayorista Ltda."], actividadesRealizadas: 8, actividadesPendientes: 5, estado: "En capacitación" },
  { id: 4, nombre: "Pedro Sánchez", especialidad: "Higiene Industrial", empresasAsignadas: ["Laboratorios Farmacéuticos Unidos", "Planta de Alimentos Nutritivos", "Fábrica de Plásticos Ecológicos", "Industria Textil Nacional"], actividadesRealizadas: 20, actividadesPendientes: 1, estado: "Activo" },
  { id: 5, nombre: "María González", especialidad: "Psicología Laboral", empresasAsignadas: ["Centro de Atención al Cliente 24/7", "Recursos Humanos Globales"], actividadesRealizadas: 5, actividadesPendientes: 4, estado: "De vacaciones" },
]

export default function PrevencionistasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [especialidadFilter, setEspecialidadFilter] = useState("todas")
  const [estadoFilter, setEstadoFilter] = useState("todos")

  const filteredPrevencionistas = prevencionistas.filter(prevencionista => 
    prevencionista.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (especialidadFilter === "todas" || prevencionista.especialidad === especialidadFilter) &&
    (estadoFilter === "todos" || prevencionista.estado === estadoFilter)
  )

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Prevencionistas</h1>
        <Button>
          <Users className="mr-2 h-4 w-4" /> Agregar Prevencionista
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Label htmlFor="search" className="sr-only">Buscar prevencionista</Label>
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        <div className="w-full md:w-[200px]">
          <Select value={especialidadFilter} onValueChange={setEspecialidadFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por especialidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas las especialidades</SelectItem>
              <SelectItem value="Seguridad Industrial">Seguridad Industrial</SelectItem>
              <SelectItem value="Salud Ocupacional">Salud Ocupacional</SelectItem>
              <SelectItem value="Ergonomía">Ergonomía</SelectItem>
              <SelectItem value="Higiene Industrial">Higiene Industrial</SelectItem>
              <SelectItem value="Psicología Laboral">Psicología Laboral</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-[200px]">
          <Select value={estadoFilter} onValueChange={setEstadoFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los estados</SelectItem>
              <SelectItem value="Activo">Activo</SelectItem>
              <SelectItem value="En capacitación">En capacitación</SelectItem>
              <SelectItem value="De vacaciones">De vacaciones</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPrevencionistas.map((prevencionista) => (
          <Link href={`/prevencionistas/${prevencionista.id}`} key={prevencionista.id} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow duration-200 group-hover:border-primary">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                    {prevencionista.nombre}
                  </span>
                  <Badge variant={
                    prevencionista.estado === "Activo" ? "default" :
                    prevencionista.estado === "En capacitación" ? "secondary" :
                    "outline"
                  }>
                    {prevencionista.estado}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">{prevencionista.especialidad}</p>
                <div className="mb-2">
                  <span className="flex items-center text-sm mb-1">
                    <Building2 className="mr-2 h-4 w-4" />
                    Empresas asignadas ({prevencionista.empresasAsignadas.length})
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {prevencionista.empresasAsignadas.map((empresa, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {empresa}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <ClipboardList className="mr-2 h-4 w-4" />
                    Actividades pendientes
                  </span>
                  <span className="font-semibold">{prevencionista.actividadesPendientes}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

