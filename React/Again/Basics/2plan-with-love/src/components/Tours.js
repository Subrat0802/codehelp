import React, { useState } from "react";

const Tours = ({ tours, removeTour }) => {
  const { id, name, image, info, price } = tours;
  const [showLessMore, setShowLessMore] = useState(false);

  const description = showLessMore ? info : `${info.substring(0, 150)}....`;

  function readmoreHandler() {
    setShowLessMore(!showLessMore);
  }
  return (
    <div className="">
      <div className="w-72 min-h-[500px] pb-4 bg-gray-200">
        <img className="h-64 w-full" src={image} alt={name} />
        <h3>{price}</h3>
        <h3>{name}</h3>
        <h3>
          {description}
          <span onClick={readmoreHandler}>
            {showLessMore ? "Show Less" : "Show More"}
          </span>
        </h3>
        <button
          onClick={() => removeTour(id)}
          className="bg-red-500 px-3 py-1 rounded-lg font-bold text-white"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};
export default Tours;
