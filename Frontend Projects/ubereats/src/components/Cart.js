import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import { clearCart } from "../utils/reduxStore/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();

  const handleClearCart = () => {
    
    dispatch(clearCart())
  }


  

  return (
    <div className="text-center pt-36 text-pure-greys-25 font-bold min-h-screen">
      <h1>Cart</h1>
      <div className=" w-6/12 mx-auto p-2 mb-3 text-pure-greys-200 ">
        <RestaurantItemList items={cartItems} />
      </div>
      <button className="bg-black text-white px-3 py-2 rounded-md mx-auto mb-10" onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
