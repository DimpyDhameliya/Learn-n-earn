import React from "react";
import { increment, decrement } from "./NumberSlice";
import { useSelector, useDispatch } from "react-redux";

function NumberComp() {
  const { number } = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="container col-md-4 p-5">
      <h2>Number:{number}</h2>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        +
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
}

export default NumberComp;
