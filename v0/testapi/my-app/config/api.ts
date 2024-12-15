export const API_ENDPOINTS = {
  campaigns: {
    list: '/campanas',
    create: '/campanas',
    get: (id: string) => `/campana/${id}`,
    update: (id: string) => `/campana/${id}`,
    delete: (id: string) => `/campana/${id}`,
  },
  // Puedes agregar más endpoints para otros recursos aquí
};

