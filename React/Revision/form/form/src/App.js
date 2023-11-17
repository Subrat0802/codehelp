import { useState } from "react";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAdd: "",
    city: "",
    state: "",
    zipCode: "",
    comments:false,
    candidates:false,
    offers:false,
    mode:""
  });

  function formData(event) {
    setData((prevData) => {
      const {value, name, checked, type} = event.target
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex justify-center w-full ">
      <form
        onSubmit={submitForm}
        className="flex flex-col w-1/2 border mt-3 rounded-md p-6"
      >
        <label>First Name</label>
        <input
          className="border border-gray-400 mb-2 p-1 rounded-md"
          name="firstName"
          id="firstName"
          placeholder="Subrat"
          onChange={formData}
          value={data.firstName}
        />
        <label>Last Name</label>
        <input
          className="border border-gray-400 mb-2 p-1 rounded-md"
          name="lastName"
          id="lastName"
          placeholder="Mishra"
          onChange={formData}
          value={data.lastName}
        />
        <label>Email Address</label>
        <input
          className="border border-gray-400 mb-2 p-1 rounded-md"
          name="email"
          id="email"
          placeholder="subratmishr@fbi.com"
          onChange={formData}
          value={data.email}
        />
        <label>Country</label>
        <select
          className="border border-gray-400 mb-2 p-1.5 rounded-md text-gray-600"
          name="country"
          id="country"
          onChange={formData}
          value={data.country}
        >
          <option>Country</option>
          <option>India</option>
          <option>Pakistan</option>
          <option>Shrilanka</option>
          <option>Thailand</option>
          <option>Dubai</option>
          <option>China</option>
          <option>Bangladesh</option>
        </select>
        <label>Street Address</label>
        <input
          type="text"
          className="border border-gray-400 mb-2 p-1 rounded-md"
          name="streetAdd"
          placeholder="12/262 marine drive"
          onChange={formData}
          value={data.streetAdd}
        />
        <label>City</label>
        <input
          className="border border-gray-400 mb-2 p-1 rounded-md"
          name="city"
          placeholder="Mumbai"
          onChange={formData}
          value={data.city}
        />
        <label>State/Provience</label>
        <input
          className="border border-gray-400 mb-2 p-1 rounded-md"
          name="state"
          placeholder="Maharastra"
          onChange={formData}
          value={data.state}
        />
        <label>Zip Code</label>
        <input
          className="border border-gray-400 mb-2 p-1 rounded-md"
          name="zipCode"
          placeholder="234312"
          onChange={formData}
        />

        <div>
          <input
            type="checkbox"
            onChange={formData}
            name="comments"
            id="comments"
            checked={formData.comments}
          />
          <label htmlFor="comments"> Comments</label>
        </div>

        <div>
          <input
            type="checkbox"
            onChange={formData}
            name="candidates"
            id="candidates"
            checked={formData.candidates}
          />
          <label htmlFor="candidates"> Candidates</label>
        </div>

        <div className="mb-2">
          <input
            type="checkbox"
            onChange={formData}
            name="offers"
            id="offers"
            checked={formData.offers}
          />
          <label htmlFor="offers"> Offers</label>
        </div>

        <div className="mb-3">
          <h2>Allow Notifications</h2>
          <div>
            <input 
              type="radio"
              onChange={formData}
              name="mode"
              value="yes"
              id="permiYes"
              checked={formData.mode}
            />
            <label>Yes</label>
          </div>

          <div>
            <input 
              type="radio"
              onChange={formData}
              name="mode"
              value="No"
              id="permiYes"
              checked={formData.mode}
            />
            <label>No</label>
          </div>
        </div>

        <input
          type="submit"
          className="bg-blue-600 w-20 text-white rounded-md py-2 font-semibold cursor-pointer"
        />
      </form>
    </div>
  );
}

export default App;
