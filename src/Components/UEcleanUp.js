import React, { useState } from "react";
import UEmouseMover from "./UEmouseMover";

function UEcleanUp() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UEmouseMover />}
    </div>
  );
}

export default UEcleanUp;
//problem = when toggle is false X and Y are not showing and unmounted in DOM 
//but when moving curson it is still listening to the mouse Event 
//will lead to memory leaks in application
//Sol: when unmount is performed clean all the subscriptions and listeners -> cleanUp
//function that is passed to useEffect can return a function which will be executed when the component will be unmounted