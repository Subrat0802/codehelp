import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { GrCart } from "react-icons/gr";
import { RiUserLine } from "react-icons/ri";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  const {locationSideBar, setLocationSideBar} = useContext(UserContext)
  
  console.log("SIDEBAR", locationSideBar);

  const handleLocationClick = () => {
    setLocationSideBar(!locationSideBar);
    console.log("HelloBhaiya");
};
  
  // console.log(cartItems)
  return (
    <div className="flex justify-between px-[10%] bg-black items-center h-24 fixed w-full z-30 ">
      <div className="flex justify-center items-center ">
        <img
          className="h-24 flex"
          src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
        />

        <div onClick={handleLocationClick} className="flex justify-center items-center pl-4 cursor-pointer select-none group">
          <p className="text-lg text-[#dbffe8] underline font-bold underline-offset-4 flex group-hover:text-[#00C544]"><CiLocationOn className="m-1 "/> Bhopal </p>
          <p className="text-pure-greys-100 flex ">&nbsp;near food adda... <FaChevronDown className="m-1 group-hover:text-[#00C544]"/></p>
        </div>
      </div>

      <div>
        <ul className="flex gap-10 text-white">
          <NavLink to={"/"}>
            <li className="cursor-pointer text-xl flex items-center hover:text-[#00C544]">
              <GrHomeRounded />
              &nbsp;Home
            </li>
          </NavLink>
          <NavLink to={"/offers"}>
            <li className="cursor-pointer text-xl flex items-center hover:text-[#00C544]">
              <TbDiscount2 />
              &nbsp;Offers
              <sup className="font-extralight text-[12px] text-yellow-50">
                new
              </sup>
            </li>
          </NavLink>
          <NavLink to={"/help"}>
            <li className="cursor-pointer text-xl flex items-center hover:text-[#00C544]">
              <IoHelpBuoyOutline />
              &nbsp;Help
            </li>
          </NavLink>
          <NavLink to={"/signin"}>
            <li className="cursor-pointer text-xl flex items-center hover:text-[#00C544]">
              <RiUserLine />
              &nbsp;Sign In
            </li>
          </NavLink>
          <NavLink to={"/cart"}>
            <li className=" group cursor-pointer text-xl flex items-center hover:text-[#00C544]">
              <GrCart />
              &nbsp;Cart &nbsp;
              {cartItems.length !== 0 ? (
                <div className="bg-[#00C544] px-3 text-white py-[6px] text-sm group-hover:text-black
                 font-bold flex items-center justify-center rounded-full ">
                  {cartItems.length}
                </div>
              ) : (
                <div className="bg-black px-3 py-[6px] text-sm text-black 
                font-bold flex items-center justify-center rounded-full">1</div>
              )}
            </li>
          </NavLink>

          {/* //context API  */}
          {/* <li>{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
