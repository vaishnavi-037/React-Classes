//goal -> run effects only once
import React, { useEffect, useState } from "react";

function UEmouseMover() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  //passing empty array tells that this particular effect does not
  //depend on any props or state so there is no reason for you to call this effect on re-renders
  useEffect(() => {
    console.log(`useEffect called`);
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component Unmounting code"); //componentWillUnmount
      window.removeEventListener("mousemove", logMousePosition); //return function which will be executed when the component will be unmounted refer UEcleanUp
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Hooks Y - {y}
    </div>
  );
}

export default UEmouseMover;
