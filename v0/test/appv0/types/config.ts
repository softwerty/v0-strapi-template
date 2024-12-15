export interface ConfigCustomer {
  tabla_customers: string
  column_customers_primary_key: string
  column_customers_reference_key: string
  column_customers_date_added: string
  column_customers_status: string
}

export interface ConfigReward {
  tabla_rewards: string
  column_rewards_primary_key: string
  column_rewards_date_added: string
  column_rewards_date_vencimiento: string
  column_rewards_descripcion: string
  column_rewards_id_customer: string
  column_rewards_id_trx: string
  column_rewards_id_campana: string
  column_rewards_tipo_reward: string
  column_rewards_points: string
}

export interface ConfigData {
  configCustomer: ConfigCustomer
  config: ConfigReward
}

