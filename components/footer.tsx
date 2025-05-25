"use client"

import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-b from-black via-zinc-950 to-black border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Gnosix Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              <img 
                src="/favicon-32x32.png" 
                alt="Gnosix" 
                className="h-11 md:h-12 w-auto"
              />
              <h3 className="text-xl md:text-2xl font-bold text-white">Gnosix</h3>
            </div>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Infraestructura inteligente que transforma negocios a través de productos SaaS personalizados, sistemas
              embebidos con IA y automatización a nivel arquitectura.
            </p>
          </div>

          {/* Column 2 - Navegación Rápida */}
          <div className="lg:col-span-1">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Navegación Rápida</h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                { label: "Inicio", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
                { label: "Servicios", action: () => scrollToSection("servicios") },
                { label: "Paquetes", action: () => scrollToSection("packages") },
                { label: "Stack", action: () => scrollToSection("tech-stack") },
                { label: "Contacto", action: () => scrollToSection("contact") },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={item.action}
                    className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Soluciones */}
          <div className="lg:col-span-1">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Soluciones</h4>
            <ul className="space-y-3 md:space-y-4">
              {["SaaS a medida", "Integración de IA privada", "Automatización Interna", "Infraestructura Segura"].map(
                (solution, index) => (
                  <li key={index}>
                    <span className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-default">
                      {solution}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 4 - Conéctate */}
          <div className="lg:col-span-1">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Conéctate</h4>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                {
                  icon: () => (
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.05z" />
                    </svg>
                  ),
                  href: "#",
                  label: "TikTok",
                },
                {
                  icon: () => (
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: "#",
                  label: "X",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 md:w-12 md:h-12 bg-zinc-800/50 hover:bg-zinc-700/70 border border-zinc-700/50 hover:border-yellow-500/50 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1"
                >
                  {typeof social.icon === "function" ? (
                    <social.icon />
                  ) : (
                    <social.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-6 md:py-8">
          <div className="text-center">
            <p className="text-xs md:text-sm text-zinc-500">
              © 2025 Gnosix — Infraestructura IA y Automatización Inteligente
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}