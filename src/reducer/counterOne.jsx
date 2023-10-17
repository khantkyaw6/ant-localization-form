import React, { useReducer } from "react";

const CounterOne = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    console.log("Prev state", state);
    console.log("action", action);

    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {count}
      <hr></hr>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
};

export default CounterOne;
