import React from "react";
import { CDN_URL } from "../../utils/constants";
import ShimmerFoodSugg from "../../shimmer/ShimmerFoodSugg";

const FoodSuggCar = ({ data }) => {
  return (
    <div className="flex flex-col overflow-x-hidden gap-2 mt-4">
      <div className="flex justify-end gap-3">
        <button>left</button>
        <button>right</button>
      </div>
      <div className="flex gap-2">
        {data.length === 0 ? <ShimmerFoodSugg /> : data.map((el) => {
          return <img className="w-32 rounded-lg" src={CDN_URL + el.imageId} />;
        })}
      </div>
    </div>
  );
};

export default FoodSuggCar;
