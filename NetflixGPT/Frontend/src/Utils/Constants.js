
export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzE0MGNmNzZiNjg2Zjg4YjRjMmY5ZjJkN2VkYTdlNSIsIm5iZiI6MTc0NDIyMjMxNC4wOTQsInN1YiI6IjY3ZjZiODZhNmMzNTgzYzk3NTk5ZDc0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZefExAdDUWOjb0J2hGsx7khHOQqu7JteOZDlq33Uxk'
    }
  };

export const TMDB_URL_NOWPLAYING="https://api.themoviedb.org/3/movie/now_playing?page=1"
const Api_key='37140cf76b686f88b4c2f9f2d7eda7e5'
export const TMDB_URL_POPULAR='https://api.themoviedb.org/3/movie/popular?page=1'

export const TMDB_POSTER_CDN_URL="https://image.tmdb.org/t/p/w500"
export const TMDB_URL_TOPRATED='https://api.themoviedb.org/3/movie/top_rated?page=1'

export const SUPPORTED_LANGUAGES=[{identifier:'en',name:"English"},
  {identifier:'hi',name:"Hindi"},
  {identifier:'pun',name:"Punjabi"}
]