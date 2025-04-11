/* eslint-disable no-unused-vars */
import React, { useEffect,useContext, useState } from 'react'
import UserContext from '../Utils/context/UserContext'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../Utils/UserSlice'
import { selectLanguage } from '../Utils/configSlice'
import { SUPPORTED_LANGUAGES } from '../Utils/Constants'
import { lang } from '../Utils/LanguageConstatnts'
function Header() {
    const {isLoginForm,setisLoginForm,isUserLogedIn,setisUserLogedIn,setshowGPTSearch,showGPTSearch}=useContext(UserContext)
    const user=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        // console.log(isUserLogedIn)
    },[isUserLogedIn])

  return (
      <div className='bg-gradient-to-b from-black absolute w-[100svw] max-w-[2700px] z-50 '>
        <nav className=' w-full pt-6 max-w-[1800px]  sticky top-0  mx-auto flex justify-between md:px-2 px-2  text-right pb-2 '> 
        {/* logo */}
        <Link to='/'>
        <div className="w-30 " >
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className='' alt="Logo of Netflix" />
        </div>
        </Link>
        {/* links */}
        <div className=' flex justify-end w'>
            
            {/* {user? */}
            
            <div>
                <button className=' text-lg text-black rounded-lg h-8 font-meduim bg-green-400 px-4' onClick={()=> {setshowGPTSearch(!showGPTSearch)}}>
                    {showGPTSearch? "Homepage" :"GPT Search"}
                </button>
                {console.log(showGPTSearch)}
            </div>
            {/* : 
            null
            } */}

            <div className='  ' >
                

                <select name="language" id="language-selection" className='border-1 h-8 p-1 mx-2 rounded-4xl flex justify-center' onChange={(e)=>{
                    dispatch(selectLanguage(e.target.value))
                }} >
                {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier} value={lang.identifier} className='text-black  ' >{lang.name}</option >)}                </select>
            </div>
            

            {user? <div className='  hover:bg-red-700    hover:text-white h-8 p-1 hover:shadow-lg hover:shadow-blue-400 rounded-3xl'>      
                {user.name}
                </div>: null}
            <div>
                <Link to='/auth'>
                <button className="bg-white text-black w-24 p-1 border-1 rounded-4xl ml-2" 
                onClick={()=>{
                    if(isUserLogedIn){
                        dispatch(removeUser())
                        localStorage.removeItem('user'); 
                        setisUserLogedIn(false)

                    }else setisLoginForm(!isLoginForm)
                }}>
                    {isUserLogedIn?'Sign Out': isLoginForm? 'Signup':'Login'}
                </button>
                </Link>
            </div>
        </div>

        </nav>
    </div>
  )
}

export default Header