import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSeachBar = () => {
  const language = useSelector(store => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='p-2  w-1/2 bg-gradient-to-r from-black'>
            <input type='text' className='py-2 px-3 w-[85%] ' placeholder={lang[language].placeholder}/>
            <button className='bg-red-700 py-2 px-4 text-white'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSeachBar