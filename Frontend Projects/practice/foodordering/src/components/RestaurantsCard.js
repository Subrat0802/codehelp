import React from "react";
import { IMAGE_CDN } from "../utils/contants";

const RestaurantsCard = (props) => {
  const { resData } = props;
  const {name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo} = resData.info;

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
      }}
      className="w-48 border p-1 hover:border-black duration-200 cursor-pointer"
    >
      <img
        className="w-[100%] h-40 object-cover"
        src={IMAGE_CDN + cloudinaryImageId}
      />
      <h2 className="font-bold">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} min</h4>
    </div>
  );
};


export const withPromotedLabel = (RestaurantsCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantsCard {...props} />
      </div>
    )
  }
}

export default RestaurantsCard;


//if no dependency array is not present useeffect will call on every render
//if there is empty array useeffect will call only once (first render, only initial render just once)
//if there is dependency array the useeffect will call whenever dependency array changes or updated
