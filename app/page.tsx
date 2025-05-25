"use client"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { AISalesAgent } from "@/components/ai-sales-agent"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const [showComparison, setShowComparison] = useState(false)

  const scrollToComparison = () => {
    setShowComparison(true)
    setTimeout(() => {
      document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-6 text-center pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Construimos la infraestructura inteligente
            <br />
            que tu negocio necesita para dominar su industria.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Creamos soluciones SaaS y sistemas IA personalizados — con tus datos, tus reglas y sin límites de terceros.
            Todo lo que necesitas para escalar está en una sola arquitectura diseñada exclusivamente para ti.
          </p>
          <a
            href="#servicios"
            className="mt-10 inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl text-sm font-semibold shadow hover:brightness-110 transition"
          >
            Explorar Servicios
          </a>
        </div>
      </section>

      {/* Service Types Section */}
      <section id="servicios" className="py-24 px-6 md:px-8 lg:px-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                Nuestros Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones de infraestructura inteligente diseñadas para que tu negocio domine su mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Service Cards */}
            {[
              {
                title: "Lanza tu SaaS a medida",
                description: "Crea tu propia plataforma web o móvil — 100% tuya, sin depender de terceros.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "IA privada integrada en tu operación",
                description: "Desarrolla tu propio sistema de IA con tus datos y tu lógica. Propiedad total.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              },
              {
                title: "Automatiza tus procesos internos",
                description: "Desde flujos hasta reportes, liberamos tu tiempo para que escales con eficiencia.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              },
              {
                title: "Controla tu infraestructura completa",
                description: "Unifica herramientas, datos y agentes IA en un solo ecosistema optimizado.",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/10 transition-colors duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                    <button
                      onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center px-4 py-2 bg-zinc-800 hover:bg-yellow-500 text-white hover:text-black rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                    >
                      Ver Paquetes
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="packages" className="py-24 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                Paquetes de Infraestructura IA
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Soluciones completas de propiedad total. No suscripciones, no dependencias. Tu infraestructura, tus reglas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {/* Pricing Cards */}
            {[
              {
                name: "Starter",
                price: "$5,999",
                description: "Tu primer salto con IA",
                features: ["App web personalizada", "IA básica integrada", "3 meses de soporte", "Hosting incluido"],
                color: "green",
                popular: false
              },
              {
                name: "Growth",
                price: "$12,999",
                description: "Infraestructura IA privada",
                features: ["App web + móvil", "1 agente IA operativo", "6 meses de soporte", "Backend dedicado"],
                color: "blue",
                popular: true
              },
              {
                name: "Dominio",
                price: "$24,999",
                description: "Ecosistema IA completo",
                features: ["Backend dedicado", "3 agentes IA especializados", "12 meses de soporte", "Infraestructura escalable"],
                color: "purple",
                popular: false
              }
            ].map((pkg, index) => (
              <div key={index} className={`group relative bg-zinc-900/50 border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? 'border-yellow-500/50 shadow-[0_0_30px_rgba(255,215,0,0.15)]' : 'border-zinc-700 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 bg-${pkg.color}-500 rounded-full mr-3`}></div>
                  <h3 className={`text-2xl font-bold text-white group-hover:text-${pkg.color}-400 transition-colors`}>{pkg.name}</h3>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">pago único</span>
                </div>
                
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${pkg.popular ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                >
                  Comenzar Ahora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
              Stack Tecnológico
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Utilizamos las mejores tecnologías para construir soluciones robustas y escalables.
          </p>
          
          {/* Tech logos carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {/* Set 1 */}
              <div className="flex space-x-6 mr-6">
                {[
                  "supabase", "openai", "vercel", "react", "nextdotjs", "anthropic", 
                  "googlegemini", "huggingface", "langchain", "make", "n8n", "perplexity", "resend"
                ].map((tech, index) => (
                  <div key={`set1-${index}`} className="flex-shrink-0 w-32 h-32 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center justify-center hover:border-yellow-500/50 transition-all duration-300 brightness-110 contrast-125 hover:brightness-125 hover:contrast-150 shadow-lg hover:shadow-xl">
                    <img src={`/logos/${tech}.svg`} alt={tech} className="w-12 h-12 object-contain" />
                  </div>
                ))}
              </div>
              
              {/* Set 2 (duplicate for seamless loop) */}
              <div className="flex space-x-6 mr-6">
                {[
                  "supabase", "openai", "vercel", "react", "nextdotjs", "anthropic", 
                  "googlegemini", "huggingface", "langchain", "make", "n8n", "perplexity", "resend"
                ].map((tech, index) => (
                  <div key={`set2-${index}`} className="flex-shrink-0 w-32 h-32 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center justify-center hover:border-yellow-500/50 transition-all duration-300 brightness-110 contrast-125 hover:brightness-125 hover:contrast-150 shadow-lg hover:shadow-xl">
                    <img src={`/logos/${tech}.svg`} alt={tech} className="w-12 h-12 object-contain" />
                  </div>
                ))}
              </div>
              
              {/* Set 3 (duplicate for seamless loop) */}
              <div className="flex space-x-6">
                {[
                  "supabase", "openai", "vercel", "react", "nextdotjs", "anthropic", 
                  "googlegemini", "huggingface", "langchain", "make", "n8n", "perplexity", "resend"
                ].map((tech, index) => (
                  <div key={`set3-${index}`} className="flex-shrink-0 w-32 h-32 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center justify-center hover:border-yellow-500/50 transition-all duration-300 brightness-110 contrast-125 hover:brightness-125 hover:contrast-150 shadow-lg hover:shadow-xl">
                    <img src={`/logos/${tech}.svg`} alt={tech} className="w-12 h-12 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                Comienza Tu Transformación
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos construir la infraestructura IA que tu negocio necesita.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 md:px-8 lg:px-16 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
                Preguntas Frecuentes
              </span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "¿Cuánto tiempo toma desarrollar una solución?",
                answer: "Dependiendo del paquete, entre 4-12 semanas. El Launch Kit toma 4-6 semanas, mientras que soluciones más complejas pueden tomar hasta 12 semanas."
              },
              {
                question: "¿Qué incluye el soporte post-lanzamiento?",
                answer: "Incluye mantenimiento técnico, actualizaciones de seguridad, soporte para bugs y consultoría estratégica según el paquete contratado."
              },
              {
                question: "¿Puedo escalar mi solución después?",
                answer: "Absolutamente. Todas nuestras soluciones están diseñadas para escalar. Puedes agregar funcionalidades, más agentes IA o migrar a un paquete superior."
              },
              {
                question: "¿Los datos están seguros?",
                answer: "Sí, implementamos las mejores prácticas de seguridad, encriptación end-to-end y cumplimos con estándares internacionales de protección de datos."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* AI Sales Agent */}
      <AISalesAgent />
    </div>
  )
}