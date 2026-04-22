import React, { useRef } from 'react'
import { lang } from '../../Utils/LanguageConstatnts'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { backedServer, TMDB_API_OPTIONS } from '../../Utils/Constants'
import { addGPTMovies, LoadingGPTMovies, removeGPTMovies } from '../../Utils/moviesSlice'
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
      await dispatch(LoadingGPTMovies(true));
      await dispatch(removeGPTMovies());
      const querry=searchText.current.value;
      try {
        const response= await axios.post(`${backedServer}/gpt `, {querry})
        
        const GPTMovies=response.data.split(",")


        const promiseArray = GPTMovies.map(movie=>searchMovieInTMDB(movie))
       
        const searchedMoviesData = await Promise.all(promiseArray)
        dispatch(addGPTMovies(searchedMoviesData))
        dispatch(setMoviesSearchedFromGPT(true))
        await dispatch(LoadingGPTMovies(false));
        
      } catch (error) {
        console.error(error)
      }
    }
    

    return (
    <div className=" pt-36  max-w-[1920px]   cursor-pointer ">
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