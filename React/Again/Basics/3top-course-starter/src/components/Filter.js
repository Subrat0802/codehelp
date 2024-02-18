import React from "react";

const Filter = (props) => {
  const filterData = props.filterData;
  let catagory = props.catagory;
  let setCatagory = props.setCatagory;

  const filterHandler = (title) => {
    setCatagory(title);
  };

  return (
    <div className="w-11/12 flex flex-wrap mx-auto max-w-max space-x-4 gap-y-4 py-4 justify-center">
      {filterData.map((el) => {
        return (
          <button
            className="text-lg transition-all duration-300 border-2 px-2 rounded-md font-medium
             text-white bg-black hover:bg-opacity-50"
            key={el.id}
            onClick={() => filterHandler(el.title)}
          >
            {el.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
