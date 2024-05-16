import React from "react";

const TopButton = ({name}) => {
  return (
    <div>
      <button className="px-2 rounded-lg bg-[#222222]">{name}</button>
    </div>
  );
};

export default TopButton;
