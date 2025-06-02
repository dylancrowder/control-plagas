"use client"

import { useState } from "react"
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
  Menu,
  X,
} from "lucide-react"

export default function LonkoLanding() {
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
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-600 text-white p-2 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">LONKO</h1>
                <p className="text-xs text-emerald-200 -mt-1">Control de Plagas</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="hidden sm:flex items-center">
              <a href="tel:2942409108" className="text-white hover:text-emerald-300 font-semibold flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                2942-409108
              </a>
            </div>

            {/* Menu Button - Always visible */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-white hover:text-emerald-300 hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-white/20 bg-black/90 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="block w-full text-left px-3 py-3 text-white hover:text-emerald-300 hover:bg-white/10 rounded-md font-medium text-lg"
                >
                  🛡️ Servicios
                </button>
                <button
                  onClick={() => scrollToSection("sectores")}
                  className="block w-full text-left px-3 py-3 text-white hover:text-emerald-300 hover:bg-white/10 rounded-md font-medium text-lg"
                >
                  🏢 Sectores
                </button>
                <button
                  onClick={() => scrollToSection("plagas")}
                  className="block w-full text-left px-3 py-3 text-white hover:text-emerald-300 hover:bg-white/10 rounded-md font-medium text-lg"
                >
                  🦟 Tipos de Plagas
                </button>
                <button
                  onClick={() => scrollToSection("clientes")}
                  className="block w-full text-left px-3 py-3 text-white hover:text-emerald-300 hover:bg-white/10 rounded-md font-medium text-lg"
                >
                  ⭐ Clientes
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block w-full text-left px-3 py-3 text-white hover:text-emerald-300 hover:bg-white/10 rounded-md font-medium text-lg"
                >
                  📞 Contacto
                </button>
                <div className="border-t border-white/20 pt-3 mt-3">
                  <a
                    href="tel:2942409108"
                    className="block px-3 py-2 text-emerald-300 font-semibold flex items-center text-lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar: 2942-409108
                  </a>
                  <div className="px-3 py-2">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3">
                      Consulta Gratis
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold">
              ⚡ SERVICIO PROFESIONAL VETERINARIO CERTIFICADO
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Protección Total Contra Plagas para
              <span className="text-orange-400 block">Empresas y Hogares</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Desde supermercados hasta hogares familiares. <strong className="text-white">Eliminamos el riesgo</strong>{" "}
              de plagas urbanas, industriales y vectoriales con tecnología profesional veterinaria.
              <span className="block mt-2 text-emerald-200">Protege tu negocio, empleados y familia.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                LLAMAR AHORA: 2942-409108
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg font-semibold"
              >
                Solicitar Evaluación Empresarial
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-2" />
                Veterinario Certificado
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-2" />
                Habilitación Municipal
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-2" />
                Productos Eco-Amigables
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-orange-400 mr-2" />
                Servicio 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Las Plagas Destruyen Negocios y Ponen en Riesgo Vidas
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Una sola infestación puede cerrar tu empresa, contaminar productos y generar demandas millonarias
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 font-bold text-3xl mb-3">💰</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pérdidas Económicas</h3>
                  <p className="text-gray-600 text-sm">Productos contaminados, multas sanitarias y cierre temporal</p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 font-bold text-3xl mb-3">⚖️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Problemas Legales</h3>
                  <p className="text-gray-600 text-sm">Demandas por intoxicación y responsabilidad civil</p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 font-bold text-3xl mb-3">🏢</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Reputación Dañada</h3>
                  <p className="text-gray-600 text-sm">Clientes perdidos y imagen empresarial destruida</p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 font-bold text-3xl mb-3">🦠</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Riesgo Sanitario</h3>
                  <p className="text-gray-600 text-sm">Enfermedades transmitidas a empleados y clientes</p>
                </CardContent>
              </Card>
            </div>

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
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              LONKO: Tu Escudo Protector Contra las Plagas
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Con más de <strong>15 años de experiencia</strong> y un <strong>Médico Veterinario certificado</strong>,
              garantizamos la eliminación total de plagas mientras protegemos tu salud y el medio ambiente.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-emerald-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Profesional Veterinario</h3>
                  <p className="text-gray-600 text-sm">Mat. Prof. Pcial. N° 40</p>
                </CardContent>
              </Card>
              <Card className="border-emerald-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">100% Seguro</h3>
                  <p className="text-gray-600 text-sm">Productos eco-amigables</p>
                </CardContent>
              </Card>
              <Card className="border-emerald-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Clientes Satisfechos</h3>
                  <p className="text-gray-600 text-sm">Supermercados, hospitales, hoteles</p>
                </CardContent>
              </Card>
              <Card className="border-emerald-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Resultados Garantizados</h3>
                  <p className="text-gray-600 text-sm">Eliminación total comprobada</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicios que Devuelven la Tranquilidad a tu Hogar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protección integral para que puedas disfrutar de tu espacio sin preocupaciones
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="sectores" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sectores que Protegemos Diariamente</h2>
              <p className="text-xl text-gray-600">
                Desde industrias alimentarias hasta organismos públicos, garantizamos ambientes libres de plagas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                    <li>• Control de gorgojos industriales</li>
                  </ul>
                </CardContent>
              </Card>

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
            </div>

            <div className="bg-emerald-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">¿Tu Sector No Está Listado?</h3>
              <p className="text-emerald-700 mb-6">
                Tenemos experiencia en todos los sectores. Cada negocio es único y merece una solución personalizada.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Consultar Mi Caso Específico</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pest Types Section */}
      <section id="plagas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Eliminamos Todas las Plagas que Amenazan tu Negocio
              </h2>
              <p className="text-xl text-gray-600">
                Especialistas veterinarios en control integral de plagas urbanas, industriales y vectoriales
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
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
                      Insectos (cucarachas, hormigas)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      Arácnidos (arañas, escorpiones)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      Aves (palomas, gorriones)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                      Reptiles y avispas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <div className="text-red-600 text-3xl">🏭</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Plagas Industriales</h3>
                  <p className="text-gray-600 mb-4">Especializadas en industria alimentaria que contaminan productos</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                      Gorgojos de granos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                      Roedores industriales
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
            </div>

            <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Protocolo Veterinario Especializado</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Clientes Satisfechos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Confíen en LONKO para proteger su negocio y hogar de plagas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <div className="text-emerald-600 text-2xl">🌟</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Supermercados</h3>
                  <p className="text-gray-600 mb-4">Protección integral para productos y empleados</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Control de roedores
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Desinfección de alimentos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Certificación sanitaria
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <div className="text-emerald-600 text-2xl">🏥</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hospitales</h3>
                  <p className="text-gray-600 mb-4">Ambientes libres de plagas para la salud de pacientes y personal</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Control de vectores de enfermedades
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Desinfección de áreas comunes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Certificación sanitaria
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <div className="text-emerald-600 text-2xl">🏨</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hoteles</h3>
                  <p className="text-gray-600 mb-4">Espacios seguros para huéspedes y personal</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Control de roedores
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Desinfección de áreas comunes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Certificación sanitaria
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos aquí para ayudarte a proteger tu negocio y hogar de plagas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-emerald-600 mr-4" />
                  <p className="text-gray-600">2942-409108</p>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-emerald-600 mr-4" />
                  <p className="text-gray-600">contacto@lonko.com</p>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600 mr-4" />
                  <p className="text-gray-600">Av. Libertad 1234, Ciudad</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulario de Contacto</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Servicio *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="control-plagas">Control Integral de Plagas</option>
                      <option value="limpieza-tanques">Limpieza de Tanques de Agua</option>
                      <option value="desinfeccion">Desinfección de Ambientes</option>
                      <option value="evaluacion">Evaluación Gratuita</option>
                      <option value="emergencia">Servicio de Emergencia</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
                      Sector/Tipo de Propiedad
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Selecciona tu sector</option>
                      <option value="hogar">Hogar/Residencial</option>
                      <option value="supermercado">Supermercado</option>
                      <option value="restaurante">Restaurante/Bar</option>
                      <option value="hotel">Hotel/Hostería</option>
                      <option value="hospital">Hospital/Centro de Salud</option>
                      <option value="escuela">Escuela/Institución Educativa</option>
                      <option value="frigorifico">Frigorífico/Industria Alimentaria</option>
                      <option value="oficina">Oficina/Banco</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Describe tu problema o consulta *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Cuéntanos qué tipo de plagas has visto, en qué área, desde cuándo, etc. Mientras más detalles, mejor podremos ayudarte."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="urgente"
                      name="urgente"
                      className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="urgente" className="ml-2 text-sm text-gray-700">
                      <strong className="text-red-600">¿Es una emergencia?</strong> (Respuesta en menos de 2 horas)
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acepto"
                      name="acepto"
                      required
                      className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="acepto" className="ml-2 text-sm text-gray-700">
                      Acepto que LONKO me contacte para brindarme información sobre sus servicios *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Consulta Gratuita
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">¿Necesitas respuesta inmediata?</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="tel:2942409108"
                        className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Llamar Ahora
                      </a>
                      <a
                        href="https://wa.me/5492942409108?text=Hola%20LONKO,%20necesito%20ayuda%20urgente%20con%20un%20problema%20de%20plagas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                      >
                        <div className="mr-2 text-lg">💬</div>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5492942409108?text=Hola%20LONKO,%20necesito%20información%20sobre%20sus%20servicios%20de%20control%20de%20plagas"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
          aria-label="Contactar por WhatsApp"
        >
          <div className="text-2xl">💬</div>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-emerald-600 text-white p-3 rounded-lg">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-emerald-400">LONKO</h3>
                  <p className="text-gray-400">Control Integral de Plagas</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Más de 15 años protegiendo hogares y empresas en Neuquén. Somos especialistas veterinarios en control de
                plagas urbanas, industriales y vectoriales con productos eco-amigables.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">Médico Veterinario Certificado - Mat. Prof. Pcial. N° 40</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">Habilitación Municipal y Ministerio de Salud</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">Productos Eco-Amigables Certificados</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Nuestros Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Control Integral de Plagas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Limpieza de Tanques de Agua
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Desinfección de Ambientes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("plagas")}
                    className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Control de Plagas Vectoriales
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sectores")}
                    className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Servicios Empresariales
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-emerald-400 mr-3 mt-1" />
                  <div>
                    <p className="text-white font-semibold">2942-409108</p>
                    <p className="text-gray-400 text-sm">Disponible 24/7</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-emerald-400 mr-3 mt-1" />
                  <div>
                    <p className="text-white">lonko.mip@gmail.com</p>
                    <p className="text-gray-400 text-sm">Respuesta rápida</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-emerald-400 mr-3 mt-1" />
                  <div>
                    <p className="text-white">Lamadrid 978</p>
                    <p className="text-white">Chos Malal, Neuquén</p>
                    <p className="text-gray-400 text-sm">Argentina</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                <h5 className="text-red-400 font-semibold mb-2">🚨 Emergencias</h5>
                <p className="text-gray-300 text-sm mb-2">¿Problema urgente de plagas?</p>
                <a
                  href="tel:2942409108"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>

          {/* Sectors We Serve */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Sectores que Atendemos</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="text-gray-300">
                <Building2 className="h-6 w-6 mx-auto mb-2 text-emerald-400" />
                <p className="text-sm">Supermercados</p>
              </div>
              <div className="text-gray-300">
                <Utensils className="h-6 w-6 mx-auto mb-2 text-emerald-400" />
                <p className="text-sm">Restaurantes</p>
              </div>
              <div className="text-gray-300">
                <div className="h-6 w-6 mx-auto mb-2 text-emerald-400 text-xl">🏥</div>
                <p className="text-sm">Hospitales</p>
              </div>
              <div className="text-gray-300">
                <GraduationCap className="h-6 w-6 mx-auto mb-2 text-emerald-400" />
                <p className="text-sm">Escuelas</p>
              </div>
              <div className="text-gray-300">
                <Home className="h-6 w-6 mx-auto mb-2 text-emerald-400" />
                <p className="text-sm">Hogares</p>
              </div>
              <div className="text-gray-300">
                <div className="h-6 w-6 mx-auto mb-2 text-emerald-400 text-xl">🏭</div>
                <p className="text-sm">Industrias</p>
              </div>
            </div>
          </div>

          {/* Professional Info */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-emerald-400 mb-2">Marcelo Luis Infante</h4>
              <p className="text-white font-semibold mb-1">Médico Veterinario</p>
              <p className="text-gray-400 mb-4">Matrícula Profesional Provincial N° 40</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-emerald-900 text-emerald-300 px-3 py-1 rounded-full">+15 años de experiencia</span>
                <span className="bg-emerald-900 text-emerald-300 px-3 py-1 rounded-full">
                  Especialista en Control de Plagas
                </span>
                <span className="bg-emerald-900 text-emerald-300 px-3 py-1 rounded-full">Productos Eco-Amigables</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 LONKO - Control Integral de Plagas. Todos los derechos reservados.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Protegiendo familias y empresas desde 2008 | Chos Malal, Neuquén, Argentina
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="tel:2942409108"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Phone className="h-4 w-4 inline mr-1" />
                  Llamar
                </a>
                <a
                  href="https://wa.me/5492942409108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
