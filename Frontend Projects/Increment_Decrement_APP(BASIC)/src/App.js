import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const changeHandleRreSet = () => {
    setCount(0);
  }
  const changeHandlerInc = () => {
    setCount(count + 1);
  }
  const changeHandlerDec = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <div className='w-full h-[100vh] flex flex-col justify-center items-center bg-gray-600'>
        <h1 className='text-4xl mb-5 text-white'>Counter App</h1>
        <div className='flex'>
          <button onClick={changeHandlerDec} className='bg-gray-200 text-black font-bold px-5 text-4xl '>-</button>
          <div className='flex justify-center items-center bg-gray-200 text-black font-bold px-8 text-2xl' >{count}</div>
          <button onClick={changeHandlerInc} className='bg-gray-200 text-black font-bold px-5 text-4xl '>+</button>
        </div>
        <button onClick={changeHandleRreSet} className='text-xl bg-gray-300 mt-3 px-3 rounded-full hover:bg-gray-100'>Reset Counter</button>
      </div>
    </div>
  )
}

export default App