//UseEffect (UE) lets us perform side effects in functional components
//close replacement for componentDidMount, componentDidUpdate and componentWillUnmount
import React, { useState, useEffect } from "react";

function UEcounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //pass a parameter, this param is a function which gets executed after every render of the component
  //conditionally run effects -> takes second param a array and within this array we need to specify either props or state
  //that we need to watch for, only if those props or state specified
  //in this array were to change the effect would be executed
  useEffect(() => {
    console.log(`UseEffect - Updating document title`);
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default UEcounter;
