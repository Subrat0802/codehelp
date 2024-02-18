import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Card = (props) => {
  let reviews = props.reviews;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          src={reviews.image}
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] right-[-10px]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="tracking-wider font-bold text-2xl capitalize">{reviews.name}</p>
      </div>

      <div className="text-center ">
        <p className="text-violet-300 uppercase text-sm mt-1">{reviews.job}</p>
      </div>

      <div className="flex justify-center">
        <FaQuoteLeft className="text-violet-400 mt-7" />
      </div>

      <div className="text-center mt-4 text-slate-600">
        <p>{reviews.text}</p>
      </div>

      <div className="flex justify-center">
        <FaQuoteRight className="text-violet-400 mt-5" />
      </div>

      
    </div>
  );
};

export default Card;
