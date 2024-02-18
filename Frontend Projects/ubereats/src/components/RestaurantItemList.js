import React, { useContext } from "react";
import { CDN_URL } from "../utils/constents";
import UserContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/reduxStore/cartSlice";

const RestaurantItemList = ({ items, showBtn }) => {
  const data = useContext(UserContext);
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (el) => {
    //dispatch action
    dispatch(addItem(el));

  } 

  return (
    <div className="overflow-x-hidden">
      {items.map((el) => {
        return (
          <div
            key={el.card.info.id}
            className="border-b border-pure-greys-600 p-2 m-2 flex justify-between 
             hover:bg-black overflow-x-hidden rounded-md"
          >
            <div className=" w-[70%] ">
              <div className="flex text-lg ">
                <span className="text-xl font-semibold">
                  {el.card.info.name}{" "}
                </span>
                <span>
                  &nbsp; - ₹{" "}
                  {el.card.info.price / 100 || el.card.info.defaultPrice / 100}
                </span>
                <p>&nbsp; {data.loggedInUser}</p>
              </div>
              <p className="text-start">{el.card.info.description}</p>
            </div>
            <div className=" w-[20%] h-24 flex justify-center ">
              {
                <img
                  className="h-[100%] w-[100%] object-cover rounded-lg "
                  src={el.card.info.imageId ? (CDN_URL + el.card.info.imageId) : ("https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg")}
                />
              }
              <div className="absolute font-semibold flex mt-16 mx-auto text-sm">
                
                <button className="bg-[#00C544] px-2 py-1 rounded-md text-black " 
                  onClick={() => handleAddItem(el)}
                >
                  ADD +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantItemList;
