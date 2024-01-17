import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = ({ setIsLogin }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const loginSubmit = (event) => {
    event.preventDefault();
    if(loginForm.email === ""){
        toast.error("Email is required")
    }
    else if(loginForm.password === ""){
        toast.error("password is required")
    }
    
    else{
        navigate("/dashboard")
        setIsLogin(true)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] ">
      <form onSubmit={loginSubmit} className="flex flex-col w-[50%]  ">
        <input
          className="border p-2 rounded-md"
          placeholder="Email"
          name="email"
          value={loginForm.email}
          onChange={onChangeHandler}
        />

        <input
          className="border p-2 rounded-md"
          placeholder="Password"
          type="Password"
          name="password"
          value={loginForm.password}
          onChange={onChangeHandler}
        />
        <input
          className="bg-blue-900 text-white px-3 py-2 rounded-md"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Login;
