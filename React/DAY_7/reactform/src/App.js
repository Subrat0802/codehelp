import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastname, setLastname] = useState("");

  // function changeFirstHandler(event) {
  //   setFirstName(event.target.value);
  // }
  // function changeLastHandler(event) {
  //   setLastname(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  // console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault()
    console.log("finally printing the entire form data......");
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <input
          type="text"
          placeholder=" Enter your email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />

        <textarea
          type="text"
          placeholder="Entaer your Comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i visible ?</label>

        <br />

        <fieldset>
          <legend>Mode</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="online-mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="online-mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="offline-mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="offline-mode">Online Mode</label>
        </fieldset>

        <br />

        <select
          onChange={changeHandler}
          name="favCar"
          value={formData.favCar}
          id="favCar"
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Civic">Civic</option>
          <option value="Thar">Thar</option>
          <option value="Swift">Swift</option>
        </select>
        <label htmlFor="favCar">Tell me your your fav car</label>
        <br/>
        {/* <input type="submit"/> */}
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
