import React, { useMemo, useState } from "react";

function UseMemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default UseMemoCounter;
//when couter Two is updated the component re renders and when it happen iseven func is called again
//and it is slow and hence when we update counter two the UI update is slow
//a way to tell react not to recalculate certain values when unneccesary especially ones which takes long ime to compute
//useCallback -> caches the provided function instance itself, cache the function
//useMemo -> invokes the provided function and caches its result, cache the result of an invoke function
