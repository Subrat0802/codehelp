"use client";

const product = ({price}) => {
  return (
    <div>
      <button onClick={() => alert(`Price of product is ${price} Rs.`)}>click me</button>
    </div>
  );
};

export default product;
