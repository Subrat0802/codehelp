import React from "react";

const Filter = (props) => {
  const filterData = props.filterData;
  const category = props.category;
  const setCategory = props.setCategory;

  const filterDataHandler = (title) => {
    setCategory(title);
  };
  return (
    <div className=" flex gap-6 text-center w-full justify-center items-center py-3 font-semibold text-xl ">
      {filterData.map((el) => {
        return (
          <button
            className="bg-bgDark2 px-3 rounded-lg hover:bg-bgDark2 text-white"
            onClick={() => filterDataHandler(el.title)}
            key={el.id}
          >
            {el.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
