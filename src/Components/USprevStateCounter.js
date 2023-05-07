import React, { useState } from "react";

function USprevStateCounter(props) {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      //   setCount(count + 1);     //will return 1 instead of 5 as it waill take value of initial value count
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default USprevStateCounter;
