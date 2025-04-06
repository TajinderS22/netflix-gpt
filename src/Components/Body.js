import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './Home'



const Body = () => {



  const appRouter  =createBrowserRouter([

    {
      path:'/',
      element:<Home/>
    }, 
    {
        path:"/browser",
        element:<Browse/>
    },
    {
      path:"/login",
      element:<Login/>
    }

  ])

  return (
    <div className='  bg-black min-h[100svh]' >
          <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body