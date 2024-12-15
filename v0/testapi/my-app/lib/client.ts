import { API_ENDPOINTS } from '@/config/api';
import { CampaignsResponse, Campaign } from '@/types/campaign';

const API_BASE_URL = process.env.API_ABASTIBLE;
const API_TOKEN = process.env.TOKEN_CORE_ABASTIBLE;

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  if (!API_BASE_URL || !API_TOKEN) {
    throw new Error('Las variables de entorno API_ABASTIBLE o TOKEN_CORE_ABASTIBLE no están definidas');
  }

  const url = `${API_BASE_URL}/api${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Error HTTP: ${response.status}. Body: ${errorBody}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en fetchAPI:', error);
    throw error;
  }
}

export const api = {
  campaigns: {
    list: async (params: URLSearchParams): Promise<CampaignsResponse> => {
      try {
        const data = await fetchAPI(`${API_ENDPOINTS.campaigns.list}?${params.toString()}`);
        return data;
      } catch (error) {
        console.error('Error en api.campaigns.list:', error);
        throw error;
      }
    },
    create: (data: Partial<Campaign>) => fetchAPI(API_ENDPOINTS.campaigns.create, { method: 'POST', body: JSON.stringify(data) }),
    get: (id: number) => fetchAPI(API_ENDPOINTS.campaigns.get(id)),
    update: (id: number, data: Partial<Campaign>) => fetchAPI(API_ENDPOINTS.campaigns.update(id), { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: number) => fetchAPI(API_ENDPOINTS.campaigns.delete(id), { method: 'DELETE' }),
  },
};

