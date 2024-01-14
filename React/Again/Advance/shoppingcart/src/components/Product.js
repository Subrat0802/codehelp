import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Product = ({ data }) => {
  const desc = `${data.description.substring(0, 40)}....`;
  const title = `${data.title.substring(0, 15)}....`;

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(data))
    toast.success("Item added to cart")
  }

  const removeFromCart = () => {
    dispatch(remove(data.id))
    toast.success("Item remove from cart")
  }

  return (
    <div className="w-64 border pb-4 rounded-lg hover:bg-gray-300 cursor-pointer">
      <div className="h-72 border flex justify-center">
        <img className="h-full w-full" src={data.image} />
      </div>
      <div className="px-2">
        <p>{title}</p>
      </div>
      <div className="px-2">
        <p className="">{desc}</p>
      </div>
      <div className="px-2">
        <p>RS.{data.price}/-</p>
      </div>

      {cart.some((p) => p.id === data.id) ? (
        <button
          onClick={removeFromCart}
          className=" ml-2 p-1  border border-blue-500 rounded-full px-3 hover:bg-green-500"
        >
          Remove Item
        </button>
      ) : (
        <button
          onClick={addToCart}
          className=" ml-2 p-1  border border-blue-500 rounded-full px-3 hover:bg-green-500"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Product;
