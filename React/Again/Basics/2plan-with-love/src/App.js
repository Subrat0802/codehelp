import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if(tours.length === 0){ 
    return (
      <div>
        <h1>No Tours Left</h1>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
      
      
    )
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-extrabold border-blue-700 border-4 rounded-lg px-5 py-2 border-dashed">
        Plan With Love
      </h1>

      
      <div className="flex flex-wrap gap-6 justify-center items-center w-2/3">
        {tours.map((tourData) => (
          <Tours key={tourData.id} removeTour={removeTour} tours={tourData} />
        ))}
      </div>
    </div>
  );
};

export default App;
