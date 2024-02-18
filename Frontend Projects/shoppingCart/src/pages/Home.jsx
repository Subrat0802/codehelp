import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const API_URL = "https://fakestoreapi.com/products";

const Home = () => {
  const [loading , setLoading] = useState(false);
  const [items, setItems] = useState([]);

  console.log(items);
  const fetchData = async () => {
  setLoading(true);
    try{
      const data = await fetch(API_URL);
      const json = await data.json();
      setItems(json);

    }
    catch(error){
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className='flex flex-wrap w-[100%] justify-center gap-8 items-center mt-6'>
      {
        loading ? <Spinner /> :
        items.map((item) => {
          return <Product  key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default Home
