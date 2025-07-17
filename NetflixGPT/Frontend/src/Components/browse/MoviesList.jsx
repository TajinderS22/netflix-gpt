import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({title,movies}) => {
    
    if (!movies || movies.length === 0) return null;
    if(!title) return null

    console.log(movies)
    console.log(movies.length)

  return (

    <div className=' flex flex-col  md:pt-0 text-left not-md:h-[620px] max-w-screen px-5  '>
        <div className='font-bold text-4xl h-12 pt-2 mb-2 pl-4   '>
          {title}
        </div>
        <div className=' flex justify-start pt-6 h-[100%] overflow-scroll'>
            <div className='md:flex  z-10 h-[400px]   '>
            {movies.map(movie => <MoviesCard key={movie.id} posterPath={movie.poster_path} data={movie} />)}
            </div>    
        </div>      
    </div>

  )
}

export default MoviesList