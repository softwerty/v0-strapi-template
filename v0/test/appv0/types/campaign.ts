export interface Campaign {
  id_campana: string
  nombre: string
  descript: string
  fecha_ini: string
  fecha_fin: string
  vigencia_puntos: number
  activo: boolean
  desc_tipo_externo: string
  desc_tx_externo: string
  tipo: {
    nombre_tabla: string
    columna_usuario: string
    columna_id_trx: string
  }
  rules: Array<{
    puerta_logica: string
    grupo_eval: string
    columna: {
      nombre_columna: string
    }
    eval: {
      simbolo: string
    }
    valor: string
  }>
  accion: Array<{
    operator: {
      operador: string
    }
    valor: number
  }>
  tipo_reward: string
}

export interface CampaignsData {
  campanas: Campaign[]
}

