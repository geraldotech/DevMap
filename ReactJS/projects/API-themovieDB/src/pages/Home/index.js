import { Container, MovieList, Movie } from './styles'
import { Banner } from './banner'
import { useEffect, useState } from 'react'
//import { APIKey } from '../../config/key'
import { Link } from 'react-router-dom'

const Home = () => {
  // useState var moveis start with empty Arr
  const [movies, setMovies] = useState([])
  const [changelan, setChangelan] = useState('en-US')

  const image_path = 'https://image.tmdb.org/t/p/w500'

  //ajuda com os efeitos colaterais, carregar dados fonte externa
  // aceita a func e um array de dependencias
  useEffect(() => {
    // consumir a pi
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${changelan}&page=1&region=us
    `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results.length)
        setMovies(data.results)
        // console.log(data.results)
      })
  }, [changelan])

  function toggleLanguage() {
    setChangelan((prevchangelan) => (prevchangelan == 'en-US' ? 'pt-BR' : 'en-US'))
  }

  return (
    <Container>
      <Banner>
        <h1>Welcome to Movies Data Base</h1>
      </Banner>
      <h1>20 mais populares</h1>

      <button onClick={toggleLanguage} className="ChangeLanguage">
        Mudar para Português - Brasil
      </button>

      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              {/*  <a href="">
                <img
                  src={`${image_path}/${movie.poster_path}`}
                  alt={movie.title}
                />
              </a> */}
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
