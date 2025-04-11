import axios from 'axios';
import React, { useEffect,  } from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS } from '../../Utils/Constants';
import { addMainTrailerVideo } from '../../Utils/moviesSlice';

const useMovieTrailer = (id) => {
//   const [trailerKey, setTrailerKey] = useState(null);
  const dispatch=useDispatch()

  useEffect(() => {
    const getMainMovieVideos = async () => {
      try {
        
        const movieVideoUrl = `https://api.themoviedb.org/3/movie/${id}/videos`;
        const data = await axios.get(movieVideoUrl, TMDB_API_OPTIONS);
        const result = data?.data?.results || [];

        const trailerData = result.filter(video => video.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : result[0];
        dispatch(addMainTrailerVideo(trailer))

        if (trailer) {
          // setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("Failed to fetch trailer:", error);
      }
    };

    getMainMovieVideos();
  },[id]);
  
}

export default useMovieTrailer