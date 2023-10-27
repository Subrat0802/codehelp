import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }


  function onSubmitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard")

  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full  mt-6">
      <label className="w-full ">
        <p className="text-richblack-5 text-[0.875rem] mb-1 leading[1/375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Address"
          name="email"
          className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full "
        />
      </label>

      <br />

      <label className="w-full relative -mt-3">
        <p className="text-richblack-5 text-[0.875rem] mb-1 leading[1/375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
          name="password"
          className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full "
        />
        <span className="absolute right-3 top-[38px]  cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : 
          <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
        </span>

        <Link to="#">
          <p className="max-w-max text-xs mt-1 text-blue-100 ml-auto">Forgot Password</p>
        </Link>
      </label>

      <button className=" mt-8 bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">Sign In</button>
    </form>
  );
};

export default LoginForm;
