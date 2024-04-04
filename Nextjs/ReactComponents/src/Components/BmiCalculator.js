// import { useMemo, useReducer, useState } from "react";

// function BmiCalculator() {
//   const [weight, setWeight] = useState(70);
//   const [height, setHeight] = useState(170);

//   const onWeightChange = (event) => {
//     setWeight(event.target.value);
//   }

//   const onHeightChange = (event) => {
//     setHeight(event.target.value);
//   }

//   const outPut = useMemo(() => {
//     const calculateHeight = height /100;

//     return (weight/(calculateHeight*calculateHeight)).toFixed(1)
//   }, [weight, height])

//   return (
//     <div>
//       <h1>BMI calculator</h1>
//       <div className="input-section">
//         <p className="slider-output">Weight: {weight}kg</p>
//         <input
//           className="input-slider"
//           type="range"
//           step="1"
//           min="40"
//           max="200"
//           onChange={onWeightChange}
//         />

//         <p className="slider-output">Height: {height}cm</p>
//         <input
//           className="input-slider"
//           type="range"
//           min="140"
//           max="200"
//           onChange={onHeightChange}
//         />
//       </div>

//       <div className="output-section">
//         <p>Your BMI is </p>
//         <p className="output">{outPut}</p>
//       </div>
//     </div>
//   );
// }

// export default BmiCalculator;

