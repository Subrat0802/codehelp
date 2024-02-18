import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    conPassword: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault()
    if(formData.password !== formData.conPassword){
        toast.error("Password do not match")
        return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
        ...formData
    }
    console.log("Printing Account Data: ")
    console.log(accountData);

    navigate("/dashboard");
    

  }    

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* //contain first and last name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="First Name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        {/* email  */}
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Email Address"
            value={formData.email}
          />
        </label>

        {/* create password and con password  */}
        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              required
              type={!showPassword ? "password" : "text"}
              name="password"
              onChange={changeHandler}
              placeholder="Password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type={!showPassword ? "password" : "text"}
              name="conPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.conPassword}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
