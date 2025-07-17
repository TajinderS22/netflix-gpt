import React from 'react'
import MoviesList from './browse/MoviesList'

const Shimmer = () => {
  return (
    <div>
        <MoviesList title={"Loading"} movies={[{poster_path:"../assets/bgimage.jpeg"}]} ></MoviesList>
    </div>
  )
}

export default Shimmer