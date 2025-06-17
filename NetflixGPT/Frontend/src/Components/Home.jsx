import React from 'react'
import Header from './Header'

function Home() {
  return (
    <div className="w-10/12 mx-auto  " >
      <div className='md:w-[700px] w-[70svw] mx-auto py-14 pt-[150px]'>
        <div className="md:text-6xl text-3xl font-extrabold mt-30">
        Unlimited movies, TV shows and more
        </div> 
        <div className='my-4 font-medium text-xl md:text-2xl '>
        Starts at ₹149. Cancel at any time.
        </div>
        <div className='my-4 font-medium'>
        Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className='flex  md:w-[450px] mx-auto '>
          <div>
            <input type="email" name='signup-email' className='md:w-[300px] w-[200px]  h-[40px] rounded-4xl bg-white/30 p-4 border-1 border-red-600/30' placeholder='Netflix@gmail.com' />
          </div>
          <button type='submit' htmlFor='signup-email' className=" bg-red-700/90 p-2 rounded-3xl w-[100px]  " >
            Submit
          </button>
        </div>
      </div>


    </div>
  )
}

export default Home