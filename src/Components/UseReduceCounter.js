//useReducer is a hook that is used for state management
//It is an alternative to useState
//Difference bet the two -> useState is built using useReducer
import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
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

function UseReduceCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  //count is the current state returned by useReducer()
  //dispatch method returned by useReducer() and allows us to execute the code corresponding to a particular action

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReduceCounter;
//useReducer(reducer, initialState)
//new State = reducer(currentState, action)
//useReducer returns a pair of values. [newState, dispatch]
