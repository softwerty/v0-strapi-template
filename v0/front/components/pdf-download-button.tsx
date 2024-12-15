'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

export function PDFDownloadButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/generate-pdf')
      const data = await response.json()
      
      if (response.ok) {
        // In a real scenario, we would redirect to the download URL
        // For now, we'll just show a success message
        toast({
          title: "PDF Generado",
          description: "El PDF se ha generado exitosamente.",
        })
      } else {
        throw new Error(data.error || 'Error al generar el PDF')
      }
    } catch (error) {
      console.error('Error al generar el PDF:', error)
      toast({
        title: "Error",
        description: "Hubo un problema al generar el PDF. Por favor, intente de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleDownload} disabled={isLoading}>
      {isLoading ? 'Generando PDF...' : 'Descargar Informe PDF'}
      <Download className="w-4 h-4 ml-2" />
    </Button>
  )
}

