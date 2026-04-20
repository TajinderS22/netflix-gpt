import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    Language: "en",
    MoviesSearchedFromGPT: false,
    selectedMovie: null,
  },
  reducers: {
    selectLanguage: (state, action) => {
      state.Language = action.payload;
    },
    setMoviesSearchedFromGPT: (state, action) => {
      state.MoviesSearchedFromGPT = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});
export const { selectLanguage, setMoviesSearchedFromGPT, setSelectedMovie } =
  configSlice.actions;

export default configSlice.reducer;
