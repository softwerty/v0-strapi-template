import { useState, useEffect } from 'react'

interface ToastProps {
  title: string
  description: string
  variant?: 'default' | 'destructive'
}

export function useToast() {
  const [toast, setToast] = useState<ToastProps | null>(null)

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [toast])

  const showToast = (props: ToastProps) => setToast(props)

  return { showToast, toast }
}

export function Toast({ toast }: { toast: ToastProps | null }) {
  if (!toast) return null

  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg ${
      toast.variant === 'destructive' ? 'bg-red-500' : 'bg-green-500'
    } text-white`}>
      <h3 className="font-bold">{toast.title}</h3>
      <p>{toast.description}</p>
    </div>
  )
}

