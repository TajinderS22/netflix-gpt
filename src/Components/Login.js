import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className='bg-black min-h-[100svh] '>
        <div className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg)]
          max-w-[2000px] h-[800px]  m-auto rounded shadow-xl shadow-red-700' >
          <div>
            <Header/>
          </div>
          <div className='m-auto mt-32 h-[500px] rounded-lg p-12 bg-[#151414a7] w-[400px] '>
            <form className='w-12/12 text-white'>
              <input type="email" className='w-full my-4 h-12 rounded-md bg-[#090613bd] border-2  font-black p-2' placeholder='Emali' />
              <input type="password" className='w-full my-4 h-12 rounded-md bg-[#090613bd]  border-2 font-black p-2' placeholder='Password' />
              <button type='' className='w-full bg-red-600 h-10 rounded-lg my-2'> Sign In</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login