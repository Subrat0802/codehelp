import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import toast from "react-hot-toast";

const LoginForm = ({setIsUserLoggedIn}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false)

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name] : event.target.value
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    setIsUserLoggedIn(true);
    toast.success("Login Successfull")
    navigate("/dashboard")
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          required
          type="text"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Id"
          name="email"
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? ("text") : ("password")}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
            {
            showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
            }
        </span>
        <Link to="#">
            <p>
                Forgot Password
            </p>
        </Link>
      </label>

      <button >Sign in</button>
    </form>
  );
};

export default LoginForm;
