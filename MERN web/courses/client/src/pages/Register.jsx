import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const resData = await response.json();
      console.log(response);

      if (response.ok) {
        console.log("response ", resData);
        storeTokenInLS(resData.token);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/");
        toast.success("user registered");
      } else {
        toast.error(resData.message ? resData.message : resData.msg);
      }
    } catch (err) {
      console.log("err msg", err);
    }
  };

  return (
    <div className="flex">
      <div className="w-[50%]"></div>
      <div className="w-[50%] mt-14">
        {/* Registration form */}
        <h1 className="text-white text-3xl font-bold text-center">
          Registration form
        </h1>
        <br />

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center pb-16">
          <div className="flex flex-col w-[70%] mb-4">
            <label className="text-white" htmlFor="username">
              Username
            </label>
            <input
              className="py-2 rounded-md"
              name="username"
              id="username"
              type="text"
              placeholder="username"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col w-[70%] mb-4">
            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input
              className="py-2 rounded-md"
              name="email"
              id="email"
              type="email" // Corrected input type to email
              placeholder="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col w-[70%] mb-4">
            <label className="text-white" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              placeholder="phone"
              required
              autoComplete="off"
              className="py-2 rounded-md"
              value={user.phone}
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
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col w-[70%] mb-4">
            <input
              className="py-2 rounded-md bg-blue-400 cursor-pointer hover:bg-blue-500"
              type="submit"
              value="Register" // Added value for the submit button
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
