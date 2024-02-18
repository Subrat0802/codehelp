import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/couterSlices";

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <br />
      <div>{count}</div>
      <br />
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </div>
  );
};

export default Counter;
