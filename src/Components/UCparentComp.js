//useCallBack
import React, { useCallback, useState } from "react";
import UCbutton from "./UCbutton";
import UCcount from "./UCcount";
import UCtitle from "./UCtitle";

function UCparentComp() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  //1st param -> a callback functon, 2nd param -> array of dependencies
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <UCtitle />
      <UCcount text="Age" count={age} />
      <UCbutton handleClick={incrementAge}>Increment Age</UCbutton>
      <UCcount text="Salary" count={salary} />
      <UCbutton handleClick={incrementSalary}>Increment Salary</UCbutton>
    </div>
  );
}

export default UCparentComp;
//Rendering Title
//Rendering Age
//Rendering Children -  Increment Age
//Rendering Salary
//Rendering Children -  Increment Salary
//and after changing either age or salary same output is printed,every component re-render
//to improve performance issue we have to restrict re-render to only components that need to be re-render.
//eg: when we increment the age only count component related to age an button component for increment age should be render
//after adding React.memo to prevent re-rendering if we increment age
//output is:
//Rendering Age
//Rendering Children -  Increment Age
//Rendering Children -  Increment Salary
//because a new increment salary function is created each time the parent component re-renders
//if we increment salary
//output is:
//Rendering Children -  Increment Age
//Rendering Salary
//Rendering Children -  Increment Salary
//because a new increment age function is created each time the parent component re-renders as function eqaulity is checked
//even two function have the exact same behaviour  doesn not mean equal to each other so func before re render is diff than func after re-render
//beacuse since title has no props and no state no re render

//useCallback Hook
//it is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
//it is useful when passing callback to optimized child components that rely on reference equality to prevent unnecessary renders
//passing callbacks like incrementAge and incrementSalary
//optimized child components means React.memo(child comp.)
//output:
//Rendering Salary
//Rendering Children -  Increment Salary
//output
//Rendering Age
//Rendering Children -  Increment Age

