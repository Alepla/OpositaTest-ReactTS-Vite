import { useEffect, useState } from "react"
import { Film } from "../../types/films"
import "./films.css"

const Films: React.FC = () => {
  const [films, setFilms] = useState<Array<Film>>([])

  useEffect(() => {
    retrieveFilms()
  }, [])

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
      {hasFilms() &&
        films.map((film) => (
          <div key={film.id} className="card">
            <div className="header">
              <h3>{film.title}</h3>
            </div>
            <div className="body">
              <div className="tags">
                {film.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
            <div className="footer">
              <p>Reacciones: {film.reactions}</p>
              <input className="star" type="checkbox" />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Films
