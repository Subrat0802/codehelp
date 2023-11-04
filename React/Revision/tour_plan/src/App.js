import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [toursData, setToursData] = useState(data);

  function removehandler(id){
    const newTour = toursData.filter(to => to.id !== id);
    setToursData(newTour);

  }

  if (toursData.length === 0) {
    return (
      <div>
        <h2>No tours are available</h2>
        <button
          onClick={() => {
            setToursData(data);
          }}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tours toursData={toursData} removehandler={removehandler}/>
    </div>
  );
};

export default App;
