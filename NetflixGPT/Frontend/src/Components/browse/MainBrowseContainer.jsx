import React, {  } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainBrowseContainer = () => {
    
    const movies=useSelector((state)=>state.movies?.NowPlayingMovies)

    if(movies===null) return
    const randomIndex = Math.floor(Math.random() * movies.length);
    
    const mainMovie=movies[Math.floor(randomIndex)]
    // console.log(mainMovie)
    const {original_title,overview,id}=mainMovie; 
    return (
      <div className=' max-w-[2700px] max-h-[1500px] mx-auto '>
        <div className='w-screen max-h-[1500px]  aspect-video'>
        <VideoBackground id={id}  />
        <VideoTitle value={{ original_title, overview }} />
        </div>
      </div>
    )
}

export default MainBrowseContainer