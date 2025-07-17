/* eslint-disable no-unused-vars */
import React, {  useContext ,useState,Link,useEffect} from 'react'
import Header from './Header'
import UserContext ,{UserContextProvider} from '../Utils/context/UserContext'
import checkValidData from '../Utils/checkValidData'
import axios from 'axios'
import { addUser } from '../Utils/UserSlice'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'


const Login=()=> {
    const context=useContext(UserContext)
    const {isLoginForm,setisLoginForm,isUserLogedIn,setisUserLogedIn}= useContext(UserContext)
    // console.log(isLoginForm)

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [username,setusername]=useState(null)
    const [email,setemail]=useState(null)
    const [password,setpassword]=useState(null)
    const [errorMessage,seterrorMessage]= useState(null)

    // console.log(username,email,password)


    const HandleAuthClick=async ()=>{
        // const isDataValid=checkValidData(email,password)
        // seterrorMessage(isDataValid)

        const data ={
            username:username,
            password:password,
            email:email,
        }

        if(!isLoginForm){
            try{
                const response= await axios.post('http://localhost:3000/auth/signup',data)
                console.log(response.data)
                dispatch(addUser(response.data))
                localStorage.setItem('user', JSON.stringify(response.data));
                setisUserLogedIn(true)

                console.log(isUserLogedIn)
                navigate('/browse')
                
                
    
            }catch(err){
                console.log(err)
                seterrorMessage(err.response.data.message)
            }
        }else{
            try{
                const response= await axios.post('http://localhost:3000/auth/signin',data)
                console.log(response.data[0])
                dispatch(addUser(response.data[0]))
                localStorage.setItem('user',JSON.stringify(response.data[0]))
                setisUserLogedIn(true)
                navigate('/browse')
                

    
            }catch(err){
                console.log(err)
                seterrorMessage(err.response.data.message)
            }
        }

        
    }
    // console.log(context)
  return (
      <div className=' h-[100svh] ' >
          
          <Header/>
            
        <div className='
        bg-black/10 w-[100svw] min-h-[80svh]  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web_tall_panel/IN-en-20250331-TRIFECTA-perspective_ed11f76a-3e10-41ea-a60d-9008d2b6c103_large.jpg)] bg-no-repeat bg-cover bg-blend-overlay'>
            
            <div className='   text-white pt-44' >

                <div className='bg-zinc-950/70 h-[600px] md:w-[450px] w-[90svw] m-auto py-4 rounded-xl  px-[2.5%]'>
                    <div className='text-left m-4 text-4xl font-bold mx-8'> 
                        {isLoginForm?"SignIn":"SignUp"}
                    </div>

                    <form onSubmit={(e)=> e.preventDefault()} className='flex flex-col   ' action="">
                        {isLoginForm ? null:
                        <input type="text" placeholder='First Last' className='bg-gray-600/50 p-2 m-4  mx-8 border-1 border-red-200/50 rounded-lg  hover:shadow-md hover:shadow-red-600/50'
                        onChange={(e )=>{

                            setusername(e.target.value)

                        }}/>
                            
                        }

                        <input type="email" placeholder='Email@email.com' className='bg-gray-600/50 p-2 m-4  mx-8 border-1 border-red-200/50 rounded-lg  hover:shadow-md hover:shadow-red-600/50'
                        onChange={(e )=>{

                            setemail(e.target.value)

                        }}
                        
                        />
                        <input type="tex" placeholder='Password' className="bg-gray-600/50 p-2 m-4 mx-8 border-1 border-red-200/50 rounded-lg  hover:shadow-md hover:shadow-red-600/50 " 
                        onChange={(e )=>{

                            setpassword(e.target.value)

                        }}/>
                        <p className='text-red-300 font-bold'>{errorMessage}</p>
                        <button className='bg-red-600 rounded-lg mx-8 h-8 my-3 hover:bg-red-700   hover:shadow-md hover:shadow-red-600/50'
                        
                        onClick={HandleAuthClick}
                        
                        >Submit</button>
                    </form>
                    <div>
                        <p className="mt-4">
                            Foget password?
                        </p>
                    </div>
                    <div>
                        {
                            isLoginForm ? <p className='text-md my-4 mt-10 text-left mx-8'>
                            New to Netlflix? <span onClick={()=>setisLoginForm(!isLoginForm)} className='font-medium text-lg' > Signup </span>
                            </p>:
                            <p className='text-md my-4 mt-10 text-left mx-8'>
                            Already a member? <span onClick={()=>setisLoginForm(!isLoginForm)} className='font-medium text-lg' > Sign in </span>
                            </p>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    
  )
}

export default Login