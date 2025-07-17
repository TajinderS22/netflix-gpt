/* eslint-disable no-unused-vars */
import React,{useContext,useEffect} from 'react'
import ProtectedBrowseRoute from '../Utils/protected/ProtectBrowseRoute'
import UserContext, { UserContextProvider } from '../Utils/context/UserContext'
import Header from './Header'
import MainBrowseContainer from './browse/MainBrowseContainer'
import SecondaryConatiner from './browse/SecondaryConatiner'
import useNowPlayingMovies from './Hooks/useNowPlayingMovies'
import usePopularMovies from './Hooks/usePopularMovies'
import useTopRated from './Hooks/useTopRated'
import GPTSearch from './browse/GPTSearch'


const Browse=()=> {
    
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    const {showGPTSearch}=useContext(UserContext)
    
    return(        
    <div className='min-w-[100svw]'>    
    <div className='bg-[#4d070e] bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web_tall_panel/IN-en-20250331-TRIFECTA-perspective_ed11f76a-3e10-41ea-a60d-9008d2b6c103_large.jpg)] max-w-[2700px] min-h-[100svh] 
    bg-blend-darken
    bg-cover
    -z-10'>
        
        <div className='backdrop-blur-2xl h-full w-full '>
        <Header/>
        {showGPTSearch? <GPTSearch/>:
        <div>
          <MainBrowseContainer/>
          <SecondaryConatiner/>
        </div>
        }    
        </div>   
    </div>
    </div>

  )

}

export default Browse