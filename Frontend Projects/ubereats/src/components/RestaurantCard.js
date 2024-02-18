import React from 'react'
import { CDN_URL } from '../utils/constents'
import { FaStar } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

const RestaurantCard = ({resInfo}) => {
    const {cloudinaryImageId, avgRating, name, sla, cuisines, costForTwo} = resInfo;
    const subName = `${name.substring(0, 17)}`

    const threeDot = () =>  {
        if(subName.length > 16) {
            return `...`
        }
    }
   return (
    <div className=' lg:min-h-[360px] transition-all duration-200 hover:bg-transparent hover:shadow-lg w-[100%] bg-black rounded-xl text-white  hover:text-green-500 cursor-pointer' >
        <div className='h-48'>
            <img className='h-full w-full rounded-t-xl object-cover'  src={CDN_URL + cloudinaryImageId}/>
        </div>
        <div className='p-2 text-start'>
            <p className="text-2xl font-semibold">{subName}<span className='text-pure-greys-300'>{threeDot()}</span></p>
            <div className='flex'>
                <p className='flex items-center'><FaStar className="text-yellow-400"/>{avgRating}&nbsp;&nbsp; </p>
                <p>{sla.deliveryTime} mins</p>
            </div>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
        </div>
    </div>
  )
}


//higher order component

//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className='absolute bg-[#207a40] z-10 group flex items-center text text-richblack-50 font-semibold p-1 rounded-lg  '><IoMdDoneAll />&nbsp; Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard