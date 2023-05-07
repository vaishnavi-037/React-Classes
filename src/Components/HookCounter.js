//UseState(US) Hook -> a hook is a special function that lets us hook into react feature
//so,useState is a hook that lets us add react state to functional components
import React, { useState } from "react";

function HookCounter() {
  //accepts an arguement which is the initial value of the state property and
  //returns the current value of state property and
  //a method that is capable of updating that state property
  const [count, setCount] = useState(0); //array destructuring(feature in ES6); 0 is the initial value of state property and returns a pair of values
  //in setCount method we pass new count value as a parameter
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
