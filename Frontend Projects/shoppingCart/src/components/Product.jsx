import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const desc = `${item.description.substring(0, 100)}...`;
  const title = `${item.title.substring(0, 15)}...`;

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart  = () => {
    dispatch(add(item))
    toast.success("Item Added")
  }

  const removeFromCart  = () => {
    dispatch(remove(item.id))
    toast.success("item Removed")
  }

  return (
    <div className="w-60 border hover:border-green-600 rounded-lg shadow-md">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{desc}</p>
      </div>
      <div className="flex justify-center">
        <img className="h-64" src={item.image} />
      </div>
      <div>
        <p className="font-bold ml-2">${item.price}</p>
      </div>
      <button className="border bg-gray-300 hover:border-red-600 m-2 rounded-lg py-2 px-4">
        {cart.some((p) => p.id === item.id) ? (
          <button onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add to cart</button>
        )}
      </button>
    </div>
  );
};

export default Product;
