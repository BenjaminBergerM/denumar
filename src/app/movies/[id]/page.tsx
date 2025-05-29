import MoviePage from "./client"

export default function Page({ params }: { params: { id: string } }) {
  return <MoviePage id={params.id} />
}