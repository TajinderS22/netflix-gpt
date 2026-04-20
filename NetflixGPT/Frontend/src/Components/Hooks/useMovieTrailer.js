import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../../Utils/Constants";
import { addMainTrailerVideo } from "../../Utils/moviesSlice";

const useMovieTrailer = (id) => {
  //   const [trailerKey, setTrailerKey] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMainMovieVideos = async () => {
      if (!id) return;

      try {
        const movieVideoUrl = `https://api.themoviedb.org/3/movie/${id}/videos`;
        const data = await axios.get(movieVideoUrl, TMDB_API_OPTIONS);
        const result = data?.data?.results || [];

        const trailerData = result.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube",
        );
        const trailer = trailerData.length
          ? trailerData[0]
          : result.find((v) => v.site === "YouTube");

        if (trailer) {
          dispatch(addMainTrailerVideo(trailer));
        }
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    };

    getMainMovieVideos();
  }, [id, dispatch]);
};

export default useMovieTrailer;
