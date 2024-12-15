'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre de la empresa debe tener al menos 2 caracteres.",
  }),
  industry: z.string().min(2, {
    message: "La industria debe tener al menos 2 caracteres.",
  }),
  contact: z.string().min(2, {
    message: "El nombre del contacto debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un correo electrónico válido.",
  }),
  phone: z.string().min(6, {
    message: "El número de teléfono debe tener al menos 6 dígitos.",
  }),
  address: z.string().min(5, {
    message: "La dirección debe tener al menos 5 caracteres.",
  }),
  description: z.string().optional(),
})

export default function NewCompanyPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      industry: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Aquí iría la lógica para enviar los datos al backend
    console.log(values)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Empresa creada",
        description: "La nueva empresa ha sido creada exitosamente.",
      })
      router.push('/empresas')
    }, 2000)
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Crear Nueva Empresa</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el nombre de la empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industria</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese la industria" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de Contacto</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el nombre del contacto principal" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="correo@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Ingrese el número de teléfono" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese la dirección de la empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Ingrese una breve descripción de la empresa" 
                    className="resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Esta descripción es opcional y puede incluir información adicional sobre la empresa.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creando..." : "Crear Empresa"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

