

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN} `,
  },
};


export const TMDB_URL_NOWPLAYING="https://api.themoviedb.org/3/movie/now_playing?page=1"
const Api_key = import.meta.env.VITE_TMDB_API_KEY;

export const TMDB_URL_POPULAR='https://api.themoviedb.org/3/movie/popular?page=1'

export const TMDB_POSTER_CDN_URL="https://image.tmdb.org/t/p/w500"
export const TMDB_URL_TOPRATED='https://api.themoviedb.org/3/movie/top_rated?page=1'

export const SUPPORTED_LANGUAGES=[{identifier:'en',name:"English"},
  {identifier:'hi',name:"Hindi"},
  {identifier:'pun',name:"Punjabi"}
]


// export const backedServer="http://localhost:3004"
export const backedServer = "http://apinetflixgpt.tajinder.in";




