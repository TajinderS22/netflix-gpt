/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react"
import { Navigate, useNavigate } from "react-router"
import {  useSelector } from "react-redux"
import { removeUser } from "../UserSlice"
import { useDispatch } from "react-redux"
import UserContext  from '../context/UserContext'

const ProtectedBrowseRoute=({children})=>{
    const navigate=useNavigate()
    const dispatch= useDispatch()
    

    const {isUserLogedIn}=useContext(UserContext)

    // useEffect(()=>{
    //     if(!isUserLogedIn){
    //         dispatch(removeUser())
    //         navigate('/auth')
    //     }
    // },[isUserLogedIn])


    
    return isUserLogedIn? children:<Navigate to='/auth'></Navigate>

}

export default ProtectedBrowseRoute