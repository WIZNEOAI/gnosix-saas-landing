"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Brain, Send, X, RefreshCw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface Message {
  role: "assistant" | "user"
  content: string
  type?: "text" | "buttons" | "form"
  buttons?: string[]
}

export function AISalesAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  
  // Initialize messages from localStorage or default
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gnosix-chat-messages')
      if (saved) {
        return JSON.parse(saved)
      }
    }
    return [
      {
        role: "assistant",
        content: "Hola. Soy tu agente inteligente. ¿En qué puedo ayudarte hoy?",
        type: "buttons",
        buttons: ["Conocer nuestros servicios", "Agendar llamada gratuita"],
      },
    ]
  })
  
  const [currentFlow, setCurrentFlow] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gnosix-chat-flow') || null
    }
    return null
  })
  
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)

  const popupMessages = [
    "¿Te ayudo con algo?",
    "¿Buscas una solución IA?",
    "¿Necesitas automatizar tu negocio?",
    "¿Quieres construir tu propio SaaS?",
  ]

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Save to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gnosix-chat-messages', JSON.stringify(messages))
      if (currentFlow) {
        localStorage.setItem('gnosix-chat-flow', currentFlow)
      }
    }
  }, [messages, currentFlow])

  // Popup message cycle
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        const randomMessage = popupMessages[Math.floor(Math.random() * popupMessages.length)]
        setPopupMessage(randomMessage)
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 5000)
      }, 25000)
      return () => clearInterval(interval)
    }
  }, [isOpen])

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message])
  }

  const resetChat = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('gnosix-chat-messages')
      localStorage.removeItem('gnosix-chat-flow')
    }
    setMessages([
      {
        role: "assistant",
        content: "Hola. Soy tu agente inteligente. ¿En qué puedo ayudarte hoy?",
        type: "buttons",
        buttons: ["Conocer nuestros servicios", "Agendar llamada gratuita"],
      },
    ])
    setCurrentFlow(null)
    setFormData({})
    setInput("")
  }

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, delay)
  }

  const handleButtonClick = (buttonText: string) => {
    addMessage({ role: "user", content: buttonText })

    if (buttonText === "Conocer nuestros servicios") {
      simulateTyping(() => {
        addMessage({
          role: "assistant",
          content: "Perfecto. Tenemos 3 servicios principales:\n\n🚀 **Launch Kit ($5,999)**\nApp web con IA integrada\n\n💼 **Smart System Pro ($12,999)**\nApp web + móvil con agente IA\n\n🏢 **Total Infrastructure ($24,999)**\nEcosistema IA completo\n\n¿Te interesa alguno en particular?",
          type: "buttons",
          buttons: ["Launch Kit", "Smart System Pro", "Total Infrastructure", "Agendar consulta"],
        })
      })
    } else if (buttonText === "Launch Kit") {
      simulateTyping(() => {
        addMessage({
          role: "assistant",
          content: "**Launch Kit ($5,999)**\n\n✅ App web personalizada\n✅ IA básica integrada\n✅ 3 meses de soporte\n\nPerfecto para empezar con IA. ¿Te gustaría agendar una consulta?",
          type: "buttons",
          buttons: ["Agendar consulta", "Ver otros servicios"],
        })
      })
    } else if (buttonText === "Smart System Pro") {
      simulateTyping(() => {
        addMessage({
          role: "assistant",
          content: "**Smart System Pro ($12,999)**\n\n✅ App web + móvil\n✅ 1 agente IA operativo\n✅ 6 meses de soporte\n\nIdeal para automatizar operaciones. ¿Te gustaría agendar una consulta?",
          type: "buttons",
          buttons: ["Agendar consulta", "Ver otros servicios"],
        })
      })
    } else if (buttonText === "Total Infrastructure") {
      simulateTyping(() => {
        addMessage({
          role: "assistant",
          content: "**Total Infrastructure ($24,999)**\n\n✅ Backend dedicado\n✅ 3 agentes IA especializados\n✅ 12 meses de soporte\n\nPara empresas que buscan dominar su mercado. ¿Te gustaría agendar una consulta?",
          type: "buttons",
          buttons: ["Agendar consulta", "Ver otros servicios"],
        })
      })
    } else if (buttonText === "Agendar llamada gratuita" || buttonText === "Agendar consulta") {
      setCurrentFlow("schedule")
      simulateTyping(() => {
        addMessage({
          role: "assistant",
          content: "Perfecto. Vamos a agendar tu consulta gratuita. Solo necesito algunos datos:",
          type: "form",
        })
      })
    } else if (buttonText === "Ver otros servicios") {
      simulateTyping(() => {
        addMessage({
          role: "assistant",
          content: "Aquí tienes todos nuestros servicios:",
          type: "buttons",
          buttons: ["Launch Kit", "Smart System Pro", "Total Infrastructure", "Agendar consulta"],
        })
      })
    }
  }

  const handleFormSubmit = (data: Record<string, string>) => {
    setFormData(data)
    simulateTyping(() => {
      addMessage({
        role: "assistant",
        content: `¡Perfecto, ${data.name}! Tu consulta ha sido agendada. Nos pondremos en contacto contigo en las próximas 24 horas al ${data.whatsapp}. ¡Gracias por confiar en Gnosix!`,
        type: "buttons",
        buttons: ["Ver servicios", "Cerrar chat"],
      })
    })
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {showPopup && !isOpen && (
          <div className="absolute bottom-16 right-0 bg-zinc-800 text-white p-3 rounded-lg shadow-lg max-w-xs animate-fade-in">
            <p className="text-sm">{popupMessage}</p>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Brain className="h-6 w-6 animate-subtle-bounce" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-6 w-96 h-[500px] bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-zinc-600/40 rounded-2xl shadow-2xl z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-700/50">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold text-white">Agente Gnosix</span>
            </div>
            <button
              onClick={resetChat}
              className="p-1 hover:bg-zinc-700/50 rounded-lg transition-colors"
            >
              <RefreshCw className="h-4 w-4 text-gray-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-lg",
                    message.role === "user"
                      ? "bg-yellow-500 text-black"
                      : "bg-zinc-700/60 text-white border border-zinc-600/40"
                  )}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  
                  {message.type === "buttons" && message.buttons && (
                    <div className="mt-3 space-y-2">
                      {message.buttons.map((button, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleButtonClick(button)}
                          className="w-full p-2 bg-zinc-700/50 hover:bg-yellow-500/20 text-gray-200 hover:text-yellow-100 rounded-lg text-sm font-medium transition-all duration-300 justify-center text-center"
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {message.type === "form" && (
                    <FormComponent onSubmit={handleFormSubmit} />
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-700/60 text-white p-3 rounded-lg border border-zinc-600/40">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  )
}

function FormComponent({ onSubmit }: { onSubmit: (data: Record<string, string>) => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    onSubmit(formData)
  }

  if (isSubmitted) {
    return (
      <div className="mt-3 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
        <div className="flex items-center space-x-2">
          <Check className="h-4 w-4 text-green-400" />
          <span className="text-sm text-green-400">¡Formulario enviado!</span>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-3">
      <div>
        <Label htmlFor="name" className="text-xs text-gray-300">Nombre</Label>
        <Input
          id="name"
          required
          placeholder="Tu nombre"
          className="bg-zinc-800/80 border-zinc-600 text-white placeholder-gray-400 text-sm"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-xs text-gray-300">Email</Label>
        <Input
          id="email"
          type="email"
          required
          placeholder="tu@email.com"
          className="bg-zinc-800/80 border-zinc-600 text-white placeholder-gray-400 text-sm"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <div>
        <Label htmlFor="whatsapp" className="text-xs text-gray-300">WhatsApp</Label>
        <Input
          id="whatsapp"
          required
          placeholder="+1234567890"
          className="bg-zinc-800/80 border-zinc-600 text-white placeholder-gray-400 text-sm"
          value={formData.whatsapp}
          onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black text-sm"
      >
        Agendar Consulta
      </Button>
    </form>
  )
}