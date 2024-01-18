import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = "9ybYq1oRB5llLdJiiEEp6CtvHPmNbJ9g";
const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const Random = () => {

  

  const [tag, setTag] = useState("");


  const onChangeSearch = (event) => {
    setTag(event.target.value);
  }
  
  const { gifData, loading, fetchData } = useGif();

  return loading ? <Spinner className="flex justify-center items-center "/> : (
  <div className="flex flex-col items-center ">
    <img src={gifData}/>
    <input className="py-2 px-2 rounded-lg w-[100%] mt-6" placeholder="Search GIF " onChange={onChangeSearch}/> 
    <button onClick={() => fetchData(tag)} className="bg-purple-500 text-white text-2xl font-semibold px-5 py-3 rounded-lg mt-2">Random GIF</button>
  </div>
  );
};

export default Random;
