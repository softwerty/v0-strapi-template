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

export const GET_CONFIG = `
  query obtenerConfig {
    configCustomer {
      tabla_customers
      column_customers_primary_key
      column_customers_reference_key
      column_customers_date_added
      column_customers_status
    }
    config {
      tabla_rewards
      column_rewards_primary_key
      column_rewards_date_added
      column_rewards_date_vencimiento
      column_rewards_descripcion
      column_rewards_id_customer
      column_rewards_id_trx
      column_rewards_id_campana
      column_rewards_tipo_reward
      column_rewards_points
    }
  }
`

export const UPDATE_CONFIG_CUSTOMER = `
  mutation UpdateConfigCustomer($input: ConfigCustomerInput!) {
    updateConfigCustomer(data: $input) {
      tabla_customers
      column_customers_primary_key
      column_customers_reference_key
      column_customers_date_added
      column_customers_status
    }
  }
`

export const UPDATE_CONFIG_REWARD = `
  mutation UpdateConfigReward($input: ConfigInput!) {
    updateConfig(data: $input) {
      tabla_rewards
      column_rewards_primary_key
      column_rewards_date_added
      column_rewards_date_vencimiento
      column_rewards_descripcion
      column_rewards_id_customer
      column_rewards_id_trx
      column_rewards_id_campana
      column_rewards_tipo_reward
      column_rewards_points
    }
  }
`

