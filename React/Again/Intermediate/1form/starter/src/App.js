import React, { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName)
  // console.log(lastName);
  // const changeHandler = (event) => {
  //   // console.log("Printing first name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value) 
  // };

  // const changeLasteNameHandler = (event) => {
  //   // console.log("Last Name:")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value)

  // };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar:""
  });


  function submitData(event){
    event.preventDefault()
    console.log(formData);
  }
  

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={submitData} className="flex flex-col">
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <input
          text="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <input
          text="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        {/* text area  */}
        <textarea
          placeholder="enter your comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        {/* //value ki jagah checked use karenge */}
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
          id="isVisible"
        />
        {/* //id se connect hai */}
        <label htmlFor="isVisible">Are you Visible</label>


        <br/>
        <fieldset>
          <legend>Mode</legend>
            {/* //radio button  */}
            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value={"Online-Mode"}
              id="Mode"
              checked={formData.mode === "Online-Mode"}
            />
            <label htmlFor="Mode">Online</label>

            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value={"Offline-Mode"}
              id="Mode"
              checked={formData.mode === "Offline-Mode"}
            />
            <label htmlFor="Mode">Offline</label>
          
        </fieldset>

        {/* //dropdown menu  */}
        <label htmlFor="favCar">Fav Car:</label>
        <select 
          onChange={changeHandler} 
          name="favCar"
          value={formData.favCar} 
          id="favCar"
        >
          <option>Scorpio</option>
          <option>Thar</option>
          <option>Fortuner</option>
          <option>Legender</option>          
        </select>

        <input type="submit"/>
        
      </form>
    </div>
  );
};

export default App;
