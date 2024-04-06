import React, { useEffect, useState } from "react";

const WeatherAgain = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(null);

  useEffect(() => {
    const calculateBmi = () => {
      const heightInMeters = height / 100;
      const newBmi = weight / (heightInMeters * heightInMeters);
      setBmi(newBmi.toFixed(2));
    };

    calculateBmi();
  }, [height, weight]);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>

        <div className="mb-4">
          <label className="flex items-center">
            Height (cm): <span className="ml-2">{height}</span>
            <input
              type="range"
              max="200"
              min="100"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="ml-2"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            Weight (kg): <span className="ml-2">{weight}</span>
            <input
              type="range"
              max="150"
              min="20"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value))}
              className="ml-2"
            />
          </label>
        </div>

        {bmi !== null && (
          <div>
            <p className="font-bold">Your BMI: {bmi}</p>
            <p className="text-sm">
              Interpretation:{" "}
              {bmi < 18.5
                ? "Underweight"
                : bmi < 24.9
                ? "Normal weight"
                : bmi < 29.9
                ? "Overweight"
                : "Obese"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherAgain;
