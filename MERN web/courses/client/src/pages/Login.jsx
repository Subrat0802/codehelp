import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userLogin);
    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });
      
      const resData = await response.json(); // CHANGE: Moved resData extraction here

      if (response.ok) {
        console.log("response login ", resData); // CHANGE: Used resData directly
        storeTokenInLS(resData.token);
        setUserLogin({
          email: "",
          password: "",
        });
        navigate("/");
        toast.success("User logged in")
      } else {
        toast.error(resData.message ? resData.message : resData.msg); // CHANGE: Corrected error alert
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div className="w-[50%]"></div>
      <div className="w-[50%] mt-14">
        {/* Login form */}
        <h1 className="text-white text-3xl font-bold text-center">
          Login form
        </h1>
        <br />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center pb-16"
        >
          <div className="flex flex-col w-[70%] mb-4">
            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input
              className="py-2 rounded-md"
              name="email"
              id="email"
              type="email" // CHANGE: Updated input type to email
              placeholder="email"
              required
              autoComplete="off"
              value={userLogin.email}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col w-[70%] mb-4">
            <label className="text-white" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              required
              autoComplete="off"
              className="py-2 rounded-md"
              value={userLogin.password}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col w-[70%] mb-4">
            <input
              className="py-2 rounded-md bg-blue-400 cursor-pointer hover:bg-blue-500"
              type="submit"
              value="Login" // CHANGE: Added value to the submit button
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
