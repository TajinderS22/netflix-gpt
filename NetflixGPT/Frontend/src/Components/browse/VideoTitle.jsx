import React from 'react'

const VideoTitle = (value) => {
    const { original_title, overview } = value.value;
    // console.log(original_title)
  return (
    <div className=' text-left md:w-[60%] md:pl-[5%] not-md:mt-12 pl-6  mb-44  relative  min-h-[100%] top  pt-[14%] max-h-[1500px]  text-white bg-gradient-to-r  from-black ' >

        <h1 className='font-bold md:text-6xl mt-18 text-[2em] md:my-6'>
            {original_title}
        </h1>
        <p className='my-6 md:text-xl text-[1em]  w-7/12'>
            {overview}
        </p>
        <div className=' flex justify-between w-[30%]  mt-18 '>
            <button className='border-1 border-red-200 	 bg-white  hover:bg-white/90 text-black hover:shadow-xl hover:shadow-red-600 p-1 rounded-xl max-w-[150px] min-w-[100px] w-[70%] min-h-12 h-18  text-2xl font-medium  mr-4 ' >
                Play
            </button>
            <button className='border-1 border-red-200 hover:bg-red-200/70 bg-gray-200/50 hover:shadow-xl hover:shadow-red-600 p-1 rounded-xl max-w-[200px] min-w-[100px] w-[90%] not-md:min-w-[200px] min-h-12 h-18  text-2xl font-medium mx-4 ' >
                More Info
              </button>
              

        </div>

    </div>
  )
}

export default VideoTitle