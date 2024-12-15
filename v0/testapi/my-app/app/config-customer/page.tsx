import { fetchGraphQL } from "@/lib/graphql/client"
import { GET_CONFIG, UPDATE_CONFIG_CUSTOMER } from "@/lib/graphql/queries"
import { ConfigData } from "@/types/config"
import { ConfigForm } from "@/components/config-form"

async function updateConfigCustomer(data: Record<string, string>) {
  try {
    const result = await fetchGraphQL(UPDATE_CONFIG_CUSTOMER, { input: data })
    if (result && result.updateConfigCustomer) {
      return { success: true, message: "La configuración del cliente se ha actualizado correctamente." }
    } else {
      throw new Error("No se recibió una respuesta válida del servidor")
    }
  } catch (error) {
    console.error('Error al actualizar la configuración del cliente:', error)
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Error desconocido al actualizar la configuración del cliente"
    }
  }
}

export default async function ConfigCustomerPage() {
  try {
    const data: ConfigData = await fetchGraphQL(GET_CONFIG)
    
    if (!data || !data.configCustomer) {
      throw new Error('La respuesta de la API no contiene los datos esperados')
    }

    const { configCustomer } = data

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Configuración de Cliente</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <ConfigForm 
            initialData={configCustomer} 
            onSubmit={updateConfigCustomer}
          />
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error al obtener la configuración del cliente:', error)
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>Ocurrió un error al obtener la configuración del cliente. Por favor, intente de nuevo más tarde.</p>
        <p>Detalles del error: {error instanceof Error ? error.message : String(error)}</p>
      </div>
    )
  }
}

