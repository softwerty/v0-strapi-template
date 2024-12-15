export async function fetchGraphQL(query: string, variables = {}) {
  if (!process.env.API_ABASTIBLE || !process.env.TOKEN_CORE_ABASTIBLE) {
    throw new Error('Las variables de entorno API_ABASTIBLE o TOKEN_CORE_ABASTIBLE no están definidas')
  }

  const apiUrl = `${process.env.API_ABASTIBLE}/graphql`

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN_CORE_ABASTIBLE}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`)
    }

    const json = await res.json()
    
    if (json.errors) {
      throw new Error(json.errors[0].message)
    }
    
    return json.data
  } catch (error) {
    console.error('Error en fetchGraphQL:', error)
    throw error
  }
}

