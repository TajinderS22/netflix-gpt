import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice(
    {
        name:'config',
        initialState:{
            Language:'en'
        },
        reducers:{
            selectLanguage:(state,action)=>{
                state.Language=action.payload;
            }
        }

        
    }
)
export const{selectLanguage}=configSlice.actions

export default configSlice.reducer