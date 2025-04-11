import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TMDB_API_OPTIONS, TMDB_URL_NOWPLAYING } from '../../Utils/Constants'
import { addNowPlayingMovies } from '../../Utils/moviesSlice'

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const getNowPlaying=async ()=>{
        try{
        let data =await axios.get(TMDB_URL_NOWPLAYING,TMDB_API_OPTIONS)
        data=data.data.results;
        dispatch(addNowPlayingMovies(data))
        }catch(err){
        console.log(err)
        }
    }
    useEffect(()=>{
        getNowPlaying()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useNowPlayingMovies;