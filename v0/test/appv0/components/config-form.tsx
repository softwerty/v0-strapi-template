"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast, Toast } from "@/components/ui/use-toast"

interface ConfigFormProps {
  initialData: Record<string, string>
  onSubmit: (data: Record<string, string>) => Promise<{ success: boolean, message: string }>
}

export function ConfigForm({ initialData, onSubmit }: ConfigFormProps) {
  const [formData, setFormData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const { showToast, toast } = useToast()

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await onSubmit(formData)
      if (result.success) {
        showToast({
          title: "Configuración actualizada",
          description: result.message,
        })
      } else {
        throw new Error(result.message || "Error desconocido al actualizar la configuración")
      }
    } catch (error) {
      console.error('Error al actualizar la configuración:', error)
      showToast({
        title: "Error",
        description: error instanceof Error ? error.message : "Error desconocido al actualizar la configuración",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <Label htmlFor={key}>{key}</Label>
            <Input
              id={key}
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        ))}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Guardando..." : "Guardar cambios"}
        </Button>
      </form>
      <Toast toast={toast} />
    </>
  )
}

