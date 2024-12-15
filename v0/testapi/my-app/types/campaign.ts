export interface Campaign {
  id: number;
  documentId: string;
  nombre: string;
  descript: string;
  fecha_ini: string;
  fecha_fin: string;
  vigencia_puntos: number;
  activo: boolean;
  tipo_externo: string | null;
  desc_tipo_externo: string | null;
  tipo_tx_externo: string | null;
  desc_tx_externo: string | null;
  tipo_reward: string;
  id_campana: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

export interface CampaignsResponse {
  data: Campaign[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

