import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0)


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  },[cart])

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div>
            <div>
              <div>Your Cart</div>
              <div>Summery</div>
              <p>
                <span>Total Item : {cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Ammount: {totalAmount}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-100 flex flex-col min-h-[100vh] justify-center items-center">
          <h2>No data found</h2>
          <NavLink to="/">
            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg mt-3">
              Go to homepage
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
