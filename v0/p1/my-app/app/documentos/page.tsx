'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Calendar, Download, Edit, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type Document = {
  id: number
  name: string
  type: string
  date: string
  company: string
}

const initialDocuments: Document[] = [
  { id: 1, name: 'Ley 16.744', type: 'Normativa', date: '2024-01-15', company: 'General' },
  { id: 2, name: 'Manual de Seguridad', type: 'Manual', date: '2024-02-20', company: 'Constructora ABC' },
  { id: 3, name: 'Certificado ISO 45001', type: 'Certificado', date: '2024-03-01', company: 'Minera XYZ' },
]

const companies = ['General', 'Constructora ABC', 'Minera XYZ', 'Fábrica 123']

export default function DocumentosPage() {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [filteredCompany, setFilteredCompany] = useState<string>('all')
  const [textFilter, setTextFilter] = useState<string>('')
  const [editingDocument, setEditingDocument] = useState<Document | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredDocuments = documents.filter(doc => 
    (filteredCompany === 'all' || doc.company === filteredCompany) &&
    (doc.name.toLowerCase().includes(textFilter.toLowerCase()) ||
     doc.type.toLowerCase().includes(textFilter.toLowerCase()) ||
     doc.company.toLowerCase().includes(textFilter.toLowerCase()))
  )

  const handleEditDocument = (document: Document) => {
    setEditingDocument(document)
    setIsDialogOpen(true)
  }

  const handleSaveDocument = (updatedDocument: Document) => {
    setDocuments(documents.map(doc => doc.id === updatedDocument.id ? updatedDocument : doc))
    setIsDialogOpen(false)
    setEditingDocument(null)
  }

  const handleDeleteDocument = (id: number) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestión Documental</h1>
        <Link
          href="/documentos/nuevo"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Subir Documento
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Label htmlFor="company-filter">Filtrar por empresa:</Label>
        <Select value={filteredCompany} onValueChange={setFilteredCompany}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Seleccionar empresa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las empresas</SelectItem>
            {companies.map(company => (
              <SelectItem key={company} value={company}>{company}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Label htmlFor="text-filter">Buscar:</Label>
        <Input
          id="text-filter"
          value={textFilter}
          onChange={(e) => setTextFilter(e.target.value)}
          placeholder="Buscar documentos..."
          className="w-[200px]"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDocuments.map((document) => (
          <div
            key={document.id}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <FileText className="h-10 w-10 text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold">{document.name}</h2>
                <p className="text-sm text-gray-500">{document.type}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                {document.date}
              </div>
              <p className="text-sm">
                <strong>Empresa:</strong> {document.company}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/documentos/${document.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Descargar
                </Link>
                <div className="space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEditDocument(document)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDeleteDocument(document.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Documento</DialogTitle>
            <DialogDescription>
              Modifique los detalles del documento aquí.
            </DialogDescription>
          </DialogHeader>
          {editingDocument && (
            <form onSubmit={(e) => {
              e.preventDefault()
              handleSaveDocument(editingDocument)
            }}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    value={editingDocument.name}
                    onChange={(e) => setEditingDocument({ ...editingDocument, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Tipo
                  </Label>
                  <Input
                    id="type"
                    value={editingDocument.type}
                    onChange={(e) => setEditingDocument({ ...editingDocument, type: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Fecha
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={editingDocument.date}
                    onChange={(e) => setEditingDocument({ ...editingDocument, date: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="company" className="text-right">
                    Empresa
                  </Label>
                  <Select
                    value={editingDocument.company}
                    onValueChange={(value) => setEditingDocument({ ...editingDocument, company: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Seleccionar empresa" />
                    </SelectTrigger>
                    <SelectContent>
                      {companies.map(company => (
                        <SelectItem key={company} value={company}>{company}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Guardar cambios</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

