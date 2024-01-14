import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-lg h-[100px] flex flex-row justify-between items-center px-64">
      <div className="">
        <NavLink to={"/"}>
          <img
            width={190}
            src="https://www.papertownsindia.com/wp-content/uploads/2021/06/flipkart-logo-transparent-vector-3-1-768x576.png"
          />
        </NavLink>
      </div>

      <div className="flex flex-row">
        <NavLink to={"/"}>
          <p className="text-2xl mr-5">Home</p>
        </NavLink>

        <NavLink to={"/cart"}>
          <FaShoppingCart className="mt-1 text-2xl" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
