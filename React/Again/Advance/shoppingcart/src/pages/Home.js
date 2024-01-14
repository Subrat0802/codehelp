import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      let json = await data.json();
      console.log(json);
      setProductData(json);
    } catch (error) {
      console.log(error);
      setProductData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : productData.length > 0 ? (
        <div className="flex flex-wrap gap-5 justify-center mt-8">
          {
            productData.map((data) => {
              return <Product key={data.id} data={data}/>
            })
          }
        </div>
      ) : (
        "No data found"
      )}
    </div>
  );
};

export default Home;
