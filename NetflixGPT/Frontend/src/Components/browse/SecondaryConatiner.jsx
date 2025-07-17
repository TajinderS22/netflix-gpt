import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondaryConatiner = () => {

  const movies = useSelector((store) => store.movies)
  

  return (
    <div className=' '>
      <div className=' -mt-44 overflow-y-visible '>
      <MoviesList title='Now Playing' movies={movies.NowPlayingMovies} />
      <MoviesList title='Popular' movies={movies.PopularMovies} />
      <MoviesList title='TopRated' movies={movies.TopRated} />
      <MoviesList title='Trending' movies={movies.NowPlayingMovies} />
      </div>
      

    </div>
  )
}

export default SecondaryConatiner