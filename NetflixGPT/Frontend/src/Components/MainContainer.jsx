import React from 'react'

import Header from './Header'
import Home from './Home'

function MainContainer() {
  return (
    <div className="bg-red-950/50 w-[100svw] min-h-[50svh]  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg)] bg-no-repeat bg-cover bg-blend-overlay ">
      <Header></Header>

      <div className=" backdrop-blur-3xl h-[100svh] w-[100svw]  mx-auto">
        <div className="max-w[1800px]">
          <div className="p-6 ">
            <div>
              <div
                className=" max-w-[1800px] mx-auto shadow-red-500 shadow-xl  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg)] bg-no-repeat  bg-cover bg-center  ]  bg-black/60 min-h-[650px]  rounded-xl clip-concave-b bg-blend-color-burn backdrop-blur-3xl mt-24
            "
              >
                {/* <div class="bg-black/30 absolute
                        backdrop-blur-none ... w-full h-[100svh]"> </div> */}

                <div className="">
                  <Home></Home>
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
  );
}

export default MainContainer