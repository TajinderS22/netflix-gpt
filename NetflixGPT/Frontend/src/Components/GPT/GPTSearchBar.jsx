import React from 'react'
import { lang } from '../../Utils/LanguageConstatnts'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

    const selectedLanguage =useSelector((store)=>store.config)
    const currentLang=lang[selectedLanguage.Language]
    console.log(selectedLanguage.Language)
  return (
    <div className="pt-24 mx-auto  cursor-pointer ">
        <form action="" className='flex justify-between w-[50%] mx-auto  '>
            <input type="text" placeholder={currentLang.GPTSearchBarPlaceHolder} className="p-2 px-4 bg-gray-500/50 border-1 border-white rounded-lg w-[85%]  hover:shadow-2xl  hover:shadow-red-400/70"/>
            <button className="px-4 min-w-18 bg-red-500 text-white rounded-lg  hover:shadow-2xl  hover:shadow-red-400/70 "> {currentLang.search} </button>

        </form>
    </div>
  )
}

export default GPTSearchBar