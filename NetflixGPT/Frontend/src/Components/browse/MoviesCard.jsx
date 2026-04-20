import React from "react";
import { useDispatch } from "react-redux";
import { TMDB_POSTER_CDN_URL } from "../../Utils/Constants";
import { setSelectedMovie } from "../../Utils/configSlice";

const MoviesCard = ({ posterPath, data }) => {
  const dispatch = useDispatch();

  const handleclick = async () => {
    dispatch(setSelectedMovie(data));
  };
  if (!posterPath) return null;
  return (
    <div
      className="group relative md:w-[250px] hover:w-[250px]  hover:mb-[10%] w-[350px] h-fit mx-2 movie-card-float z-30 hover:-mt-6 transition-all duration-500 ease-in-out cursor-pointer my-2"
      onClick={() => handleclick()}
    >
      {/* Movie Poster */}
      <img
        src={TMDB_POSTER_CDN_URL + posterPath}
        alt="Movie Card"
        className="rounded-2xl w-full"
      />

      {/* Overlay on hover */}
      <div className="absolute px-2 pb-4 inset-0 bg-black/30 hover:bg-gradient-to-t hover:from-black opacity-0 group-hover:opacity-90 transition duration-300 text-white flex flex-col justify-end p-2 rounded-2xl">
        <h3 className="text-sm font-semibold">{data?.original_title}</h3>
        <p className="text-xs">{data?.overview}...</p>
      </div>
    </div>
  );
};

export default MoviesCard;
