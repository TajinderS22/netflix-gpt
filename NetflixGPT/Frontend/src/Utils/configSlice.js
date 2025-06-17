import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice(
    {
        name:'config',
        initialState:{
            Language:'en',
            MoviesSearchedFromGPT:false,

        },
        reducers:{
            selectLanguage:(state,action)=>{
                state.Language=action.payload;
            },
            setMoviesSearchedFromGPT:(state,action)=>{
                state.MoviesSearchedFromGPT=action.payload
            }
        }

        
    }
)
export const{selectLanguage,setMoviesSearchedFromGPT}=configSlice.actions

export default configSlice.reducer