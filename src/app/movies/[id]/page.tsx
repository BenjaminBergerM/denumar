import { useRouter } from "next/router"
import MoviePage from "./client"


export default function Page() {
  const router = useRouter()
  const { id } = router.query

  if (typeof id !== "string") {
    return <div>Loading...</div>
  }

  return (
    <MoviePage id={id} />
  )
}
