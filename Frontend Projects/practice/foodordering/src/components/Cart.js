import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cartReducer.items);

  const dispacth = useDispatch();

  const handleClearCart = () => {
    dispacth(clearCart())
  };

  const removeItemCart = () => {
    dispacth(removeItem())
  }

  return (
    <div>
      <h1>Cart page</h1>
      <button onClick={handleClearCart}>clear cart</button>
      {cart.map((el) => {
        return<div>
            <h1 className="text-green-800">{el.card.info.name}</h1>;
            <button onClick={removeItemCart}>remove Item</button>
        </div>  
      })}
    </div>
  );
};

export default Cart;
