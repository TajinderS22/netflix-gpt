/* eslint-disable no-unused-vars */
import React,{createContext, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../UserSlice';
import { useSelector } from 'react-redux';


const UserContext=createContext('')

export const UserContextProvider= ({children})=> {
  const dispatch=useDispatch()

  


  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     dispatch(addUser(JSON.parse(storedUser)));
  //     setisUserLogedIn(true);
  //   }
  // }, []);
  // const user = useSelector((state) => state.user);
  // useEffect(() => {
  //   if (user) {
  //     setisUserLogedIn(true);
  //   } else {
  //     setisUserLogedIn(false);
  //   }
  // }, [user]);

  // const storedUser = localStorage.getItem('user');
  // if (storedUser) {
  //   dispatch(addUser(JSON.parse(storedUser)));
  // }

    const [isLoginForm,setisLoginForm] = useState(false);
    const [isUserLogedIn,setisUserLogedIn]=useState(false);
    const [showGPTSearch,setshowGPTSearch]=useState(false)
    const value={isLoginForm,setisLoginForm,isUserLogedIn,setisUserLogedIn,showGPTSearch,setshowGPTSearch}
  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext