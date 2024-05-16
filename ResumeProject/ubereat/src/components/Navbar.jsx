import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-black flex justify-center">
      <div className="flex text-white justify-between items-center w-10/12">
        <div className="flex items-center gap-4">
          <img
            className="w-36"
            src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
          />
          <p>Location</p>
        </div>
        <div className=" md:invisible sm:invisible lg:visible flex text-lg gap-8">
          <p>Home</p>
          <p>Products</p>
          <p>Grocery</p>
          <p>Dign up</p>
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
