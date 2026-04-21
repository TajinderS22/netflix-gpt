/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import ProtectedBrowseRoute from "../Utils/protected/ProtectBrowseRoute";
import UserContext, { UserContextProvider } from "../Utils/context/UserContext";
import Header from "./Header";
import MainBrowseContainer from "./browse/MainBrowseContainer";
import SecondaryConatiner from "./browse/SecondaryConatiner";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import usePopularMovies from "./Hooks/usePopularMovies";
import useTopRated from "./Hooks/useTopRated";
import GPTSearch from "./browse/GPTSearch";
import { useSelector } from "react-redux";
import MovieDetailsModal from "./browse/MovieDetailsModal";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  const { showGPTSearch } = useContext(UserContext);

  const selectedMovie = useSelector((state) => state.config.selectedMovie);

  return (
    <div className="w-full max-w-[1920px]">
      {selectedMovie && (
        <div className="w-screen h-screen fixed top-0 z-50 backdrop-blur-md ">
          <MovieDetailsModal />
        </div>
      )}
      <div
        className="bg-[#4d070e]/20  bg-[url( https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg )] max-w-[1920px] min-h-[100svh] 
        backdrop-blur-md
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
};

export default Browse;
