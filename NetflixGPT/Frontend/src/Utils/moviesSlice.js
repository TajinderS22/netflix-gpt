import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    MainTrailerVideo: null,
    PopularMovies: null,
    TopRated: null,
    GPTMovies: null,
    LoadingGPTMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addMainTrailerVideo: (state, action) => {
      state.MainTrailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addGPTMovies: (state, action) => {
      state.GPTMovies = action.payload;
    },
    removeGPTMovies: (state) => {
      state.GPTMovies = null;
    },
    LoadingGPTMovies: (state, action) => {
      state.LoadingGPTMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRated,
  addGPTMovies,
  removeGPTMovies,
  LoadingGPTMovies,
} = moviesSlice.actions;
export const { addMainTrailerVideo, addPopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
