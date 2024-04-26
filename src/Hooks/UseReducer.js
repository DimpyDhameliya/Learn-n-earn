import React from "react";

function UseReducer() {
  const initialStates = {
    number: 0,
    name: "",
  };
  function reducer(state, action) {
    if (action.type === "INCR") {
      return { ...state, number: state.number + 1 };
    } else if (action.type === "DECR") {
      return { ...state, number: state.number - 1 };
    }
  }
  
  const [state, dispatch] = UseReducer (reducer, initialStates);

  return (
    <>
      <div className=" container p-5 col-md-4">
        <h2>Number: {state.number}</h2>
        <button
          className="btn btn-success "
          onClick={() => dispatch({ type: "INCR" })}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "DECR" })}
        >
          -
        </button>
      </div>
    </>
  );
}

export default UseReducer;
