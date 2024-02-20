import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' pt-[10%] px-16  absolute text-white bg-gradient-to-r from-black h-[100vh]'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2 opacity-50'>{overview}</p>
        <div className=''>
            <button className='bg-gray-700 text-white px-8 py-2 text-lg mr-8 bg-opacity-50 rounded-sm'>Play</button>
            <button className='bg-black text-white px-8 py-2 text-lg mr-8 rounded-sm'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle