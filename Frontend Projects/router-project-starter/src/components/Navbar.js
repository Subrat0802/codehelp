import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg"

const Navbar = ({ isLogin, setIsLogin }) => {
    console.log(isLogin);
  return (
    <div className="flex justify-around py-3 bg-blue-950 text-white text-2xl">
      <div>
        <Link to="/"><img src={logo}/></Link>
      </div>
      <div className="flex gap-6 items-center">
        <NavLink to={"/"}>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>About</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>Contact</p>
        </NavLink>
      </div>

      <div className="flex gap-6 items-center">
        {!isLogin && (
          <NavLink to={"/login"}>
            <button>Login</button>
          </NavLink>
        )}
        {!isLogin && (
          <NavLink to={"/signup"}>
            <button>Signup</button>
          </NavLink>
        )}
        {isLogin && (
          <NavLink to={"/"}>
            <button onClick={() => setIsLogin(false)}>Logout</button>
          </NavLink>
        )}
        {isLogin && (
          <NavLink to={"/dashboard"}>
            <button>Dashboard</button>
          </NavLink>
        )}

      </div>
    </div>
  );
};

export default Navbar;
