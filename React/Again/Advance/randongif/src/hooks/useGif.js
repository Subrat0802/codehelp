import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "9ybYq1oRB5llLdJiiEEp6CtvHPmNbJ9g";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);


  const fetchApiData = async (tag) => {
    setLoading(true);
    const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = output?.data?.data?.images?.downsized_large?.url;
    setGif(imageSource);
    setLoading(false);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return {
    gif,
    loading,
    fetchApiData,
  };
};

export default useGif;
