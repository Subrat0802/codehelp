import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false)

  function changeHandler(event) {
    setFormData((prevData) => {
        return {
            ...prevData,
            [event.target.name]: event.target.value
        }
    }) 
  }


  function submitHandler(event){
    event.preventDefault()
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard")
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          name="email"
          onChange={changeHandler}
          placeholder="Email Address"
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          type={!showPassword ? "password" : "text"}
          required
          value={formData.password}
          name="password"
          onChange={changeHandler}
          placeholder="Entaer password"

        />

        <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
        </span>

        <Link to="#">
            <p>Forgot Password</p>
        </Link>
      </label>

      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
