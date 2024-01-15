import React, { useState } from "react";
import reviews from "./data";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0)
  const [data, setData] = useState(reviews[index]);
  

  const rightClickHandler = () => {
    const newIndex = (index + 1) % reviews.length;
    setIndex(newIndex);
    setData(reviews[newIndex]);
  };

  const leftClickHandler = () => {
    const newIndex = (index - 1 + reviews.length) % reviews.length;
    setIndex(newIndex);
    setData(reviews[newIndex]);
  };

  const randomClickHandler = () => {
    let newIndex;
    
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === index);
  
    setIndex(newIndex);
    setData(reviews[newIndex]);
  };

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center ">
      <div className="w-[60%] min-h-[100vh] flex flex-col justify-center items-center ">
        <div>
          <h1 className="text-4xl text-purple-800 font-semibold mb-6">
            Testimonial App
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center h-[70vh] relative shadow-2xl">
          <div className="absolute top-[-75px] ml-6">
            <img className="rounded-full w-[17%]" src={data.image} />
          </div>
          <div className="flex flex-col justify-center items-center mt-[-40px] mb-7">
            <p className="text-3xl">{data.name}</p>
            <p className="text-gray-700 ">{data.job}</p>
          </div>

          <div className="px-20">
            <h1 className="text-center text-gray-900">{data.text}</h1>
          </div>
          <div className="flex flex-row w-[30%] justify-between mt-12 text-4xl text-purple-800 ">
            <FaAngleLeft onClick={rightClickHandler} className="bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer" />
            <FaAngleRight onClick={leftClickHandler} className="bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer" />
          </div>
          <div>
            <button onClick={randomClickHandler} className="mt-12 bg-purple-800 text-white text-2xl px-4 py-2 rounded-md hover:bg-purple-700 cursor-pointer">
              Random
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
