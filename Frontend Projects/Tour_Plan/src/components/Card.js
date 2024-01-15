import React, { useState } from 'react'

const Card = ({info, removeItem, addDestination, addButton}) => {

    const [showLessMore, setShowLoessMore] = useState(false);

    const infoSub = `${info.info.substring(0, 80)}...`;

  return (
    <div className='w-72 border rounded-lg  '>
        <div>
            <img className='rounded-t-lg h-72 w-full  object-cover' src={info.image}/>
        </div>
        <div className='p-2'>
            <p className='text-3xl text-green-600'>{info.name}</p>
            <p className='cursor-pointer '>
            {
                showLessMore ? info.info : infoSub
            }    
            <span className='text-blue-600' onClick={() => setShowLoessMore(!showLessMore)}>
                {
                    !showLessMore ? "show more" : "show less"
                }
            </span>
            </p>
            <p>Rs. {info.price}</p>
            <button className='px-2 py-1 mt-2 hover:bg-red-700 bg-green-600 rounded-lg mr-4' onClick={() => removeItem(info.id)}>Remove</button>
            <button onClick={() => addDestination(info)} className='px-2 py-1 mt-2 hover:bg-green-900 hover:text-white bg-green-600 rounded-lg'>Add</button>
        </div>
    </div>
  )
}

export default Card
