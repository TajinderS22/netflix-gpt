import {configureStore} from '@reduxjs/toolkit'
import UserReducer from'./UserSlice'
import moviesReducer from'./moviesSlice'
import configReducer from './configSlice'

// Revise from here and use this knowlwdge 


const Appstore=configureStore(
    {
        reducer:{
            user:UserReducer,
            movies: moviesReducer,
            config: configReducer,

        }
    }

)

export default Appstore