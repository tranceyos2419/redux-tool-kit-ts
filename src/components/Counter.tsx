import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter, increment, decrement } from "../slices/counterSlice";
interface Props {}

const Counter: React.FC<Props> = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2>
      <h2>{counter.value}</h2>
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
