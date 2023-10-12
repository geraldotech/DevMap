import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { APIKey } from '../../../config/key'
import { Container } from './styles'

function Details() {
  const { id } = useParams()

  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1&region=us
    `)
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data)
        // pegar somente informacoes que precisa

        /*  
        // intead this, you can destructuing avoid repeat data 
          const movie = {
            id,
            title: data.title,
            sinopse: data.overview,
            image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            releaseData: data.release_date,
          } */

        const { title, overview, release_date, poster_path } = data

        const movie = {
          id,
          title, //   title: title or just title because same name
          sinopse: overview,
          image: `https://image.tmdb.org/t/p/w500${poster_path}`,
          releaseData: release_date,
        }
        setMovie(movie)
      })
  }, [id])

  return (
    <Container className="movie">
      <img src={movie.image} alt={movie.sinopse} />
      <div className="details">
        <h1>{movie.title}</h1>
        <span>Sinopse: {movie.sinopse}</span>
        <span className="release-date">Release data: {movie.releaseData}</span>
        <button>
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </Container>
  )
}

export default Details
