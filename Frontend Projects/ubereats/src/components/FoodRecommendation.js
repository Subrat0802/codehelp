import React from "react";
import { cararusal_CDN_LINK } from "../utils/constents";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";

const FoodRecommendation = ({ carausal }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400, 
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[80%] mb-10">
      <div className="flex flex-wrap justify-center flex-col gap-4 mt-10">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold">User, what's on your mind?</h1>
          <div className="flex gap-4">
            <button
              className="bg-pure-greys-600 rounded-full p-2 cursor-pointer"
              onClick={scrollLeft}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-pure-greys-600 rounded-full p-2 cursor-pointer"
              onClick={scrollRight}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div
            ref={containerRef}
            className="flex flex-row overflow-x-hidden overflow-y-auto gap-4"
          >
            {carausal.map((car) => {
              return (
                <img
                  key={car.id}
                  className="w-28 rounded-lg cursor-pointer object-cover"
                  src={cararusal_CDN_LINK + car.imageId}
                  alt={car.altText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRecommendation;
