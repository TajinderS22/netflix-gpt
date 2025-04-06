import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div className='h-svh w-full bg-black mx-auto text-white '>

        <div className=' h-[800px] mx-auto max-w-[2000px] shadow-2xl shadow-red-600 bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg)]  bg-blend-darken bg-opacity-0 '>
            <Header/>

            <div className='absolut -top-10 h-[715px] max-w-[2000px] m-auto  text-center bg-black bg-opacity-40 p-6 ' >
                <div className='h-[300px] w-2/4 max-w-[700px] m-auto mt-36 flex flex-col'>

                    <div className='text-6xl font-extrabold'>
                        Unlimited movies, TV shows and more
                    </div>
                    <p className='mt-4 font-medium'>
                    Starts at ₹149. Cancel at any time.
                    </p>

                </div>
            </div>

        </div>
        


    </div>

  )
}

export default Home