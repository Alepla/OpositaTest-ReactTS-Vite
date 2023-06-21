import { useEffect, useState } from "react";
import { Film } from "../../types/films";
import "./films.css"

const Films: React.FC = () => {
  const [films, setFilms] = useState<Array<Film>>([])

  useEffect(() => {
    retrieveFilms()
  })

  const retrieveFilms = async (): Promise<void> => {
    const response = await fetch("https://dummyjson.com/posts")
    const result = await response.json()
    setFilms(result.posts)
  }

  const hasFilms = (): boolean => {
    return films.length != 0
  }

  return (
    <div className="films">
      {hasFilms() && films.map((film) => (
        <div key={film.id}>
          <label>{film.title}</label>
        </div>
      ))}
    </div>
  );
}
 
export default Films;