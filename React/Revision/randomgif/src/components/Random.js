import axios from "axios";
import React, { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");
  

  async function fetchData(){
    try{
        let res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
        let data = await res.json();
        console.log(data);
    }
    catch(error){

    }
  }

  useEffect(() => {
    fetchData();
  },[])

  function clickHandler() {

  }



  return (
    <div className="w-1/2 h-[450px] bg-green-500 rounded-lg border
         border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt-[20px]">Random gif</h1>
      <img src={gif} width={450} />
      <button className="w-10/12 opacity-80 bg-yellow-500 text-lg py-2 rounded-lg
        mb-[20px]" onClick={clickHandler}>Genrate</button>
    </div>
  );
};

export default Random;
