import React, { useEffect, useRef, useState } from "react";

function UseRefTimer() {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Interval
      </button>
    </div>
  );
}

export default UseRefTimer;
//we cannot use interval in onClick function because interval is scoped only to the effect hook
//so we can clear it within the effect but not from button click , in this situation UseRef is used.
//can be used to store any mutable value and value will persist through the re-renders
//while also not causing any additional re-renders when its value changes
