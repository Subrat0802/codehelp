import React, { lazy } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedin = props.isLoggedin;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading={lazy} />
      </Link>
      <nav className="flex">
        <ul className="flex gap-x-6 text-richblack-100 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login/ Logout/ signup/ dashboard  */}

      <div className="flex items-center gap-x-4">
        {!isLoggedin && (
          <Link to="/login">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] 
                border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedin && (
          <Link to="/signup">
            <button className="text-richblack-100  bg-richblack-800 py-[8px] px-[12px] rounded-[8px] 
                border-richblack-700">Signup</button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/">
            <button
              className="text-richblack-100  bg-richblack-800 py-[8px] px-[12px] rounded-[8px] 
              border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedin && (
          <Link to="/dashboard">
            <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] 
                border-richblack-700">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
