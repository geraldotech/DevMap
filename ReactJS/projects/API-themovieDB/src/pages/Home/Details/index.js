import { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { APIKey } from '../../../config/key'
import { Container } from './styles'

function Details({ languagetype }) {
  const { id } = useParams()

  console.log(languagetype)
  

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const currentLanguage = useLocation()

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${languagetype}&page=1&region=us
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
          
        const { title, overview, release_date, poster_path, vote_average, genres } = data

        const movie = {
          id,
          title, //   title: title or just title because same name
          sinopse: overview,
          image: `https://image.tmdb.org/t/p/w500${poster_path}`,
          releaseData: release_date,
          vote_average: vote_average,
          genres,
        }

        setMovie(movie)
        setLoading(false)
      
      })
      .catch((err) => {
        console.log(`problemas erros`)
        console.log(err)
        setLoading(false)
      })
  }, [languagetype])

  if (loading) {
    return (
      <h1 aria-live="polite" className="loading">
        Loading...
      </h1>
    )
  }

  return (
    <>
      <Container className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <p className="average">Nota: {movie.vote_average}</p>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">{languagetype == "pt-BR" ? "Lançamento: " : "Release Date: "}{movie.releaseData}</span>

          <div className="genres">Categorias: {movie.genres && movie.genres.map((val) => (
            <b key={val.name}>{val.name}</b>
          ))}</div>
       
            <nav className='nav-back'>
            <button>
            <Link to="/">{languagetype == "pt-BR" ? "Voltar" : "Go Back"}</Link>
          </button>
            </nav>
        </div>
      </Container>
    </>
  )
}

export default Details
