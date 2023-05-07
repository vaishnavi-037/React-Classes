import React, { useEffect, useRef } from "react";

function UseRefFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    //focus Input Element
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default UseRefFocusInput;
//focus on Input element when page loads
