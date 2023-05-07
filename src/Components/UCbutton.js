//useCallBack
import React from "react";

function UCbutton({ handleClick, children }) {
  console.log("Rendering Children - ", children);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(UCbutton);
