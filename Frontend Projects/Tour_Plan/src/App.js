import React, { useState } from "react";
import data from "./data";
import Card from "./components/Card";

const App = () => {
  const [locationData, setLocationData] = useState(data);
  const [addDestinationCart, setAddDestinationCart] = useState([]);
  const [addButton ,setAddButton] = useState(false)
  const [removeButton, setRemoveButton] = useState(true);
  

  console.log(addDestinationCart);

  const removeItem = (id) => {
    const updatedData = locationData.filter((el) => el.id !== id);
    setLocationData(updatedData);
  };

  const refreshHandle = () => {
    setLocationData(data);
  }

  const addDestination = (item) => {
    // Check if the item is already in the cart
    if (!addDestinationCart.some((el) => el.id === item.id)) {
      // If not, add it to the cart
      setAddDestinationCart((prevCart) => [...prevCart, item]);
    }
  }

  

  return locationData.length === 0 ? <div>
  <div className="flex w-full h-[100vh] flex-col justify-center items-center">
      <h1>No Tour plan's available because You remove all the destination, Please refresh the page to load all the Destination again, below</h1>
      <button onClick={refreshHandle} className='bg-green-600 rounded-lg text-white hover:bg-green-800 px-3 py-1 mt-3 text-2xl'>Refresh The Page</button>
  </div>
</div> :  (
    <div className="flex flex-col justify-center items-center">
      <div className=" flex justify-center ">
        <h1 className="mt-3 text-center border-blue-700 border-4 border-dotted rounded-lg p-3  text-4xl font-bold">
          TOUR PLAN FOR YOU VACATION
        </h1>
        <button className="">Cart</button>
      </div>

      <div className="w-11/12 flex flex-wrap justify-center  gap-7 mt-12">
        {locationData.map((info) => {
          return <Card key={info.id} info={info} removeItem={removeItem} addDestination={addDestination} />;
        })}
      </div>


      <div className="w-11/12 flex flex-wrap justify-center gap-7 mt-12">
        {
          addDestinationCart.map((addItem) => {
            return <Card key={addItem.id} info={addItem} removeItem={removeItem} addButton={addButton} removeButton={removeButton}/>
          })
        }
      </div>
    </div>
  );
};

export default App;
