import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMovie } from "../../Utils/configSlice";
import { TMDB_POSTER_CDN_URL } from "../../Utils/Constants";
import axios from "axios";
import { TMDB_API_OPTIONS } from "../../Utils/Constants";
import { Play, ExternalLink, X, Star, ThumbsUp, Calendar, Info } from "lucide-react";

const MovieDetailsModal = () => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.config.selectedMovie);
  const [trailer, setTrailer] = useState(null);
  const [providers, setProviders] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!selectedMovie?.id) {
      setTrailer(null);
      setProviders(null);
      return;
    }

    const fetchMovieData = async () => {
      try {
        const movieVideoUrl = `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos`;
        const videoData = await axios.get(movieVideoUrl, TMDB_API_OPTIONS);
        const result = videoData?.data?.results || [];

        const trailerData = result.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube",
        );
        const trailerVideo = trailerData.length ? trailerData[0] : (result.filter(video => video.site === "YouTube")[0] || null);
        setTrailer(trailerVideo);

        const providersUrl = `https://api.themoviedb.org/3/movie/${selectedMovie.id}/watch/providers`;
        const provData = await axios.get(providersUrl, TMDB_API_OPTIONS);
        const provResults = provData?.data?.results || {};
        
        const countryData = provResults["IN"] || provResults["US"] || Object.values(provResults)[0];
        
        if (countryData) {
           const streamProviders = countryData.flatrate || countryData.rent || countryData.buy || [];
           setProviders({ link: countryData.link, list: streamProviders });
        } else {
           setProviders({ link: null, list: [] });
        }
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
        setTrailer(null);
        setProviders(null);
      }
    };

    fetchMovieData();
  }, [selectedMovie?.id]);

  if (!selectedMovie) return null;

  const handleClose = () => {
    setIsLoaded(false);
    setTimeout(() => {
      dispatch(setSelectedMovie(null));
    }, 200);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const backdropUrl = selectedMovie.backdrop_path 
    ? `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}` 
    : (TMDB_POSTER_CDN_URL + selectedMovie.poster_path);

  return (
    <div
      className={`sticky  inset-1 h-screen bg-black/90 flex items-start sm:items-center justify-center z-[100] px-4 pt-4 sm:p-4 overflow-hidden transition-all duration-300 ease-in-out ${isLoaded ? 'opacity-100 backdrop-blur-xl' : 'opacity-0 backdrop-blur-none'}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative bg-[#0a0a0a]/95 w-full max-w-5xl rounded-3xl md:rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col overflow-hidden sm:h-auto sm:max-h-[88vh] h-[95vh] border border-white/10 ring-1 ring-white/5 transition-all duration-300 ease-out transform ${isLoaded ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="group absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/40 hover:bg-red-600/90 text-white/70 hover:text-white rounded-full p-2.5 z-50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-lg border border-white/20 hover:border-red-400 hover:scale-110 active:scale-90"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-90" />
        </button>

        <div className="flex flex-col overflow-y-auto flex-1 w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors">
            {/* Cinematic Top Media Section */}
            <div className="w-full relative aspect-video bg-black flex-shrink-0 group">
                {trailer?.key ? (
                    <div className="relative w-full h-full pointer-events-none sm:pointer-events-auto">
                        <iframe
                            className="w-full h-full transform scale-[1.02] sm:scale-100"
                            src={`https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&modestbranding=1&showinfo=0`}
                            title="Movie Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ) : (
                    <img 
                        src={backdropUrl} 
                        alt="Backdrop" 
                        className="w-full h-full object-cover"
                    />
                )}
                {/* Advanced Multi-Stop Gradient Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30 pointer-events-none"></div>
            </div>

            {/* Main Content Area */}
            <div className="px-6 sm:px-14 pb-14 relative z-10 -mt-20 sm:-mt-32">
                {/* Movie Title with Premium Typography */}
                <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] mb-4 tracking-tighter leading-none inline-block">
                    {selectedMovie.title || selectedMovie.original_title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mt-4">
                    {/* Left Column (Details and Synopsis) */}
                    <div className="md:col-span-8 space-y-8">
                        {/* Crisp Meta Info Badges */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-white/90">
                            <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-md border border-green-400/20">
                                {Math.round((selectedMovie.vote_average / 10) * 100)}% Match
                            </span>
                            {selectedMovie.release_date && (
                                <span className="bg-white/10 px-3 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                                    {selectedMovie.release_date.split('-')[0]}
                                </span>
                            )}
                            {selectedMovie.adult && (
                                <span className="text-red-400 bg-red-500/10 px-3 py-1 rounded-md border border-red-500/30">
                                    18+
                                </span>
                            )}
                            <span className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-md border border-yellow-500/20">
                                <Star className="w-4 h-4 fill-current" />
                                {selectedMovie.vote_average?.toFixed(1)} Rating
                            </span>
                        </div>

                        {/* Synopsis with better line-height */}
                        <p className="text-gray-300/90 text-sm sm:text-[17px] leading-relaxed drop-shadow-md font-medium max-w-3xl">
                            {selectedMovie.overview || "No overview available for this movie."}
                        </p>

                        {/* Interactive Watch Providers Section */}
                        {providers && providers.list && providers.list.length > 0 && (
                            <div className="flex flex-col gap-4 animate-in slide-in-from-bottom-4 duration-700">
                                <h3 className="text-gray-400/80 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Play className="w-4 h-4" /> Available to Stream
                                </h3>
                                <div className="flex flex-wrap items-center gap-4">
                                    {providers.list.slice(0, 5).map((p) => (
                                        <a
                                            key={p.provider_id}
                                            href={providers.link || `#`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                            title={`Watch on ${p.provider_name}`}
                                        >
                                            <img 
                                                src={`${TMDB_POSTER_CDN_URL}${p.logo_path}`} 
                                                alt={p.provider_name} 
                                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-red-500/50 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all"
                                            />
                                            {/* Glowing Play Icon Overlay */}
                                            <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                                <Play className="w-6 h-6 text-white fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                            </div>
                                        </a>
                                    ))}
                                    {providers.link && (
                                        <a 
                                            href={providers.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="ml-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all text-sm font-semibold text-white/80 hover:text-white"
                                        >
                                            View All <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column (Glassmorphic Stats Widget) */}
                    <div className="md:col-span-4 self-start">
                        <div className="flex flex-col gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md">
                            <div className="bg-[#1a1a1a]/80 p-4 hover:bg-[#202020]/90 transition-colors flex items-center justify-between">
                                <span className="text-gray-400 text-xs sm:text-sm font-medium">Language</span>
                                <span className="text-white uppercase font-bold tracking-wider">
                                    {selectedMovie.original_language}
                                </span>
                            </div>
                            
                            <div className="bg-[#1a1a1a]/80 p-4 hover:bg-[#202020]/90 transition-colors flex items-center justify-between">
                                <span className="text-gray-400 text-xs sm:text-sm font-medium">Popularity Score</span>
                                <span className="text-white font-bold flex items-center gap-1.5">
                                    {selectedMovie.popularity?.toFixed(0)} <ThumbsUp className="w-4 h-4 text-blue-400" />
                                </span>
                            </div>
                            
                            <div className="bg-[#1a1a1a]/80 p-4 hover:bg-[#202020]/90 transition-colors flex items-center justify-between">
                                <span className="text-gray-400 text-xs sm:text-sm font-medium">Total Votes</span>
                                <span className="text-white font-bold">
                                    {selectedMovie.vote_count?.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
