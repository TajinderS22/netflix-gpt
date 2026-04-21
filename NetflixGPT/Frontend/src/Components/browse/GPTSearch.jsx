import React from 'react'
import GPTMoviesSuggestions from '../GPT/GPTMoviesSuggestions'
import GPTSearchBar from '../GPT/GPTSearchBar'

const GPTSearch = () => {
  return (
    <div className='min-h-[100svh] w-screen max-w-[1920px ]'>
      <GPTSearchBar/>
      <GPTMoviesSuggestions/> 

    </div>
  )
}

export default GPTSearch