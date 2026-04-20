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
    
    return (
      <div className="min-w-[100svw]">
        <div
          className="bg-[#4d070e] bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg
)] max-w-[2700px] min-h-[100svh] 
    bg-blend-darken
    bg-cover
    -z-10"
        >
          <div className="backdrop-blur-2xl h-full w-full ">
            <Header />
            {showGPTSearch ? (
              <GPTSearch />
            ) : (
              <div>
                <MainBrowseContainer />
                <SecondaryConatiner />
              </div>
            )}
          </div>
        </div>
      </div>
    );

}

export default Browse