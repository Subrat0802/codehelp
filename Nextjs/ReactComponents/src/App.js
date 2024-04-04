import React from 'react'
// import BmiCalculator from './Components/BmiCalculator'
// import Weather from './Components/Weather'

const App = () => {
  return (
    <div>
      {/* <BmiCalculator /> */}
      {/* <Weather /> */}

      

    </div>
  )
}

export default App

// import { useReducer, useState } from "react";
// import "./App.css";

// const reducer = (state, action) => {
//   console.log(state, action)
//   if(action.type === "inc"){
//     return {count: state.count + 1}
//   }
//   else if(action.type === "dec"){
//     return {count: state.count - 1}
//   }
//   else{
//     throw new Error("Error")
//   }
// };

// function App() {
//   // const [state, setState] = useState(0);

//   const [state, dispatch] = useReducer(reducer,{count:0});

//   // reducer(coffe maker machine)
//   //function is a pure function
//   //state (coffee powder) and action(making process)
//   // new state (coffee)

//   //pure function 10 +10 = 20
//   //no side effect

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({type:"inc"})}>Inc</button>
//       <button onClick={() => dispatch({type:"dec"})}>dec</button>
//     </div>
//   );
// }

// export default App;
