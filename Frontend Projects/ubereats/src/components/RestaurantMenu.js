import React, { useEffect, useState } from "react";
import { Restaurant_API } from "../utils/constents";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);
  
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  console.log(restaurantData);



  const fetchData = async () => {
    try {
      const data = await fetch(Restaurant_API + resId);
      const json = await data.json();

      setRestaurantData(json?.data?.cards[0]?.card?.card?.info);

      const ResCataegories =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setRestaurantMenuData(ResCataegories);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  

  if (restaurantData === null || restaurantMenuData === null) {
    return <Spinner />;
  }

  return (
    <div className="pt-32 min-h-[200vh] pb-2 text-pure-greys-25  scroll-smooth ">
      <div className="mx-auto mb-10 ">
        <div className="w-6/12 mx-auto flex p-3">
          <div className="w-[80%]">
            <div className="font-bold text-4xl ">{restaurantData.name}</div>
            <div className="">{restaurantData.cuisines.join(", ")}</div>
            <div className="text-[#00C544] ">
              Cost {restaurantData.costForTwoMessage}
            </div>
            <div className="text-[#00C544] ">
              {restaurantData.areaName}
            </div>
          </div>
          <div className=" w-[20%]">

          </div>
        </div>
      </div>
      <div className="">
        {restaurantMenuData.map((el, index) => {
          return (
            <RestaurantCategory
              key={index}
              data={el.card?.card}
              showItems={index === showIndex ? true : false}
              showIndex
              itemLength={restaurantData.length}
              setShowIndex={() => setShowIndex(showIndex === null ? index : null)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
