import { api } from "@/lib/api/client"
import { CampaignList } from "./components/campaign-list"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import Link from "next/link"
import { Campaign } from "@/types/campaign"
import { Pagination } from "@/components/ui/pagination"

export default async function CampaignsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1
  const pageSize = 25

  try {
    console.log('Iniciando obtención de campañas...')
    const params = new URLSearchParams({ 
      activo: 'true',
      'pagination[page]': page.toString(),
      'pagination[pageSize]': pageSize.toString(),
    })
    const { data: campaigns, meta } = await api.campaigns.list(params)
    
    console.log('Datos recibidos en CampaignsPage:', JSON.stringify(campaigns, null, 2))

    return (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Campañas</h1>
          <Link href="/campaigns/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Crear nueva entrada
            </Button>
          </Link>
        </div>
        <CampaignList campaigns={campaigns} />
        <Pagination 
          totalItems={meta.pagination.total}
          itemsPerPage={pageSize}
          currentPage={page}
          renderPageLink={(page) => `/campaigns?page=${page}`}
        />
      </div>
    )
  } catch (error) {
    console.error('Error al obtener campañas:', error)
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>Ocurrió un error al obtener las campañas. Por favor, intente de nuevo más tarde.</p>
        <p>Detalles del error: {error instanceof Error ? error.message : String(error)}</p>
        <pre className="mt-4 p-4 bg-gray-100 rounded-md overflow-auto">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    )
  }
}

