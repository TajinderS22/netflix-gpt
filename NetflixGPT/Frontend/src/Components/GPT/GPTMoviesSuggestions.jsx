import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from "../browse/MoviesList"
import Shimmer from '../Shimmer'

const GPTMoviesSuggestions = () => {
  
    const gpt=useSelector((store)=>store.movies.GPTMovies)
    // console.log(gpt)
    // // console.log(gpt)
    // // if(!gpt ) return null
    const MoviesSearchedFromGPT =useSelector(store=>store.config.MoviesSearchedFromGPT)
  if(MoviesSearchedFromGPT)return (
    <div className='pl-6 not-md:pl-0 mt-4 bg-black/10 rounded-lg' >
      
    {gpt && gpt.map((movie)=><MoviesList key={movie?.data?.results[0]?.id} title={movie?.data?.results[0]?.original_title} movies={movie?.data?.results} />)}
      {!gpt &&  <div>

          <Shimmer/>
          <Shimmer/>
          <Shimmer/>

        </div>}

    </div>
  )
}

export default GPTMoviesSuggestions