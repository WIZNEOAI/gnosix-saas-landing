"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  const navItems = [
    { label: "Servicios", href: "servicios" },
    { label: "Paquetes", href: "packages" },
    { label: "Stack", href: "tech-stack" },
    { label: "Contacto", href: "contact" },
    { label: "FAQ", href: "faq" },
  ]

  // Handle scroll behavior
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          // Show/hide navbar based on scroll direction
          if (currentScrollY > 100) {
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
              setIsVisible(false)
            } else {
              setIsVisible(true)
            }
          } else {
            setIsVisible(true)
          }

          // Background opacity based on scroll
          setIsScrolled(currentScrollY > 50)

          // Update active section
          const sections = navItems.map((item) => item.href)
          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(section)
                break
              }
            }
          }

          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, navItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled
            ? "bg-gradient-to-r from-black/95 via-zinc-900/95 to-black/95 backdrop-blur-xl border-b border-zinc-800/50"
            : "bg-gradient-to-r from-transparent via-black/20 to-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/favicon-32x32.png" 
                alt="Gnosix" 
                className="h-12 lg:h-14 w-auto"
              />
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                Gnosix
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative text-sm lg:text-base font-semibold transition-all duration-300 group",
                    activeSection === item.href ? "text-yellow-400" : "text-gray-300 hover:text-white",
                  )}
                >
                  {item.label}
                  {/* Hover underline effect */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300",
                      activeSection === item.href ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                  {/* Glow effect */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-yellow-400/50 blur-sm transition-all duration-300",
                      activeSection === item.href
                        ? "w-full opacity-100"
                        : "w-0 group-hover:w-full group-hover:opacity-100",
                    )}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-800/50 hover:bg-zinc-700/70 border border-zinc-700/50 hover:border-yellow-500/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Menu Content */}
          <div className="absolute top-20 left-0 right-0 bg-gradient-to-b from-zinc-900/95 to-black/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block w-full text-left text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-xl",
                    activeSection === item.href
                      ? "text-yellow-400 bg-yellow-500/10 border border-yellow-500/30"
                      : "text-gray-300 hover:text-white hover:bg-zinc-800/50",
                    "animate-fade-in-up",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}