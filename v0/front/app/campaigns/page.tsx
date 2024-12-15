import { fetchGraphQL } from "@/lib/graphql/client"
import { GET_CAMPAIGNS } from "@/lib/graphql/queries"
import { CampaignList } from "./components/campaign-list"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import Link from "next/link"
import { CampaignsData } from "@/types/campaign"

export default async function CampaignsPage() {
  try {
    console.log('Iniciando obtención de campañas...')
    const data: CampaignsData = await fetchGraphQL(GET_CAMPAIGNS)
    
    console.log('Datos recibidos en CampaignsPage:', JSON.stringify(data, null, 2))

    if (!data || !data.campanas) {
      console.error('Datos de campaña inválidos:', data)
      throw new Error('La respuesta de la API no contiene los datos esperados')
    }

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
        <CampaignList campaigns={data.campanas} />
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

