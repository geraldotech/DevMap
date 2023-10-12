import { Container, MovieList, Movie } from './styles'
import { Banner } from './banner'

const Home = () => {
  const movies = [
    {
      id: 1,
      title: 'Spider Man',
      image_url:
        'https://aiptcomics.com/wp-content/uploads/2022/09/brsm2022001_cvr-e1663167423681.jpeg',
    },
    {
      id: 2,
      title: 'Batman',
      image_url:
        'https://aiptcomics.com/wp-content/uploads/2022/09/brsm2022001_cvr-e1663167423681.jpeg',
    },
    {
      id: 3,
      title: 'The Avengers',
      image_url:
        'https://aiptcomics.com/wp-content/uploads/2022/09/brsm2022001_cvr-e1663167423681.jpeg',
    },
  ]

  return (
    <Container>
      <Banner>
        <p>hello</p>
      </Banner>
      <h1>Movies</h1>
      <MovieList>
        {/*     {movies.map((movie, ind) => (
          <Movie key={ind}>
            <a href="#">
              <img src={movie.image_url} alt={movie.title} />
            </a>
            <span>{movie.title}</span>
          </Movie>
        ))} */}

        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="#">
                <img src={movie.image_url} alt={movie.title} />
              </a>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  )
}

export default Home
