'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Pencil, Trash2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type TeamMember = {
  id: number
  name: string
  position: string
  email: string
}

const initialTeamMembers: TeamMember[] = [
  { id: 1, name: "Juan Pérez", position: "Prevencionista Senior", email: "juan@ejemplo.com" },
  { id: 2, name: "María González", position: "Prevencionista Junior", email: "maria@ejemplo.com" },
  { id: 3, name: "Carlos Rodríguez", position: "Asistente de Prevención", email: "carlos@ejemplo.com" },
]

const availablePositions = [
  "Prevencionista Junior",
  "Prevencionista Senior",
  "Asistente de Prevención",
  "Coordinador de Seguridad",
  "Gerente de Prevención"
]

export default function MyTeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentMember, setCurrentMember] = useState<TeamMember | null>(null)
  const [filter, setFilter] = useState('')

  const handleOpenDialog = (member: TeamMember | null = null) => {
    setCurrentMember(member ? { ...member } : {
      id: Date.now(),
      name: '',
      position: 'Prevencionista Junior',
      email: '',
    })
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setCurrentMember(null)
  }

  const handleSaveMember = () => {
    if (currentMember) {
      if (teamMembers.some(member => member.id === currentMember.id)) {
        setTeamMembers(teamMembers.map(member =>
          member.id === currentMember.id ? currentMember : member
        ))
      } else {
        setTeamMembers([...teamMembers, currentMember])
      }
      handleCloseDialog()
    }
  }

  const handleDeleteMember = (id: number) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Mi Equipo</h1>
        <Button onClick={() => handleOpenDialog()}>
          Agregar Miembro
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Miembros del Equipo</CardTitle>
            <Input
              placeholder="Buscar miembros..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers
                .filter(member => 
                  member.name.toLowerCase().includes(filter.toLowerCase()) ||
                  member.position.toLowerCase().includes(filter.toLowerCase()) ||
                  member.email.toLowerCase().includes(filter.toLowerCase())
                )
                .map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.position}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="icon" onClick={() => handleOpenDialog(member)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleDeleteMember(member.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{currentMember?.id ? 'Editar' : 'Agregar'} Miembro del Equipo</DialogTitle>
            <DialogDescription>
              {currentMember?.id ? 'Modifique' : 'Ingrese'} los detalles del miembro del equipo aquí.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input
                id="name"
                value={currentMember?.name || ''}
                onChange={(e) => setCurrentMember(prev => prev ? { ...prev, name: e.target.value } : null)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="position" className="text-right">
                Cargo
              </Label>
              <Select
                value={currentMember?.position || ''}
                onValueChange={(value) => setCurrentMember(prev => prev ? { ...prev, position: value } : null)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Seleccione un cargo" />
                </SelectTrigger>
                <SelectContent>
                  {availablePositions.map((position) => (
                    <SelectItem key={position} value={position}>{position}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={currentMember?.email || ''}
                onChange={(e) => setCurrentMember(prev => prev ? { ...prev, email: e.target.value } : null)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSaveMember}>
              {currentMember?.id ? 'Actualizar' : 'Agregar'} Miembro
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

