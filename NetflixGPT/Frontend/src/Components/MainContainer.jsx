import React from 'react'

import Header from './Header'
import Home from './Home'

function MainContainer() {
  return (
      <div className='bg-red-950/50 w-[100svw] min-h-[50svh]  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web_tall_panel/IN-en-20250331-TRIFECTA-perspective_ed11f76a-3e10-41ea-a60d-9008d2b6c103_large.jpg)] bg-no-repeat bg-cover bg-blend-overlay '>
          <Header></Header>

        <div className=' backdrop-blur-3xl h-[100svh] w-[100svw]  mx-auto'>
        

            <div className='max-w[1800px]'>


            <div className='p-6 '>
            
            <div>

            <div className=" max-w-[1800px] mx-auto shadow-red-500 shadow-xl  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web_tall_panel/IN-en-20250331-TRIFECTA-perspective_ed11f76a-3e10-41ea-a60d-9008d2b6c103_large.jpg)] bg-no-repeat  bg-cover bg-center  ]  bg-black/60 min-h-[650px]  rounded-xl clip-concave-b bg-blend-color-burn backdrop-blur-3xl mt-24
            ">
                {/* <div class="bg-black/30 absolute
                        backdrop-blur-none ... w-full h-[100svh]"> </div> */}
                

                <div className=''>
                    <Home ></Home>                                 
                </div>
            </div>
                
                {/* <div className='rounded-t-4xl bg-amber-400 ' > */}
                    {/* 1
                </div> */}



            </div>
            


            </div>
            

        </div>

        </div>

    </div>
  )
}

export default MainContainer