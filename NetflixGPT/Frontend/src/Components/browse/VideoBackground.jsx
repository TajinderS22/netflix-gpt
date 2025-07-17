/* eslint-disable no-unused-vars */
import React, { } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';



const VideoBackground = ({ id }) => {
  useMovieTrailer( id )
  const trailer=  useSelector((state)=>state.movies.MainTrailerVideo)
  if (!trailer) return null;
  // console.log(trailer)
  return (
    <div className='w-screen max-w-[2700px] max-h-[1500px] absolute pt-24  md:pt-0 '>
      <iframe
        className='w-screen max-w-[2700px]  aspect-video  '
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&loop=1`}
        // title="YouTube video player"
        // frameBorder="0"
        // allow="autoplay; encrypted-media; fullscreen"
        // allowFullScreen
        // referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground