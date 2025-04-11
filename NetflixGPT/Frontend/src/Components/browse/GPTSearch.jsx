import React from 'react'
import GPTMoviesSuggestions from '../GPT/GPTMoviesSuggestions'
import GPTSearchBar from '../GPT/GPTSearchBar'

const GPTSearch = () => {
  return (
    <div className='min-h-[100svh]'>
      <GPTSearchBar/>
      <GPTMoviesSuggestions/> 

    </div>
  )
}

export default GPTSearch