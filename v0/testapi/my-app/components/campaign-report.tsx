'use client'

import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { Campaign } from "@/types/campaign"

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
})

interface CampaignReportProps {
  campaigns: Campaign[]
}

const CampaignReport: React.FC<CampaignReportProps> = ({ campaigns }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Informe de Campañas</Text>
        {campaigns.map((campaign) => (
          <View key={campaign.id_campana} style={styles.section}>
            <Text style={styles.subtitle}>{campaign.nombre}</Text>
            <Text style={styles.text}>ID: {campaign.id_campana}</Text>
            <Text style={styles.text}>Descripción: {campaign.descript}</Text>
            <Text style={styles.text}>Fecha de inicio: {new Date(campaign.fecha_ini).toLocaleDateString()}</Text>
            <Text style={styles.text}>Fecha de fin: {new Date(campaign.fecha_fin).toLocaleDateString()}</Text>
            <Text style={styles.text}>Estado: {campaign.activo ? 'Activo' : 'Inactivo'}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
)

export default CampaignReport

