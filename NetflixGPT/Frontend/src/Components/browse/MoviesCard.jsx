import React from 'react'
import { TMDB_POSTER_CDN_URL } from '../../Utils/Constants'

const MoviesCard = ({posterPath,data}) => {
    

  return (
    <div className='md:w-[250px] w-screen h-fit   mx-2  movie-card-float z-30   hover:-mt-6 transition-all duration-500 ease-in-out  ' onClick={()=>{ console.log(data?.original_title)}} >
        <img src={TMDB_POSTER_CDN_URL+posterPath} alt=" Movie Card"  className=' rounded-2xl hover:' />
    </div>
  )
}

export default MoviesCard