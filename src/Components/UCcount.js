//useCallBack
import React from "react";

function UCcount({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(UCcount);
