import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "9ybYq1oRB5llLdJiiEEp6CtvHPmNbJ9g";
const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gifData, setGifData] = useState('');
  const [loading, setLoading] = useState(false);


  const fetchData = async (tag) => {
    setLoading(true);
    const data = await axios.get(tag ? `${API_URL}&tag=${tag}` : API_URL );
    setGifData(data?.data?.data?.images?.downsized_large?.url);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    gifData,
    loading,
    fetchData
  }


};

export default useGif;
