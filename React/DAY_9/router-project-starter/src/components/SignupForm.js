import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function onSubmithandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmpassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account is created");
    const accountData = {
      ...formData,
    };
    console.log("printing data");
    console.log(accountData);

    navigate("/dashboard");
  }
  return (
    <div>
      {/* student instructor tab  */}
      <div className="flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 rounded-full px-5 transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? " bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 rounded-full px-5 transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={onSubmithandler} className="grid gap-y-4 ">
        {/* it contain first and last name  */}
        <div className="flex justify-between">
          <label>
            <p className="text-richblack-5 text-[0.875rem] mb-1 leading[1/375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full "
            />
          </label>

          <label>
            <p className="text-richblack-5 text-[0.875rem] mb-1 leading[1/375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter last Name"
              value={formData.lastname}
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full "
            />
          </label>
        </div>

        {/* Email  */}
        <label>
          <p className="text-richblack-5 text-[0.875rem] mb-1 leading[1/375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Your email"
            value={formData.email}
            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full "
          />
        </label>

        {/* create password and confirm password  */}
        <div className="flex justify-between">
          <label className=" relative">
            <p className="text-richblack-5 text-[0.875rem] mb-1 leading[1/375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Create Password"
              value={formData.password}
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full "
            />
            <span
              className="absolute right-3 top-[38px]  cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className=" relative ">
            <p className="text-richblack-5 text-[0.875rem] mb-1 leading[1/375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmpassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmpassword}
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full "
            />
            <span
              className="absolute right-3 top-[38px]  cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="w-full mt-8 bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
