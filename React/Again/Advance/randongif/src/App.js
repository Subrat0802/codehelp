import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col background relative items-center'>
      <h1 className='py-2 font-bold rounded-md text-4xl bg-white absolute w-[90%] text-center mt-6 ml-[25px] mr-[25px] overflow-hidden'>RANDOM GIFS</h1>

      <div className='flex flex-col mt-24 w-full items-center'>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App
