import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Tag = () => {
  const [tag, setTag] = useState("")

  const changeHandler = (event) => {
    setTag(event.target.value);
  }

  const {gif, loading, fetchApiData} = useGif(tag);
  return (
    <div className="min-h- flex flex-col gap-y-5 mt-[15px] bg-blue-500 w-1/2 rounded-lg border border-black items-center">
      <h1 className="text-2xl underline mt-1 font-bold mb-6 ">Random Gif OF {tag}</h1>
      {loading ? <Spinner /> : <img src={gif} width={450} />}

      <input
        className="mt-6 w-10/12 rounded-md py-2 px-2"
        placeholder="Search GIF'S"
        onChange={changeHandler}
      />
      <button
        className="mb-6  hover:bg-gray-200 w-10/12 transition-all duration-100 bg-yellow-500 font-fold text-xl  py-2 rounded-md"
        onClick={() => fetchApiData(tag)}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
