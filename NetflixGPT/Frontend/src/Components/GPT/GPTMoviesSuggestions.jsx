import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../browse/MoviesList";
import MovieDetailsModal from "../browse/MovieDetailsModal";
import Shimmer from "../Shimmer";
import { LoadingGPTMovies } from "../../Utils/moviesSlice";
import Loading from "../Loading";

const GPTMoviesSuggestions = () => {
  const loadingGptMovies = useSelector(
    (state) => state.movies.LoadingGPTMovies,
  );

  const gpt = useSelector((store) => store.movies.GPTMovies);
  const MoviesSearchedFromGPT = useSelector(
    (store) => store.config.MoviesSearchedFromGPT,
  );

  if (MoviesSearchedFromGPT)
    return (
      <div className="pl-6 not-md:pl-0 mt-4 bg-black/10 rounded-lg">
        {gpt ? (
          <>
            {gpt.map((movie) => (
              <MoviesList
                key={movie?.data?.results[0]?.id}
                title={movie?.data?.results[0]?.original_title}
                movies={movie?.data?.results}
              />
            ))}
            <MovieDetailsModal />
          </>
        ) : (
          <Loading />
        )}
        {!gpt && (
          <div>
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        )}
      </div>
    );

  if (loadingGptMovies) {
    return <Loading />;
  }
};

export default GPTMoviesSuggestions;
