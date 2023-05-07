import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../App";
import UseContextCompF from "./UseContextCompF";

function UseContextCompE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      Component E {user}-{channel}
      <UseContextCompF />
    </div>
  );
}

export default UseContextCompE;
