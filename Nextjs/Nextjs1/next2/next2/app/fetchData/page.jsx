'use client'
import React, { useEffect, useState } from 'react'


const page = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/products/');
            const json = await response.json();
            console.log(json);
            setProduct(json.products);
        }
        fetchData();

    }, []);

  return (
    <div>
        <h1>Product list</h1>

        <div className='flex flex-wrap w-[100vh]'>
            {
                product.map((el) => (
                    <div key={el.id}>
                        <img className=''  src={el.thumbnail}/>
                        <p>{el.title}</p>
                        <p>{el.brand}</p>
                        <p>{el.price}</p>
                    </div>

                ))
            }
        </div>

    </div>
  )
}

export default page