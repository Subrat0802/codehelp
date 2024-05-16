import React from "react";
import Marquee from "react-fast-marquee";

const OfferCar = ({ data }) => {
  return (
    <>
      <div>
        <Marquee autoFill pauseOnHover direction="left" speed={50}>
          <div className="overflow-x-hidden flex gap-3 mt-8 cursor-pointer">
            {data.map((el, index) => {
              return <img className="w-[380px]"  key={index} src={el} loading="lazy" />;
            })} 
            <div className="mx-[1px]"></div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default OfferCar;
