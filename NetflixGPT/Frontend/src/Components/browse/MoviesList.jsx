import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({title,movies}) => {
    
    if (!movies || movies.length === 0) return null;

    // console.log(movies)

  return (
      
    <div className=' flex flex-col text-left max-w-screen   '>
        <div className='font-bold text-4xl h-12 pt-2 mb-2 pl-4 z-0  '>
          {title}
        </div>
        <div className='md:flex md:justify-end hover:h[400px] pt-6 h-fit overflow-x-scroll  z-0'>
            <div className='md:flex  -z-10 h-[400px]   '>
            {movies.map(movie => <MoviesCard key={movie.id} posterPath={movie.poster_path} data={movie} />)}
            </div>    
        </div>      
    </div>

  )
}

export default MoviesList