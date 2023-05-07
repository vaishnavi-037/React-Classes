import React, { useEffect, useState } from "react";

function UEintervalCounter() {
  const [count, setCount] = useState(0);

  //   const tick = () => {             //1st approach
  //     setCount(count + 1);
  //   };

  //   useEffect(() => {                   //1st approach
  //     const interval = setInterval(tick, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //2nd approach,since setCount keeps track of prevCount then we can send empty array
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>{count}</h2>;
}

export default UEintervalCounter;
//common mistake we do since we want to setUp setInterval once we place empty [] as a second param
//but we tell react that it doesn't depend on anything so it stops rendering it,
//so second param should contain on what changes so that it works correctly 
