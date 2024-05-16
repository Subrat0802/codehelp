import React, { useEffect, useState } from 'react'
import { CAROUSEL_OFFERS_IMG } from '../utils/mockData'
import OfferCar from '../components/homePage/OfferCar'
import FoodSuggCar from '../components/homePage/FoodSuggCar';
import Reastaurants from '../components/homePage/Reastaurants';

const Home = () => {
  const [foodeSuggetion, setFoodeSuggetion] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2356379&lng=77.439472&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        // console.log(json);
        setFoodeSuggetion(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)

        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      catch(error){
        console.log(error);
      }
    }
    fetchData();
  }, []);


  return (
    <div className='flex flex-col w-10/12  mx-auto '>
        <OfferCar data={CAROUSEL_OFFERS_IMG} />
        <FoodSuggCar data={foodeSuggetion}/>
        <Reastaurants data={restaurants}/>
    </div>
  )
}

export default Home