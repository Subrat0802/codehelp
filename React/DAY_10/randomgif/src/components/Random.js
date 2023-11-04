import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGig from "../hooks/useGig";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {


    const {gif,loading,fetchData} = useGig();

  
  return (
    <div
      className="w-1/2  bg-green-500 gap-y-5 mt-[30px] rounded-lg border 
        border-black flex flex-col items-center"
    >
      <h1 className="text-2xl underline uppercase font-bold mt-[20px]">A Random GIF</h1>
      {loading ? (<Spinner />) : (<img src={gif} width="450px"/>)}
      <button
        onClick={() => fetchData()}
        className="w-10/12 opacity-80 bg-yellow-500 text-lg py-2 rounded-lg
        mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
