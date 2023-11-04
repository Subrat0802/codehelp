import { useState } from "react";
import Card from "./Card";

function Tours({ tours, removeTour }) {
  const [app,setApp] = useState
  return (
    <div className="container">
      <div>
        <h1 className="title">Plan with Love</h1>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
