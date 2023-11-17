import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsUserLoggedIn}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();

    if(formData.password !== formData.conPassword){
        toast.error("Password not match")
        return
    }
    
    setIsUserLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
        ...formData
    }

    console.log("account data")
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>
      {/* studentInstructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name lastname  */}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter last Name"
              value={formData.lastname}
            />
          </label>
        </div>

        {/* email add  */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>

        {/* create passworde  */}
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        {/* con password  */}
        <div>
          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="conPassword"
              onChange={changeHandler}
              placeholder="Confirm password"
              value={formData.conPassword}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
