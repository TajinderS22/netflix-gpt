import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      
      <div className='px-28 pt-2  bg-gradient-to-b from-black flex justify-between'>
            <img className='w-40 h-20' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />


            <div className='mt-6 mr-6'>
                
            <label for="cars">Choose a car:</label>

            <select name="cars" id="cars">
                <option value="eng">English</option>
                <option value="hin">Hindi</option>
                <option value="punj">Punjabi</option>
            </select>
            
           <Link to="/login">
              <button className='bg-red-600 rounded-md w-20 h-8 font-semibold text-white ml-5'>
                    Sign in
              </button>
           </Link>


            </div>
      </div>


    </div>
  )
}

export default Header