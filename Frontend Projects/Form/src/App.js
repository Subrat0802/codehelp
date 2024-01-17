import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    city: "",
    gender: "",
    Graduate:true
  });

 
  const onChangeHandler = (event) => {
    const { value, name, type, checked } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[100vh] ">
      <h1 className="text-4xl font-semibold mb-2">Student Details</h1>

      <form onSubmit={submitForm} className="flex flex-col justify-center w-[50%]">
        <input
          className="w-[100%] border p-2 rounded-lg mb-2"
          type="text"
          placeholder="First Name"
          onChange={onChangeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <input
          className="w-[100%] border p-2 rounded-lg mb-2"
          type="text"
          placeholder="Last Name"
          onChange={onChangeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <input
          className="w-[100%] border p-2 rounded-lg mb-2"
          type="text"
          placeholder="email"
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
        />
        <select
          className="w-[100%] border p-2 rounded-lg mb-2"
          onChange={onChangeHandler}
          name="state"
          value={formData.state}
        >
          <span>State</span>
          <option>Maharastra</option>
          <option>Madhya Pradesh</option>
          <option>Chattisgarh</option>
          <option>Rajsthan</option>
          <option>Delhi</option>
          <option>Uttar Pradesh</option>
        </select>
        <input
          className="w-[100%] border p-2 rounded-lg mb-2"
          type="text"
          placeholder="city"
          onChange={onChangeHandler}
          name="city"
          value={formData.city}
        />
        <label className="mt-4 flex gap-2">
          Gender:
          <label>
            {" "}
            Male:
            <input
              type="radio"
              name="gender"
              onChange={onChangeHandler}
              value="Male"
            />
          </label>
          <label>
            Female:
            <input
              type="radio"
              name="gender"
              onChange={onChangeHandler}
              value="Female"
            />
          </label>
        </label>

        <label className="mt-4 flex gap-2" htmlFor="Graduate">
          Are You Graduate?
          <input className="mt-[2px]"
            type="checkbox"
            name="Graduate"
            onChange={onChangeHandler}
            checked={formData.Graduate}
          />
        </label>

        <input className="mt-2 cursor-pointer bg-blue-800 rounded-lg font-semibold py-2 text-white" type="submit" />
      </form>
    </div>
  );
};

export default App;
