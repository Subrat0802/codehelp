import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isUserLoggedIn = props.isUserLoggedIn;
  let setIsUserLoggedIn = props.setIsUserLoggedIn;
  return (
    <div className="flex justify-evenly">
      <Link to="">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-3">
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

      <div className="flex gap-3 ml-3">
        {!isUserLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isUserLoggedIn && (
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        )}
        {isUserLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsUserLoggedIn(false);
                toast.success("Logged out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isUserLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
