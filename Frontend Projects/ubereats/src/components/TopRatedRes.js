import React from 'react'
import { CDN_URL } from '../utils/constents'
import { FaStar } from "react-icons/fa";

const TopRatedRes = ({topRatedRes, ref, containerRef}) => {
    const {cloudinaryImageId, avgRating, name, sla, cuisines, costForTwo} = topRatedRes.info;
    const subName = `${name.substring(0, 17)}`

    const threeDot = () =>  {
        if(subName.length > 16) {
            return `...`
        }
    }
  return (
    <div ref={containerRef} className='' >
        <div className='w-80 bg-black rounded-xl'>
        <div className='h-48'>
            <img className='h-full w-full rounded-t-xl object-cover'  src={CDN_URL + cloudinaryImageId}/>
        </div>
        <div className='p-2 text-start'>
            <p className="text-2xl font-semibold">{subName}<span className='text-pure-greys-300'>{threeDot()}</span></p>
            <div className='flex'>
                <p className='flex items-center'><FaStar className="text-yellow-400"/>{avgRating}&nbsp;&nbsp; </p>
                <p>{sla.deliveryTime} mins</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default TopRatedRes