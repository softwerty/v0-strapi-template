"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Building2, ClipboardList, Calendar } from 'lucide-react'

// Datos de ejemplo (en una aplicación real, estos vendrían de una API)
const prevencionistaDatos = {
  id: 1,
  nombre: "Ana Martínez",
  especialidad: "Seguridad Industrial",
  estado: "Activo",
  empresasAsignadas: [
    { id: 1, nombre: "Acero Seguro S.A.", ultimaVisita: "2023-06-15" },
    { id: 2, nombre: "Construcciones Fuertes Ltda.", ultimaVisita: "2023-06-20" },
    { id: 3, nombre: "Minera El Cobre SpA", ultimaVisita: "2023-06-10" },
  ],
  actividadesRealizadas: [
    { id: 1, nombre: "Inspección de seguridad", empresa: "Acero Seguro S.A.", fecha: "2023-06-15" },
    { id: 2, nombre: "Capacitación en trabajo en alturas", empresa: "Construcciones Fuertes Ltda.", fecha: "2023-06-20" },
    { id: 3, nombre: "Evaluación de riesgos", empresa: "Minera El Cobre SpA", fecha: "2023-06-10" },
  ],
  actividadesPendientes: [
    { id: 4, nombre: "Actualización de protocolos de seguridad", empresa: "Acero Seguro S.A.", fecha: "2023-07-05" },
    { id: 5, nombre: "Simulacro de emergencia", empresa: "Minera El Cobre SpA", fecha: "2023-07-15" },
  ],
}

export default function PrevencionistasDetailPage() {
  const params = useParams()
  const [prevencionista, setPrevencionista] = useState(prevencionistaDatos)

  useEffect(() => {
    // Aquí iría la lógica para cargar los datos reales del prevencionista
    console.log("ID del prevencionista:", params.id)
    // En una aplicación real, aquí se haría una llamada a la API para obtener los datos del prevencionista
    // Por ahora, usamos los datos de ejemplo
    setPrevencionista(prevencionistaDatos)
  }, [params.id])

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Link href="/prevencionistas" className="flex items-center text-blue-500 hover:text-blue-700">
        <ChevronLeft className="mr-1" /> Volver a Prevencionistas
      </Link>

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{prevencionista.nombre}</h1>
          <p className="text-xl text-muted-foreground">{prevencionista.especialidad}</p>
        </div>
        <Badge variant={prevencionista.estado === "Activo" ? "default" : "secondary"}>
          {prevencionista.estado}
        </Badge>
      </div>

      <Tabs defaultValue="empresas">
        <TabsList>
          <TabsTrigger value="empresas">Empresas Asignadas</TabsTrigger>
          <TabsTrigger value="actividades">Actividades</TabsTrigger>
        </TabsList>
        <TabsContent value="empresas">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="mr-2 h-5 w-5" />
                Empresas Asignadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Empresa</TableHead>
                    <TableHead>Última Visita</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {prevencionista.empresasAsignadas.map((empresa) => (
                    <TableRow key={empresa.id}>
                      <TableCell className="font-medium">{empresa.nombre}</TableCell>
                      <TableCell>{empresa.ultimaVisita}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="actividades">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ClipboardList className="mr-2 h-5 w-5" />
                  Actividades Realizadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Actividad</TableHead>
                      <TableHead>Empresa</TableHead>
                      <TableHead>Fecha</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prevencionista.actividadesRealizadas.map((actividad) => (
                      <TableRow key={actividad.id}>
                        <TableCell className="font-medium">{actividad.nombre}</TableCell>
                        <TableCell>{actividad.empresa}</TableCell>
                        <TableCell>{actividad.fecha}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Actividades Pendientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Actividad</TableHead>
                      <TableHead>Empresa</TableHead>
                      <TableHead>Fecha Programada</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prevencionista.actividadesPendientes.map((actividad) => (
                      <TableRow key={actividad.id}>
                        <TableCell className="font-medium">{actividad.nombre}</TableCell>
                        <TableCell>{actividad.empresa}</TableCell>
                        <TableCell>{actividad.fecha}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

