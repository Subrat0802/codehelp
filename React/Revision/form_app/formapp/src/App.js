import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      comments:"",
      isVisible:true,
      mode:"",
      favCar:""

    }
  )

  

  function changeHandler(event){
    const {name, value, checked, type} = event.target 
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing data ...")
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler} className="form">
        <input 
          type="text" 
          placeholder="first name" 
          onChange={changeHandler} 
          name="firstName"
          value={formData.firstName}
        />
        
        <input 
          type="text" 
          placeholder="last name" 
          onChange={changeHandler}
          name="lastName" 
          value={formData.lastName}
        />

        <input 
          type="text" 
          placeholder="email" 
          onChange={changeHandler}
          name="email" 
          value={formData.email}
        />

        <textarea 
          type="text"
          placeholder="Comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <input 
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">M i visible? </label>

        <br/>

        <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-Mode"
          id="onlineMode"
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="onlineMode">online:</label>

        <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-Mode"
          id="offlineMode"
          checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor="offlineMode">offline:</label>

        <select 
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option>Scorpio</option>
          <option>Swift</option>
          <option>Legender</option>
          <option>Thar</option>
          
        </select>

        <label htmlFor="favCar">fav car</label>

        {/* <input type="submit" value="submit" /> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
