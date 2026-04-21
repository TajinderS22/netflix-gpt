import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import MovieDetailsModal from "./MovieDetailsModal";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" relative ">
      <div className=" mt-[20%] md:-mt-22  overflow-y-visible ">
        <MoviesList title="Now Playing" movies={movies.NowPlayingMovies} />
        <MoviesList title="Popular" movies={movies.PopularMovies} />
        <MoviesList title="TopRated" movies={movies.TopRated} />
        <MoviesList title="Trending" movies={movies.NowPlayingMovies} />
      </div>
      <MovieDetailsModal />
    </div>
  );
};

export default SecondaryConatiner;
