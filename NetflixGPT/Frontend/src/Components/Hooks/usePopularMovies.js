import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TMDB_API_OPTIONS, TMDB_URL_POPULAR } from '../../Utils/Constants'
import {  addPopularMovies } from '../../Utils/moviesSlice'

const usePopularMovies = () => {
    const dispatch=useDispatch()
    const getPopular=async ()=>{
        try{
        let data =await axios.get(TMDB_URL_POPULAR,TMDB_API_OPTIONS)
        data=data.data.results;
        dispatch(addPopularMovies(data))
        }catch(err){
        console.log(err)
        }
    }
    useEffect(()=>{
        getPopular()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default usePopularMovies;