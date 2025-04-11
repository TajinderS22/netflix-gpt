/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit"

const UserSlice=createSlice(
    {
        name:"name",
        initialState: null,
        reducers:{
            addUser :(state,action)=>{

                return action.payload;

            },
            removeUser:(state,action)=>{

                return null;
            }
        }
    }
)

export const{addUser,removeUser}=UserSlice.actions;
export default  UserSlice.reducer