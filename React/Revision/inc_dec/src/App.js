import { useState } from "react";
import "./App.css";

function App() {
  const [count,setCount] = useState(0);
  function clickIncHandler(){
    setCount(count+1);
  }
  function clickDecHandler(){
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
  return (
  <div className="flex justify-center items-center w-screen h-screen flex-col bg-[#344151] gap-8">
    <div className="text-white font-semibold text-2xl">
      Increament Decreament App
    </div>
    <div className="text-white font-semibold text-2xl flex gap-1">
      <button onClick={clickDecHandler} className="bg-richblack-5 text-richblack-900 py-2 px-4 rounded-sm">-</button>
      <div className="bg-richblack-5 text-richblack-900 py-2 px-12 text-center rounded-sm">{count}</div>
      <button onClick={clickIncHandler} className="bg-richblack-5 text-richblack-900 py-2 px-4 rounded-sm">+</button>
    </div>
    <div className="text-white font-semibold text-2xl bg-[#0398d4] py-2 px-5 rounded-md">
      <button onClick={reset}>Reset</button>
    </div>
  </div>
  )
}

export default App;
