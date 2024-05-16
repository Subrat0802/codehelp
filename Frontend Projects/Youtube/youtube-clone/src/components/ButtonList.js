import React from "react";
import TopButton from "./TopButton";

const list = [
  "All",
  "Gaming",
  "Cricket",
  "Valentine",
  "Music",
  "Songs",
  "Motivation",
  "Fotball",
  "Ronaldo",
  "Virat ",
  "Soccer",
  "Rugby",
  "Web",
  "Web 3.0",
  "India",
  "Modi",
];

const ButtonList = () => {
  return (
    <div className="mt-3 flex pl-10 gap-2 overflow-x-hidden ">
      {list.map((el, index) => (
        <TopButton key={index} name={el} />
      ))}
    </div>
  );
};

export default ButtonList;
