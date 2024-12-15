import { Campaign } from "@/types/campaign"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CampaignListProps {
  campaigns: Campaign[]
}

export function CampaignList({ campaigns }: CampaignListProps) {
  if (!campaigns || campaigns.length === 0) {
    return <p>No se encontraron campañas activas.</p>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Fecha Inicio</TableHead>
            <TableHead>Fecha Fin</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="w-[70px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id_campana}>
              <TableCell>{campaign.id_campana}</TableCell>
              <TableCell>{campaign.nombre}</TableCell>
              <TableCell>{campaign.descript}</TableCell>
              <TableCell>{formatDate(campaign.fecha_ini)}</TableCell>
              <TableCell>{formatDate(campaign.fecha_fin)}</TableCell>
              <TableCell>
                <Badge variant={campaign.activo ? "success" : "secondary"}>
                  {campaign.activo ? "Activo" : "Inactivo"}
                </Badge>
              </TableCell>
              <TableCell>
                <Link href={`/campaigns/${campaign.id_campana}`}>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

