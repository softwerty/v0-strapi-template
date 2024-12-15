export const GET_CAMPAIGNS = `
  query obtenerCamps {
    campanas(filters: { activo: { eq: true } }, pagination: { limit: -1 }) {        
      id_campana
      nombre
      descript
      fecha_ini
      fecha_fin
      vigencia_puntos
      activo
      desc_tipo_externo
      desc_tx_externo
      tipo {
        nombre_tabla
        columna_usuario
        columna_id_trx
      }
      rules {
        puerta_logica
        grupo_eval
        columna {
          nombre_columna
        }
        eval {
          simbolo
        }
        valor
      }
      accion {
        operator {
          operador
        }
        valor
      }
      tipo_reward
    }
  }
`

