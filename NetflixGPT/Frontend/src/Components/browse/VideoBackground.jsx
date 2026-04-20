/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailer = useSelector((state) => state.movies.MainTrailerVideo);
  if (!trailer?.key) return null;

  return (
    <div className="w-screen max-w-[2700px] max-h-[1500px] absolute pt-24  md:pt-0 ">
      <iframe
        key={trailer.key}
        className="w-screen max-w-[2700px]  aspect-video  "
        src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playsinline=1&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground;
