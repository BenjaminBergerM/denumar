export interface Showtime {
  id: string
  time: string
  date: string
  theater: string
  format: string
  description?: string
  available: boolean
}

export interface Movie {
  id: string
  title: string
  originalTitle?: string
  image: string
  trailer?: string
  badge: string
  badgeColor: string
  genre?: string
  duration?: string
  rating?: string
  director?: string
  cast?: string[]
  synopsis?: string
  releaseDate?: string
  country?: string
  language?: string
  specialMessage?: string
  showtimes?: Showtime[]
  isProposal?: boolean
  isTravel?: boolean
}

export const moviesData: Record<string, Movie> = {
  "nuestros-2-meses": {
    id: "nuestros-2-meses",
    title: "Nuestros 2 Meses",
    originalTitle: "Our 2 Months: A Love Story",
    image: "/images/posters/nuestros-2-meses.jpeg",
    trailer: "/romantic-movie-trailer.png",
    badge: "ESPECIAL",
    badgeColor: "bg-pink-500",
    genre: "Romance | Drama | Biografía",
    duration: "120 min",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "Una hermosa historia que comenzó hace exactamente 2 meses, cuando dos corazones se encontraron y decidieron escribir juntos la más bella de las aventuras. Esta película documenta cada sonrisa, cada abrazo, cada momento especial que hemos compartido desde aquel primer día mágico.",
    releaseDate: "Hace 2 meses",
    country: "Nuestro Corazón",
    language: "Arte del Amor",
    specialMessage:
      "Celebrando nuestros primeros 2 meses juntos. Cada día con vos es como una nueva escena de la película más hermosa que he vivido. Te amo. 💕",
    showtimes: [
      {
        id: "dinner-date",
        time: "21:00",
        date: "Sábado 30 de Noviembre",
        theater: "Punta del Este",
        format: "AMOR 4D",
        description: "Cena incluida",
        available: true,
      },
    ],
  },
  proposal: {
    id: "proposal",
    title: "Proposal: El Momento Perfecto",
    originalTitle: "The Perfect Proposal",
    image: "/images/posters/nuestros-2-meses.jpeg",
    badge: "ESPECIAL",
    badgeColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    genre: "Romance | Drama",
    duration: "∞ min",
    rating: "ATP",
    director: "El Amor",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "El momento más importante de nuestras vidas está por llegar. Una propuesta que cambiará todo para siempre.",
    releaseDate: "Próximamente",
    country: "Buenos Aires, Argentina",
    language: "Lenguaje del Corazón",
    isProposal: true,
  },
  // Películas de Viajes
  "paris-amor-eterno": {
    id: "paris-amor-eterno",
    title: "París: Ciudad del Amor Eterno",
    originalTitle: "Paris: City of Eternal Love",
    image: "/paris-movie-poster.png",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-blue-500 to-purple-500",
    genre: "Romance | Aventura | Drama",
    duration: "5 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "Dos almas enamoradas descubren la magia de París, la ciudad del amor. Entre paseos por el Sena, visitas a la Torre Eiffel y cenas románticas en Montmartre, escriben el capítulo más hermoso de su historia de amor.",
    releaseDate: "17 de junio",
    country: "Francia",
    language: "Français & Amor",
    isTravel: true,
    specialMessage: "Nuestro primer viaje juntos a la ciudad más romántica del mundo 🗼💕",
  },
  "nueva-york-manhattan": {
    id: "nueva-york-manhattan",
    title: "Nueva York: Sueños en Manhattan",
    originalTitle: "New York: Dreams in Manhattan",
    image: "/new-york-movie-poster.png",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    genre: "Romance | Urbano | Aventura",
    duration: "6 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "En la ciudad que nunca duerme, dos corazones encuentran su ritmo perfecto. Desde Central Park hasta Times Square, cada rincón de Manhattan se convierte en el escenario de momentos inolvidables.",
    releaseDate: "23 de junio",
    country: "Estados Unidos",
    language: "English & Love",
    isTravel: true,
    specialMessage: "La Gran Manzana será testigo de nuestro amor 🍎🏙️",
  },
  "los-angeles-hollywood": {
    id: "los-angeles-hollywood",
    title: "Los Ángeles: Bajo las Estrellas de Hollywood",
    originalTitle: "Los Angeles: Under Hollywood Stars",
    image: "/la-hollywood-poster.png",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-pink-500 to-red-500",
    genre: "Romance | Glamour | Aventura",
    duration: "4 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "En la ciudad de los sueños, donde nacen las estrellas de cine, dos almas escriben su propia historia de amor. Entre playas doradas y el glamour de Hollywood, cada momento brilla como una estrella.",
    releaseDate: "29 de junio",
    country: "Estados Unidos",
    language: "English & Dreams",
    isTravel: true,
    specialMessage: "Viviendo nuestro propio sueño de Hollywood ⭐🌴",
  },
  "san-francisco-bahia": {
    id: "san-francisco-bahia",
    title: "San Francisco: Corazones en la Bahía",
    originalTitle: "San Francisco: Hearts in the Bay",
    image: "/san-francisco-movie-poster.png",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-teal-500 to-blue-500",
    genre: "Romance | Aventura | Urbano",
    duration: "6 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "Entre las colinas de San Francisco y la majestuosidad del Golden Gate, dos corazones navegan por la bahía del amor. Cada tranvía que toman los lleva más cerca de la eternidad.",
    releaseDate: "3 de julio",
    country: "Estados Unidos",
    language: "English & Romance",
    isTravel: true,
    specialMessage: "Cruzando puentes hacia nuestro futuro juntos 🌉❤️",
  },
  "paris-regreso-romance": {
    id: "paris-regreso-romance",
    title: "París: El Regreso al Romance",
    originalTitle: "Paris: Return to Romance",
    image:
      "/placeholder.svg?height=400&width=300&query=Paris romantic movie poster with Seine river and couple walking",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    genre: "Romance | Secuela | Drama",
    duration: "3 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "Regresamos a donde todo comenzó. París nos recibe de nuevo con sus brazos abiertos, y cada rincón que visitamos por segunda vez se siente como la primera vez, pero con el corazón más lleno de amor.",
    releaseDate: "9 de julio",
    country: "Francia",
    language: "Français & Amour",
    isTravel: true,
    specialMessage: "Volvemos a París, pero esta vez como una pareja más fuerte 🗼💕",
  },
  "ibiza-verano-infinito": {
    id: "ibiza-verano-infinito",
    title: "Ibiza: Noches de Verano Infinito",
    originalTitle: "Ibiza: Infinite Summer Nights",
    image:
      "/placeholder.svg?height=400&width=300&query=Ibiza movie poster with beach sunset and romantic silhouettes dancing",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-orange-500 to-pink-500",
    genre: "Romance | Musical | Aventura",
    duration: "8 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "En la isla blanca, donde la música nunca para y el sol besa el mar, dos almas bailan al ritmo del amor. Cada atardecer en Ibiza es una promesa de que el verano de nuestro amor será eterno.",
    releaseDate: "12 de julio",
    country: "España",
    language: "Español & Música",
    isTravel: true,
    specialMessage: "Bailando bajo las estrellas de Ibiza 🏝️🎵",
  },
  "roma-ciudad-eterna": {
    id: "roma-ciudad-eterna",
    title: "Roma: Amor Eterno en la Ciudad Eterna",
    originalTitle: "Rome: Eternal Love in the Eternal City",
    image:
      "/placeholder.svg?height=400&width=300&query=Rome movie poster with Colosseum and romantic Italian atmosphere",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-red-500 to-yellow-500",
    genre: "Romance | Histórico | Drama",
    duration: "5 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "En la ciudad eterna, donde cada piedra cuenta una historia de amor milenaria, dos corazones modernos escriben su propia leyenda. Entre el Coliseo y la Fontana di Trevi, el amor se vuelve eterno.",
    releaseDate: "20 de julio",
    country: "Italia",
    language: "Italiano & Amore",
    isTravel: true,
    specialMessage: "Cuando en Roma, ama como los romanos 🏛️❤️",
  },
  "venecia-gondolas-promesas": {
    id: "venecia-gondolas-promesas",
    title: "Venecia: Góndolas y Promesas",
    originalTitle: "Venice: Gondolas and Promises",
    image: "/placeholder.svg?height=400&width=300&query=Venice movie poster with gondolas and romantic canal scene",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-blue-500 to-teal-500",
    genre: "Romance | Aventura | Musical",
    duration: "5 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "Navegando por los canales de Venecia, cada góndola lleva consigo una promesa de amor eterno. En la ciudad flotante, nuestros corazones también aprenden a flotar en las aguas del romance.",
    releaseDate: "25 de julio",
    country: "Italia",
    language: "Italiano & Romance",
    isTravel: true,
    specialMessage: "Prometiéndonos amor eterno en los canales de Venecia 🚣‍♂️💙",
  },
  "tunez-desierto-amor": {
    id: "tunez-desierto-amor",
    title: "Túnez: Aventura en el Desierto del Amor",
    originalTitle: "Tunisia: Adventure in the Desert of Love",
    image:
      "/placeholder.svg?height=400&width=300&query=Tunisia movie poster with desert dunes and romantic Arabian nights theme",
    badge: "PRÓXIMO VIAJE",
    badgeColor: "bg-gradient-to-r from-yellow-600 to-orange-600",
    genre: "Romance | Aventura | Épico",
    duration: "5 días",
    rating: "ATP",
    director: "El Destino",
    cast: ["Benjamin Berger", "Denise Marfetan"],
    synopsis:
      "En las arenas doradas de Túnez, donde el desierto se encuentra con el mar, dos almas aventureras descubren que el amor es el oasis más hermoso. Bajo las estrellas del Sahara, cada noche es mágica.",
    releaseDate: "30 de julio",
    country: "Túnez",
    language: "Árabe & Adventure",
    isTravel: true,
    specialMessage: "Explorando el desierto de la mano, encontrando oasis de amor 🐪🌟",
  },
  // Películas regulares
  "lilo-stitch": {
    id: "lilo-stitch",
    title: "Lilo y Stitch",
    originalTitle: "Lilo & Stitch",
    image: "https://static.cinepolis.com.ar/posters/2601/w154/baddog-teaser-poster-lasjpg",
    trailer: "/placeholder.svg?height=400&width=600&query=Lilo and Stitch movie scene",
    badge: "ESTRENO",
    badgeColor: "bg-red-500",
    genre: "Animación | Familia | Comedia",
    duration: "85 min",
    rating: "ATP",
    director: "Dean DeBlois, Chris Sanders",
    cast: ["Daveigh Chase", "Chris Sanders", "Tia Carrere"],
    synopsis:
      "Una niña hawaiana solitaria adopta un pequeño perro feo, sin saber que es un peligroso experimento genético fugitivo del espacio exterior.",
    releaseDate: "21 de junio de 2002",
    country: "Estados Unidos",
    language: "Español | Inglés",
    showtimes: [
      {
        id: "regular1",
        time: "14:30",
        date: "Hoy",
        theater: "Sala 1",
        format: "2D Doblada",
        available: true,
      },
      {
        id: "regular2",
        time: "17:00",
        date: "Hoy",
        theater: "Sala 3",
        format: "2D Subtitulada",
        available: true,
      },
      {
        id: "regular3",
        time: "19:30",
        date: "Hoy",
        theater: "Sala 1",
        format: "2D Doblada",
        available: true,
      },
    ],
  },
  "mision-imposible": {
    id: "mision-imposible",
    title: "Misión: Imposible...",
    image: "https://static.cinepolis.com.ar/posters/2605/w154/mision-imposible-gc-2-1jpg",
    badge: "PREVENTA",
    badgeColor: "bg-yellow-500",
  },
  "destino-final": {
    id: "destino-final",
    title: "Destino Final: Laz...",
    image: "https://static.cinepolis.com.ar/posters/2652/w154/unnamedpng",
    badge: "",
    badgeColor: "",
  },
  "miley-cyrus": {
    id: "miley-cyrus",
    title: "Miley Cyrus: Som...",
    image: "https://static.cinepolis.com.ar/posters/2760/w154/something-beautiful-poster-spanish-3jpg",
    badge: "PREVENTA",
    badgeColor: "bg-pink-500",
  },
  "oshi-no-ko": {
    id: "oshi-no-ko",
    title: "Oshi no Ko: El act...",
    image: "https://static.cinepolis.com.ar/posters/2758/w154/image001jpg",
    badge: "PREVENTA",
    badgeColor: "bg-pink-500",
  },
  "ado-special": {
    id: "ado-special",
    title: "Ado SPECIAL LIV...",
    image: "/images/posters/ado-special.png",
    badge: "PREVENTA",
    badgeColor: "bg-pink-500",
  },
  "j-hope-tour": {
    id: "j-hope-tour",
    title: "j-hope Tour 'HOP...",
    image: "/images/posters/j-hope-tour.png",
    badge: "PREVENTA",
    badgeColor: "bg-pink-500",
  },
  f1: {
    id: "f1",
    title: "F1",
    image: "/images/posters/f1.png",
    badge: "PREVENTA",
    badgeColor: "bg-pink-500",
  },
  "como-entrenar": {
    id: "como-entrenar",
    title: "Cómo entrenar a ...",
    image: "/images/posters/como-entrenar.png",
    badge: "PREVENTA",
    badgeColor: "bg-pink-500",
  },
  bailarina: {
    id: "bailarina",
    title: "Bailarina",
    image: "/images/posters/bailarina.png",
    badge: "PREVENTA",
    badgeColor: "bg-pink-500",
  },
  max: {
    id: "max",
    title: "Max",
    image: "/images/posters/max.png",
    badge: "PREVENTA",
    badgeColor: "bg-pink-500",
  },
  thunderbolts: {
    id: "thunderbolts",
    title: "Thunderbolts*",
    image: "/images/posters/thunderbolts.png",
    badge: "",
    badgeColor: "",
  },
  gloria: {
    id: "gloria",
    title: "Gloria!",
    image: "/images/posters/gloria.png",
    badge: "",
    badgeColor: "",
  },
  possession: {
    id: "possession",
    title: "Possession",
    image: "/images/posters/possession.png",
    badge: "",
    badgeColor: "",
  },
}

export const getAllMovies = (): Movie[] => {
  return Object.values(moviesData)
}

export const getMovieById = (id: string): Movie | undefined => {
  return moviesData[id]
}

export const getMoviesByComplex = (complex: string): Movie[] => {
  const allMovies = getAllMovies()

  switch (complex) {
    case "punta-del-este":
      return allMovies.filter((movie) => movie.id === "nuestros-2-meses")
    case "cnsi-buenos-aires":
      return allMovies.filter((movie) => movie.id === "proposal")
    case "proximos-viajes":
      return allMovies.filter((movie) => movie.isTravel === true)
    case "otros":
      return allMovies.filter((movie) => movie.id !== "nuestros-2-meses" && movie.id !== "proposal" && !movie.isTravel)
    default:
      return allMovies
  }
}

export const getTravelMovies = (): Movie[] => {
  return getAllMovies().filter((movie) => movie.isTravel === true)
}
