import React, { useEffect, useState } from "react";
import { carausal_IMG } from "../utils/mockData";

const Carausal = () => {
  const [carausalState, setCarausalState] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCarausalState((prevIndex) => (prevIndex + 1) % carausal_IMG.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-[90%]">
      <div className="w-full flex justify-center mt-10 cursor-pointer  ">
        <img className=" w-[60%] h-[400px]" src={carausal_IMG[carausalState]} />
      </div>
    </div>
  );
};

export default Carausal;
