"use client"
import type React from "react"
import { useEffect, useState, useRef, useCallback } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Users,
  Award,
  CheckCircle,
  AlertTriangle,
  Home,
  Building2,
  Utensils,
  GraduationCap,
  X,
  Menu,
} from "lucide-react"

import Image from "next/image"
import header_image from "../public/header.webp"
 import logo from "../public/logotipo.png"
  import segunda from "../public/segunda.webp"
import ContactoPage from "@/components/contacto/Contacto"

// Agregar este hook personalizado después de la declaración del componente
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const callbackFunction = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    })

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [callbackFunction])

  return [ref, isVisible] as const
}

const animationStyles = `
  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }
  
  .fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .fade-in-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.6s ease-out;
  }
  
  .fade-in-left.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .fade-in-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s ease-out;
  }
  
  .fade-in-right.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .scale-in {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.6s ease-out;
  }
  
  .scale-in.visible {
    opacity: 1;
    transform: scale(1);
  }
  
  .stagger-delay-1 { transition-delay: 0.1s; }
  .stagger-delay-2 { transition-delay: 0.2s; }
  .stagger-delay-3 { transition-delay: 0.3s; }
  .stagger-delay-4 { transition-delay: 0.4s; }
`

const AnimatedSection = ({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  animation?: string
  delay?: number
  className?: string
}) => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function LonkoLanding() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {" "}
            {/* Aumenta la altura */}
            {/* Logotipo grande, a la izquierda */}
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Lonko Logo"
                width={220}
                height={220}
                className="mt-2 mb-2" // margen arriba y abajo para que no quede pegado
              />
            </div>
            {/* Botón de menú móvil a la derecha */}
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-white hover:text-emerald-300 hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {isMobileMenuOpen && (
            <div className="border-t border-white/20 bg-black/90 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Botones de navegación */}
                {[
                  { id: "servicios", label: "🛡️ Servicios" },
            
                  { id: "contacto", label: "📞 Contacto" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-3 text-white hover:text-emerald-300 hover:bg-white/10 rounded-md font-medium text-lg"
                  >
                    {item.label}
                  </button>
                ))}

         
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <AnimatedSection animation="fade-in-up">
        <section className="relative text-white overflow-hidden h-auto min-h-[100vh]">
          {/* Imagen de fondo con Next.js Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={header_image}
              alt="Fondo de control de plagas"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Contenido principal centrado */}
          <div className="relative z-10 container mx-auto px-4 min-h-[100vh] flex flex-col justify-center items-center">
            <div className="max-w-5xl text-center">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold">
                  ⚡ SERVICIO PROFESIONAL VETERINARIO CERTIFICADO
                </Badge>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay={200}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Protección Total Contra Plagas para
                  <span className="text-orange-400 block">Empresas y Hogares</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay={300}>
                <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-4xl mx-auto leading-relaxed">
                  Desde supermercados hasta hogares familiares.{" "}
                  <strong className="text-white">Eliminamos el riesgo</strong> de plagas urbanas, industriales y
                  vectoriales con tecnología profesional.
                  <span className="block mt-2 text-emerald-200">Protege tu negocio, empleados y familia.</span>
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    LLAMAR AHORA: 2942-409108
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Problem Section */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fade-in-up" className="text-center mb-12">
                <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Las Plagas Destruyen Negocios y Ponen en Riesgo Vidas
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Una sola infestación puede cerrar tu empresa, contaminar productos y generar demandas millonarias
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <AnimatedSection animation="scale-in" delay={100}>
                  <Card className="border-red-200 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-red-500 font-bold text-3xl mb-3">💰</div>
                      <h3 className="font-semibold text-gray-900 mb-2">Pérdidas Económicas</h3>
                      <p className="text-gray-600 text-sm">
                        Productos contaminados, multas y cierre temporal
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={200}>
                  <Card className="border-red-200 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-red-500 font-bold text-3xl mb-3">⚖️</div>
                      <h3 className="font-semibold text-gray-900 mb-2">Problemas Legales</h3>
                      <p className="text-gray-600 text-sm">Demandas por intoxicación y responsabilidad civil</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={300}>
                  <Card className="border-red-200 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-red-500 font-bold text-3xl mb-3">🏢</div>
                      <h3 className="font-semibold text-gray-900 mb-2">Reputación Dañada</h3>
                      <p className="text-gray-600 text-sm">Clientes perdidos y imagen empresarial destruida</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={400}>
                  <Card className="border-red-200 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-red-500 font-bold text-3xl mb-3">🦠</div>
                      <h3 className="font-semibold text-gray-900 mb-2">Riesgo Sanitario</h3>
                      <p className="text-gray-600 text-sm">Enfermedades transmitidas a empleados y clientes</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-up" delay={500}>
                <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="h-8 w-8 text-red-500 mr-4" />
                    <div>
                      <h3 className="font-bold text-red-800 text-lg mb-2">CASOS REALES EN ARGENTINA:</h3>
                      <ul className="text-red-700 space-y-1">
                        <li>• Supermercado cerrado 30 días por roedores: pérdida de $2.5 millones</li>
                        <li>• Restaurant multado por $500.000 por presencia de cucarachas</li>
                        <li>• Hospital sancionado por vectores de enfermedades</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  LONKO: Tu Escudo Protector Contra las Plagas
                </h2>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay={200}>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Con más de <strong>35 años de experiencia</strong> y un{" "}
                  <strong>Médico Veterinario Especialista</strong>, garantizamos la eliminación total de plagas mientras
                  protegemos tu salud y el medio ambiente.
                </p>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection animation="scale-in" delay={100}>
                  <Card className="border-emerald-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Profesional Veterinario</h3>
                      <p className="text-gray-600 text-sm">Mat. Prof. Pcial. N° 40</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={200}>
                  <Card className="border-emerald-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">100% Seguro</h3>
                      <p className="text-gray-600 text-sm">Productos eco-amigables</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={300}>
                  <Card className="border-emerald-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Clientes Satisfechos</h3>
                      <p className="text-gray-600 text-sm">Supermercados, hospitales, hoteles</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection animation="scale-in" delay={400}>
                  <Card className="border-emerald-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Resultados Garantizados</h3>
                      <p className="text-gray-600 text-sm">Eliminación total comprobada</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}

      <AnimatedSection animation="fade-in-up">
        <section className="relative py-16 " id="servicios">
          {/* Imagen de fondo */}

          <Image
            src={segunda}
            alt="Fondo Servicios"
            fill
            className="object-cover"
            priority
          />
          {/* Contenido */}
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto  rounded-lg p-8 relative z-10">
              <AnimatedSection animation="fade-in-up" delay={100} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Servicios que Devuelven la Tranquilidad a tu Hogar
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Protección integral para que puedas disfrutar de tu espacio sin preocupaciones
                </p>
              </AnimatedSection>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <AnimatedSection animation="scale-in" delay={100}>
                  <Card className="border-gray-200 hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <Shield className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Control Integral de Plagas</h3>
                      <p className="text-gray-600 mb-6">
                        Eliminamos roedores, insectos, arácnidos, aves y reptiles que amenazan tu tranquilidad y salud.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Plagas urbanas e industriales
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Control de vectores de enfermedades
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Tratamiento especializado por tipo
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={200}>
                  <Card className="border-gray-200 hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <div className="text-emerald-600 text-2xl">💧</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Limpieza de Tanques de Agua</h3>
                      <p className="text-gray-600 mb-6">
                        Garantizamos agua pura y segura para tu familia con nuestra limpieza y desinfección profesional.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Agua 100% segura para consumo
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Eliminación de bacterias y virus
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Certificación sanitaria
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={300}>
                  <Card className="border-gray-200 hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <div className="text-emerald-600 text-2xl">🧼</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Desinfección de Ambientes</h3>
                      <p className="text-gray-600 mb-6">
                        Crea espacios completamente seguros y libres de gérmenes para proteger a quienes más amas.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Eliminación de virus y bacterias
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Productos seguros para niños
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Ambientes 100% sanitizados
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries We Serve */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fade-in-up" delay={100} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Sectores que Protegemos Diariamente
                </h2>
                <p className="text-xl text-gray-600">
                  Desde industrias alimentarias hasta organismos públicos, garantizamos ambientes libres de plagas
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <AnimatedSection animation="scale-in" delay={100}>
                  <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-3 rounded-full mr-4">
                          <Building2 className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Industria Alimentaria</h3>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Frigoríficos y mataderos</li>
                        <li>• Plantas procesadoras</li>
                        <li>• Distribuidoras de alimentos</li>
                        <li>• Control de gorgojos</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={200}>
                  <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-3 rounded-full mr-4">
                          <Utensils className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Comercio y Retail</h3>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Supermercados y hipermercados</li>
                        <li>• Restaurantes y bares</li>
                        <li>• Hoteles y hosterías</li>
                        <li>• Bancos y oficinas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={300}>
                  <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-3 rounded-full mr-4">
                          <GraduationCap className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Sector Público</h3>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Hospitales y centros de salud</li>
                        <li>• Escuelas urbanas y rurales</li>
                        <li>• Organismos gubernamentales</li>
                        <li>• Juzgados y oficinas públicas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={400}>
                  <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-3 rounded-full mr-4">
                          <Home className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Residencial</h3>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Casas familiares</li>
                        <li>• Departamentos y condominios</li>
                        <li>• Quintas y estancias</li>
                        <li>• Tanques de agua domiciliarios</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={500}>
                  <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-3 rounded-full mr-4">
                          <div className="text-emerald-600 text-2xl font-bold">🏭</div>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Servicios Públicos</h3>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• EPEN (Energía)</li>
                        <li>• Plantas de tratamiento</li>
                        <li>• Basureros municipales</li>
                        <li>• Infraestructura crítica</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={600}>
                  <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-emerald-100 p-3 rounded-full mr-4">
                          <div className="text-emerald-600 text-2xl font-bold">🚛</div>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Logística</h3>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Distribuidoras</li>
                        <li>• Depósitos y almacenes</li>
                        <li>• Centros de distribución</li>
                        <li>• Transporte de alimentos</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-up" delay={700}>
                <div className="bg-emerald-100 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">¿Tu Sector No Está Listado?</h3>
                  <p className="text-emerald-700 mb-6">
                    Tenemos experiencia en todos los sectores. Cada negocio es único y merece una solución
                    personalizada.
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Consultar Mi Caso Específico
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Pest Types Section */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fade-in-up" delay={100} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Eliminamos Todas las Plagas que Amenazan tu Negocio
                </h2>
                <p className="text-xl text-gray-600">
                  Especialistas veterinarios en control integral de plagas urbanas, industriales y vectoriales
                </p>
              </AnimatedSection>

              <div className="grid lg:grid-cols-3 gap-8">
                <AnimatedSection animation="scale-in" delay={100}>
                  <Card className="border-orange-200 hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <div className="text-orange-600 text-3xl">🏙️</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Plagas Urbanas</h3>
                      <p className="text-gray-600 mb-4">
                        Las más comunes en hogares y oficinas que afectan la calidad de vida
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          Roedores (ratas y ratones)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          Insectos y Arácnidos (cucarachas, arañas)
                        </li>
                
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          Aves (palomas, gorriones)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          Reptiles y avispas
                        </li>
                            <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                          Murciélagos
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={200}>
                  <Card className="border-red-200 hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <div className="text-red-600 text-3xl">🏭</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Plagas Industriales</h3>
                      <p className="text-gray-600 mb-4">
                        Especializadas en industria alimentaria que contaminan productos
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                          Gorgojos de granos
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                          Roedores
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                          Polillas de harinas
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                          Escarabajos de productos
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                          Plagas de almacén
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={300}>
                  <Card className="border-purple-200 hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <div className="text-purple-600 text-3xl">🦟</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Plagas Vectoriales</h3>
                      <p className="text-gray-600 mb-4">
                        Transmisores de enfermedades graves que requieren control especializado
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                          Mosquitos (dengue, zika)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                          Vinchucas (Chagas)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                          Moscas patógenas
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                          Roedores vectores
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                          Garrapatas y pulgas
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Protocolo Veterinario Especializado</h3>
                  <p className="text-gray-700 max-w-3xl mx-auto">
                    Como <strong>Médico Veterinario certificado</strong>, aplicamos protocolos científicos específicos
                    para cada tipo de plaga, garantizando eliminación efectiva mientras protegemos la salud humana y el
                    medio ambiente.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Social Proof */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fade-in-up" delay={100} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Empresas Líderes Confían en Nosotros
                </h2>
                <p className="text-xl text-gray-600">
                  Más de 50 empresas e instituciones protegen a sus familias y clientes con LONKO
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatedSection animation="scale-in" delay={100}>
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-emerald-600 mb-3">🏪 SUPERMERCADOS</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Cooperativa Obrera</li>
                        <li>• Landete</li>
                        <li>• Atalaya</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={200}>
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-emerald-600 mb-3">🥩 FRIGORÍFICOS</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• El Alamito</li>
                        <li>• Matadero Municipal</li>
                        <li>• CORDECC SAPEM</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={300}>
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-emerald-600 mb-3">🏥 ORGANISMOS</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Hospital Zonal</li>
                        <li>• EPEN Chos Malal</li>
                        <li>• Juzgado V Circunscripción</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">No Esperes Más. Protege a Tu Familia HOY</h2>
                <p className="text-xl md:text-2xl mb-8 text-emerald-100">
                  Cada minuto que pasa, las plagas se multiplican y el riesgo aumenta.
                  <strong className="text-white block mt-2">¡Actúa AHORA y recupera tu tranquilidad!</strong>
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-300">🎯 OFERTA ESPECIAL</h3>
                  <p className="text-lg mb-4">
                    <strong>EVALUACIÓN GRATUITA</strong> + <strong>20% DE DESCUENTO</strong> en tu primer servicio
                  </p>
                  <p className="text-emerald-200">Solo para los primeros 10 clientes que llamen esta semana</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-xl font-bold shadow-lg transform hover:scale-105 transition-all"
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    LLAMAR: 2942-409108
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-white hover:text-emerald-800 hover-border-emerald-800 px-8 py-4 text-xl font-bold"
                  >
                    <Mail className="mr-2 h-6 w-6" />
                    Enviar WhatsApp
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={400}>
                <p className="mt-6 text-emerald-200">
                  ⏰ Atención inmediata • 📞 Respuesta en menos de 2 horas • ✅ Sin compromiso
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection animation="fade-in-up">
        <section className="py-16 bg-gray-900 text-white" id="contacto">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in-up" delay={100} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Contacto Directo</h2>
                <p className="text-gray-300">Estamos listos para proteger tu hogar y familia</p>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <AnimatedSection animation="scale-in" delay={100}>
                  <div className="flex flex-col items-center">
                    <Phone className="h-12 w-12 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">Teléfono</h3>
                    <p className="text-gray-300">2942-409108</p>
                    <p className="text-sm text-gray-400">Disponible 24/7</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={200}>
                  <div className="flex flex-col items-center">
                    <Mail className="h-12 w-12 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">lonko.mip@gmail.com</p>
                    <p className="text-sm text-gray-400">Respuesta rápida</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={300}>
                  <div className="flex flex-col items-center">
                    <MapPin className="h-12 w-12 text-orange-400 mb-4" />
                    <h3 className="font-semibold mb-2">Dirección</h3>
                    <p className="text-gray-300">Estrecho de Magallanes 311</p>
                    <p className="text-gray-300">Chos Malal, Neuquén</p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="mt-12 text-center">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="font-bold text-orange-400 mb-2">Marcelo Luis Infante</h3>
                    <p className="text-gray-300">Médico Veterinario</p>
                    <p className="text-sm text-gray-400">Mat. Prof. Pcial. N° 40</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>


<ContactoPage></ContactoPage>




        
      </AnimatedSection>

 
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <Image
             src={logo}
              alt="Lonko Logo"
              width={250}
              height={250}
              className="p-2 mx-auto mb-4"
            />
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 LONKO. Todos los derechos reservados. | Protegiendo familias desde 2008
          </p>
        </div>
      </footer>
    </div>
  )
}
