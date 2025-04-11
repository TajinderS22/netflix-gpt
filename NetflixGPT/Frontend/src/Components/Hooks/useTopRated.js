import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TMDB_API_OPTIONS, TMDB_URL_NOWPLAYING, TMDB_URL_TOPRATED } from '../../Utils/Constants'
import { addTopRated } from '../../Utils/moviesSlice'

const useTopRated = () => {
    const dispatch=useDispatch()
    const getTopRated=async ()=>{
        try{
        let data =await axios.get(TMDB_URL_TOPRATED,TMDB_API_OPTIONS)
        data=data.data.results;
        dispatch(addTopRated(data))
        }catch(err){
        console.log(err)
        }
    }
    useEffect(()=>{
        getTopRated()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useTopRated;