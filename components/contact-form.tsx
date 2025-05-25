"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

// Country codes for WhatsApp dropdown
const countryCodes = [
  { code: "+1", country: "US/Canada" },
  { code: "+44", country: "UK" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+52", country: "Mexico" },
  { code: "+55", country: "Brazil" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+61", country: "Australia" },
  { code: "+7", country: "Russia" },
  { code: "+27", country: "South Africa" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "Singapore" },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    whatsapp: "",
    package: "",
  })

  // No auto-reset - form stays submitted until page refresh

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="relative overflow-hidden bg-zinc-900 rounded-2xl border border-zinc-800 p-6 md:p-8 shadow-xl">
      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input
                id="name"
                required
                placeholder="Tu nombre completo"
                className="bg-zinc-800 border-zinc-700 focus:border-yellow-500"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="bg-zinc-800 border-zinc-700 focus:border-yellow-500"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <div className="flex gap-2">
                <Select value={formData.countryCode} onValueChange={(value) => handleChange("countryCode", value)}>
                  <SelectTrigger className="w-[110px] bg-zinc-800 border-zinc-700 focus:border-yellow-500">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700 max-h-[240px]">
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.code} {country.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="whatsapp"
                  required
                  className="flex-1 bg-zinc-800 border-zinc-700 focus:border-yellow-500"
                  placeholder="Número de WhatsApp"
                  value={formData.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="package">Paquete de Interés</Label>
              <Select required value={formData.package} onValueChange={(value) => handleChange("package", value)}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700 focus:border-yellow-500">
                  <SelectValue placeholder="Selecciona un paquete" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  <SelectItem value="starter">Starter ($5,999)</SelectItem>
                  <SelectItem value="growth">Growth ($12,999)</SelectItem>
                  <SelectItem value="dominio">Dominio ($24,999)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full mt-4 py-6 text-lg font-bold text-black rounded-full transition-all duration-300",
                "bg-gradient-to-r from-yellow-400 to-yellow-500",
                "hover:from-yellow-300 hover:to-yellow-400",
                "shadow-[0_0_15px_rgba(255,215,0,0.3)]",
                "hover:shadow-[0_0_25px_rgba(255,215,0,0.5)]",
                isSubmitting && "opacity-80 cursor-not-allowed",
              )}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  Enviando...
                </div>
              ) : (
                "Solicitar Diagnóstico Gratuito"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-gray-400 text-sm flex items-center justify-center">
            <Lock className="h-3 w-3 mr-1 inline" />
            Todos los datos están encriptados y solo se usan para contacto. No compartimos ni vendemos tu información.
          </div>
        </>
      ) : (
        <div className="relative z-10 py-6 md:py-8 animate-fade-in">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <Check className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
            </div>
          </div>
          <div className="text-center space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              <span className="text-yellow-400 mr-2">🎉</span> ¡Gracias por confiar en Gnosix!
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              Uno de nuestros agentes expertos se pondrá en contacto contigo en las próximas 24 horas para guiarte.
            </p>
            <p className="text-sm md:text-base text-gray-300">
              <span className="text-yellow-400 mr-2">🔐</span> Ahora eres parte de una red de negocios construyendo su
              propia infraestructura inteligente.
            </p>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-block w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-shimmer-slow"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">Tu solicitud ha sido enviada exitosamente.</p>
          </div>
        </div>
      )}
    </div>
  )
}