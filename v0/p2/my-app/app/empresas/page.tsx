"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Users, Calendar, Search } from 'lucide-react'

const empresas = [
  { id: 1, nombre: "Acero Seguro S.A.", rut: "76.123.456-7", empleados: 150, ultimaEvaluacion: "2023-05-15", categoria: "Grande" },
  { id: 2, nombre: "Construcciones Fuertes Ltda.", rut: "77.987.654-3", empleados: 80, ultimaEvaluacion: "2023-06-02", categoria: "Mediana" },
  { id: 3, nombre: "Minera El Cobre SpA", rut: "78.456.789-1", empleados: 300, ultimaEvaluacion: "2023-04-20", categoria: "Grande" },
  { id: 4, nombre: "Transportes Rápidos S.A.", rut: "79.321.654-9", empleados: 50, ultimaEvaluacion: "2023-05-30", categoria: "Pequeña" },
  { id: 5, nombre: "Industrias Químicas del Sur Ltda.", rut: "75.789.123-4", empleados: 120, ultimaEvaluacion: "2023-06-10", categoria: "Mediana" },
]

export default function EmpresasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoriaFilter, setCategoriaFilter] = useState("todas")

  const filteredEmpresas = empresas.filter(empresa => 
    (empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
     empresa.rut.includes(searchTerm)) &&
    (categoriaFilter === "todas" || empresa.categoria === categoriaFilter)
  )

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Empresas Clientes</h1>
        <Button>
          <Building2 className="mr-2 h-4 w-4" /> Agregar Empresa
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Label htmlFor="search" className="sr-only">Buscar empresa</Label>
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Buscar por nombre o RUT..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        <div className="w-full md:w-[200px]">
          <Select value={categoriaFilter} onValueChange={setCategoriaFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas las categorías</SelectItem>
              <SelectItem value="Pequeña">Pequeña</SelectItem>
              <SelectItem value="Mediana">Mediana</SelectItem>
              <SelectItem value="Grande">Grande</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEmpresas.map((empresa) => (
          <Link href={`/empresas/${empresa.id}`} key={empresa.id} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow duration-200 group-hover:border-primary">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                    {empresa.nombre}
                  </span>
                  <Badge variant="secondary">{empresa.categoria}</Badge>
                </CardTitle>
                <CardDescription>{empresa.rut}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2 text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{empresa.empleados} empleados</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Última evaluación: {empresa.ultimaEvaluacion}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                  Ver Detalles
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

