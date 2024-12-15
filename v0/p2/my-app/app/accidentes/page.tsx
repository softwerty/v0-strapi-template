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

const accidentes = [
  { id: 1, empresa: "Acero Seguro S.A.", trabajador: "Juan Pérez", fecha: "2023-06-10", tipo: "Leve", diasLicencia: 3, estado: "Cerrado" },
  { id: 2, empresa: "Construcciones Fuertes Ltda.", trabajador: "María Gómez", fecha: "2023-05-25", tipo: "Moderado", diasLicencia: 10, estado: "En seguimiento" },
  { id: 3, empresa: "Minera El Cobre SpA", trabajador: "Pedro Soto", fecha: "2023-06-05", tipo: "Grave", diasLicencia: 30, estado: "En investigación" },
  { id: 4, empresa: "Transportes Rápidos S.A.", trabajador: "Ana Martínez", fecha: "2023-06-15", tipo: "Leve", diasLicencia: 2, estado: "Cerrado" },
  { id: 5, empresa: "Industrias Químicas del Sur Ltda.", trabajador: "Carlos Rojas", fecha: "2023-06-20", tipo: "Moderado", diasLicencia: 7, estado: "En seguimiento" },
]

export default function AccidentesPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Registro de Accidentes</h1>
        <Button>Registrar Nuevo Accidente</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Empresa</TableHead>
            <TableHead>Trabajador</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Días de Licencia</TableHead>
            <TableHead>Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accidentes.map((accidente) => (
            <TableRow key={accidente.id}>
              <TableCell className="font-medium">{accidente.empresa}</TableCell>
              <TableCell>{accidente.trabajador}</TableCell>
              <TableCell>{accidente.fecha}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    accidente.tipo === "Leve" ? "default" : 
                    accidente.tipo === "Moderado" ? "secondary" : "destructive"
                  }
                >
                  {accidente.tipo}
                </Badge>
              </TableCell>
              <TableCell>{accidente.diasLicencia}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    accidente.estado === "Cerrado" ? "outline" : 
                    accidente.estado === "En seguimiento" ? "secondary" : "warning"
                  }
                >
                  {accidente.estado}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

