"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Clock, Heart, ArrowLeft, Share2, Search, User, Menu, MapPin, Users } from "lucide-react"
import { getMovieById } from "@/lib/movies-data"

interface MoviePageProps {
    id: string
}

export default function MoviePage({ id }: MoviePageProps) {
  const [selectedShowtime, setSelectedShowtime] = useState("")
  const [selectedSeats, setSelectedSeats] = useState(2)
  const [showReservation, setShowReservation] = useState(false)
  const [reservationComplete, setReservationComplete] = useState(false)

  const movie = getMovieById(id)

  if (!movie) {
    return <div>Película no encontrada</div>
  }

  const isSpecialMovie = id === "nuestros-2-meses"

  const handleReservation = () => {
    if (!selectedShowtime) {
      alert("Por favor selecciona un horario")
      return
    }
    setShowReservation(true)
  }

  const confirmReservation = () => {
    setReservationComplete(true)
    setShowReservation(false)
  }

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

      {/* Back Button */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:bg-gray-200">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Cartelera
            </Button>
          </Link>
        </div>
      </div>

      {/* Reservation Success Modal */}
      {reservationComplete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="bg-white p-8 max-w-md mx-4">
            <CardContent className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">¡Reserva Confirmada!</h2>
              <p className="text-gray-600 mb-4">
                Tu reserva está confirmada para el{" "}
                {movie.showtimes?.find((s) => s.id === selectedShowtime)?.date} a las{" "}
                {movie.showtimes?.find((s) => s.id === selectedShowtime)?.time}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Te esperamos en {movie.showtimes?.find((s) => s.id === selectedShowtime)?.theater}
              </p>
              <Button onClick={() => setReservationComplete(false)} className="bg-purple-600 hover:bg-purple-700">
                ¡Perfecto!
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Reservation Modal */}
      {showReservation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="bg-white p-8 max-w-md mx-4">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Confirmar Reserva</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Película:</label>
                  <p className="text-gray-600">{movie.title}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Horario:</label>
                  <p className="text-gray-600">
                    {movie.showtimes?.find((s) => s.id === selectedShowtime)?.date} -{" "}
                    {movie.showtimes?.find((s) => s.id === selectedShowtime)?.time}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sala:</label>
                  <p className="text-gray-600">{movie.showtimes?.find((s) => s.id === selectedShowtime)?.theater}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Cantidad de entradas:</label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSeats(Math.max(1, selectedSeats - 1))}
                    >
                      -
                    </Button>
                    <span className="px-4 py-2 border rounded">{selectedSeats}</span>
                    <Button variant="outline" size="sm" onClick={() => setSelectedSeats(selectedSeats + 1)}>
                      +
                    </Button>
                  </div>
                </div>
                {isSpecialMovie && (
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <p className="text-pink-800 text-sm">
                      Incluye: Cena
                    </p>
                  </div>
                )}
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" onClick={() => setShowReservation(false)} className="flex-1">
                  Cancelar
                </Button>
                <Button onClick={confirmReservation} className="bg-purple-600 hover:bg-purple-700 flex-1">
                  Confirmar Reserva
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Movie Hero Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Movie Poster */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="w-full h-[600px] relative">
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="rounded-lg shadow-2xl object-cover"
                    unoptimized={movie.image.startsWith("http")}
                  />
                </div>
                {isSpecialMovie && (
                  <Badge className="absolute top-4 left-4 bg-pink-500 text-white animate-pulse text-lg px-4 py-2">
                    💕 ESPECIAL 💕
                  </Badge>
                )}
              </div>
            </div>

            {/* Movie Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">{movie.title}</h1>
                  {movie.originalTitle && <p className="text-xl text-gray-600 mb-4">{movie.originalTitle}</p>}

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    {movie.rating && <Badge className="bg-blue-600 text-white px-3 py-1">{movie.rating}</Badge>}
                    {movie.duration && (
                      <span className="flex items-center text-gray-600">
                        <Clock className="mr-2 h-4 w-4" />
                        {movie.duration}
                      </span>
                    )}
                    {movie.genre && <span className="text-gray-600">{movie.genre}</span>}
                  </div>

                  {isSpecialMovie && movie.specialMessage && (
                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg border border-pink-200 mb-6">
                      <h3 className="text-xl font-bold text-pink-600 mb-3">💕 Mensaje Especial 💕</h3>
                      <p className="text-pink-800 leading-relaxed">{movie.specialMessage}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {movie.trailer && (
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                      <Play className="mr-2 h-5 w-5" />
                      Ver Trailer
                    </Button>
                  )}
                  {movie.showtimes && movie.showtimes.length > 0 && (
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                      onClick={handleReservation}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Reservar Ahora
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-purple-600 border-purple-600 hover:bg-purple-50 px-8 py-3"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Favoritos
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-purple-600 border-purple-600 hover:bg-purple-50 px-8 py-3"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Compartir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Synopsis */}
            <div className="lg:col-span-2">
              {movie.synopsis && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Sinopsis</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-8">{movie.synopsis}</p>
                </>
              )}

              {/* Trailer */}
              {movie.trailer && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Trailer</h2>
                  <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
                    <Image src={movie.trailer || "/placeholder.svg"} alt="Trailer" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700 rounded-full p-4">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Movie Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Información</h3>
                  <div className="space-y-4">
                    {movie.director && (
                      <div>
                        <span className="text-gray-600 font-medium">Director:</span>
                        <p className="text-gray-800">{movie.director}</p>
                      </div>
                    )}
                    {movie.cast && (
                      <div>
                        <span className="text-gray-600 font-medium">Reparto:</span>
                        <p className="text-gray-800">{movie.cast.join(", ")}</p>
                      </div>
                    )}
                    {movie.releaseDate && (
                      <div>
                        <span className="text-gray-600 font-medium">Estreno:</span>
                        <p className="text-gray-800">{movie.releaseDate}</p>
                      </div>
                    )}
                    {movie.country && (
                      <div>
                        <span className="text-gray-600 font-medium">País:</span>
                        <p className="text-gray-800">{movie.country}</p>
                      </div>
                    )}
                    {movie.language && (
                      <div>
                        <span className="text-gray-600 font-medium">Idioma:</span>
                        <p className="text-gray-800">{movie.language}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Showtimes */}
              {movie.showtimes && movie.showtimes.length > 0 && (
                <Card className="bg-white border border-gray-200 shadow-lg mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Horarios Disponibles</h3>
                    <div className="space-y-3">
                      {movie.showtimes.map((showtime) => (
                        <div
                          key={showtime.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedShowtime === showtime.id
                              ? "border-purple-500 bg-purple-50"
                              : "border-blue-200 bg-blue-50 hover:border-purple-300"
                          }`}
                          onClick={() => setSelectedShowtime(showtime.id)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className="font-bold text-blue-600 text-lg">{showtime.time}</span>
                              <p className="text-sm text-gray-600">{showtime.date}</p>
                            </div>
                            <Badge variant="outline" className="text-xs border-blue-300 text-blue-600">
                              {showtime.format}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mb-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {showtime.theater}
                          </div>
                          {showtime.description && (
                            <p className="text-sm text-purple-600 font-medium">{showtime.description}</p>
                          )}
                          {isSpecialMovie && (
                            <div className="mt-2 flex items-center text-sm text-pink-600">
                              <Heart className="h-4 w-4 mr-1" />
                              Experiencia romántica completa
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {selectedShowtime && (
                      <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700" onClick={handleReservation}>
                        <Users className="mr-2 h-4 w-4" />
                        Reservar para {selectedSeats} persona{selectedSeats > 1 ? "s" : ""}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}
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

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs text-gray-400">
            <p>&copy; 2024 Cinépolis. Todos los derechos reservados. Hecho con 💕 para celebrar nuestros 2 meses.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
