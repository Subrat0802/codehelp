import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ data, dataIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(data.id));
    toast.success("Item Removed")
  }
  return (
    <div>
      <div>
        <div>
          <img src={data.image} />
        </div>
        <div>
          <h1>{data.title}</h1>
          <h1>{data.description}</h1>
        </div>
        <div>
          <p>{data.price}</p>
          <div onClick={removeFromCart}>
            <MdDeleteOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
