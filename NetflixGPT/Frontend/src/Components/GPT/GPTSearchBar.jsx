import React, { useRef } from 'react'
import { lang } from '../../Utils/LanguageConstatnts'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { TMDB_API_OPTIONS } from '../../Utils/Constants'
import { addGPTMovies } from '../../Utils/moviesSlice'
import { setMoviesSearchedFromGPT } from '../../Utils/configSlice'

const GPTSearchBar = () => {
    const dispatch=useDispatch();
    const searchText=useRef(null);
    const selectedLanguage =useSelector((store)=>store.config)
    const currentLang=lang[selectedLanguage.Language]

    const searchMovieInTMDB=async (movie)=>{
      
      const data = await axios.get(
        "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
        TMDB_API_OPTIONS
      )
      return data

    }
      const handleGPTSearchClick=async()=>{
      const querry=searchText.current.value;
      try {
        const response= await axios.post('http://localhost:3000/gpt ', {querry})
        console.log(response.data)
        const GPTMovies=response.data.split(",")
        console.log(GPTMovies)

        const promiseArray = GPTMovies.map(movie=>searchMovieInTMDB(movie))
        // we will get promises from here not the result and data will be of no use
        // to deal with this issue we have promise.all(arr) it waits for all promises to finish and givve us actual data 
        const searchedMoviesData = await Promise.all(promiseArray)
        dispatch(addGPTMovies(searchedMoviesData))
        dispatch(setMoviesSearchedFromGPT(true))
        
      } catch (error) {
        console.log(error)
      }
    }
    

    return (
    <div className="md:pt-24 pt-36 mx-auto  cursor-pointer ">
        <form action="" className='flex justify-between w-[50%] mx-auto ' onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={searchText} type="text" placeholder={currentLang.GPTSearchBarPlaceHolder} className="p-2 px-4 bg-gray-500/50 border-1 border-white rounded-lg w-[85%]  hover:shadow-2xl  hover:shadow-red-400/70"/>
            <button className="px-4 min-w-18 bg-red-500 text-white rounded-lg  hover:shadow-2xl  hover:shadow-red-400/70 " 
            onClick={handleGPTSearchClick}
            > {currentLang.search} </button>

        </form>
    </div>
  )
}

export default GPTSearchBar