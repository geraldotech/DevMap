import { Container, MovieList, Movie } from './styles'
import { Banner } from './banner'
import { useEffect, useState } from 'react'
import { APIKey } from '../../config/key'
import { Link } from 'react-router-dom'

const Home = () => {
  // useState var moveis start with empty Arr
  const [movies, setMovies] = useState([])

  const image_path = 'https://image.tmdb.org/t/p/w500'

  //ajuda com os efeitos colaterais, carregar dados fonte externa
  // aceita a func e um array de dependencias
  useEffect(() => {
    // consumir a pi
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1&region=us
    `)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
        // console.log(data.results)
      })
  }, [])

  return (
    <Container>
      <Banner>
        <h1>Welcome to Movies Data Base</h1>
      </Banner>
      <h1>Movies</h1>
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
                <img
                  src={`${image_path}/${movie.poster_path}`}
                  alt={movie.title}
                />
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
