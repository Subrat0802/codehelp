import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


const Signup = ({ setIsLogin }) => {
  const [sinupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setSignupForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const submitSignupForm = (event) => {
    event.preventDefault();
    if (
      sinupForm.firstName === "" ||
      sinupForm.lastName === "" ||
      sinupForm.email === "" ||
      sinupForm.password === "" ||
      sinupForm.conPassword === ""
    ) {
      return toast.error("Required all fields");
    } else if (sinupForm.password !== sinupForm.conPassword) {
      return toast.error("Passwords are not matched");
    } else {
      navigate("/dashboard");
      setIsLogin(true)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <form
        onSubmit={submitSignupForm}
        className="flex flex-col w-[50%] gap-3 "
      >
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={setSignupForm.firstName}
          onChange={onChangeHandler}
        />
        <input
          className="border p-2 rounded-md"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={setSignupForm.lastName}
          onChange={onChangeHandler}
        />
        <input
          className="border p-2 rounded-md"
          placeholder="Email"
          type="text"
          name="email"
          value={setSignupForm.email}
          onChange={onChangeHandler}
        />
        <input
          className="border p-2 rounded-md"
          placeholder="Password"
          type="Password"
          name="password"
          value={setSignupForm.password}
          onChange={onChangeHandler}
        />
        <input
          className="border p-2 rounded-md"
          placeholder="Confirm Password"
          type="password"
          name="conPassword"
          value={setSignupForm.conPassword}
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

export default Signup;
