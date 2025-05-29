"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, User, Menu } from "lucide-react"
import { useState } from "react"
import { getMoviesByComplex, getTravelMovies } from "@/lib/movies-data"

export default function HomePage() {
  const [selectedComplex, setSelectedComplex] = useState("")

  const topMovies = [
    "#1 París: Ciudad del Amor Eterno",
    "#2 Nueva York: Sueños en Manhattan",
    "#3 Los Ángeles: Bajo las Estrellas de Hollywood",
    "#4 San Francisco: Corazones en la Bahía",
    "#5 Ibiza: Noches de Verano Infinito",
  ]

  // Filtrar películas basado en el complejo seleccionado
  const filteredMovies = getMoviesByComplex(selectedComplex)
  const travelMovies = getTravelMovies()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold">
              cinépolis
            </Link>
            <div className="flex items-center space-x-4">
              <Search className="h-6 w-6 cursor-pointer" />
              <User className="h-6 w-6 cursor-pointer" />
              <Menu className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-6xl font-bold italic mb-4">VENTA</h1>
              <h1 className="text-6xl font-bold italic mb-8">ANTICIPADA</h1>

              <div className="bg-black/20 p-6 rounded-lg mb-8">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/posters/nuestros-2-meses.jpeg"
                    alt="Nuestros 2 Meses"
                    width={80}
                    height={120}
                    className="rounded object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Nuestros 2 Meses: Una Historia de Amor</h3>
                    <p className="text-sm mb-4">
                      La película documenta cada sonrisa, cada abrazo, cada momento especial que hemos compartido desde
                      aquel primer día mágico...
                    </p>
                    <Link href="/movies/nuestros-2-meses">
                      <Button className="bg-teal-500 hover:bg-teal-600 text-white">VER DETALLE</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-bold italic">DISFRÚTALA</h2>
              <h2 className="text-4xl font-bold italic">PRÓXIMAMENTE</h2>
            </div>

            <div className="relative">
              <Image
                src="/images/posters/nuestros-2-meses.jpeg"
                alt="Nuestros 2 Meses - Poster Principal"
                width={400}
                height={300}
                className="w-full rounded-lg shadow-2xl object-cover h-180"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col">
              <label className="text-sm mb-1">Complejo</label>
              <select
                className="bg-white text-black px-4 py-2 rounded min-w-[200px]"
                value={selectedComplex}
                onChange={(e) => setSelectedComplex(e.target.value)}
              >
                <option value="">Seleccionar complejo...</option>
                <option value="punta-del-este">Punta del Este, Uruguay</option>
                <option value="cnsi-buenos-aires">CNSI Buenos Aires</option>
                <option value="proximos-viajes">🌍 Próximos Viajes</option>
                <option value="otros">Otros complejos</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Sala</label>
              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">Classic</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">GC</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">4D</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">MS</Button>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Formato</label>
              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">2D</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">3D</Button>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Idioma</label>
              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">Subtitulado</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Español</Button>
              </div>
            </div>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 mt-6">Ver todo</Button>
          </div>
        </div>
      </section>

      {/* Travel Movies Section */}
      {selectedComplex === "proximos-viajes" && (
        <section id="travel-movies" className="bg-gradient-to-b from-blue-50 to-purple-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">🌍 Nuestras Aventuras Cinematográficas</h2>
              <p className="text-xl text-gray-600">Cada viaje será una nueva película en nuestra historia de amor</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {travelMovies.map((movie) => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                  <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="w-full h-[400px] relative">
                          <Image
                            src={movie.image || "/placeholder.svg"}
                            alt={movie.title}
                            fill
                            className="object-cover rounded-t-lg"
                            unoptimized={movie.image.startsWith("http")}
                          />
                        </div>
                        <Badge
                          className={`absolute top-3 left-3 ${movie.badgeColor} text-white font-bold px-3 py-1 text-sm`}
                        >
                          {movie.badge}
                        </Badge>
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          {movie.releaseDate}
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
                        <p className="text-sm opacity-90">{movie.country}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Movies Grid */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {filteredMovies.map((movie) => (
              <div key={movie.id}>
                {movie.isProposal ? (
                  <a href="/proposal" className="block">
                    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="w-full h-[300px] relative">
                            <Image
                              src={movie.image || "/placeholder.svg"}
                              alt={movie.title}
                              fill
                              className="object-cover rounded-t-lg"
                              unoptimized={movie.image.startsWith("http")}
                            />
                          </div>
                          {movie.badge && (
                            <Badge
                              className={`absolute top-2 left-2 ${movie.badgeColor} text-white font-bold px-2 py-1`}
                            >
                              {movie.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="p-3 bg-blue-600 text-white text-center">
                          <h3 className="font-bold text-sm">{movie.title}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Link href={`/movies/${movie.id}`}>
                    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="w-full h-[300px] relative">
                            <Image
                              src={movie.image || "/placeholder.svg"}
                              alt={movie.title}
                              fill
                              className="object-cover rounded-t-lg"
                              unoptimized={movie.image.startsWith("http")}
                            />
                          </div>
                          {movie.badge && (
                            <Badge
                              className={`absolute top-2 left-2 ${movie.badgeColor} text-white font-bold px-2 py-1`}
                            >
                              {movie.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="p-3 bg-blue-600 text-white text-center">
                          <h3 className="font-bold text-sm">{movie.title}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promos and Top 5 */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Promos del Mes */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">PRÓXIMOS DESTINOS</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-r from-purple-600 to-purple-400 text-white border-none">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">¡DESCUBRE TODOS</h3>
                    <h3 className="text-4xl font-bold mb-2">NUESTROS</h3>
                    <h3 className="text-2xl font-bold mb-4">DESTINOS</h3>
                    <h3 className="text-4xl font-bold mb-6">ROMÁNTICOS!</h3>
                    <Button className="bg-black text-white hover:bg-gray-800">VER ITINERARIO</Button>
                    <div className="mt-4 text-sm">cinépolis ✈️</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-teal-500 to-blue-400 text-white border-none">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">TRAVEL</h3>
                        <h3 className="text-xl font-bold">LOVE</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">LA FORMA</div>
                        <div className="text-sm font-bold">MÁS ROMÁNTICA</div>
                        <div className="text-sm">DE VIAJAR</div>
                      </div>
                    </div>
                    <h4 className="text-lg mb-2">Cada destino tiene</h4>
                    <h4 className="text-lg mb-4">
                      las <span className="bg-yellow-400 text-black px-2 py-1 rounded">mejores aventuras</span>
                    </h4>
                    <h4 className="text-lg mb-4">para nuestra historia.</h4>
                    <p className="text-sm mb-4">9 destinos, 9 películas, infinitos recuerdos juntos.</p>
                    <div className="text-sm">LOVE.TRAVEL.REPEAT</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Top 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">#TOP5 DESTINOS</h2>
              <div className="space-y-3">
                {topMovies.map((movie, index) => (
                  <div key={index} className="text-gray-700 font-medium">
                    {movie}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4">Cinépolis</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Recursos Humanos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Aviso de privacidad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Información</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white">
                    Festejá tu cumple
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Promos Vigentes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Calificaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Ventas corporativas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contactanos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Botón de arrepentimiento
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">CineMail</h3>
              <Button className="bg-orange-500 hover:bg-orange-600 w-full mb-4">Sumate al CineMail</Button>
            </div>

            <div>
              <h3 className="font-bold mb-4">Historial de Compras</h3>
              <Button className="bg-orange-500 hover:bg-orange-600 w-full mb-4">Mis Compras</Button>
            </div>

            <div>
              <h3 className="font-bold mb-4">Complejos y Precios</h3>
              <Button className="bg-orange-500 hover:bg-orange-600 w-full mb-4">Consulta acá</Button>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=government seal logo"
                  alt="Libro de quejas"
                  width={40}
                  height={40}
                />
                <div className="text-xs text-gray-400">
                  <div>Libro de quejas online</div>
                  <div>Formulario Menores/Res. 2890</div>
                  <div>Dirección General de Defensa y Protección al Consumidor.</div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">f</div>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">▶</div>
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">📷</div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">X</div>
              </div>
            </div>

            <div className="text-center mt-4 text-xs text-gray-400">Tokio Agency ✈️</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
