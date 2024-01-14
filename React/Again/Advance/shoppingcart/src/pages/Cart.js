import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
  <div className="min-h-[88vh] w-full flex justify-center items-center ">
    {
      cart.length > 0 ?
      (<div>
        <div>
          {
            cart.map((cartData, index) => {
              return <CartItem key={cartData.id} data={cartData} dataIndex={index}/>
            })
          }
        </div>
        <div>
          <div>Your Cart</div>
          <div>Cart Summary</div>
          <p>
            <span>Total items: {cart.length}</span>
          </p>

          <div>
            <p>Total AMount : {totalAmount}</p>
            <button>Check Out Now</button>
          </div>
        </div>
      </div>) : 
      (<div className="flex flex-col justify-center items-center">
          <h1>Your cart is empty.</h1>
          <NavLink to="/">
            <button className="hover:bg-green-700 bg-green-800 text-white p-2 px-4 rounded-lg">Go To Home Page</button>
          </NavLink>
      </div>)
    }
  </div>
  );
};

export default Cart;
