import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    stateName: "",
    cityName: "",
    address: "",
    zipCode: "",
    country:"",
    checkComment:true,
    checkCandidates:true,
    checkOffers:true,
    notifications:""

  });

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <div>
        <h1>Student Form</h1>
      </div>

      <div>
        <form onSubmit={formSubmitHandler} className="flex flex-col">
          <label>First Name</label>
          <input
            placeholder="Aman"
            type="text"
            name="firstName"
            value={FormData.firstName}
            onChange={changeHandler}
          />
          <label>Last Name</label>
          <input
            placeholder="Mishra"
            type="text"
            name="lastName"
            value={FormData.lastName}
            onChange={changeHandler}
          />
          <label>Country</label>
          <select
            type="text"
            name="country"
            value={FormData.country}
            onChange={changeHandler}
          >
            <option>India</option>
            <option>China</option>
            <option>Pakistan</option>
            <option>Shri Lanke</option>
          </select>

          <label>State</label>
          <input
            placeholder="Maharastra"
            type="text"
            name="stateName"
            value={FormData.stateName}
            onChange={changeHandler}
          />
          <label>City</label>
          <input
            placeholder="Mumbai"
            type="text"
            name="cityName"
            value={FormData.cityName}
            onChange={changeHandler}
          />
          <label>Address</label>
          <input
            placeholder="12/251 khutehi Gandhi Nagar"
            type="text"
            name="address"
            value={FormData.address}
            onChange={changeHandler}
          />
          <label>Zip / Costal Code</label>
          <input
            placeholder="486602"
            type="number"
            name="zipCode"
            value={FormData.zipCode}
            onChange={changeHandler}
          />

          <label>By Email</label>
          <br></br>
          <input 
            type="checkbox"
            name="checkComment"
            checked={formData.checkComment}
            onChange={changeHandler}
            id="checkComment"
          />
          <label htmlFor="checkComment">Comments</label>
          <br></br>
          <input 
            type="checkbox"
            name="checkCandidates"
            checked={formData.checkCandidates}
            onChange={changeHandler}
            id="checkCandidates"
          />
          <label htmlFor="checkCandidates">Candidates</label>
          <br></br>
          <input 
            type="checkbox"
            name="checkOffers"
            checked={formData.checkOffers}
            onChange={changeHandler}
            id="checkOffers"
          />
          <label id="checkOffers">Offers</label>
          <br></br>


          <label>Push Notifications</label>
          <input 
            type="radio"
            name="notifications"
            value={"Everything"}
            onChange={changeHandler}
            id="notification"
            checked={formData.notifications}
          />
          <label htmlFor="notification">Everything</label>
          <br></br>

          <input 
            type="radio"
            name="notifications"
            value={"Same as email"}
            onChange={changeHandler}
            id="notificationSame"
            checked={formData.notifications}
          />
          <label htmlFor="notificationSame">Same as email</label>
          <br></br>
          
          <input 
            type="radio"
            name="notifications"
            value={"None"}
            onChange={changeHandler}
            id="notificationNone"
            checked={formData.notifications}
          />
          <label htmlFor="notificationNone">None</label>
          <br></br>
          
          <input type="submit" name="submit" />
        </form>
      </div>
    </div>
  );
};

export default App;
