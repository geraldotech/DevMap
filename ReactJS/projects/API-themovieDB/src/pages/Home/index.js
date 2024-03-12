import { Container, MovieList, Movie } from './styles'
//import { useOutletContext } from 'react-router-dom'
import { Banner } from './banner'
import { useEffect, useState } from 'react'
//import { APIKey } from '../../config/key'
import { Link } from 'react-router-dom'

const Home = ({ languagetype }) => {
  // useState var moveis start with empty Arr
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const image_path = 'https://image.tmdb.org/t/p/w500'
  const API = process.env.REACT_APP_API_KEY
  

  //ajuda com os efeitos colaterais, carregar dados fonte externa
  // aceita a func e um array de dependencias
  useEffect(() => {
    setLoading(true)

    async function getMovies() {
      try {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=${languagetype}&page=1&region=us
        `
        const res = await fetch(url)
        if (!res.ok) {
          throw {
            message: 'Failed to fetch Movies',
            status: res.ok,
          }
        }
        const data = await res.json()
        setMovies(data.results)
      } catch (err) {
        //console.log(err.message)
        console.log(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    getMovies()
  }, [languagetype])

  if (loading) {
    return (
      <h1 aria-live="polite" className="loading">
        Loading...
      </h1>
    )
  }

  return (
    <Container>
      <Banner>
        <h1>{languagetype == "pt-BR" ? "Os 20 filmes mais populares" : "20 Most Popular Moveis"}</h1>
      </Banner>
    
      <h2>{error && error.message}</h2>

      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img src={`${image_path}/${movie.poster_path}`} alt={movie.title} />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  )
}

export default Home
