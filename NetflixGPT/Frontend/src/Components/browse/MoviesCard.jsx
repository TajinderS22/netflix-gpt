import React from 'react'
import { TMDB_POSTER_CDN_URL } from '../../Utils/Constants'
import TestHoverDetails from './TestHoverDetails'
// import client from './../../../../rootUTILS/genai'
// import { useNavigate } from 'react-router'

const MoviesCard = ({posterPath,data}) => {
  //  const navigate=useNavigate();
    const handleclick=async()=>{
      console.log(data)
      // const searchQuery='suppose you are a movies recommendation system and gives one suitable link where the movie available in query is available and just give me the URL. query:' + data?.original_title + 'give me the link of page of platform where it is available . Just Link.if you cant give url then just give null'
      // const movieLink= await client.models.generateContent({
      //   model:"gemini-2.0-flash",
      //   contents:searchQuery
      // }) 
      // console.log(movieLink.text);
    //   if (!movieLink.text || movieLink.text.trim() === "null") {
    //     navigate('/testbrowse');
    //   } else {
    //     window.open(movieLink.text.trim(), "_blank");
    //   }
    }
  if(!posterPath) return null;
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

  )
}

export default MoviesCard