import React from 'react'

const Card = (props) => {
    const review=props.review;
  return (
    <div className="flex justify-center items-center w-full  ">
        
        <div className="w-[300px] text-center  bg-gray-200 rounded-md p-2">
            <img  src={review.image} width="300px"/>
            <h2 className="text-green-600 font-bold " >{review.name}</h2>
            <h2>{review.job}</h2>
            <p>{review.text}</p>
        </div>
        
    </div>
  )
}

export default Card