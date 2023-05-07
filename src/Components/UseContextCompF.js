import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../App";

function UseContextCompF(props) {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      Component F {user}-{channel}
    </div>
  );
}

export default UseContextCompF;
