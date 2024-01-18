import React from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";

const App = () => {
  return (
    <div className="background w-full min-h-[100vh] flex flex-col pt-5 items-center">
      <div className="">
        <h1 className="text-4xl font-bold bg-black text-white rounded-sm px-6 py-2 mb-6" >GIPHY GIF APP</h1>
      </div>
      <div className="w-[50%] flex justify-center items-center  py-8 bg-green-500">
      <Random />
      </div>
      <div className="w-[50%] flex justify-center items-center  py-8 bg-green-500 mt-6">
        <Tag />
      </div>
    </div>
  );
};

export default App;
